import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { Data, Work } from './src/data/common/types';

const data: any = require(
  path.join(__dirname, 'src/data/common/sre-devops-en.ts'),
).data as Data;

const templateSource = fs.readFileSync(
  path.join(__dirname, 'src/website/resume.hbs'),
  'utf8',
);
const outputFilePath = path.join(__dirname, 'artifacts/resume.html');

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

fs.writeFileSync(outputFilePath, html);
console.log(`Generated ${outputFilePath}`);
