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
      'Развернул инфраструктуру в GCP с помощью Pulumi (Typescript) и Helm для ускорения мульти-облачных деплоев.',
      'Шаблонизировал стеки для GKE и Hetzner/Talos, чтобы сделать инфраструктуру воспроизводимой и управляемой кодом.',
      'Спроектировал автоматизацию для изоляции нестабильных API и восстановления работы приложений с помощью политик повторов (retry/backoff).',
    ],
    StackLabel.Russian,
  ),
  amarkets: withStack(
    'amarkets',
    [
      'Разработал каркас (scaffolding) для Helm и Deckhouse, автоматизирующий проверки на отклонение конфигурации (configuration drift).',
      'Написал скрипты проверки надежности для Go-сервисов, чтобы деплои платформы соответствовали эксплуатационным ожиданиям.',
      'Оркестрировал автоматизацию миграции монолита в Kubernetes, упаковав паттерны взаимодействия сервисов в переиспользуемые потоки.',
      'Добавил автоматические отчеты для мониторинга здоровья PostgreSQL (длительные запросы, медленные запросы, использование диска и т.д.).',
    ],
    StackLabel.Russian,
  ),
  gaijin: withStack(
    'gaijin',
    [
      'Улучшил процессы развертывания облачных игровых серверов в AWS с использованием Terraform и Packer для того чтобы быстрее реагировать на рост нагрузки.',
      'Построил service discovery на базе etcd, позволяющий рабочим нагрузкам Kubernetes самонастраиваться без ручного вмешательства.',
      'Задокументировал инструментарий платформы для поддержки дежурных команд с повторяемыми шагами восстановления.',
    ],
    StackLabel.Russian,
  ),
  yandex: withStack(
    'yandex',
    [
      'Устранял инциденты Yandex Cloud, охватывающие Managed DB, Compute и Kubernetes, фиксируя уроки для "гигиены" облака.',
      'Задокументировал режимы отказа production-Kubernetes и поделился runbook-ами для ускорения восстановления критических кластеров.',
    ],
    StackLabel.Russian,
  ),
  rostelecom: withStack(
    'rostelecom',
    [
      'Обеспечил автоматизацию мониторинга и алертинга для API Wink, чтобы поддерживать надежность пайплайнов наблюдаемости.',
      'Создал инструментарий, позволяющий продуктовым и эксплуатационным командам самостоятельно управлять внутренними средами и релизами.',
      'Построил кастомный фреймворк обновления на базе скриптов Go и Lua.',
      'Координировал планирование платформы с автоматизацией, связывающей закупку оборудования с пайплайнами развертывания.',
    ],
    StackLabel.Russian,
  ),
  equilibrium: withStack(
    'equilibrium',
    [
      'Автоматизировал развертывание блокчейн-нод и CI/CD пайплайны для крипто-финтех продукта.',
      'Укрепил CI-потоки скриптами, восстанавливающимися после сбоев в граничных случаях и нестабильности инфраструктуры.',
      'Добавил поддержку feature-ветвления для разработчиков.',
    ],
    StackLabel.Russian,
  ),
  restream: withStack(
    'restream',
    [
      'Развернул хосты CentOS и управлял конфигурацией через Puppet для поддержания консистентности коллекторов мониторинга.',
      'Оптимизировал реагирование на инциденты, улучшив автоматизацию вокруг порогов мониторинга и определения первопричин.',
    ],
    StackLabel.Russian,
  ),
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'Инженер по автоматизации и платформам',
    summary: `Инженер по автоматизации и платформам с фокусом на Infrastructure as Code, CI/CD пайплайнах, скриптинге и внутреннем инструментарии для ускорения доставки и развития платформы.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights, baseData.work),
  certificates: baseData.certificates,
  skills: baseData.skills,
};
