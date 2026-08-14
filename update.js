const fs = require('fs');

let content = fs.readFileSync('app/page.js', 'utf8');

const replacements = {
  // Hero
  'Established Advisory Network · Enterprise Technology': 'TECHNOLOGY STRATEGY · ENGINEERING · AI',
  'Intelligence That Shapes': 'Technology That Moves',
  'Better Enterprise Decisions.': 'Your Business Forward.',
  'Connecting cloud modernization, applied AI, and zero-trust cybersecurity directly to audited revenue and latency outcomes. Built for demanding C-suite leaders where architectural precision is paramount.': 'VRTANS helps organizations turn complex technology challenges into practical, scalable solutions. We combine technology strategy, software engineering, cloud, data, AI, and cybersecurity to modernize the systems businesses depend on.',
  'Talk to senior partners': 'Start a Conversation',
  'Explore capabilities': 'Explore What We Do',

  // Work
  'Selected Audited Outcomes': 'OUR WORK',
  'Transformation Results We Are': 'Technology Built Around',
  'Measured Against': 'Real Business Problems.',

  // Capabilities
  'Transformation Capabilities': 'WHAT WE DO',
  'Nine Specialized Services.': 'One Technology Partner',
  'One Accountable Team.': 'Across the Transformation Journey.',

  // Firm Model (Section 5)
  'Why {clientConfig.name}': 'WHY TECHSENSI',
  'A Consulting Model': 'A More Focused Way',
  'Engineered for Results': 'To Work With Technology.',
  'Independent. Senior by design. Totally outcome accountable. We replace expensive, layered consultancy pyramids with high-density practitioner pods that ship real enterprise cloud architectures.': 'Technology transformation does not need unnecessary layers between the people making decisions and the people solving the technical problems. VRTANS brings strategy, engineering, and technology expertise together so clients can work with a team that understands both the business objective and the technical detail behind it.',
  'Meet the senior partners': 'Start a Conversation',
  
  // Industries
  'Vertical Domain Expertise': 'INDUSTRIES',
  'Industries We': 'Technology Expertise With',
  'Serve': 'Industry Context.',

  // Section 7 (Why Choose Us -> How We Work)
  'The {clientConfig.shortName} Advantage': 'OUR APPROACH',
  'Why Choose': 'Start With the Problem.',
  'Us': 'Build Toward the Outcome.',
  'We replaced traditional, bloated consultancy pyramids with agile practitioner pods delivering audited outcomes.': 'Every organization starts from a different place. We do not begin by prescribing a technology stack. We begin by understanding the business problem, the existing environment, and what success needs to look like.',

  // Section 9 (Contact)
  'About {clientConfig.name}': 'GET IN TOUCH',
  'Enterprise Technology': "Let's Talk About Your Next",
  'Advisory & Architecture': 'Technology Initiative.',
  '{clientConfig.name} is an independent enterprise technology consultancy providing software development, cloud modernization, applied AI solutions, and executive digital transformation. We replace bloated legacy consultancy pyramids with small, senior practitioner pods that deliver audited outcomes.': 'Share a little about your organization, the challenge you are facing, and what you are trying to achieve. Our team will review the opportunity and get back to you.',
  'Get in Touch with': "Let's Talk About Your Next",
  'Senior Partners': 'Technology Initiative.',
  'Direct partner response within 24 hours under mutual NDA.': 'Our team will review the opportunity and get back to you.',
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.replace(key, value);
}

// Work Array
content = content.replace(
  /const work = \[[\s\S]*?\];/,
  `const work = [
  {
    kicker: 'Financial Services',
    title: 'Modernizing Financial Technology',
    metric: '',
    metricLabel: 'Modernize complex financial systems with scalable architecture, stronger integration, better data flows, and technology foundations designed for changing regulatory and customer demands.',
    href: '/our-work',
  },
  {
    kicker: 'Insurance',
    title: 'Applying AI to Insurance Workflows',
    metric: '',
    metricLabel: 'Use AI and intelligent automation to reduce repetitive work, improve information processing, and give underwriting and claims teams better tools for decision-making.',
    href: '/our-work',
  },
  {
    kicker: 'Healthcare',
    title: 'Connecting Critical Healthcare Data',
    metric: '',
    metricLabel: 'Build secure data foundations that allow healthcare organizations to connect information across systems while improving accessibility, interoperability, and operational visibility.',
    href: '/our-work',
  },
  {
    kicker: 'Logistics',
    title: 'Making Operations More Intelligent',
    metric: '',
    metricLabel: 'Combine operational data, connected systems, analytics, and AI to improve planning, routing, visibility, and day-to-day supply chain decisions.',
    href: '/our-work',
  },
];`
);

// Why Choose Us Array (Section 7)
content = content.replace(
  /const whyChooseUsData = \[[\s\S]*?\];/,
  `const whyChooseUsData = [
  {
    icon: Users,
    title: 'Understand',
    desc: 'We clarify the business objective, technical environment, constraints, and priorities.',
    highlight: 'Phase 01',
  },
  {
    icon: Lock,
    title: 'Architect',
    desc: 'We define the right solution architecture, technology direction, delivery approach, and priorities.',
    highlight: 'Phase 02',
  },
  {
    icon: Target,
    title: 'Build',
    desc: 'We turn the strategy into working software, infrastructure, integrations, data systems, and AI capabilities.',
    highlight: 'Phase 03',
  },
  {
    icon: ShieldCheck,
    title: 'Improve',
    desc: 'We measure what is working, identify what needs to change, and continuously improve the solution.',
    highlight: 'Phase 04',
  },
];`
);

// Section 5 Cards
content = content.replace(
  /{ t: 'Senior Practitioners Only', d: 'Every program is directed and staffed by partners who personally architect at scale\. Zero junior training ground pass-throughs\.' }/g,
  `{ t: 'Senior-Level Thinking', d: 'We approach complex technology problems with architectural depth and business context.' }`
);
content = content.replace(
  /{ t: 'Fiercely Independent Counsel', d: 'We remain 100% vendor agnostic\. Our structural guidance optimizes solely for corporate resilience and cost efficiency\.' }/g,
  `{ t: 'Technology Independent', d: 'Our recommendations are driven by the problem to be solved rather than a predetermined vendor or platform.' }`
);
content = content.replace(
  /{ t: 'Audited Outcome Accountable', d: 'Our delivery milestones and governance cadences are explicitly bound to the audited technical and financial outcomes we agree upon\.' }/g,
  `{ t: 'Engineering Mindset', d: 'We focus on solutions that can be implemented, operated, maintained, and improved in the real world.' }`
);
content = content.replace(
  /{ t: 'From Boardroom to Production', d: 'One cohesive team taking full ownership through architectural advisory, systems engineering, compliance sign-off, and production scale\.' }/g,
  `{ t: 'One Connected Team', d: 'Strategy, architecture, engineering, data, cloud, and AI can work together instead of becoming disconnected workstreams.' }`
);

// Section 7 Metrics
content = content.replace(/>€1\.9B\+</g, ">1<");
content = content.replace(/>Infra Savings</g, ">Connected Team<");
content = content.replace(/>100%</g, ">9<");
content = content.replace(/>Vendor Agnostic</g, ">Specialized Services<");
content = content.replace(/>24-Hr</g, ">6<");
content = content.replace(/>Partner SLA</g, ">Core Industries<");
content = content.replace(/>0</g, ">100%<");
content = content.replace(/>Junior Pass-Throughs</g, ">Technology Focused<");

fs.writeFileSync('app/page.js', content);
console.log('Replacements complete');
