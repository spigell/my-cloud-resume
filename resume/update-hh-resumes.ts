import fs from 'fs';
import path from 'path';
import { AxiosError } from 'axios';
import { HeadHunterAPI } from './src/headhunter/headhunter';
import { HeadhunterResumeInfo } from './src/data/headhunter/types';

const getArgValue = (flags: string[]): string | undefined => {
  let result: string | undefined;

  for (let i = 0; i < process.argv.length; i += 1) {
    if (flags.includes(process.argv[i])) {
      const nextValue = process.argv[i + 1];
      if (nextValue) {
        result = nextValue;
      }
    }
  }

  return result;
};

const isPlaceholderResumeId = (resumeId: string): boolean =>
  resumeId.startsWith('TODO-') || resumeId.includes('PLACEHOLDER');

const defaultVariants = [
  'sre-devops-ru',
  'sre-devops-en',
  'sre-support-engineer-ru',
  'sre-support-engineer-en',
];
const variantsArg = getArgValue(['--variants', '-v']);
const variantsSource = variantsArg ?? process.env.HH_VARIANTS;
const variants = (
  variantsSource
    ? variantsSource.split(',').map((variant) => variant.trim())
    : defaultVariants
).filter(Boolean);

if (!variants.length) {
  throw new Error('No resume variants specified for HH upload');
}

const resumes = variants.map((variant) => {
  if (!/^[a-z0-9-]+$/.test(variant)) {
    throw new Error(`Invalid headhunter resume variant "${variant}"`);
  }

  const filePath = path.join(__dirname, 'src/data/headhunter', `${variant}.ts`);

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `HeadHunter resume data not found for variant "${variant}" at ${filePath}`,
    );
  }

  const module = require(filePath);
  if (!module?.resume) {
    throw new Error(`Module ${filePath} does not export a \`resume\` object`);
  }

  const resume = module.resume as HeadhunterResumeInfo;
  if (isPlaceholderResumeId(resume.resumeId)) {
    throw new Error(
      `Variant "${variant}" uses placeholder resumeId "${resume.resumeId}". Replace it with a real HeadHunter resumeId before upload.`,
    );
  }

  return {
    variant,
    resume,
  };
});

const token = process.env.HH_TOKEN;
if (token === undefined) {
  throw new Error('Set token via HH_TOKEN env var');
}

const api = new HeadHunterAPI(token);

(async () => {
  resumes.forEach(({ variant, resume: { resumeId, data } }) => {
    api
      .updateResume(resumeId, data)
      .then((status) => {
        console.log(`Updated variant "${variant}" (${resumeId}):`, status);
      })
      .catch((err: AxiosError) => {
        console.error(
          `Failed to update variant "${variant}" (${resumeId}):`,
          err.response?.data || err.message,
        );
        process.exit(1);
      });
  });
})();
