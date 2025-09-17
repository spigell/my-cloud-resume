import { Data } from './types';
import * as personal from './personal';

export const data: Data = {
  basics: {
    name: 'Sergei Chukh',
    label: 'SRE / DevOps engineer',
    email: personal.email,
    website: personal.website,
    summary: `DevOps / SRE engineer based in Thailand, open to roles aligned with GMT+7 and offering stable, long-term employment.
Experienced with Kubernetes, Public clouds, CI/CD, and infrastructure as code.`,
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
    freelance: {
      name: 'Freelancer',
      position: 'DevOps Engineer / SRE / Developer',
      location: 'Remote',
      startDate: personal.experience.selfemployed.startDate,
      summary: `Working in a startup environment as a freelance engineer on a trading bot platform that interacts with centralized (Bybit, Mexc) and decentralized (Uniswap, Mira) exchanges via REST and WebSocket APIs.`,
      highlights: [
        'Created Kubernetes clusters on GKE and Hetzner (Talos) for reproducible and reliable deployments',
        'Automating infrastructure with Pulumi and Helm to reduce configuration errors and simplify upgrades',
        'Author and maintainer of the open-source project pulumi-talos-cluster, enabling Pulumi workflows to manage Talos-based Kubernetes',
        `Stack: ${personal.experience.selfemployed.stack.join(', ')}`,
      ],
    },
    amarkets: {
      name: 'Amarkets',
      position: 'DevOps Engineer / SRE',
      location: 'Montenegro',
      startDate: personal.experience.amarkets.startDate,
      endDate: personal.experience.amarkets.endDate,
      summary: `A company providing brokerage services for clients in the Forex market.
Key responsibilities:
- Designing the architecture for service and application interactions
- Migrating services (including monoliths) to Kubernetes, writing and maintaining Helm charts
- Automating CI/CD processes, ensuring infrastructure monitoring and security
- Optimizing AWS costs: implementing Reserved Instances and Savings Plans, conducting infrastructure audits, setting up cost monitoring and budget alerts, automating cost reporting using tagging
- Debugging complex performance issues in databases and applications`,
      highlights: [`Stack: ${personal.experience.amarkets.stack.join(', ')}`],
      website: 'https://amarkets.com',
    },
    gaijin: {
      name: 'Gaijin Entertainment',
      position: 'DevOps Engineer / SRE',
      location: 'Cyprus',
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
      name: 'Rostelecom IT',
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
      position: 'Technical Support Engineer',
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
