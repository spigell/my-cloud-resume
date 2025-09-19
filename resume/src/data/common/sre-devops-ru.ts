import { Data } from './types';
import * as personal from './personal';

export const data: Data = {
  basics: {
    name: 'Сергей Чух',
    label: 'SRE / DevOps инженер',
    email: personal.email,
    website: personal.website,
    summary: `Инженер DevOps/SRE, нахожусь в Таиланде; открыт к предложениям со стабильную долгосрочную занятостью. Часовой пояс GMT+7. Практический опыт с Kubernetes, публичными облаками, CI/CD и инфраструктурой как кодом.`,
    profiles: [
      personal.profiles.linkedin,
      personal.profiles.telegram,
      personal.profiles.github,
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
    freelance: {
      name: 'Фрилансер',
      position: 'SRE / DevOps инженер / Разработчик',
      startDate: personal.experience.selfemployed.startDate,
      summary: `Работаю в условиях стартапа как фриланс-инженер над платформой торговых ботов, которая взаимодействует с централизованными (Bybit, Mexc) и децентрализованными (Uniswap, Mira) биржами через REST и WebSocket API.`,
      highlights: [
        'Создал Kubernetes инфраструктуру на GKE и Hetzner (Talos) для воспроизводимых и надёжных развёртываний',
        'Автоматизировал инфраструктуру с помощью Pulumi и Helm для снижения количества ошибок конфигурации и упрощения обновлений',
        'Создал и поддерживаю open-source проект pulumi-talos-cluster, упрощающий установку и управление кластера Talos',
        `Стек: ${personal.experience.selfemployed.stack.join(', ')}`,
      ],
    },
    amarkets: {
      name: 'AMarkets',
      position: 'SRE / DevOps инженер',
      location: 'Черногория',
      startDate: personal.experience.amarkets.startDate,
      endDate: personal.experience.amarkets.endDate,
      summary: `Онлайн-брокер (Forex/CFD). SRE/DevOps, отвечал за надёжность и эксплуатацию платформы, преимущественно в части баз данных.`,
      highlights: [
        'Диагностировал и устранял сложные проблемы производительности баз данных и приложений (PostgreSQL, MySQL, Redis)',
        'Внедрил инструменты аудита PostgreSQL для выявления отсутствующих индексов и антипаттернов запросов',
        'Работал в связке с инженерами Go над сервисами вокруг MetaTrader 5 — повысив надёжность и снизив издержки',
        'Спроектировал паттерны взаимодействия сервисов и стратегии раскатки при миграции монолита в Kubernetes (Deckhouse)',
        'Повысил надёжность и наблюдаемость с помощью дашбордов/алёртов стека Prometheus и отслеживания ошибок в Sentry',
        `Стек: ${personal.experience.amarkets.stack.join(', ')}`,
      ],
      website: 'https://amarkets.com',
    },
    gaijin: {
      name: 'Gaijin Entertainment',
      position: 'SRE / DevOps инженер',
      location: 'Кипр',
      startDate: personal.experience.gaijin.startDate,
      endDate: personal.experience.gaijin.endDate,
      summary: `Поддержка и развитие инфраструктуры для таких игр как Warthunder, Enlisted`,
      highlights: [
        'Поддерживал работоспособность серверной части высоконагруженных игровых платформ; траблшутинг; участие в on-call дежурствах',
        'Сделал кастомный service discovery, используя нативные механизмы etcd',
        'Описал весь стек серверной части раздачи игровых клиентов в виде docker-compose стека для улучшения devEx. Контейнеризовал большое количество C++ и Golang сервисов',
        `Стек: ${personal.experience.gaijin.stack.join(', ')}`,
      ],
      website: 'https://gaijin.net',
    },
    yandex: {
      name: 'Яндекс',
      position: 'Инженер L2 поддержки Яндекс.Облака',
      location: 'Москва',
      startDate: personal.experience.yandex.startDate,
      endDate: personal.experience.yandex.endDate,
      summary: `Был частью команды второй линии поддержки Яндекс Облака`,
      highlights: [
        'Поддержка клиентов в тикетах',
        'Траблшутинг сервиса на стороне Облака (MDB, Compute, Kubernetes)',
      ],
      website: 'https://www.yandex.ru',
    },
    rostelecom: {
      name: 'Ростетелеком ИТ',
      position: 'SRE / DevOps инженер',
      location: 'Москва',
      startDate: personal.experience.rostelecom.startDate,
      endDate: personal.experience.rostelecom.endDate,
      summary:
        'Поддерживал и развивал проект WINK (бывшее Интерактивное ТВ от Ростелеком).',
      highlights: [
        'Обновление, настройка и траблшутинг продуктового ПО (api сервисы проекта Wink)',
        'Организация мониторинга серверов и сервисов (zabbix, prometheus, victoriametrics). Участие в on-call duty и тушение пожаров',
        'Обслуживание баз данных PostgreSQL (бекап, репликация, оценка производительности)',
        'Автоматизация задач и процесса CI/CD (Gitlab CI)',
        'Поддержка продуктовой команды, предоставление и создание инструментов as a service',
        'Также, занимался нетехническими задачами: обучение дежурной смены новой платформе, работой с бизнес аналитиками, планированием и заказами нового оборудования для платформы',
        `Stack: ${personal.experience.rostelecom.stack.join(', ')}`,
      ],
      website: 'https://rtkit.ru',
    },
    equilibrium: {
      name: 'Equilibrium',
      position: 'DevOps инженер',
      location: 'equilibrium.io',
      startDate: personal.experience.equilibrium.startDate,
      endDate: personal.experience.equilibrium.endDate,
      summary:
        'Помогал делать крипто финтех проект в небольшой команде энтузиастов.',
      highlights: [
        'Поддержка публичных нод для блокчейнов (Parity для ETH, nodeos для EOS)',
        'Добавил feature branch подход для разработки через docker swarm на тестовом стенде. У команды был на это запрос',
        `Stack: ${personal.experience.equilibrium.stack.join(', ')}`,
      ],
      website: 'https://equilibrium.io',
    },
    restream: {
      name: 'Рестрим',
      position: 'Инженер отдела мониторинга',
      location: 'Москва',
      startDate: personal.experience.restream.startDate,
      endDate: personal.experience.restream.endDate,
      summary: `Проект "Интерактивное ТВ" от Ростелеком. Работал в отделе мониторинга.`,
      highlights: [
        'Обработка заявок в трекерной системе (Jira)',
        'Работы по начальной настройке ОС (CentOS) на серверах и инвентаризация через IaC (puppet)',
      ],
      website: 'http://restream.rt.ru',
    },
  },
  certificates: personal.certificates,
  skills: personal.skills,
};
