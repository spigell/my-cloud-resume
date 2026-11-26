import { AxiosError } from 'axios';
import { HeadhunterResumeInfo } from './src/data/headhunter/types';

type ResumeUpload = { variant: string; resume: HeadhunterResumeInfo };

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
        const error = err as AxiosError;
        console.error(
          `Failed to update variant "${variant}" (${resumeId}):`,
          error.response?.data || error.message,
        );
        return true;
      }
    }),
  );

  return failures.some(Boolean);
}
