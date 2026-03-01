import { Data } from './types';
import { data as baseData } from './sre-devops-ru';
import { commonEducation, commonLanguages } from './resume-common-data';
import {
  createVariantWork,
  withStack,
  WorkKey,
  StackLabel,
} from './resume-variant-utils';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  freelance: withStack(
    'freelance',
    [
      'Разбирал инциденты в продуктиве для стартап-платформы торговых ботов и проводил анализ первопричин для быстрого восстановления сервиса.',
      'Вёл runbook-документацию по сбоям внешних API бирж (REST/WebSocket), чтобы ускорить triage повторяющихся проблем.',
    ],
    StackLabel.Russian,
  ),
  amarkets: withStack(
    'amarkets',
    [
      'Диагностировал сложные эскалации в продуктивной среде (PostgreSQL, MySQL, Redis, backend-сервисы) и координировал устранение с разработчиками.',
      'Собрал практичные плейбуки для анализа медленных запросов и деградации backend, чтобы решать инциденты по предсказуемому сценарию.',
      'Улучшил качество взаимодействия между поддержкой, SRE и product-командами через прозрачный разбор инцидентов и follow-up действия.',
    ],
    StackLabel.Russian,
  ),
  gaijin: withStack(
    'gaijin',
    [
      'Поддерживал высоконагруженные backend-системы онлайн-игр с фокусом на реагирование на инциденты, доступность и быстрые rollback-решения.',
    ],
    StackLabel.Russian,
  ),
  yandex: withStack(
    'yandex',
    [
      'Работал инженером L2 поддержки сервисов Yandex Cloud (Managed DB, Compute, Kubernetes), обрабатывал критические эскалации Enterprise-клиентов.',
      'Проводил глубокую диагностику проблем в продуктивных Kubernetes-кластерах и документировал результаты для повторяемого incident response.',
    ],
    StackLabel.Russian,
  ),
  rostelecom: withStack(
    'rostelecom',
    [
      'Обеспечивал поддержку API-сервисов Wink: triage инцидентов, траблшутинг и улучшения по итогам аварий.',
      'Настраивал и дорабатывал мониторинг/алертинг для раннего обнаружения деградаций и эффективной работы on-call команды.',
      'Обучал круглосуточную дежурную смену, улучшал support-runbook и синхронизировал технические решения с бизнес-приоритетами.',
    ],
    StackLabel.Russian,
  ),
  equilibrium: withStack(
    'equilibrium',
    [
      'Поддерживал эксплуатацию блокчейн-инфраструктуры и устранял ежедневные инциденты, влияющие на стабильность нод и CI/CD.',
      'Повысил восстанавливаемость сервисов через укрепление процедур релиза и документирование типовых действий поддержки.',
    ],
    StackLabel.Russian,
  ),
  restream: withStack(
    'restream',
    [
      'Начинал в мониторинге и технической поддержке: обрабатывал заявки и выполнял первичный triage инцидентов в платформе Интерактивного ТВ.',
      'Выполнял первичную настройку и сопровождение CentOS-серверов, вёл конфигурационный учёт через Puppet и делал первичную диагностику сбоев.',
      'Заложил основу технической экспертизы в области диагностики Linux-систем, сопровождения хостов и автоматизации конфигураций.',
    ],
    StackLabel.Russian,
  ),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'Инженер технической поддержки (L2) / SRE',
    summary: `Инженер технической поддержки с практическим опытом L2 в облачных и высоконагруженных продуктивных системах. Специализируюсь на triage инцидентов, глубокой диагностике и быстром восстановлении сервисов под нагрузкой. Выступаю связующим звеном между поддержкой, SRE и разработкой: превращаю повторяющиеся инциденты в runbook-процессы, улучшения мониторинга и устойчивые эксплуатационные практики.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights, baseData.work),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
