const services = [
  {
    slug: 'web-dev',
    title: 'Web Application & Platform Engineering',
    shortTitle: 'Web Development',
    price: 3499,
    icon: 'Globe',
    tag: 'Service 01',
    image: '/images/services/service-2.jpg',
    summary: 'Custom web application architectures, enterprise frontend frameworks, and highly available content platforms designed for extreme performance and scalability.',
    quote: '"Delivering robust, secure, and highly available web applications tailored for complex enterprise requirements, ensuring seamless user experiences and operational stability."',
    overview: [
      'Our Web Engineering practice designs and develops high-performance web applications tailored to the exacting demands of modern enterprises. We utilize cutting-edge frameworks such as Next.js and React alongside cloud-native hosting environments to deliver secure, accessible, and infinitely scalable platforms capable of handling variable production loads effortlessly.',
      'Beyond mere aesthetics, we engineer the underlying architecture to support complex business logic, real-time data synchronization, and rigorous security protocols. Our team ensures that every application is fully accessible, complying with global standards while maintaining lightning-fast load times through advanced caching strategies and optimized asset delivery.',
      'We also focus heavily on long-term maintainability. By establishing robust CI/CD pipelines, comprehensive automated testing suites, and strict code governance, we empower your internal teams to continuously iterate and deploy with absolute confidence.'
    ],
    capabilities: [
      'Single-Page & Server-Side Rendered Applications',
      'Frontend Architecture & State Management',
      'Content Management System Integration',
      'Web Accessibility & Compliance Standards',
      'API-First Development & Headless Architecture',
      'Progressive Web Application (PWA) Implementation',
      'Real-Time WebSockets & Event-Driven UI',
      'Micro-Frontend Architecture for Enterprise Scale'
    ],
    deliverables: [
      { title: 'Architecture & Component Design', desc: 'Comprehensive technical specification and reusable UI component library, adhering strictly to your brand guidelines while ensuring responsive behavior across all device profiles.' },
      { title: 'Application Codebase', desc: 'Version-controlled, fully tested, and meticulously documented application source code delivered via a secure repository with full deployment scripts.' },
      { title: 'API Integration Layer', desc: 'Secure middleware connecting the frontend to internal business logic, complete with rate limiting, data validation, and automated error handling.' },
      { title: 'Deployment Pipeline', desc: 'Automated CI/CD workflows for consistent environment staging and production releases, integrated with your existing DevOps infrastructure.' }
    ],
    methodology: [
      { step: 'Discovery & Architecture', desc: 'We begin by analyzing your technical requirements, user demographics, and load expectations to blueprint a resilient architecture.' },
      { step: 'Component Engineering', desc: 'Our team develops a library of reusable, accessible UI components that form the foundation of the application ecosystem.' },
      { step: 'Integration & Testing', desc: 'We integrate backend APIs and conduct rigorous automated testing, including unit, integration, and end-to-end user flows.' },
      { step: 'Staging & Deployment', desc: 'Applications are deployed to secure staging environments for final UAT before being pushed to production via automated pipelines.' }
    ],
    metrics: [
      { value: 'Scalability', label: 'Load-Tested Architecture' },
      { value: 'Security', label: 'OWASP Top 10 Compliant' },
      { value: 'Accessibility', label: 'WCAG 2.1 AA Standards' }
    ]
  },
  {
    slug: 'app-dev',
    title: 'Mobile Application Development',
    shortTitle: 'Mobile Development',
    price: 4999,
    icon: 'Smartphone',
    tag: 'Service 02',
    image: '/images/services/service-3.jpg',
    summary: 'Native and cross-platform mobile engineering, complex device integrations, and secure backend synchronization for mobile workforces.',
    quote: '"Engineering secure, responsive mobile applications that extend core business capabilities to remote workforces and consumers globally."',
    overview: [
      'Our Mobile Engineering team develops native and cross-platform applications for iOS and Android environments. We focus on stringent memory management, secure local storage, offline synchronization, and seamless integration with existing enterprise authentication systems to ensure a frictionless mobile experience.',
      'We understand that mobile applications must perform flawlessly under varying network conditions. Therefore, we implement robust offline-first architectures that allow users to continue their work seamlessly, synchronizing data securely back to enterprise servers the moment connectivity is restored.',
      'Security is paramount in mobile environments. We integrate advanced device management (MDM) capabilities, biometric authentication, and encrypted local databases to protect sensitive corporate data, ensuring compliance with strict industry regulations and corporate security policies.'
    ],
    capabilities: [
      'Native iOS (Swift) & Android (Kotlin) Engineering',
      'Cross-Platform Framework Implementations (React Native/Flutter)',
      'Mobile Device Management (MDM) Compatibility',
      'Secure Offline Data Synchronization',
      'Hardware & Sensor API Integration',
      'Biometric Authentication & Zero-Trust Access',
      'Push Notification Infrastructure',
      'App Store Optimization & Deployment'
    ],
    deliverables: [
      { title: 'Mobile Technical Architecture', desc: 'Defined data models, sync protocols, and application state diagrams that govern how the application behaves in diverse network environments.' },
      { title: 'Production App Binaries', desc: 'Compiled, signed, and store-ready application packages optimized for performance and compliant with Apple and Google review guidelines.' },
      { title: 'Mobile Backend Services (MBaaS)', desc: 'Optimized API endpoints designed specifically for mobile latency profiles, minimizing payload sizes and maximizing battery efficiency.' },
      { title: 'Automated Test Suites', desc: 'Device-farm testing scripts covering critical application pathways across hundreds of physical device and OS combinations.' }
    ],
    methodology: [
      { step: 'UX & Interaction Design', desc: 'Crafting intuitive touch interfaces that adhere to platform-specific design guidelines while maintaining brand identity.' },
      { step: 'Core Development', desc: 'Engineering the application logic, focusing on performance optimization, memory management, and secure local data handling.' },
      { step: 'Device Testing', desc: 'Conducting extensive QA across a matrix of physical devices, operating system versions, and network conditions.' },
      { step: 'Store Submission', desc: 'Managing the complete submission process, including provisioning profiles, certificate management, and app store compliance reviews.' }
    ],
    metrics: [
      { value: 'Performance', label: 'Optimized Memory Usage' },
      { value: 'Reliability', label: 'Offline-First Sync' },
      { value: 'Security', label: 'Encrypted Local Storage' }
    ]
  },
  {
    slug: 'software-dev',
    title: 'Custom Software & Systems Engineering',
    shortTitle: 'Software Engineering',
    price: 6499,
    icon: 'Code',
    tag: 'Service 03',
    image: '/images/services/service-4.jpg',
    summary: 'Core business logic implementation, legacy system modernization, and distributed microservices development for mission-critical operations.',
    quote: '"Architecting the foundational software systems that run core business operations, process vast data sets, and secure enterprise transactions."',
    overview: [
      'We engineer custom backend systems and middleware designed to support specialized business logic that off-the-shelf solutions cannot accommodate. Our methodology emphasizes modular design, rigorous unit testing, and highly maintainable codebases to ensure long-term operational stability and substantially reduced technical debt.',
      'Our expertise extends to the modernization of legacy monoliths. We strategically decouple monolithic architectures into agile microservices, allowing for independent scaling, faster deployment cycles, and isolation of potential failures. This incremental approach mitigates risk while dramatically improving system resilience.',
      'Data integrity and transactional consistency are at the core of our software engineering practice. We design distributed systems that guarantee data consistency across geographic regions, utilizing advanced queuing, event streaming, and database clustering techniques.'
    ],
    capabilities: [
      'Distributed Systems Architecture',
      'Microservices & Containerization',
      'Legacy Codebase Refactoring',
      'Database Modeling & Query Optimization',
      'Automated Quality Assurance',
      'Event-Driven Architecture (Kafka/RabbitMQ)',
      'High-Availability API Gateways',
      'Serverless Compute Solutions'
    ],
    deliverables: [
      { title: 'System Architecture Specification', desc: 'Detailed documentation of data flows, service boundaries, network topologies, and dependency graphs that define the entire system.' },
      { title: 'Core Services Implementation', desc: 'Executable backend services, deployed via containerized environments with built-in health checks and logging integration.' },
      { title: 'Migration Strategy', desc: 'Phased rollout plans for replacing legacy systems with mitigated operational risk, including data migration and fallback procedures.' },
      { title: 'Comprehensive Test Coverage', desc: 'Extensive unit, integration, and load tests executed automatically on every code commit to prevent regressions.' }
    ],
    methodology: [
      { step: 'Domain Modeling', desc: 'We map complex business processes into structured data models and identify optimal service boundaries for microservices.' },
      { step: 'API Contract Definition', desc: 'Establishing strict API contracts between services to allow concurrent development and ensure seamless integration.' },
      { step: 'Iterative Development', desc: 'Building and deploying services in iterative sprints, ensuring constant feedback and alignment with business goals.' },
      { step: 'Performance Profiling', desc: 'Conducting rigorous load testing to identify bottlenecks, optimize queries, and ensure the system scales linearly.' }
    ],
    metrics: [
      { value: 'Maintainability', label: 'Strict Code Formatting' },
      { value: 'Quality', label: 'Continuous Code Analysis' },
      { value: 'Resilience', label: 'Fault-Tolerant Design' }
    ]
  },
  {
    slug: 'digital-marketing',
    title: 'Marketing Technology & Data Integration',
    shortTitle: 'MarTech Solutions',
    price: 2499,
    icon: 'TrendingUp',
    tag: 'Service 04',
    image: '/images/services/service-5.jpg',
    summary: 'Marketing automation integration, customer data platform (CDP) implementation, and technical SEO architecture for data-driven growth.',
    quote: '"Aligning complex marketing workflows with robust data pipelines to enable highly accurate attribution and targeted outreach at scale."',
    overview: [
      'We integrate complex marketing technology stacks to provide unified, real-time visibility into customer data. By seamlessly connecting CRMs, analytics engines, and diverse advertising platforms, we establish accurate data tracking and automate marketing operations securely, ensuring full compliance with privacy regulations.',
      'Our technical SEO architecture services go beyond basic optimization. We implement dynamic rendering strategies, advanced schema markup, and aggressive payload reduction to ensure that enterprise digital properties achieve optimal visibility and lightning-fast indexation by major search engines.',
      'Furthermore, we specialize in implementing Customer Data Platforms (CDPs) that ingest data from every touchpoint. This unified view enables marketing teams to orchestrate highly personalized, omnichannel campaigns based on deterministic data rather than probabilistic guessing.'
    ],
    capabilities: [
      'Customer Data Platform (CDP) Deployment',
      'Technical Search Engine Optimization',
      'Marketing Automation Workflows',
      'Privacy-Compliant Analytics Tracking',
      'API Integrations for Ad Platforms',
      'Server-Side Tagging & Event Routing',
      'A/B Testing Infrastructure',
      'Multi-Touch Attribution Modeling'
    ],
    deliverables: [
      { title: 'Data Flow Architecture', desc: 'Mapping of user events, identifiers, and data points across the entire marketing technology ecosystem to ensure absolute consistency.' },
      { title: 'Analytics Implementation', desc: 'Precise configuration of server-side tagging, privacy-first tracking protocols, and customized executive dashboard reporting.' },
      { title: 'Technical Site Audit', desc: 'Comprehensive resolution of crawl errors, semantic HTML structuring, schema implementation, and aggressive payload optimization.' },
      { title: 'Automation Pipelines', desc: 'Programmatic, logic-driven workflows for real-time lead scoring, routing, and automated data syndication across platforms.' }
    ],
    methodology: [
      { step: 'Stack Auditing', desc: 'Reviewing current marketing tools to identify data silos, redundant systems, and opportunities for integration.' },
      { step: 'Data Layer Design', desc: 'Creating a standardized data layer that reliably captures user interactions and standardizes naming conventions.' },
      { step: 'Integration Execution', desc: 'Building API connectors and middleware to synchronize audiences and conversion data between platforms.' },
      { step: 'Validation & Compliance', desc: 'Ensuring all data collection adheres strictly to GDPR, CCPA, and internal corporate privacy policies.' }
    ],
    metrics: [
      { value: 'Accuracy', label: 'Unified Data Tracking' },
      { value: 'Compliance', label: 'Consent-Based Routing' },
      { value: 'Visibility', label: 'Cross-Platform Metrics' }
    ]
  },
  {
    slug: 'crm-dev',
    title: 'CRM Configuration & Extension',
    shortTitle: 'CRM Integration',
    price: 5999,
    icon: 'Users',
    tag: 'Service 05',
    image: '/images/services/service-6.jpg',
    summary: 'Platform customization, bidirectional data syncing, and workflow automation for enterprise-grade customer relationship systems.',
    quote: '"Structuring customer relationship platforms to precisely reflect and enforce specialized, enterprise-specific business processes."',
    overview: [
      'Our CRM practice configures, extends, and heavily customizes major customer relationship platforms such as Salesforce and HubSpot. We focus on defining strict, scalable data models, building custom objects, and ensuring absolute data integrity between the CRM and peripheral enterprise applications like billing or support systems.',
      'We automate complex operational workflows to remove manual data entry and reduce human error. From intelligent lead routing algorithms based on territory and capacity, to automated contract generation and approval workflows, we turn the CRM into an active engine rather than a passive database.',
      'Data hygiene is fiercely protected through our implementations. We introduce strict validation rules, deduplication protocols, and role-based access controls (RBAC) that ensure only authorized personnel can view or modify critical customer information, maintaining compliance and security.'
    ],
    capabilities: [
      'CRM Data Modeling & Schema Design',
      'Custom Object & Field Configuration',
      'Bidirectional API Integrations',
      'Role-Based Access Control (RBAC)',
      'Automated Workflow Logic',
      'Lead Scoring & Territory Routing',
      'CPQ (Configure, Price, Quote) Implementation',
      'Customer Portal Development'
    ],
    deliverables: [
      { title: 'CRM Implementation Plan', desc: 'Exhaustive requirement documentation mapping specific business processes directly to platform capabilities and custom code requirements.' },
      { title: 'System Configuration', desc: 'Fully deployed environments featuring tailored views, custom objects, advanced validation rules, and specialized page layouts.' },
      { title: 'Middleware Integration', desc: 'Resilient, scheduled, and real-time data synchronization layers connecting the CRM with ERP, marketing, or proprietary databases.' },
      { title: 'User Training Materials', desc: 'Extensive documentation and video resources tailored specifically to the newly configured business workflows and roles.' }
    ],
    methodology: [
      { step: 'Process Mapping', desc: 'Documenting current sales and support workflows to identify inefficiencies and areas for programmatic automation.' },
      { step: 'Architecture Design', desc: 'Structuring the data model to ensure scalable relationships between accounts, contacts, and custom entities.' },
      { step: 'Custom Development', desc: 'Writing APEX or specialized scripts to handle complex logic that standard platform configuration cannot support.' },
      { step: 'Data Migration', desc: 'Cleansing, mapping, and securely importing historical data from legacy systems into the new environment.' }
    ],
    metrics: [
      { value: 'Governance', label: 'Strict Data Validation' },
      { value: 'Efficiency', label: 'Automated Routing' },
      { value: 'Alignment', label: 'Process-Mapped Configuration' }
    ]
  },
  {
    slug: 'erp-sol',
    title: 'ERP Integration & Modernization',
    shortTitle: 'ERP Services',
    price: 8999,
    icon: 'Briefcase',
    tag: 'Service 06',
    image: '/images/services/service-7.jpg',
    summary: 'Financial system integration, supply chain data consolidation, and bespoke module development for core ERP infrastructures.',
    quote: '"Ensuring core enterprise resource planning systems interoperate securely and efficiently with the broader organizational ecosystem."',
    overview: [
      'We support large organizations in modernizing their complex ERP ecosystems. Recognizing the immense risk of full "rip-and-replace" migrations, we frequently focus on API enablement, data warehouse consolidation, and building tailored, user-friendly interfaces that interact safely with underlying legacy ERPs.',
      'Our team specializes in breaking down data silos by extracting critical financial, inventory, and human resources data from the ERP and routing it to specialized analytics tools. This provides executives with real-time, consolidated operational visibility without requiring direct access to the core ERP.',
      'We also develop secure, external-facing portals for vendors, suppliers, and partners. These portals integrate directly with the ERP to automate procurement, invoicing, and supply chain updates, significantly reducing manual administrative overhead and accelerating business cycles.'
    ],
    capabilities: [
      'ERP API Enablement',
      'Data Extraction & Consolidation',
      'Custom Interface Development',
      'Financial Workflow Automation',
      'Supply Chain Telemetry Integration',
      'Vendor & Supplier Portal Development',
      'Procurement Automation',
      'Real-Time GL Reconciliation Tools'
    ],
    deliverables: [
      { title: 'Integration Architecture', desc: 'Comprehensive design of the secure communication layers and middleware interacting directly with the core ERP system.' },
      { title: 'Custom Frontends', desc: 'Role-specific, intuitive web applications that allow staff to interact with ERP data without requiring complex direct access.' },
      { title: 'Reporting Data Marts', desc: 'Highly optimized, consolidated database views built specifically for high-speed financial and operational reporting.' },
      { title: 'Security Audits', desc: 'Thorough verification of API access controls, data encryption standards, and network isolation protocols.' }
    ],
    methodology: [
      { step: 'Legacy Assessment', desc: 'Evaluating the existing ERP structure to determine the safest and most efficient points for integration and data extraction.' },
      { step: 'Middleware Construction', desc: 'Building fault-tolerant API layers that act as a secure buffer between the ERP and external applications.' },
      { step: 'Interface Development', desc: 'Designing modern user interfaces tailored to specific departmental workflows, replacing outdated native ERP screens.' },
      { step: 'Staged Rollout', desc: 'Deploying new modules in carefully controlled phases, running parallel systems to guarantee absolute financial accuracy.' }
    ],
    metrics: [
      { value: 'Interoperability', label: 'API-Enabled Access' },
      { value: 'Security', label: 'Strict Access Controls' },
      { value: 'Consistency', label: 'Centralized Master Data' }
    ]
  },
  {
    slug: 'it-consulting',
    title: 'Technology Strategy & Architecture Assessment',
    shortTitle: 'IT Strategy',
    price: 4499,
    icon: 'MonitorCheck',
    tag: 'Service 07',
    image: '/images/services/service-8.jpg',
    summary: 'Technical due diligence, architectural reviews, infrastructure assessments, and comprehensive operational readiness planning.',
    quote: '"Providing objective, uncompromising technical analysis to inform critical infrastructure, security, and capital investment decisions."',
    overview: [
      'Our advisory services deliver entirely objective evaluations of existing enterprise technology environments. We meticulously analyze overall architecture, codebase quality, deployment pipelines, and security postures to identify hidden operational risks and recommend structural, pragmatic improvements.',
      'For organizations undergoing mergers or acquisitions, we provide rapid, deep-dive technical due diligence. We assess the target company’s technology debt, scalability limits, and compliance gaps, translating complex technical realities into clear financial and operational risks for the board.',
      'We also assist CIOs and CTOs in formulating long-term IT strategies. By mapping out multi-year modernization roadmaps, we help organizations transition from legacy on-premise systems to resilient cloud infrastructures while ensuring continuous business operations and strict budget adherence.'
    ],
    capabilities: [
      'Architecture & Codebase Audits',
      'Cloud Infrastructure Assessments',
      'Technical Due Diligence for M&A',
      'Disaster Recovery & BCP Planning',
      'Vendor & System Selection',
      'IT Cost Rationalization',
      'DevOps & CI/CD Maturity Assessment',
      'Compliance & Risk Evaluation'
    ],
    deliverables: [
      { title: 'Technical Assessment Report', desc: 'An exhaustive review identifying architectural constraints, critical security vulnerabilities, and areas of significant technical debt.' },
      { title: 'Target Architecture Design', desc: 'Proposed structural diagrams and system models addressing identified limitations and preparing for future scale.' },
      { title: 'Remediation Roadmap', desc: 'A prioritized, actionable list of technical debt reduction tasks and infrastructure upgrades tied to business impact.' },
      { title: 'Operational Readiness Plan', desc: 'Strict guidelines for modernizing deployment processes, monitoring strategies, and incident response protocols.' }
    ],
    methodology: [
      { step: 'Information Gathering', desc: 'Conducting stakeholder interviews, system access reviews, and gathering existing architectural documentation.' },
      { step: 'Deep-Dive Analysis', desc: 'Performing manual code reviews, automated vulnerability scans, and infrastructure configuration audits.' },
      { step: 'Synthesis & Strategy', desc: 'Translating technical findings into business impacts and formulating a strategic plan for remediation.' },
      { step: 'Executive Presentation', desc: 'Delivering clear, actionable insights to technical and non-technical leadership to align on next steps.' }
    ],
    metrics: [
      { value: 'Clarity', label: 'Objective Analysis' },
      { value: 'Prioritization', label: 'Risk-Based Roadmaps' },
      { value: 'Governance', label: 'Standardized Frameworks' }
    ]
  },
  {
    slug: 'business-consulting',
    title: 'Process Automation & Operations Engineering',
    shortTitle: 'Operations Engineering',
    price: 5499,
    icon: 'LineChart',
    tag: 'Service 08',
    image: '/images/about-us/about-2.jpg',
    summary: 'Workflow digitization, operational data mapping, and script-based automation of repetitive, high-volume business tasks.',
    quote: '"Translating manual, error-prone business operations into highly deterministic, auditable, and scalable software processes."',
    overview: [
      'We focus on the deep technical implementation of business process improvements. By rigorously analyzing manual workflows across departments, we identify prime opportunities to introduce automated scripting, secure API connections, and data validation layers that drastically reduce operational friction.',
      'Our team specializes in eliminating "swivel-chair" integrations where employees manually copy data between disconnected systems. We build robust middleware and utilize Robotic Process Automation (RPA) where APIs are unavailable, ensuring seamless, error-free data transfer across the enterprise.',
      'Visibility is critical to operational excellence. We design and deploy real-time operational dashboards that monitor the execution of these automated processes, immediately flagging exceptions and providing management with a clear, auditable view of organizational throughput.'
    ],
    capabilities: [
      'Workflow Digitization & Optimization',
      'Systems Integration Mapping',
      'Robotic Process Automation (RPA)',
      'Data Validation & Cleaning Rulesets',
      'Operational Dashboards & Alerting',
      'Document Parsing & OCR Integration',
      'Exception Handling Frameworks',
      'Business Rules Engine Configuration'
    ],
    deliverables: [
      { title: 'Process Mapping Diagrams', desc: 'Highly detailed technical documentation comparing the current manual state against the proposed automated future state.' },
      { title: 'Automation Scripts & Bots', desc: 'Executable routines designed to handle structured, repetitive tasks with built-in error handling and retry logic.' },
      { title: 'Integration Connectors', desc: 'Custom middleware built specifically to facilitate secure data transfer between distinct, previously siloed operational systems.' },
      { title: 'Monitoring Dashboards', desc: 'Intuitive interfaces displaying the real-time status, success rates, and exceptions of all automated processes.' }
    ],
    methodology: [
      { step: 'Process Mining', desc: 'Observing and documenting exact keystrokes and decision points in current manual operations.' },
      { step: 'Optimization Design', desc: 'Re-engineering the workflow to eliminate unnecessary steps before applying any technology.' },
      { step: 'Development & Testing', desc: 'Building the automation scripts and running them against massive sets of historical data to ensure accuracy.' },
      { step: 'Deployment & Training', desc: 'Releasing the automation into production and training staff to manage exceptions rather than manual entry.' }
    ],
    metrics: [
      { value: 'Efficiency', label: 'Reduced Manual Input' },
      { value: 'Reliability', label: 'Deterministic Execution' },
      { value: 'Visibility', label: 'Auditable Workflows' }
    ]
  },
  {
    slug: 'ai-consulting',
    title: 'Data Engineering & Applied Machine Learning',
    shortTitle: 'Data Engineering',
    price: 7999,
    icon: 'Cpu',
    tag: 'Service 09',
    image: '/images/industries/industry-1.jpg',
    summary: 'Data pipeline construction, structured warehouse design, and pragmatic machine learning model integration for enterprise analytics.',
    quote: '"Establishing the resilient data infrastructure necessary to support highly reliable analytics and complex algorithmic processing."',
    overview: [
      'Our data practice builds the foundational infrastructure required for advanced analytics and applied machine learning. We construct secure, scalable data pipelines (ETL/ELT) that ingest massive volumes of information from diverse sources, transforming and loading it into highly optimized data warehouses.',
      'We recognize that AI initiatives fail without pristine data. Therefore, we implement rigorous data governance, master data management, and strict validation rules. Once the data foundation is solid, we implement vector search capabilities and Retrieval-Augmented Generation (RAG) architectures to unlock the value of unstructured enterprise data.',
      'Our machine learning integrations are highly pragmatic. We avoid experimental AI in favor of deploying proven, specialized models to address specific, constrained business problems—such as predictive maintenance, fraud detection, or dynamic pricing—ensuring tangible return on investment and strict operational safety.'
    ],
    capabilities: [
      'Data Pipeline Engineering (ETL/ELT)',
      'Data Warehouse & Lakehouse Architecture',
      'Information Retrieval Systems (RAG)',
      'Predictive Model Integration',
      'Data Governance & Access Control',
      'Vector Database Implementation',
      'Time-Series Data Processing',
      'MLOps & Model Monitoring'
    ],
    deliverables: [
      { title: 'Data Architecture Schema', desc: 'Comprehensive design of normalized databases, dimensional models, and highly performant analytical data stores.' },
      { title: 'Automated Data Pipelines', desc: 'Scheduled extraction and transformation processes built with robust error handling, alerting, and automated backfilling capabilities.' },
      { title: 'Search & Retrieval Infrastructure', desc: 'Implementation of advanced indexing and semantic querying capabilities for both structured metrics and unstructured text.' },
      { title: 'Model Deployment Services', desc: 'Secure hosting and API creation for executing specific machine learning inferences with sub-second latency.' }
    ],
    methodology: [
      { step: 'Data Source Auditing', desc: 'Cataloging all enterprise data sources, assessing data quality, and defining strict extraction protocols.' },
      { step: 'Pipeline Construction', desc: 'Building resilient data ingestion streams utilizing modern data engineering frameworks like Airflow or dbt.' },
      { step: 'Warehouse Optimization', desc: 'Structuring the data specifically for high-speed querying and integration with business intelligence tools.' },
      { step: 'Model Integration', desc: 'Deploying machine learning models as isolated microservices, continuously monitoring for data drift and accuracy degradation.' }
    ],
    metrics: [
      { value: 'Structure', label: 'Normalized Data Storage' },
      { value: 'Performance', label: 'Optimized Query Execution' },
      { value: 'Security', label: 'Role-Based Data Access' }
    ]
  }
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export const SERVICES = services;
