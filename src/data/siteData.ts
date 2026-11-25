import { ProductItem, RoutePath, ServiceItem } from '../types/navigation';

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_indian_tech_office_1795602809634.jpg',
  alt: 'Indian software engineers and technology leaders collaborating in a modern sunlit corporate office',
};

export const ABOUT_IMAGE = {
  src: '/src/assets/images/about_indian_leadership_1795602810328.jpg',
  alt: 'InstantExperts solutions architects reviewing enterprise digital transformation workflows',
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
    slug: 'instantexperts-erp',
    name: 'InstantExperts ERP',
    category: 'Enterprise Resource Planning',
    shortDescription:
      'Integrated enterprise resource planning for finance, inventory, sales, purchasing, HR, and business operations.',
    overview:
      'Unify accounting, multi-warehouse inventory, procurement, production planning, and human resources inside a single source of truth built for Indian and global enterprises.',
    image: '/src/assets/images/product_erp_suite_1795602810684.jpg',
    imageAlt: 'InstantExperts ERP financial and inventory command screen in a modern corporate office',
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
    slug: 'instantexperts-crm',
    name: 'InstantExperts CRM',
    category: 'Customer Relationship Management',
    shortDescription:
      'Manage leads, customer relationships, sales pipelines, enquiries, follow-ups, and customer support.',
    overview:
      'Give sales, account management, and support teams structured visibility into every prospect enquiry, follow-up cadence, quotation stage, and post-sale ticket.',
    image: '/src/assets/images/product_crm_pipeline_1795602812313.jpg',
    imageAlt: 'Sales and client success managers reviewing InstantExperts CRM pipeline analytics',
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
    imageAlt: 'InstantExperts software engineers designing custom enterprise application architecture',
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
];
