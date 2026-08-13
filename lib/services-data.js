export const SERVICES = [
  {
    slug: 'web-dev',
    title: 'Web Development & Digital Platforms',
    shortTitle: 'Web Dev',
    price: 3499,
    icon: 'Globe',
    tag: 'Service 01',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Next-generation web applications, high-performance frontend architectures, responsive portals, and seamless user experiences.',
    quote: '"Architecting lightning-fast, accessible, and high-conversion web platforms engineered for modern enterprise scale."',
    overview: 'Our Web Development practice builds state-of-the-art web applications and digital platforms. Leveraging Next.js, React, modern micro-frontends, and serverless edge delivery, we create hyper-responsive web experiences optimized for speed, security, and conversion.',
    capabilities: [
      'Next.js & React Web Applications',
      'High-Performance Frontend Engineering',
      'Headless CMS & Commerce Integration',
      'Core Web Vitals & Performance Optimization',
      'Accessible & Responsive UI/UX Systems'
    ],
    deliverables: [
      { title: 'Custom Web Platform Blueprint', desc: 'Modern Jamstack architecture designed for extreme speed and global CDN deployment.' },
      { title: 'Component Library & Design System', desc: 'Reusable, accessible UI components with full TypeScript typing and design tokens.' },
      { title: 'Headless API Integration', desc: 'Seamless connection to enterprise CMS, CRM, and backend REST/GraphQL services.' },
      { title: 'SEO & Performance Guarantee', desc: 'Lighthouse 95+ score optimization, sub-second TTFB, and complete schema metadata.' }
    ],
    metrics: [
      { value: '99/100', label: 'Lighthouse Score' },
      { value: '<0.4s', label: 'Page Load Time' },
      { value: '3.4x', label: 'Conversion Uplift' }
    ]
  },
  {
    slug: 'app-dev',
    title: 'Mobile & Web App Development',
    shortTitle: 'App Dev',
    price: 4999,
    icon: 'Smartphone',
    tag: 'Service 02',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Native iOS & Android apps, cross-platform mobile solutions, PWAs, and high-throughput mobile backend APIs.',
    quote: '"Crafting intuitive, mission-critical mobile applications that delight millions of daily active users."',
    overview: 'Our App Development practice delivers high-performance mobile applications for iOS, Android, and cross-platform ecosystems. From biometric security to offline-first synchronization, we engineer mobile software with frictionless user interfaces and robust security controls.',
    capabilities: [
      'Native iOS (Swift) & Android (Kotlin)',
      'Cross-Platform Development (React Native/Flutter)',
      'Progressive Web Apps (PWAs)',
      'Mobile Security & Biometric Auth',
      'Real-Time Offline Data Synchronization'
    ],
    deliverables: [
      { title: 'Native Mobile App Suite', desc: 'App Store and Google Play compliant applications built with clean architecture.' },
      { title: 'Secure Mobile API Gateway', desc: 'OAuth2/JWT authorized microservices tailored for low-bandwidth mobile environments.' },
      { title: 'Automated CI/CD Mobile Pipeline', desc: 'Fastlane pipelines enabling automated build testing, signing, and store deployment.' },
      { title: 'Push & Analytics Engine', desc: 'Real-time event tracking and segmented push notification integration.' }
    ],
    metrics: [
      { value: '4.9 ★', label: 'Avg App Store Rating' },
      { value: '99.9%', label: 'Crash-Free Sessions' },
      { value: '10M+', label: 'Active Installs' }
    ]
  },
  {
    slug: 'software-dev',
    title: 'Custom Software Engineering',
    shortTitle: 'Software Dev',
    price: 6499,
    icon: 'Code',
    tag: 'Service 03',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Bespoke enterprise software, microservices API architectures, legacy refactoring, and cloud-native solutions.',
    quote: '"Engineering tailored enterprise software systems that outlast market cycles and drive operational leverage."',
    overview: 'Our Software Development practice designs and builds custom software applications tailored to complex business requirements. We specialize in decoupling monolithic legacy software into scalable microservices, domain-driven design, and robust API integrations.',
    capabilities: [
      'Custom Enterprise Software Design',
      'Microservices & Distributed Systems',
      'Legacy Codebase Modernization',
      'API Design & Integration Gateways',
      'Automated Testing & Quality Assurance'
    ],
    deliverables: [
      { title: 'Domain-Driven Architecture Spec', desc: 'Comprehensive domain model and service boundary mapping for scalability.' },
      { title: 'Production Microservices Stack', desc: 'Containerized Docker/Kubernetes services with distributed logging and tracing.' },
      { title: 'Legacy Strangler Application', desc: 'Incremental migration pathway replacing legacy systems without downtime.' },
      { title: 'Automated Test Suite', desc: 'Unit, integration, and end-to-end test suites guaranteeing zero regressions.' }
    ],
    metrics: [
      { value: '100%', label: 'Code Test Coverage' },
      { value: '0 Downtime', label: 'Deployment Record' },
      { value: '5x', label: 'Throughput Speed' }
    ]
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & Performance Growth',
    shortTitle: 'Digital Marketing',
    price: 2499,
    icon: 'TrendingUp',
    tag: 'Service 04',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Data-driven performance marketing, SEO, conversion rate optimization (CRO), and enterprise lead generation.',
    quote: '"Turning technical superiority into market dominance through data-backed digital marketing strategies."',
    overview: 'Our Digital Marketing practice accelerates customer acquisition and revenue growth. Combining technical SEO, paid performance channels, content strategy, and advanced conversion rate analytics, we turn digital channels into predictable growth engines.',
    capabilities: [
      'Technical SEO & Programmatic Search',
      'Performance Paid Acquisition (PPC/Paid Social)',
      'Conversion Rate Optimization (CRO)',
      'Marketing Automation & Funnel Design',
      'Multi-Touch Attribution Analytics'
    ],
    deliverables: [
      { title: 'Growth Engine Roadmap', desc: 'Full-funnel customer acquisition strategy mapped against unit economics and CAC targets.' },
      { title: 'Programmatic SEO Audit', desc: 'Technical crawl optimization, schema markup, and keyword domination structure.' },
      { title: 'Conversion Funnel Overhaul', desc: 'A/B landing page testing and micro-copy optimization driving higher conversions.' },
      { title: 'Real-Time Attribution Dashboard', desc: 'Executive reporting connecting ad spend directly to closed revenue.' }
    ],
    metrics: [
      { value: '280%', label: 'Organic Traffic Uplift' },
      { value: '-42%', label: 'CAC Reduction' },
      { value: '5.2x', label: 'Average ROAS' }
    ]
  },
  {
    slug: 'crm-dev',
    title: 'CRM Systems Development & Integration',
    shortTitle: 'CRM Dev',
    price: 5999,
    icon: 'Users',
    tag: 'Service 05',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Custom Salesforce, HubSpot & proprietary CRM architecture, automated lead routing, and customer data unification.',
    quote: '"Unifying every sales touchpoint into a single customer truth that powers executive decision-making."',
    overview: 'Our CRM Development practice customizes, integrates, and builds enterprise CRM platforms. We streamline sales workflows, automate customer onboarding pipelines, and integrate CRM data seamlessly with core ERP and analytics stacks.',
    capabilities: [
      'Custom CRM Platform Architecture',
      'Salesforce & HubSpot Customization',
      'Automated Lead Scoring & Routing',
      'Customer 360° Data Unification',
      'Omnichannel Sales & Support Integration'
    ],
    deliverables: [
      { title: 'Custom CRM Pipeline Blueprint', desc: 'Tailored stage configurations, automated task triggers, and deal velocity tracking.' },
      { title: 'Enterprise Data Connector', desc: 'Bi-directional real-time sync between CRM, ERP, and product databases.' },
      { title: 'Automated Onboarding Flow', desc: 'Trigger-based email sequences, SMS alerts, and internal rep notifications.' },
      { title: 'Sales Performance Analytics', desc: 'Quota tracking, win-loss attribution, and pipeline forecasting modules.' }
    ],
    metrics: [
      { value: '360°', label: 'Customer Visibility' },
      { value: '65%', label: 'Faster Deal Cycles' },
      { value: '100%', label: 'Lead Sync Accuracy' }
    ]
  },
  {
    slug: 'erp-sol',
    title: 'ERP Enterprise Solutions & Operations',
    shortTitle: 'ERP Sol',
    price: 8999,
    icon: 'Briefcase',
    tag: 'Service 06',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'SAP, Oracle & custom ERP implementations, supply chain automation, inventory management, and financial orchestration.',
    quote: '"Streamlining core enterprise operations into a unified, automated operational spine."',
    overview: 'Our ERP Solutions practice modernizes complex business operations. We design and implement ERP platforms that connect financial reporting, inventory management, procurement, and HR into a single, real-time operational engine.',
    capabilities: [
      'ERP Architecture & Implementation (SAP/Oracle)',
      'Supply Chain & Inventory Automation',
      'Automated Financial & General Ledger Workflows',
      'Procurement & Vendor Management',
      'Custom ERP Module Development'
    ],
    deliverables: [
      { title: 'ERP Target Blueprint', desc: 'End-to-end operational map covering financial, inventory, and supply chain flows.' },
      { title: 'Automated Accounting Engine', desc: 'Real-time GL posting, invoice reconciliation, and multi-currency reporting.' },
      { title: 'Inventory & Logistics Module', desc: 'Automated reorder point alerts, warehouse tracking, and vendor portals.' },
      { title: 'Executive ERP Cockpit', desc: 'C-suite dashboard providing live visibility into gross margins and operational expenditure.' }
    ],
    metrics: [
      { value: '45%', label: 'OpEx Efficiency' },
      { value: 'Real-time', label: 'Financial Auditing' },
      { value: '0', label: 'Manual Recon Gaps' }
    ]
  },
  {
    slug: 'it-consulting',
    title: 'Enterprise IT Architecture & Strategy',
    shortTitle: 'IT Consulting',
    price: 4499,
    icon: 'MonitorCheck',
    tag: 'Service 07',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Strategic IT roadmap advisory, cloud infrastructure auditing, DevOps governance, and CTO/CIO advisory.',
    quote: '"Providing board-level clarity and technical foresight to align IT infrastructure with aggressive business goals."',
    overview: 'Our IT Consulting practice provides executive-level technology strategy to enterprises navigating modernization. We audit existing IT stacks, reduce tech debt, establish DevOps best practices, and architect resilient infrastructure.',
    capabilities: [
      'Executive CIO/CTO Advisory',
      'IT Infrastructure & Cloud Auditing',
      'DevOps & CI/CD Platform Standards',
      'Cybersecurity & Risk Compliance',
      'Vendor & Contract Rationalization'
    ],
    deliverables: [
      { title: '3-Year IT Master Strategy', desc: 'Prioritized technical roadmap aligned with enterprise revenue and efficiency goals.' },
      { title: 'Infrastructure Audit Report', desc: 'Comprehensive assessment of security vulnerabilities, latency bottlenecks, and cloud waste.' },
      { title: 'DevOps Standardization Framework', desc: 'Standard operating procedures for infrastructure-as-code and automated releases.' },
      { title: 'Vendor Rationalization Matrix', desc: 'Identification of duplicate SaaS tools and renegotiation leverage points.' }
    ],
    metrics: [
      { value: '35%', label: 'Infrastructure Savings' },
      { value: '100%', label: 'Compliance Audit Pass' },
      { value: '3-Yr', label: 'Tech Roadmap Clarity' }
    ]
  },
  {
    slug: 'business-consulting',
    title: 'Business Transformation & Consulting',
    shortTitle: 'Business Consulting',
    price: 5499,
    icon: 'LineChart',
    tag: 'Service 08',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Operating model redesign, process automation, digital transformation, and organizational change management.',
    quote: '"Bridging the gap between executive vision and operational execution to drive sustainable growth."',
    overview: 'Our Business Consulting practice accelerates enterprise transformation. We redesign operational workflows, eliminate process bottlenecks, guide post-merger integrations, and foster high-performance agile cultures.',
    capabilities: [
      'Business Process Re-engineering (BPR)',
      'Digital Operating Model Redesign',
      'Post-Merger IT & Operations Integration',
      'Value Stream Mapping & Optimization',
      'Executive Change Governance'
    ],
    deliverables: [
      { title: 'Target Operating Model (TOM)', desc: 'Organizational pod structures, governance frameworks, and decision rights.' },
      { title: 'Process Automation Map', desc: 'Identification and specs for automating manual operational handoffs.' },
      { title: 'Change Enablement Toolkit', desc: 'Training materials, communication plans, and leadership alignment frameworks.' },
      { title: 'Value Capture Dashboard', desc: 'Tracking realized operational savings against transformation targets.' }
    ],
    metrics: [
      { value: '3.8x', label: 'Process Acceleration' },
      { value: '92%', label: 'Stakeholder Alignment' },
      { value: 'Audited', label: 'ROI Milestones' }
    ]
  },
  {
    slug: 'ai-consulting',
    title: 'Applied AI, LLM & Machine Learning Advisory',
    shortTitle: 'AI Consulting',
    price: 7999,
    icon: 'Cpu',
    tag: 'Service 09',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=srgb&fm=jpg&q=85',
    summary: 'Sovereign AI strategy, custom LLM fine-tuning, RAG data architectures, autonomous AI agents, and AI safety governance.',
    quote: '"Deploying production-grade, sovereign AI architectures that transform internal data into competitive moat."',
    overview: 'Our AI Consulting practice turns generative AI and machine learning into enterprise superpowers. We build secure RAG pipelines, fine-tune domain-specific LLMs, deploy multi-agent automation meshes, and establish compliance guardrails.',
    capabilities: [
      'Enterprise Generative AI & RAG Strategy',
      'Custom LLM Fine-Tuning & Domain Adaptation',
      'Autonomous Multi-Agent Systems',
      'MLOps & Automated AI Pipeline Infra',
      'AI Ethics, Governance & Risk Frameworks'
    ],
    deliverables: [
      { title: 'Enterprise RAG Blueprint', desc: 'Secure vector store architecture integrating internal data without cloud data leakage.' },
      { title: 'Autonomous Agent Framework', desc: 'Multi-agent orchestration for automated research, customer support, and analysis.' },
      { title: 'AI Governance & Compliance Kit', desc: 'Hallucination scoring, explainability metrics, and board-level risk reports.' },
      { title: 'Custom Model Fine-Tuning Pod', desc: 'Infrastructure and pipelines for training proprietary enterprise models.' }
    ],
    metrics: [
      { value: '100%', label: 'Data Sovereignty' },
      { value: '4.5x', label: 'Knowledge Retrieval' },
      { value: '<500ms', label: 'AI Inference Latency' }
    ]
  }
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
