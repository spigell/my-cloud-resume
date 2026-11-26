import assert from 'node:assert/strict';
import { test } from 'node:test';
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
