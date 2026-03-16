import { Data } from './types';
import { data as baseData } from './sre-devops-en';
import { createVariantWork, WorkKey } from './resume-variant-utils';
import { commonEducation, commonLanguages } from './resume-common-data';

const variantHighlights: Partial<Record<WorkKey, string[]>> = {
  trading_startup: [
    'Provided L2/L3 support and led Root Cause Analysis (RCA) for production incidents in a crypto trading platform interfacing directly with major CEXs (Bybit, MEXC) and DEXs (Uniswap).',
    'Created and maintained troubleshooting runbooks for critical exchange API failures (REST/WebSocket drops, rate limiting), reducing triage time during high-volatility market events.',
    'Implemented proactive health checks for trading bots and network latency, preventing recurring outages and financial impact.',
    'Accelerated incident resolution and RCA by leveraging AI agents (Gemini-CLI, Claude, Codex) to parse complex logs and instantly generate targeted diagnostic scripts.',
    'Stack: Kubernetes (GKE/Talos), Pulumi, Web3.js/Ethers.js, Cloudflare, Prometheus, Node.js, WebSocket/RPC APIs',
  ],
  amarkets: [
    'Diagnosed escalated production issues (PostgreSQL, Redis), reducing MTTR by 20% through standardized troubleshooting playbooks.',
    'Improved handoff quality between support and product teams through clear incident timelines and actionable post-mortems.',
    'Stack: Kubernetes, AWS, PostgreSQL, Redis, RabbitMQ, Prometheus, Golang, MetaTrader 5',
  ],
  gaijin: [
    'Supported high-load online game backends with a focus on rapid incident response and 99.9% availability.',
    'Stack: Bare Metal Kubernetes, AWS (RDS/EC2), CentOS, Redis, Graphite, Telegraf, Ansible',
  ],
  yandex: [
    'Provided Premium L2 Technical Support for Enterprise B2B clients on Yandex Cloud, managing critical escalations for Managed Kubernetes, Compute, and Database services.',
    'Acted as the technical bridge between major customers and core engineering, reproducing complex infrastructure bugs and providing clear, empathetic communication during high-severity outages.',
    'Consistently met strict SLAs for critical incidents, diagnosing network latency, pod eviction loops, and stateful application failures under extreme pressure.',
    'Authored post-mortems and internal knowledge base articles, converting one-off deep diagnostics into repeatable incident response playbooks for the L1/L2 teams.',
  ],
  rostelecom: [
    'Provided operational support for Wink API services, combining incident triage, troubleshooting, and systemic post-incident improvements.',
    'Set up and tuned monitoring/alerting to detect service degradation early and guide on-call teams during outages.',
    'Performed capacity planning for critical nodes (CPU/RAM/Disk) and coordinated hardware procurement to sustain platform growth.',
  ],
  equilibrium: [
    'Delivered technical support and SRE for public blockchain infrastructure, resolving complex syncing, consensus, and state-corruption issues for ETH (Parity) and EOS (Nodeos) nodes.',
    'Troubleshot JSON-RPC API latency, P2P peer drops, and out-of-sync events, ensuring high validator uptime and stable query performance for Web3 clients.',
    'Improved node recoverability by hardening deployment procedures and writing step-by-step documentation for routine L1/L2 support actions.',
    'Stack: Ubuntu, AWS, Parity (Ethereum), Nodeos (EOS), Docker Swarm, Prometheus',
  ],
  restream: [
    'Started in monitoring and technical support, processing tickets and triaging incidents in the Interactive TV platform.',
    'Provisioned and maintained CentOS hosts, tracked configuration via Puppet, and handled first-line diagnostics for service issues.',
    'Established foundational expertise in Linux diagnostics, host provisioning, and large-scale monitoring operations.',
  ],
};

export const data: Data = {
  basics: {
    ...baseData.basics,
    label: 'SRE / Technical Support Engineer',
    summary: `Technical Support / SRE Engineer with a strong focus on Web3 infrastructure, RPC node operations, and enterprise cloud platforms. Hands-on L2/L3 experience diagnosing complex blockchain connectivity issues, REST/WebSocket API degradations, and production Kubernetes clusters. Strong bridge between enterprise B2B clients, SRE, and development teams: I specialize in converting recurring incidents into runbooks, leveraging AI agents for rapid RCA, meeting strict SLAs under pressure, and ensuring maximum uptime during high-volatility events.`,
  },
  education: commonEducation,
  languages: commonLanguages,
  work: createVariantWork(variantHighlights),
  certificates: baseData.certificates,
  skills: [
    {
      name: 'Web3 & Blockchain',
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
      name: 'Monitoring',
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
