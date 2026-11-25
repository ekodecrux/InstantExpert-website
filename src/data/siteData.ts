import { ProductItem, RoutePath, ServiceItem } from '../types/navigation';

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_expertaid_office_1795610357510.jpg',
  alt: 'Indian software engineers and technology leaders collaborating in a modern Expertaid Technologies office',
};

export const ABOUT_IMAGE = {
  src: '/src/assets/images/about_indian_leadership_1795602810328.jpg',
  alt: 'Expertaid Technologies solutions architects reviewing enterprise digital transformation workflows',
};

export const NAV_LINKS: { label: string; path: RoutePath }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
];

export const ENTERPRISE_METRICS = [
  {
    value: '120+',
    label: 'Active Enterprise Deployments',
    context: 'Across manufacturing, distribution, and services',
  },
  {
    value: '99.9%',
    label: 'Core Platform Uptime SLA',
    context: 'Monitored cloud and on-premise ERP & CRM clusters',
  },
  {
    value: '40%',
    label: 'Faster Order-to-Cash Cycles',
    context: 'Measured within 6 months of ERP rollout',
  },
  {
    value: '24/7',
    label: 'Dedicated Technical Support',
    context: 'Direct engineering escalation and SLA governance',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    number: '01',
    title: 'Innovative Solutions',
    description: 'Modern technology for evolving business needs.',
    detail:
      'Modular architectures engineered to adopt automation, real-time analytics, and GST-compliant financial workflows without disrupting core operations.',
  },
  {
    number: '02',
    title: 'Customized Services',
    description: 'Solutions tailored to your operations.',
    detail:
      'Every implementation begins with an operational workflow audit so software mirrors how your teams actually quote, procure, manufacture, and bill.',
  },
  {
    number: '03',
    title: 'Reliable Technology',
    description: 'Focus on quality, security, and reliability.',
    detail:
      'Role-based access controls, encrypted audit logs, and automated backups ensure mission-critical enterprise data stays protected and available.',
  },
  {
    number: '04',
    title: 'Business Growth',
    description: 'Technology that supports business expansion.',
    detail:
      'Multi-branch, multi-warehouse, and multi-entity scalability designed to support new product lines, regional offices, and growing teams.',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'erp',
    slug: 'expertaid-erp',
    name: 'Expertaid Technologies ERP',
    category: 'Enterprise Resource Planning',
    shortDescription:
      'Integrated enterprise resource planning for finance, inventory, sales, purchasing, HR, and business operations.',
    overview:
      'Unify accounting, multi-warehouse inventory, procurement, production planning, and human resources inside a single source of truth built for Indian and global enterprises.',
    image: '/src/assets/images/product_erp_expertaid_1795610357558.jpg',
    imageAlt: 'Expertaid Technologies ERP financial and inventory command screen in a modern corporate office',
    contactInterestValue: 'ERP Solutions',
    deploymentOptions: ['Cloud SaaS', 'Private VPC', 'On-Premise Enterprise'],
    keyModules: [
      {
        title: 'Finance & Statutory Accounting',
        detail: 'General ledger, GST e-invoicing, reconciliation, cost centers, and automated balance sheets.',
      },
      {
        title: 'Inventory & Warehouse Control',
        detail: 'Batch/serial tracking, reorder thresholds, stock transfers, and multi-location valuation.',
      },
      {
        title: 'Sales, Billing & Procurement',
        detail: 'Quotations, purchase requisitions, vendor comparison, GRN, and three-way invoice matching.',
      },
      {
        title: 'HR & Payroll Operations',
        detail: 'Attendance integration, shift rosters, statutory deductions, and employee self-service.',
      },
    ],
    businessOutcomes: [
      'Eliminate manual spreadsheet reconciliation across branches',
      'Real-time margin and cash-flow visibility for leadership',
      'Audit-ready financial and inventory traceability',
    ],
  },
  {
    id: 'crm',
    slug: 'expertaid-crm',
    name: 'Expertaid Technologies CRM',
    category: 'Customer Relationship Management',
    shortDescription:
      'Manage leads, customer relationships, sales pipelines, enquiries, follow-ups, and customer support.',
    overview:
      'Give sales, account management, and support teams structured visibility into every prospect enquiry, follow-up cadence, quotation stage, and post-sale ticket.',
    image: '/src/assets/images/product_crm_pipeline_1795602812313.jpg',
    imageAlt: 'Sales and client success managers reviewing Expertaid Technologies CRM pipeline analytics',
    contactInterestValue: 'CRM Solutions',
    deploymentOptions: ['Cloud SaaS', 'Web & Mobile Companion', 'ERP-Integrated Mode'],
    keyModules: [
      {
        title: 'Lead & Enquiry Capture',
        detail: 'Centralize website, email, phone, and trade enquiry sources with automatic territory routing.',
      },
      {
        title: 'Visual Sales Pipeline',
        detail: 'Track opportunity stages, probability-weighted revenue forecasts, and deal velocity.',
      },
      {
        title: 'Automated Follow-Ups & Quotations',
        detail: 'Scheduled reminders, activity timelines, and instant proposal generation linked to product catalogs.',
      },
      {
        title: 'Customer Support Desk',
        detail: 'SLA-tracked service tickets, warranty logs, and complete customer interaction history.',
      },
    ],
    businessOutcomes: [
      'Zero missed prospect follow-ups across distributed sales teams',
      'Consistent lead-to-order conversion reporting',
      'Unified handoff between sales closure and customer onboarding',
    ],
  },
  {
    id: 'custom-apps',
    slug: 'custom-business-applications',
    name: 'Custom Business Applications',
    category: 'Bespoke Enterprise Software',
    shortDescription:
      'Business-specific applications developed to address unique operational requirements.',
    overview:
      'When off-the-shelf software falls short, our engineering team architects, builds, and deploys custom web portals, dealer networks, and operational tools tailored to your workflow.',
    image: '/src/assets/images/product_custom_software_1795602811009.jpg',
    imageAlt: 'Expertaid Technologies software engineers designing custom enterprise application architecture',
    contactInterestValue: 'Custom Business Applications',
    deploymentOptions: ['Dedicated Cloud', 'Hybrid API Integration', 'Internal Intranet'],
    keyModules: [
      {
        title: 'B2B Dealer & Vendor Portals',
        detail: 'Self-service order placement, credit limit checks, dispatch tracking, and statement downloads.',
      },
      {
        title: 'Field Operations & Inspection Apps',
        detail: 'Offline-capable mobile checklists, geo-tagged service verification, and instant photo capture.',
      },
      {
        title: 'Workflow & Approval Engines',
        detail: 'Multi-tier approval matrices for capital expenditure, pricing exceptions, and compliance.',
      },
      {
        title: 'Legacy Modernization & APIs',
        detail: 'Replace brittle legacy tools with secure, browser-accessible React and cloud-native backends.',
      },
    ],
    businessOutcomes: [
      'Software designed 100% around your proprietary business rules',
      'Seamless REST/webhook connectivity with existing ERP and accounting systems',
      'Full intellectual property clarity and long-term maintainability',
    ],
  },
  {
    id: 'ai-quality-intelligence',
    slug: 'ai-quality-intelligence-platform',
    name: 'AI Quality Intelligence Platform',
    category: 'AI & Quality Assurance',
    shortDescription:
      'Automated quality monitoring, defect analytics, and predictive inspection workflows across production and service operations.',
    overview:
      'Continuously analyze operational telemetry, inspection logs, and supplier metrics to detect quality deviations early, reduce rework, and maintain audit-ready compliance across plants and branches.',
    image: '/src/assets/images/product_ai_quality_1795607852948.jpg',
    imageAlt: 'Quality engineer reviewing automated defect analytics on the AI Quality Intelligence Platform',
    contactInterestValue: 'AI Quality Intelligence Platform',
    deploymentOptions: ['Cloud SaaS', 'Private VPC', 'Edge-Connected Plant Mode'],
    keyModules: [
      {
        title: 'Predictive Defect Analytics',
        detail: 'Identify recurring failure signatures across batches, shifts, and equipment lines before rejection spikes.',
      },
      {
        title: 'Automated Inspection Workflows',
        detail: 'Digitized incoming, in-process, and pre-dispatch checklists with threshold alerts and photo evidence.',
      },
      {
        title: 'Root-Cause & CAPA Tracking',
        detail: 'Structured Corrective and Preventive Action workflows linked directly to responsible teams and timelines.',
      },
      {
        title: 'Compliance & Audit Reporting',
        detail: 'Exportable ISO-aligned quality scorecards, vendor defect trends, and real-time plant KPIs.',
      },
    ],
    businessOutcomes: [
      'Catch recurring production and vendor defects ahead of customer dispatch',
      'Standardize quality inspection governance across multiple sites',
      'Direct bi-directional hooks with Expertaid Technologies ERP inventory and procurement',
    ],
  },
  {
    id: 'expertbuddy',
    slug: 'expertbuddy',
    name: 'ExpertBuddy',
    category: 'AI Workplace Companion',
    shortDescription:
      'Intelligent workplace assistant and guided team productivity companion built for fast-moving enterprise operations.',
    overview:
      'Give operations, support, and project teams instant answers from internal SOPs, policy manuals, and live business workflows inside one secure enterprise workspace.',
    image: '/src/assets/images/product_expert_buddy_1795607852425.jpg',
    imageAlt: 'Enterprise team collaborating with ExpertBuddy workflow companion across laptop and tablet',
    contactInterestValue: 'ExpertBuddy',
    deploymentOptions: ['Cloud SaaS', 'Private VPC', 'Enterprise SSO Mode'],
    keyModules: [
      {
        title: 'Contextual SOP & Policy Search',
        detail: 'Retrieve verified internal procedures, product specs, and troubleshooting steps in plain language.',
      },
      {
        title: 'Guided Task & Ticket Routing',
        detail: 'Draft structured service summaries, escalate exceptions, and trigger approval notifications automatically.',
      },
      {
        title: 'Role-Based Knowledge Access',
        detail: 'Enforce department-level permissions so finance, HR, and field teams see only authorized documents.',
      },
      {
        title: 'CRM & Helpdesk Integration',
        detail: 'Surface recommended responses and account context directly alongside customer support queues.',
      },
    ],
    businessOutcomes: [
      'Cut internal onboarding and cross-team knowledge lookup time significantly',
      'Improve consistency across customer support and operational responses',
      'Keep proprietary company documentation strictly within governed access boundaries',
    ],
  },
  {
    id: 'ai-tutor',
    slug: 'ai-tutor',
    name: 'AI Tutor',
    category: 'AI Learning & Training',
    shortDescription:
      'Adaptive corporate training and personalized skill-building platform for employee onboarding and technical upskilling.',
    overview:
      'Accelerate workforce readiness with structured interactive learning tracks, adaptive practice assessments, and real-time competency dashboards tailored to each department.',
    image: '/src/assets/images/product_ai_tutor_1795607853519.jpg',
    imageAlt: 'Professionals completing adaptive training modules on the AI Tutor platform',
    contactInterestValue: 'AI Tutor',
    deploymentOptions: ['Cloud SaaS', 'Web & Mobile Learning Portal', 'Enterprise LMS Sync'],
    keyModules: [
      {
        title: 'Adaptive Learning Paths',
        detail: 'Personalize module pacing and practice exercises based on each learner’s role and assessment progress.',
      },
      {
        title: 'Interactive Concept Coaching',
        detail: 'Step-by-step guided explanations, scenario drills, and instant feedback on technical and process topics.',
      },
      {
        title: 'Skill Assessments & Certifications',
        detail: 'Timed evaluations, practical checkpoints, and automated completion certificates for compliance.',
      },
      {
        title: 'Manager Readiness Analytics',
        detail: 'Track cohort completion rates, skill gaps, and branch-level training milestones in real time.',
      },
    ],
    businessOutcomes: [
      'Standardize employee onboarding across distributed offices and field teams',
      'Give managers clear visibility into team skill readiness before project deployment',
      'Scale continuous technical upskilling without heavy classroom overhead',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Software Development',
    category: 'Engineering & Advisory',
    description: 'Customized software and application development',
    deliverables: 'Full-cycle architecture, UI/UX engineering, backend APIs, and automated QA.',
    contactInterestValue: 'Software Development',
  },
  {
    number: '02',
    title: 'ERP Implementation',
    category: 'Enterprise Platforms',
    description: 'ERP configuration and deployment',
    deliverables: 'Process mapping, chart-of-accounts migration, role setup, and team onboarding.',
    contactInterestValue: 'ERP Implementation',
  },
  {
    number: '03',
    title: 'CRM Solutions',
    category: 'Enterprise Platforms',
    description: 'Customer and sales management systems',
    deliverables: 'Pipeline structuring, lead capture integration, quotation templates, and SLA setup.',
    contactInterestValue: 'CRM Solutions',
  },
  {
    number: '04',
    title: 'Website Development',
    category: 'Engineering & Advisory',
    description: 'Professional business websites',
    deliverables: 'Responsive corporate sites, product catalogs, SEO foundations, and enquiry routing.',
    contactInterestValue: 'Website Development',
  },
  {
    number: '05',
    title: 'Mobile App Development',
    category: 'Engineering & Advisory',
    description: 'Business-focused mobile applications',
    deliverables: 'iOS and Android companion apps for field sales, executives, and service technicians.',
    contactInterestValue: 'Mobile App Development',
  },
  {
    number: '06',
    title: 'IT Consulting',
    category: 'Engineering & Advisory',
    description: 'Technology planning and guidance',
    deliverables: 'Infrastructure audits, build-vs-buy advisory, cloud readiness, and security governance.',
    contactInterestValue: 'IT Consulting',
  },
  {
    number: '07',
    title: 'System Integration',
    category: 'Enterprise Platforms',
    description: 'Connecting business applications',
    deliverables: 'Bi-directional sync between ERP, CRM, payment gateways, e-commerce, and BI tools.',
    contactInterestValue: 'System Integration',
  },
  {
    number: '08',
    title: 'Technical Support',
    category: 'Enterprise Platforms',
    description: 'Software maintenance and assistance',
    deliverables: 'Dedicated SLA helpdesk, performance tuning, security patching, and version upgrades.',
    contactInterestValue: 'Technical Support',
  },
  {
    number: '09',
    title: 'AI Quality Intelligence Platform',
    category: 'AI & Intelligent Solutions',
    description: 'Automated quality monitoring and predictive inspection analytics',
    deliverables: 'Anomaly detection pipelines, compliance scoring, root-cause dashboards, and ERP QA integration.',
    contactInterestValue: 'AI Quality Intelligence Platform',
  },
  {
    number: '10',
    title: 'ExpertBuddy',
    category: 'AI & Intelligent Solutions',
    description: 'Intelligent workplace assistant and guided team companion',
    deliverables: 'Contextual SOP retrieval, workflow assistance, automated task routing, and role-based access controls.',
    contactInterestValue: 'ExpertBuddy',
  },
  {
    number: '11',
    title: 'AI Tutor',
    category: 'AI & Intelligent Solutions',
    description: 'Adaptive corporate training and personalized learning platform',
    deliverables: 'Interactive skill modules, role-based onboarding journeys, assessment analytics, and progress tracking.',
    contactInterestValue: 'AI Tutor',
  },
];

export const INTEREST_OPTIONS = [
  'ERP Solutions',
  'CRM Solutions',
  'Custom Business Applications',
  'Software Development',
  'ERP Implementation',
  'Website Development',
  'Mobile App Development',
  'IT Consulting',
  'System Integration',
  'Technical Support',
  'AI Quality Intelligence Platform',
  'ExpertBuddy',
  'AI Tutor',
];

export const WHATSAPP_NUMBER = '919281866990';
export const WHATSAPP_DISPLAY = '+919281866990';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  actionLabel?: string;
  actionPath?: RoutePath;
  actionInterest?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'products',
    question: 'What software products does Expertaid Technologies offer?',
    answer:
      'We offer six flagship solutions: Expertaid Technologies ERP, Expertaid Technologies CRM, Custom Business Applications, AI Quality Intelligence Platform, ExpertBuddy, and AI Tutor—available across cloud SaaS, private VPC, and on-premise deployments.',
    keywords: ['product', 'products', 'software', 'offer', 'platform', 'suite'],
    actionLabel: 'Explore Products',
    actionPath: '/products',
  },
  {
    id: 'erp-implementation',
    question: 'What does your ERP Implementation service include?',
    answer:
      'Our ERP Implementation service covers operational workflow discovery, chart-of-accounts and opening-stock migration, GST configuration, role-based permissions, user training, and go-live support tailored to your branches and warehouses.',
    keywords: ['erp', 'implementation', 'deploy', 'deployment', 'migration', 'gst', 'inventory', 'finance', 'accounting'],
    actionLabel: 'Enquire about ERP Implementation',
    actionPath: '/contact',
    actionInterest: 'ERP Implementation',
  },
  {
    id: 'crm-solutions',
    question: 'How can your CRM Solutions help our sales and support teams?',
    answer:
      'We configure structured lead capture, automated follow-up reminders, visual sales pipelines, quotation workflows, and SLA-tracked customer support desks so no prospect enquiry or service ticket is missed.',
    keywords: ['crm', 'lead', 'leads', 'sales', 'pipeline', 'follow-up', 'customer', 'ticket', 'enquiry'],
    actionLabel: 'Enquire about CRM Solutions',
    actionPath: '/contact',
    actionInterest: 'CRM Solutions',
  },
  {
    id: 'custom-software-dev',
    question: 'Do you build custom software, business websites, and mobile apps?',
    answer:
      'Yes. Our engineering teams deliver Custom Software Development, responsive Website Development, and iOS/Android Mobile App Development built around your proprietary operational workflows, dealer portals, and field teams.',
    keywords: ['custom', 'software', 'website', 'web', 'mobile', 'app', 'android', 'ios', 'portal', 'development'],
    actionLabel: 'View Engineering Services',
    actionPath: '/services',
  },
  {
    id: 'system-integration',
    question: 'Can you integrate our existing ERP, CRM, and third-party tools?',
    answer:
      'Yes. Through our System Integration service, we build secure bi-directional APIs and webhooks connecting ERP, CRM, payment gateways, e-commerce storefronts, biometric attendance, and BI dashboards.',
    keywords: ['integrate', 'integration', 'api', 'connect', 'sync', 'webhook', 'payment', 'gateway', 'bi'],
    actionLabel: 'Enquire about System Integration',
    actionPath: '/contact',
    actionInterest: 'System Integration',
  },
  {
    id: 'it-consulting-support',
    question: 'Do you provide IT Consulting and ongoing Technical Support?',
    answer:
      'We offer IT Consulting for infrastructure audits, cloud readiness, and technology roadmaps, alongside dedicated Technical Support covering SLA monitoring, security patching, performance tuning, and version upgrades.',
    keywords: ['consulting', 'advisory', 'roadmap', 'audit', 'support', 'maintenance', 'sla', 'helpdesk', 'upgrade'],
    actionLabel: 'Discuss Consulting & Support',
    actionPath: '/contact',
    actionInterest: 'IT Consulting',
  },
  {
    id: 'ai-solutions',
    question: 'What are AI Quality Intelligence Platform, ExpertBuddy, and AI Tutor?',
    answer:
      'AI Quality Intelligence Platform monitors defects and compliance telemetry in real time; ExpertBuddy is an enterprise workplace companion for instant SOP guidance and task routing; and AI Tutor provides adaptive employee onboarding and skill-building modules.',
    keywords: ['ai', 'quality', 'expertbuddy', 'buddy', 'tutor', 'learning', 'training', 'defect', 'sop'],
    actionLabel: 'View AI Platforms',
    actionPath: '/products',
  },
  {
    id: 'offices-location',
    question: 'Where are Expertaid Technologies offices located?',
    answer:
      'Our corporate offices are located in Ahmedabad & Hyderabad, India (Mon–Sat, 9:30 AM – 6:30 PM IST). You can reach us via email at contact@expertaid.in, submit an enquiry on our Contact page, or message us on WhatsApp.',
    keywords: ['office', 'offices', 'location', 'ahmedabad', 'hyderabad', 'address', 'hours', 'email'],
    actionLabel: 'Open Contact Page',
    actionPath: '/contact',
  },
];

