import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';

const lang = process.argv[2] === 'ru' ? 'ru' : 'en';
const data: any = require(path.join(
  __dirname,
  '..',
  'resume',
  'src',
  'data',
  'common',
  lang === 'ru' ? 'sre-devops-ru.ts' : 'sre-devops-en.ts'
)).data;

const templateSource = fs.readFileSync('frontend/resume.hbs', 'utf8');

Handlebars.registerHelper('formatDateRange', (start: string, end?: string) => {
  return end ? `${start} - ${end}` : start;
});

const template = Handlebars.compile(templateSource);

const [firstName, ...rest] = data.basics.name.split(' ');
const lastName = rest.join(' ');

const html = template({
  ...data,
  firstName,
  lastName,
  workArray: Object.values(data.work),
  certificatesArray: Object.values(data.certificates),
});

fs.writeFileSync('frontend/resume.html', html);
console.log('Generated frontend/resume.html');

