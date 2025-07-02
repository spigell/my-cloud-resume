import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const lang = process.argv[2] === 'ru' ? 'ru' : 'en';
const data: any = require(
  path.join(
    __dirname,
    '..',
    'resume',
    'src',
    'data',
    'common',
    lang === 'ru' ? 'sre-devops-ru.ts' : 'sre-devops-en.ts',
  ),
).data;

const templateSource = fs.readFileSync('frontend/resume.hbs', 'utf8');

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
  certificatesArray: Object.values(data.certificates),
});

fs.writeFileSync('frontend/resume.html', html);
console.log('Generated frontend/resume.html');
