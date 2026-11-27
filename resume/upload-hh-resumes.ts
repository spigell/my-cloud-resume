import { isAxiosError } from 'axios';
import { HeadhunterResumeInfo } from './src/data/headhunter/types';

type ResumeUpload = { variant: string; resume: HeadhunterResumeInfo };

function describeUploadError(err: unknown): unknown {
  if (isAxiosError(err)) {
    return err.response?.data || err.message;
  }
  if (err instanceof Error) {
    return err.message;
  }
  return err;
}

export async function uploadHhResumes(
  resumes: ResumeUpload[],
  updateResume: (resumeId: string, data: string) => Promise<unknown>,
): Promise<boolean> {
  const failures = await Promise.all(
    resumes.map(async ({ variant, resume: { resumeId, data } }) => {
      try {
        const status = await updateResume(resumeId, data);
        console.log(`Updated variant "${variant}" (${resumeId}):`, status);
        return false;
      } catch (err) {
        console.error(
          `Failed to update variant "${variant}" (${resumeId}):`,
          describeUploadError(err),
        );
        return true;
      }
    }),
  );

  return failures.some(Boolean);
}
