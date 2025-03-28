import { Data } from './types';
import * as common from './common';

export const data: Data = {
  basics: {
    name: 'Сергей Чух',
    label: 'SRE / DevOps',
    email: common.email,
    website: common.website,
    summary: `Привет! Ищу продуктовую компанию в сферах:
    - Блокчейн
    - Биржи и финтех компании
    Развиваюсь в сторону SRE с уклоном в безопасность.
    Ничего не имею против "legacy" проектов, которые приносят деньги.
    Сейчас нахожусь в Таиланде. Начало дня может приходиться в диапозоне от +2 UTC до +7 UTC.`,
    profiles: [
      common.profiles.linkedin,
      common.profiles.telegram,
      common.profiles.github,
    ],
  },
  education: {
    institution: 'УГТУ',
    url: 'https://www.ugtu.net',
    area: 'Разработка нефтяных и газовых скважин',
    studyType: 'Completed',
    startDate: '2009-09-01',
    endDate: '2014-05-01',
  },
  languages: {
    russian: {
      language: 'Русский',
      fluency: 'Родной',
    },
    english: {
      language: 'Английский',
      fluency: 'B2',
    },
  },
  work: {
    nda: {
      name: 'NDA (финансовая компания)',
      position: 'DevOps инженер',
      startDate: '2023-06',
      endDate: '2024-12',
      summary: `Компания предоставляет услуги для клиентов на рынке Forex.
- Прорабатывание архитектуры взаимодействия приложений.
- Перенос сервисов в kubernetes (k8s), написание helm чартов.`,
      highlights: [
        'Стек: git, AWS, ansible, kubernetes, k8s (deckhouse), helm, werf, Golang, Pulumi, PostgreSQL, Sentry, Gitlab, MySQL, Redis, Prometheus stack.',
      ],
    },
    gaijin: {
      name: 'Gaijin Entertainment',
      position: 'DevOps Engineer / SRE',
      location: 'Кипр',
      startDate: '2022-04',
      endDate: '2023-04',
      summary: `Поддержка и развитие инфраструктуры для таких игр как Warthunder, Enlisted.
Основные обязанности:
- Поддержка работоспособности серверной части высоконагруженных игровых платформ, траблшутинг, участие в on-call дежурствах
- Обновление платформ, стандартизация процесса, описывание в вики в виде SOP
- Улучшение платформы для раздачи игровых клиентов как через собственную сеть CDN (p2p и http трафик), так и через провайдеров (GCORE, Cloudflare, AWS Cloudfront)
- Улучшение devEx для локальной разработки: контейнеризация сервисов со встроенными средствами дебага (delve)
- Внедрение kubernetes на тестовых стендах для запуска серверной части игр`,
      highlights: [
        'Стек: GIT, Linux (Centos7), Redis, AWS (RDS, EC2, VPC, Route53), Graphite+telegraf, Kubernetes на железе, Docker как окружение сборки, Golang, Puppet/Ansible/Terraform, Jenkins, Gerrit.',
        'Сделал кастомный service discovery через, использую нативные механизмы etcd. Клиент был ввиде сайдкара, который жил рядом с сервисами. Мог проверять состояние "живости" сервиса.',
        'Описал весь стек серверной части раздачи игровых клиентов в виде docker-compose стека. Контейнеризовал большое количество C++ и Golang сервисов.',
      ],
      website: 'https://gaijin.net',
    },
    yandex: {
      name: 'Яндекс',
      position: 'Инженер L2 поддержки Яндекс.Облака',
      location: 'Москва',
      startDate: '2021-12',
      endDate: '2022-03',
      summary: `Был частью команды второй линии поддержки Яндекс Облака:
- Поддержка клиентов в тикетах.
- Troubleshooting сервиса на стороне Облака (MDB, Compute, Kubernetes).`,
      website: 'https://www.yandex.ru',
    },
    rostelecom: {
      name: 'Ростетелеком ИТ',
      position: 'DevOps Engineer / SRE',
      location: 'Россия',
      startDate: '2019-05',
      endDate: '2021-10',
      summary: `Поддерживал и развивал проект WINK (бывшее Интерактивное ТВ от Ростелеком).
Основные обязанности:
- Обновление, настройка и траблшутинг продуктового ПО (api сервисы проекта Wink).
- Огранизация мониторинга серверов и сервисов (zabbix, prometheus, victoriametrics). Участие в on-call duty и тушение пожаров.
- Обслуживание баз данных PostgreSQL (бекап, репликация, оценка производительности).
- Автоматизация задач и процесса CI/CD (Gitlab CI).
- Поддержка продуктовой команды, предоставление и создание инструментов as a service.
Также, занимался нетехническими задачами: обучение дежурной смены новой платформе, работой с бизнес аналитиками, планированием и заказами нового оборудования для платформы`,
      highlights: [
        'Стек: Git, Linux (Centos 7), PostgreSQL (+Pgbouncer), NSQ, ClickHouse, Nginx, Reindexer (https://github.com/Restream/reindexer), Prometheus Stack (+Victoria Metrics), Opscode Chef, Gitlab, Golang.',
      ],
      website: 'https://rtkit.ru',
    },
    equilibrium: {
      name: 'Equilibrium',
      position: 'DevOps Engineer',
      location: 'equilibrium.io',
      startDate: '2018-10',
      endDate: '2019-05',
      summary: `Помогал делать крипто финтех проект в небольшой команде энтузиастов.
- Создание и настройка ресурсов в публичном облаке (AWS).
- Поддержка публичных нод для блокчейнов (Parity для ETH, nodeos для EOS).
- Тушение пожаров и анализ при чрезвычайных ситуаций.
- Добавил feature branch подход для разработки через docker swarm на тестовом стенде. У команды был на это запрос`,
      highlights: [
        'Стек: Linux (Ubuntu), AWS (RDS, EC2, VPC, Route53), Docker swarm, Prometheus Stack, HashiCorp Vault, Teamcity.',
      ],
      website: 'https://equilibrium.io',
    },
    restream: {
      name: 'Рестрим',
      position: 'Инженер отдела мониторинга',
      location: 'Москва',
      startDate: '2016-02',
      endDate: '2018-10',
      summary: `Проект "Интерактивное ТВ" от Ростелеком. Работал в отделе мониторинга.
Основные обязанности:
- Обработка заявок в трекерной системе (Jira).
- Работы по начальной настройке ОС (CentOS) на серверах и инвенторизация через IaC (puppet).`,
      website: 'http://restream.rt.ru',
    },
  },
  certificates: {
    cka: {
      name: 'CKA (Certified Kubernetes Administrator)',
      date: '2023-12-12',
      url: 'https://www.credly.com/badges/07d6aa91-ced5-4c56-8025-2e5477446b6d',
      issuer: 'The Linux Foundation',
    },
    cks: {
      name: 'CKS (Certified Kubernetes Security Specialist)',
      date: '2024-02-12',
      url: 'https://www.credly.com/badges/339ce290-68f1-435e-a40d-88fd385165c8',
      issuer: 'The Linux Foundation',
    },
  },
  skills: [
    {
      name: 'Kubernetes',
      level: 'advanced',
      keywords: ['K8S', 'Helm'],
    },
    {
      name: 'IaC',
      level: 'advanced',
      keywords: ['Pulumi', 'Terraform', 'Ansible', 'Chef'],
    },
    {
      name: 'Linux',
      level: 'advanced',
      keywords: ['Debian', 'Talos', 'RHEL'],
    },
    {
      name: 'Cloud',
      level: 'advanced',
      keywords: ['AWS', 'GCP', 'Hetzner Cloud'],
    },
    {
      name: 'Databases',
      level: 'advanced',
      keywords: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      name: 'Golang',
      level: 'intermediate',
      keywords: ['GO', 'Golang'],
    },
  ],
};
