import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const data: any = require(
  path.join(__dirname, 'src', 'data', 'common', 'sre-devops-en.ts'),
).data;

const templateSource = fs.readFileSync('src/website/resume.hbs', 'utf8');

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

const logoMap: Record<string, string> = {
  gaijin: 'logo-gaijin-ent',
  yandex: 'logo-yandex-cloud',
  rostelecom: 'logo-rtk',
  restream: 'logo-rtk',
};

const certificateLogoMap: Record<string, string> = {
  cka: 'logo-cka',
  cks: 'logo-cks',
  rhce: 'logo-rhce',
};

const certificatesArray = Object.entries(data.certificates).map(
  ([key, value]) => ({
    ...(value as any),
    logoClass: certificateLogoMap[key] || undefined,
  }),
);

const workArray = Object.entries(data.work).map(([key, value]) => ({
  ...(value as any),
  logoClass: logoMap[key] || undefined,
}));

const html = template({
  ...data,
  firstName,
  lastName,
  workArray,
  summaryHtml,
  certificatesArray,
});

fs.writeFileSync('frontend/resume.html', html);
console.log('Generated frontend/resume.html');
