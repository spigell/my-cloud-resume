import assert from 'node:assert/strict';
import { test } from 'node:test';
import { AxiosError, type AxiosResponse } from 'axios';
import { uploadHhResumes } from './upload-hh-resumes';

test('waits for pending uploads and reports each variant after a failure', async () => {
  const logs: unknown[][] = [];
  const errors: unknown[][] = [];
  const originalLog = console.log;
  const originalError = console.error;
  console.log = (...args) => logs.push(args);
  console.error = (...args) => errors.push(args);

  let completePending!: (status: number) => void;
  const pending = new Promise<number>((resolve) => {
    completePending = resolve;
  });
  const resumes = [
    { variant: 'failed-ru', resume: { resumeId: 'first', data: '{}' } },
    { variant: 'pending-en', resume: { resumeId: 'second', data: '{}' } },
  ];

  try {
    const uploading = uploadHhResumes(resumes, (resumeId) =>
      resumeId === 'first'
        ? Promise.reject(new Error('upload failed'))
        : pending,
    );
    let settled = false;
    void uploading.then(() => {
      settled = true;
    });
    await Promise.resolve();
    assert.equal(settled, false);
    assert.deepEqual(errors, [
      ['Failed to update variant "failed-ru" (first):', 'upload failed'],
    ]);
    completePending(204);
    assert.equal(await uploading, true);
    assert.deepEqual(errors, [
      ['Failed to update variant "failed-ru" (first):', 'upload failed'],
    ]);
    assert.deepEqual(logs, [['Updated variant "pending-en" (second):', 204]]);
  } finally {
    console.log = originalLog;
    console.error = originalError;
  }
});

async function captureUploadErrors(rejection: unknown): Promise<unknown[][]> {
  const errors: unknown[][] = [];
  const originalError = console.error;
  console.error = (...args) => errors.push(args);
  try {
    const failed = await uploadHhResumes(
      [{ variant: 'failed-ru', resume: { resumeId: 'first', data: '{}' } }],
      () => Promise.reject(rejection),
    );
    assert.equal(failed, true);
  } finally {
    console.error = originalError;
  }
  return errors;
}

test('reports the HeadHunter response body for Axios errors', async () => {
  const body = { errors: [{ type: 'bad_argument' }] };
  const error = new AxiosError('Request failed', 'ERR_BAD_REQUEST');
  error.response = { data: body } as AxiosResponse;
  assert.deepEqual(await captureUploadErrors(error), [
    ['Failed to update variant "failed-ru" (first):', body],
  ]);
});

test('reports the message for Axios errors without a response', async () => {
  const error = new AxiosError('Network Error', 'ERR_NETWORK');
  assert.deepEqual(await captureUploadErrors(error), [
    ['Failed to update variant "failed-ru" (first):', 'Network Error'],
  ]);
});

test('reports rejected values that are not errors', async () => {
  assert.deepEqual(await captureUploadErrors('quota exceeded'), [
    ['Failed to update variant "failed-ru" (first):', 'quota exceeded'],
  ]);
  const detail = { code: 42 };
  assert.deepEqual(await captureUploadErrors(detail), [
    ['Failed to update variant "failed-ru" (first):', detail],
  ]);
});
