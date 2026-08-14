const fs = require('fs');
let content = fs.readFileSync('app/page.js', 'utf8');

// Update Work Array Metrics
content = content.replace("metric: '45%',", "metric: 'Design',");
content = content.replace("metricLabel: 'Faster Integration',", "metricLabel: 'System Architecture',");

content = content.replace("metric: '30%',", "metric: 'Optimize',");
content = content.replace("metricLabel: 'Efficiency Gain',", "metricLabel: 'Processing Workflows',");

content = content.replace("metric: '2.4x',", "metric: 'Secure',");
content = content.replace("metricLabel: 'Faster Data Access',", "metricLabel: 'Data Fabrics',");

content = content.replace("metric: '99%',", "metric: 'Scale',");
content = content.replace("metricLabel: 'Routing Accuracy',", "metricLabel: 'Supply Chains',");

// Update IndustriesData Stats
content = content.replace("stats: '€1.9B Infra Savings Delivered',", "stats: 'Secure Infrastructure Design',");
content = content.replace("stats: 'Zero-Trust AI Audited',", "stats: 'Data Pipeline Engineering',");
content = content.replace("stats: '99.9% Dispatch Accuracy',", "stats: 'Operational Integration',");
content = content.replace("stats: '3x Inventory Velocity',", "stats: 'Transaction Security',");
content = content.replace("stats: '11.4M Unified Patient Records',", "stats: 'HIPAA-Compliant Systems',");
content = content.replace("stats: '99.999% Operational Uptime',", "stats: 'Infrastructure as Code',");

// Update Services Array Buzzwords
content = content.replace("Next-gen web applications", "Custom web applications");
content = content.replace("high-throughput mobile backend APIs", "secure mobile backend APIs");
content = content.replace("customer 360° data integration", "unified customer data integration");
content = content.replace("Sovereign AI strategy, custom LLM fine-tuning, RAG data architectures, autonomous AI agents", "Data strategy, vector search architectures, machine learning models");

fs.writeFileSync('app/page.js', content);
console.log('Homepage data updated');
