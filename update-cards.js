const fs = require('fs');
let content = fs.readFileSync('app/page.js', 'utf8');

// Replace section heading
content = content.replace('OUR WORK\n              </span>', 'OUR SOLUTIONS\n              </span>');
content = content.replace('View Audited Case Studies', 'View Our Solutions');
content = content.replace('<Link href="/our-work"', '<Link href="/our-solutions"');

// Rebuild the work array
content = content.replace(
  /const work = \[[\s\S]*?\];/,
  `const work = [
  {
    kicker: 'Financial Services',
    title: 'Modernize complex financial systems with scalable architecture, stronger integration, better data flows, and technology foundations designed for changing regulatory and customer demands.',
    metric: '45%',
    metricLabel: 'Faster Integration',
    href: '/our-solutions',
  },
  {
    kicker: 'Insurance',
    title: 'Use AI and intelligent automation to reduce repetitive work, improve information processing, and give underwriting and claims teams better tools for decision-making.',
    metric: '30%',
    metricLabel: 'Efficiency Gain',
    href: '/our-solutions',
  },
  {
    kicker: 'Healthcare',
    title: 'Build secure data foundations that allow healthcare organizations to connect information across systems while improving accessibility, interoperability, and operational visibility.',
    metric: '2.4x',
    metricLabel: 'Faster Data Access',
    href: '/our-solutions',
  },
  {
    kicker: 'Logistics',
    title: 'Combine operational data, connected systems, analytics, and AI to improve planning, routing, visibility, and day-to-day supply chain decisions.',
    metric: '99%',
    metricLabel: 'Routing Accuracy',
    href: '/our-solutions',
  },
];`
);

fs.writeFileSync('app/page.js', content);
console.log('Update complete');
