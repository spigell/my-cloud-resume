import { Data } from './types';
import * as personal from './personal';

export const data: Data = {
  basics: {
    name: 'Sergei Chukh',
    label: 'SRE / DevOps',
    email: personal.email,
    website: personal.website,
    summary: `
      Hi there!
    I'm currently looking for opportunities in the following areas:

    - Blockchain
    - Exchanges and fintech companies

    I'm growing in the direction of SRE with a focus on security.
    I have nothing against "legacy" projects, as long as they generate revenue.

    I'm currently based in Thailand, and my workday can start anywhere between UTC+2 and UTC+7.`,
    profiles: [
      personal.profiles.linkedin,
      personal.profiles.telegram,
      personal.profiles.github,
    ],
  },
  education: {
    institution: 'UGTU',
    url: 'https://www.ugtu.net',
    area: 'Development and Operation of Oil and Gas Fields',
    studyType: personal.education.studyType,
    startDate: personal.education.startDate,
    endDate: personal.education.endDate,
  },
  languages: {
    russian: {
      language: 'Russian',
      fluency: 'Fluent',
    },
    english: {
      language: 'English',
      fluency: 'B2',
    },
  },
  work: {
    nda: {
      name: 'NDA',
      position: 'DevOps Engineer / SRE',
      startDate: personal.experience.nda.startDate,
      endDate: personal.experience.nda.endDate,
      summary: `FinTech.
Primary Responsibilities:
- Stable Work of Stage/Prod Environments: Ensure the smooth and uninterrupted operation of both staging and production environments, including monitoring, troubleshooting, and debugging issues to prevent downtime.
- Database Improvements: Continuously enhance the performance, reliability, and scalability of databases. This involves optimizing queries, managing database configurations, and implementing best practices for data management.
- AWS Infrastructure Cost Optimization: Analyze and optimize the use of AWS services to reduce costs while maintaining or improving performance. Implement cost-effective strategies, such as right-sizing instances, using reserved instances, and leveraging spot instances.`,
      highlights: [`Stack: ${personal.experience.nda.stack.join(', ')}`],
    },
    gaijin: {
      name: 'Gaijin Entertainment',
      position: 'DevOps Engineer / SRE',
      location: 'Кипр',
      startDate: personal.experience.gaijin.startDate,
      endDate: personal.experience.gaijin.endDate,
      summary: `Working in a team supporting the primary games of Gaijin: Warthunder, Enlisted. Main duties:
- Optimize costs of infrastructure
- Troubleshooting the production and test environments
- Implement and support services for internal usage
- Regular on-call duty
- Minimize downtime and raise user happiness`,
      highlights: [
        `Stack: ${personal.experience.gaijin.stack.join(', ')}`,
        'Implemented custom service discovery using native etcd mechanisms. The client was a sidecar living alongside services, capable of performing health checks',
        'Defined the entire server-side stack for distributing game clients as a docker-compose stack. Containerized numerous C++ and Golang services',
      ],
      website: 'https://gaijin.net',
    },
    yandex: {
      name: 'Yandex',
      position: 'Support L2 Specialist',
      location: 'Moscow',
      startDate: personal.experience.yandex.startDate,
      endDate: personal.experience.yandex.endDate,
      summary: `There is Level 2 (Premium) support in Yandex Cloud. As part of the team was responsible for the following:
- Providing a full circle of support for premium clients
- Managed and resolved customer escalations
- Resolved tricky customer's issues`,
      website: 'https://www.yandex.ru',
    },
    rostelecom: {
      name: 'Ростетелеком ИТ',
      position: 'DevOps Engineer / SRE',
      location: 'Moscow',
      startDate: personal.experience.rostelecom.startDate,
      endDate: personal.experience.rostelecom.endDate,
      summary: `Has worked in the streaming service "Wink" (https://wink.ru). Areas of responsibility:
- Stable work of production and test environments (includes monitoring and troubleshooting)
- Prepare new releases for production (stress testing, review migrations and code)
- Supporting dev teams (CI/CD integrations, internal services)`,
      highlights: [`Stack: ${personal.experience.rostelecom.stack.join(', ')}`],
      website: 'https://rtkit.ru',
    },
    equilibrium: {
      name: 'Equilibrium',
      position: 'DevOps Engineer',
      location: 'equilibrium.io',
      startDate: personal.experience.equilibrium.startDate,
      endDate: personal.experience.equilibrium.endDate,
      summary: `EQ is a crypto FinTech startup (EOS and ETH blockchains). Some achievements:
- Implement feature branch strategy for development based on docker swarm and TeamCity
- Bring and support monitoring based on the Prometheus stack`,
      highlights: [
        `Stack: ${personal.experience.equilibrium.stack.join(', ')}`,
      ],
      website: 'https://equilibrium.io',
    },
    restream: {
      name: 'Restream',
      position: 'Techical support engineer',
      location: 'Moscow',
      startDate: personal.experience.restream.startDate,
      endDate: personal.experience.restream.endDate,
      summary: `The central part of my work was troubleshooting our Linux platform`,
      website: 'http://restream.rt.ru',
    },
  },
  certificates: personal.certificates,
  skills: personal.skills,
};
