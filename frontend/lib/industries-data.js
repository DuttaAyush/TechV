export const INDUSTRIES = [
  {
    slug: 'bfsi',
    title: 'Financial Services & Insurance',
    shortTitle: 'Financial Services',
    icon: 'Landmark',
    tag: 'Vertical 01',
    image: '/images/shared/shared-1.jpg',
    summary: 'Core system modernization, secure transaction processing, and data architecture for regulated environments.',
    quote: '"Architecting compliant, high-availability software platforms that adhere to strict financial regulatory standards."',
    overview: 'We support financial institutions and insurance providers in modernizing legacy technical infrastructure. Our focus is on maintaining transactional integrity, implementing robust access controls, and ensuring continuous compliance with regional data protection regulations.',
    capabilities: [
      'Legacy System API Enablement',
      'Secure Transaction Processing Pipelines',
      'Data Warehouse Consolidation',
      'Identity & Access Management (IAM)',
      'Regulatory Compliance Auditing'
    ],
    deliverables: [
      { title: 'Modernization Roadmap', desc: 'Phased strategy for migrating specific workloads off legacy systems with minimal operational risk.' },
      { title: 'Secure API Gateways', desc: 'Encrypted endpoints facilitating controlled data exchange between internal and external systems.' },
      { title: 'Audit-Ready Logging', desc: 'Centralized telemetry aggregation to support compliance reporting and incident response.' },
      { title: 'Disaster Recovery Protocols', desc: 'Tested backup and failover procedures to ensure business continuity.' }
    ],
    metrics: [
      { value: 'Security', label: 'Encrypted Data at Rest' },
      { value: 'Compliance', label: 'Strict Access Controls' },
      { value: 'Reliability', label: 'Redundant Infrastructure' }
    ]
  },
  {
    slug: 'ai-solutions',
    title: 'Data Infrastructure & Analytics',
    shortTitle: 'Data Infrastructure',
    icon: 'Cpu',
    tag: 'Vertical 02',
    image: '/images/industries/industry-1.jpg',
    summary: 'Centralized data warehousing, ETL pipeline engineering, and structured reporting architectures.',
    quote: '"Structuring disparate enterprise data into reliable, queryable assets to support operational decision-making."',
    overview: 'We design and implement foundational data architectures for organizations managing high volumes of information. By engineering robust ETL/ELT pipelines and centralized warehouses, we establish single sources of truth that enable accurate business intelligence reporting.',
    capabilities: [
      'Data Warehouse Design & Deployment',
      'Automated ETL/ELT Pipeline Construction',
      'Data Quality & Validation Rules',
      'Business Intelligence Dashboarding',
      'Information Security Governance'
    ],
    deliverables: [
      { title: 'Data Architecture Blueprint', desc: 'Structural design of data lakes, warehouses, and the associated ingestion pipelines.' },
      { title: 'Automated Ingestion Scripts', desc: 'Routines that extract, clean, and load data from various operational sources.' },
      { title: 'Reporting Datasets', desc: 'Optimized views tailored specifically for efficient dashboard querying.' },
      { title: 'Data Dictionary', desc: 'Comprehensive documentation defining data structures, sources, and access protocols.' }
    ],
    metrics: [
      { value: 'Structure', label: 'Normalized Schemas' },
      { value: 'Consistency', label: 'Automated Validation' },
      { value: 'Performance', label: 'Optimized Query Times' }
    ]
  },
  {
    slug: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain Operations',
    shortTitle: 'Logistics & Supply Chain',
    icon: 'Truck',
    tag: 'Vertical 03',
    image: '/images/landing-page/landing-13.jpg',
    summary: 'Inventory management integrations, operational dashboards, and structured data exchange with logistics partners.',
    quote: '"Providing technical integration layers that improve visibility across distributed supply chain networks."',
    overview: 'We develop software solutions that facilitate coordination across supply chain operations. Our work typically involves integrating disparate warehouse management systems, standardizing electronic data interchanges (EDI), and building interfaces that provide operational visibility.',
    capabilities: [
      'WMS & ERP Integration',
      'Electronic Data Interchange (EDI) Setup',
      'Inventory Tracking Dashboards',
      'Supplier Portal Development',
      'Operational Data Warehousing'
    ],
    deliverables: [
      { title: 'Integration Architecture', desc: 'Technical design for data exchange between internal systems and external logistics providers.' },
      { title: 'Custom Supplier Portals', desc: 'Secure web interfaces allowing vendors to submit data directly into central systems.' },
      { title: 'Status Tracking APIs', desc: 'Endpoints designed to broadcast inventory status updates across connected applications.' },
      { title: 'Operational Dashboards', desc: 'Centralized views aggregating data to monitor supply chain execution.' }
    ],
    metrics: [
      { value: 'Integration', label: 'Standardized Data Exchange' },
      { value: 'Visibility', label: 'Centralized Reporting' },
      { value: 'Efficiency', label: 'Automated Data Entry' }
    ]
  },
  {
    slug: 'retail-commerce',
    title: 'Retail & E-Commerce Systems',
    shortTitle: 'Retail & Commerce',
    icon: 'ShoppingBag',
    tag: 'Vertical 04',
    image: '/images/industries/industry-2.jpg',
    summary: 'E-commerce platform engineering, inventory synchronization, and secure payment integration.',
    quote: '"Engineering robust digital storefronts that maintain performance under variable transaction loads."',
    overview: 'We support retail organizations by developing scalable e-commerce infrastructure. Our services range from custom frontend development to integrating backend inventory and payment systems, ensuring a stable and secure purchasing experience.',
    capabilities: [
      'Custom E-Commerce Development',
      'Payment Gateway Integration',
      'Inventory System Synchronization',
      'Product Information Management (PIM)',
      'Performance Optimization & Caching'
    ],
    deliverables: [
      { title: 'Digital Storefront', desc: 'Responsive web applications optimized for product discovery and transaction completion.' },
      { title: 'Backend Integration Layer', desc: 'Middleware synchronizing online orders with fulfillment and accounting systems.' },
      { title: 'PIM Configuration', desc: 'Centralized database structures for managing product catalogs and attributes.' },
      { title: 'Load Testing Reports', desc: 'Documentation of system performance under simulated peak traffic conditions.' }
    ],
    metrics: [
      { value: 'Performance', label: 'Optimized Content Delivery' },
      { value: 'Reliability', label: 'Tested Order Workflows' },
      { value: 'Security', label: 'PCI Compliant Integration' }
    ]
  },
  {
    slug: 'healthcare-life-sciences',
    title: 'Healthcare & Clinical Data Systems',
    shortTitle: 'Healthcare & Life Sciences',
    icon: 'HeartPulse',
    tag: 'Vertical 05',
    image: '/images/industries/industry-3.jpg',
    summary: 'Clinical data integration, standards-compliant APIs, and secure patient portals.',
    quote: '"Implementing technology architectures that adhere strictly to health data privacy and interoperability standards."',
    overview: 'We develop software systems tailored for healthcare organizations, focusing heavily on data security and interoperability. We build solutions that securely manage patient data, facilitate exchange via standard protocols like HL7/FHIR, and comply with HIPAA regulations.',
    capabilities: [
      'Health Data Interoperability (HL7/FHIR)',
      'Secure Patient Portal Development',
      'HIPAA-Compliant Infrastructure Design',
      'Clinical System Integration',
      'Health Data Analytics Platforms'
    ],
    deliverables: [
      { title: 'Interoperability Architecture', desc: 'Technical specifications for securely exchanging data between clinical applications.' },
      { title: 'Secure Web Portals', desc: 'Authenticated applications for patients to access health records securely.' },
      { title: 'Compliance Documentation', desc: 'Technical reports outlining adherence to data protection and privacy standards.' },
      { title: 'Integration Middleware', desc: 'Services designed to translate and route data between disparate health systems.' }
    ],
    metrics: [
      { value: 'Compliance', label: 'HIPAA Standard Adherence' },
      { value: 'Security', label: 'Encrypted Data Transmission' },
      { value: 'Interoperability', label: 'Standardized Data Formats' }
    ]
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud Engineering & Infrastructure',
    shortTitle: 'Cloud Engineering',
    icon: 'Cloud',
    tag: 'Vertical 06',
    image: '/images/industries/industry-4.jpg',
    summary: 'Cloud migration strategy, infrastructure as code (IaC), and container orchestration.',
    quote: '"Designing resilient, scalable cloud environments configured through deterministic infrastructure code."',
    overview: 'Our infrastructure team designs and provisions enterprise cloud environments. We implement Infrastructure as Code practices, deploy container orchestration platforms, and establish monitoring frameworks to ensure high availability and efficient resource utilization.',
    capabilities: [
      'Cloud Architecture Design (AWS/Azure/GCP)',
      'Infrastructure as Code (Terraform/CloudFormation)',
      'Container Orchestration (Kubernetes)',
      'CI/CD Pipeline Construction',
      'Systems Monitoring & Alerting'
    ],
    deliverables: [
      { title: 'Cloud Architecture Diagrams', desc: 'Detailed schematics of networks, compute resources, and security boundaries.' },
      { title: 'Provisioning Scripts', desc: 'Version-controlled code to programmatically deploy and manage infrastructure.' },
      { title: 'Deployment Pipelines', desc: 'Automated workflows for testing and releasing applications into cloud environments.' },
      { title: 'Monitoring Configuration', desc: 'Setup of logging aggregation, performance metrics, and operational alerts.' }
    ],
    metrics: [
      { value: 'Automation', label: 'Scripted Provisioning' },
      { value: 'Visibility', label: 'Comprehensive Logging' },
      { value: 'Resilience', label: 'Configured High-Availability' }
    ]
  },
  {
    slug: 'cybersecurity-defense',
    title: 'Information Security & Compliance',
    shortTitle: 'InfoSec & Compliance',
    icon: 'ShieldCheck',
    tag: 'Vertical 07',
    image: '/images/industries/industry-5.jpg',
    summary: 'Security architecture design, access control implementation, and vulnerability management.',
    quote: '"Establishing defensive architectures to protect organizational assets and maintain regulatory compliance."',
    overview: 'We support organizations in strengthening their technical security postures. Our focus includes implementing robust identity management, designing secure network topologies, and establishing practices for continuous vulnerability assessment and mitigation.',
    capabilities: [
      'Identity & Access Management Integration',
      'Network Security Architecture',
      'Application Security Assessments',
      'Data Encryption Strategies',
      'Compliance Framework Implementation'
    ],
    deliverables: [
      { title: 'Security Architecture Plan', desc: 'Documentation defining access controls, network perimeters, and encryption standards.' },
      { title: 'IAM Configuration', desc: 'Implementation of centralized authentication and authorization services.' },
      { title: 'Vulnerability Reports', desc: 'Detailed analysis of application and infrastructure security testing results.' },
      { title: 'Remediation Guidelines', desc: 'Technical procedures for addressing identified security weaknesses.' }
    ],
    metrics: [
      { value: 'Protection', label: 'Defense-in-Depth Strategy' },
      { value: 'Governance', label: 'Auditable Access Logs' },
      { value: 'Readiness', label: 'Defined Response Protocols' }
    ]
  },
  {
    slug: 'energy-smart-grid',
    title: 'Industrial Systems & Telemetry',
    shortTitle: 'Industrial Systems',
    icon: 'Cloud',
    tag: 'Vertical 08',
    image: '/images/landing-page/landing-15.jpg',
    summary: 'Sensor data ingestion, industrial system integration, and operational reporting platforms.',
    quote: '"Engineering data pipelines to securely transmit and process telemetry from industrial environments."',
    overview: 'We build software infrastructure to support industrial and utility operations. Our services involve constructing secure data pipelines to collect telemetry from field sensors, integrating with existing control systems, and developing interfaces for operational monitoring.',
    capabilities: [
      'Telemetry Data Ingestion',
      'Time-Series Database Configuration',
      'Industrial API Integration',
      'Operational Dashboard Development',
      'Network Segmentation Strategies'
    ],
    deliverables: [
      { title: 'Data Ingestion Architecture', desc: 'Design of pipelines to collect and queue data from remote sensors.' },
      { title: 'Storage Configuration', desc: 'Implementation of databases optimized for high-volume time-series data.' },
      { title: 'Monitoring Interfaces', desc: 'Custom web applications visualizing equipment status and historical trends.' },
      { title: 'Security Strategy', desc: 'Network designs isolating operational technology (OT) from corporate networks.' }
    ],
    metrics: [
      { value: 'Reliability', label: 'Consistent Data Collection' },
      { value: 'Security', label: 'Network Isolation' },
      { value: 'Performance', label: 'Optimized Time-Series Storage' }
    ]
  }
];

export function getIndustryBySlug(slug) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
