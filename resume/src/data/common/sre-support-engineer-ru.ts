import { Data } from './types';
import { data as baseData } from './sre-devops-ru';
import { commonEducation, commonLanguages } from './resume-common-data';
import { createVariantWork, WorkKey } from './resume-variant-utils';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  uspio: [
    'Обеспечение поддержки уровня L2/L3 для высоконагруженных телекоммуникационных платформ и основной инфраструктуры.',
    'Управление разрешением инцидентов и техническими эскалациями для корпоративных клиентов.',
    'Стек: Kubernetes, Docker, Terraform, Ansible, Prometheus, Grafana, GitLab CI',
  ],
  trading_startup: [
    'Обеспечивал поддержку уровня L2/L3 и проводил RCA инцидентов для платформы крипто-трейдинговых ботов, напрямую интегрированной с крупнейшими CEX (Bybit, MEXC) и DEX (Uniswap).',
    'Создавал и актуализировал runbook-документацию по критическим сбоям API бирж (разрывы REST/WebSocket, лимиты запросов), снижая время реакции (triage) во время высокой волатильности рынка.',
    'Внедрил проактивные проверки (health checks) торговых ботов и сетевой задержки, предотвратив повторяющиеся сбои и финансовые потери.',
    'Ускорил разрешение инцидентов и RCA за счет использования ИИ-агентов (HolmesGPT, Gemini-CLI, Claude, Codex) для анализа сложных логов и мгновенной генерации диагностических скриптов.',
    'Стек: Kubernetes (GKE/Talos), Pulumi, Web3.js/Ethers.js, Cloudflare, Prometheus, Node.js, WebSocket/RPC API',
  ],
  amarkets: [
    'Улучшил качество взаимодействия между поддержкой и разработкой через прозрачный таймлайн инцидентов и системные post-mortem отчеты.',
    'Стек: Kubernetes, AWS, PostgreSQL, Redis, RabbitMQ, Prometheus, Golang, MetaTrader 5',
  ],
  gaijin: [
    'Поддерживал высоконагруженные backend-системы онлайн-игр с фокусом на быстрое реагирование на инциденты и SLA 99.9%.',
    'Стек: Bare Metal Kubernetes, AWS (RDS/EC2), CentOS, Redis, Graphite, Telegraf, Ansible',
  ],
  yandex: [
    'Обеспечивал премиальную техническую поддержку L2 для Enterprise B2B клиентов в Yandex Cloud, обрабатывая критические эскалации для Managed Kubernetes, Compute и баз данных.',
    'Выступал техническим связующим звеном между крупными клиентами и командой разработки: воспроизводил сложные инфраструктурные баги и предоставлял прозрачную, эмпатичную коммуникацию во время серьезных аварий.',
  ],
  rostelecom: [
    'Обеспечивал поддержку API-сервисов Wink: расследование инцидентов, траблшутинг и системные улучшения по итогам аварий.',
    'Настраивал мониторинг/алертинг для раннего обнаружения деградаций и эффективной работы on-call команд.',
    'Планировал мощности критических узлов (CPU/RAM/Disk) и координировал закупки оборудования для масштабирования платформы.',
  ],
  equilibrium: [
    'Обеспечивал техническую поддержку и SRE публичной блокчейн-инфраструктуры, устраняя сложные проблемы синхронизации, консенсуса и повреждения состояния для нод ETH (Parity) и EOS (Nodeos).',
    'Диагностировал задержки JSON-RPC API, проблемы P2P-пиринга и события рассинхронизации (out-of-sync), обеспечивая высокий аптайм валидаторов и стабильную производительность запросов для Web3 клиентов.',
    'Повысил восстанавливаемость нод за счет укрепления процедур релиза и написания пошаговой документации для рутинных действий поддержки L1/L2.',
    'Стек: Ubuntu, AWS, Parity (Ethereum), Nodeos (EOS), Docker Swarm, Prometheus',
  ],
  restream: [
    'Начинал в мониторинге и технической поддержке: обрабатывал заявки и выполнял первичный triage инцидентов в платформе Интерактивного ТВ.',
    'Выполнял первичную настройку ОС (CentOS) на серверах, вел конфигурационный учет через Puppet и делал первичную диагностику сбоев.',
    'Заложил основу технической экспертизы в области диагностики Linux-систем, сопровождения хостов и автоматизации конфигураций.',
  ],
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'SRE / Инженер поддержки',
    summary: `Инженер технической поддержки / SRE с сильным фокусом на Web3-инфраструктуру, эксплуатацию RPC-нод и enterprise cloud платформы. Имею практический опыт уровня L2/L3 в диагностике сложных проблем блокчейн-связности, деградации REST/WebSocket API и продуктивных кластеров Kubernetes. Выступаю связующим звеном между B2B клиентами, SRE и командами разработки: специализируюсь на преобразовании повторяющихся инцидентов в runbook-процессы, использовании AI-агентов для быстрого RCA, соблюдении строгих SLA под давлением и обеспечении максимального аптайма во время высокой волатильности рынков.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights, baseData.work),
  certificates: baseData.certificates,
  skills: [
    {
      name: 'Web3 & Блокчейн',
      level: 'advanced',
      keywords: ['JSON-RPC', 'WebSocket'],
    },
    {
      name: 'AI',
      level: 'advanced',
      keywords: ['Gemini-CLI', 'Claude', 'Codex'],
    },
    {
      name: 'Linux',
      level: 'advanced',
      keywords: ['Debian', 'Talos', 'RHEL'],
    },
    {
      name: 'Мониторинг',
      level: 'master',
      keywords: ['Prometheus', 'Grafana', 'Datadog'],
    },
    {
      name: 'Kubernetes',
      level: 'advanced',
      keywords: ['K8S', 'K3S', 'Helm', 'Bare Metal'],
    },
  ],
};
