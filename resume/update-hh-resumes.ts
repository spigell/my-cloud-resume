import { AxiosError } from 'axios';
import { resume as sreDevopsRu } from './src/data/headhunter/sre-devops-ru';
import { resume as sreDevopsEn } from './src/data/headhunter/sre-devops-en';
import { HeadHunterAPI } from './src/headhunter/headhunter';
import { HeadhunterResumeInfo } from './src/data/headhunter/types';

const resumes: HeadhunterResumeInfo[] = [sreDevopsRu, sreDevopsEn];

const token = process.env.HH_TOKEN;
if (token === undefined) {
  throw new Error('Set token via HH_TOKEN env var');
}

const api = new HeadHunterAPI(token);

(async () => {
  resumes.forEach(({ resumeId, data }) => {
    api
      .updateResume(resumeId, data)
      .then((status) => {
        console.log(`Updated resume ${resumeId}:`, status);
      })
      .catch((err: AxiosError) => {
        console.error(
          `Failed to update resume ${resumeId}:`,
          err.response?.data || err.message,
        );
        process.exit(1);
      });
  });
})();
