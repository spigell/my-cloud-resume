import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { Data, Work } from './src/data/common/types';

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

const variantFlag = getArgValue(['--variant', '-v']);
const variant = variantFlag ?? process.env.RESUME_VARIANT ?? 'sre-devops-en';

if (!/^[a-z0-9-]+$/.test(variant)) {
  throw new Error(`Invalid resume variant "${variant}"`);
}

const dataPath = path.join(__dirname, 'src/data/common', `${variant}.ts`);

if (!fs.existsSync(dataPath)) {
  throw new Error(`Resume data file not found for variant "${variant}"`);
}

const data: Data = require(dataPath).data as Data;

const templateSource = fs.readFileSync(
  path.join(__dirname, 'src/website/resume.hbs'),
  'utf8',
);
const artifactDir = path.join(__dirname, 'artifacts');
const variantOutputFileName = `resume-${variant}.html`;
const variantOutputPath = path.join(artifactDir, variantOutputFileName);
const canonicalOutputPath = path.join(artifactDir, 'resume.html');

fs.mkdirSync(artifactDir, { recursive: true });

Handlebars.registerHelper('nl2br', (text: string) => {
  return new Handlebars.SafeString(
    Handlebars.escapeExpression(text).replace(/\n/g, '<br />'),
  );
});

Handlebars.registerHelper('formatDateRange', (start: string, end?: string) => {
  return end ? `${start} - ${end}` : start;
});

Handlebars.registerHelper('join', (arr: any[], sep: string) => arr.join(sep));

const template = Handlebars.compile(templateSource);

const [firstName, ...rest] = data.basics.name.split(' ');
const lastName = rest.join(' ');

const summaryHtml = data.basics.summary
  .split('\n')
  .map((l: string) => l.trim())
  .filter(Boolean)
  .join('<br />');

const workLogos: Record<string, string> = {
  amarkets: 'logo-amarkets',
  gaijin: 'logo-gaijin-ent',
  yandex: 'logo-yandex-cloud',
  rostelecom: 'logo-rtk',
  restream: 'logo-rtk',
};

const certificateLogos: Record<string, string> = {
  cka: 'logo-cka',
  cks: 'logo-cks',
  rhce: 'logo-rhce',
};

const certificatesArray = Object.entries(data.certificates).map(
  ([key, value]) => ({
    ...(value as any),
    logoClass: certificateLogos[key] || undefined,
  }),
);

const workArray = Object.entries(data.work).map(([key, value]) => ({
  ...(value as any),
  summaryHtml: (value as Work).summary
    .split('\n')
    .map((l: string) => l.trim())
    .filter(Boolean)
    .join('<br />'),
  logoClass: workLogos[key] || undefined,
}));

const html = template({
  ...data,
  firstName,
  lastName,
  workArray,
  summaryHtml,
  certificatesArray,
});

fs.writeFileSync(variantOutputPath, html);
console.log(`Generated ${variantOutputPath}`);

if (variant === 'sre-devops-en') {
  fs.writeFileSync(canonicalOutputPath, html);
  console.log(`Generated ${canonicalOutputPath}`);
}
