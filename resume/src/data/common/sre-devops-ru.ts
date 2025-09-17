import { Data } from './types';
import * as personal from './personal';

export const data: Data = {
  basics: {
    name: 'Сергей Чух',
    label: 'SRE / DevOps инженер',
    email: personal.email,
    website: personal.website,
    summary: `Инженер DevOps/SRE, нахожусь в Таиланде; открыт к предложениям со стабильную долгосрочную занятостью. Часовой пояс +7GMT. Практический опыт с Kubernetes, публичными облаками, CI/CD и инфраструктурой как кодом.`,
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
        'Автор и мейнтейнер open-source проекта pulumi-talos-cluster, упрощающего установку и управление кластеров Talos',
        `Стек: ${personal.experience.selfemployed.stack.join(', ')}`,
      ],
    },
    amarkets: {
      name: 'Amarkets',
      position: 'SRE / DevOps инженер',
      location: 'Черногория',
      startDate: personal.experience.amarkets.startDate,
      endDate: personal.experience.amarkets.endDate,
      summary: `Компания предоставляет услуги для клиентов на рынке Forex.
Основные обязанности:
- Прорабатывание архитектуры взаимодействия приложений
- Перенос сервисов в k8s (в том числе и монолитов), написание helm чартов
- Работал над автоматизацией CI/CD процессов, мониторингом и обеспечением безопасности систем
- Оптимизация затрат на AWS: внедрение Reserved Instances и Savings Plans, аудит инфраструктуры, настройка мониторинга и алертов по бюджету, автоматизация отчётности по тэгам
- Дебаг сложных проблем производительности баз данных и приложений
      `,
      highlights: [`Stack: ${personal.experience.amarkets.stack.join(', ')}`],
      website: 'https://amarkets.com',
    },
    gaijin: {
      name: 'Gaijin Entertainment',
      position: 'SRE / DevOps инженер',
      location: 'Кипр',
      startDate: personal.experience.gaijin.startDate,
      endDate: personal.experience.gaijin.endDate,
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
      startDate: personal.experience.yandex.startDate,
      endDate: personal.experience.yandex.endDate,
      summary: `Был частью команды второй линии поддержки Яндекс Облака:
- Поддержка клиентов в тикетах.
- Troubleshooting сервиса на стороне Облака (MDB, Compute, Kubernetes).`,
      website: 'https://www.yandex.ru',
    },
    rostelecom: {
      name: 'Ростетелеком ИТ',
      position: 'SRE / DevOps инженер',
      location: 'Москва',
      startDate: personal.experience.rostelecom.startDate,
      endDate: personal.experience.rostelecom.endDate,
      summary: `Поддерживал и развивал проект WINK (бывшее Интерактивное ТВ от Ростелеком).
Основные обязанности:
- Обновление, настройка и траблшутинг продуктового ПО (api сервисы проекта Wink).
- Организация мониторинга серверов и сервисов (zabbix, prometheus, victoriametrics). Участие в on-call duty и тушение пожаров.
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
      position: 'DevOps инженер',
      location: 'equilibrium.io',
      startDate: personal.experience.equilibrium.startDate,
      endDate: personal.experience.equilibrium.endDate,
      summary: `Помогал делать крипто финтех проект в небольшой команде энтузиастов.
- Создание и настройка ресурсов в публичном облаке (AWS).
- Поддержка публичных нод для блокчейнов (Parity для ETH, nodeos для EOS).
- Тушение пожаров и анализ при чрезвычайных ситуациях.
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
      startDate: personal.experience.restream.startDate,
      endDate: personal.experience.restream.endDate,
      summary: `Проект "Интерактивное ТВ" от Ростелеком. Работал в отделе мониторинга.
Основные обязанности:
- Обработка заявок в трекерной системе (Jira).
- Работы по начальной настройке ОС (CentOS) на серверах и инвентаризация через IaC (puppet).`,
      website: 'http://restream.rt.ru',
    },
  },
  certificates: personal.certificates,
  skills: personal.skills,
};
