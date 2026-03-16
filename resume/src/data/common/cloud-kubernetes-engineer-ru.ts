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
  trading_startup: withStack(
    'trading_startup',
    [
      'Спроектировал Kubernetes-инфраструктуру в GKE и Hetzner Cloud для обеспечения воспроизводимых мульти-облачных развертываний.',
      'Автоматизировал провижининг с помощью Pulumi и Helm, чтобы каждый релиз проходил через предсказуемые пайплайны с возможностью отката.',
      'Поддерживал OSS-проект pulumi-talos-cluster для упрощения управления control plane Kubernetes на базе Talos.',
      'Укрепил платформу, изолировав нестабильные внешние API и добавив слои retry/backoff для критических сервисов.',
      'FinOps: управление бюджетом, прозрачность затрат и оптимизация ресурсов кластера (rightsizing).',
    ],
    StackLabel.Russian,
  ),
  amarkets: withStack(
    'amarkets',
    [
      'Стандартизировал конфигурации Helm и Deckhouse для упрощения поэтапных выкаток (rollouts) критически важных подов.',
      'Продвигал наблюдаемость (observability) Kubernetes и автоматическое восстановление совместно с Go-командами для повышения надежности сервисов.',
      'Спроектировал архитектуру миграции монолита в Kubernetes, определив паттерны сервисов и гейты развертывания для cloud-native нагрузок.',
      'FinOps: управление бюджетом, прозрачность затрат и оптимизация ресурсов кластера (rightsizing).',
    ],
    StackLabel.Russian,
  ),
  gaijin: withStack(
    'gaijin',
    [
      'Поддерживал высоконагруженные игровые комнаты, в AWS и bare-metal серверами через Terraform and Ansible',
      'Участвовал в 24/7 on-call дежурствах, обеспечивал аптайм через отказоустойчивый дизайн инфраструктуры и практики быстрого восстановления.',
      'Предоставлял шаблоны Packer для быстрого создания игровых серверов.',
    ],
    StackLabel.Russian,
  ),
  yandex: withStack(
    'yandex',
    [
      'Решал инциденты Yandex Cloud, охватывающие Managed DB, Compute и Kubernetes, фиксируя уроки для улучшения "гигиены" облака.',
    ],
    StackLabel.Russian,
  ),
  rostelecom: withStack(
    'rostelecom',
    [
      'Модернизировал наблюдаемость API Wink (Zabbix, Prometheus, VictoriaMetrics) для визуализации Kubernetes и облачных нагрузок.',
      'Руководил реагированием на инциденты с настроенной автоматизацией и алертами, выявляющими конфигурационные отклонения (drift) до сбоев.',
      'Администрировал парк PostgreSQL с автоматизацией failover и мониторингом репликации между дата-центрами.',
      'Предоставил внутренние инструменты автоматизации и провел обучение, чтобы команды могли самостоятельно управлять развертываниями и планированием оборудования.',
      'Использовал внутреннее облако VMware vSphere для провижининга новых ВМ.',
      'Устранил единые точки отказа и усилил восстанавливаемость через отказоустойчивый дизайн сервисов и контролируемые релизы.',
    ],
    StackLabel.Russian,
  ),
  equilibrium: withStack(
    'equilibrium',
    [
      'Управлял парком блокчейн-нод и CI пайплайнами для поддержания стабильности крипто-финтех инфраструктуры в условиях волатильности.',
      'Укрепил инфраструктуру через стресс-тестирование развертываний нод и усиление CI/CD потоков против граничных случаев сбоев.',
      'Управлял узлами AWS с помощью Ansible и Chef.',
    ],
    StackLabel.Russian,
  ),
  restream: withStack(
    'restream',
    [
      'Провижинил узлы CentOS и отслеживал конфигурацию через Puppet для согласования инфраструктуры мониторинга с cloud-ready процессами.',
      'Уточнил пороги наблюдаемости и методы RCA для ускорения восстановления кластеров мониторинга.',
    ],
    StackLabel.Russian,
  ),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'Cloud & Kubernetes Engineer',
    summary: `Проектирую устойчивые мульти-облачные платформы (AWS, GCP) с фокусом на Kubernetes (Deckhouse, Talos), используя Terraform, Pulumi и Helm вместе с автоматизированными рабочими процессами для доставки надежной инфраструктуры.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights, baseData.work),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
