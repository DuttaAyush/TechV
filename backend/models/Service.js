const { connectToDatabase } = require('../lib/db');
const { ObjectId } = require('mongodb');

async function getAllServices() {
  const { db } = await connectToDatabase();
  return await db.collection('services').find({}).toArray();
}

async function createService(serviceData) {
  const { db } = await connectToDatabase();
  const service = { ...serviceData, createdAt: new Date() };
  const result = await db.collection('services').insertOne(service);
  return { _id: result.insertedId, ...service };
}

async function deleteService(id) {
  const { db } = await connectToDatabase();
  const result = await db.collection('services').deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}

async function updateService(id, serviceData) {
  const { db } = await connectToDatabase();
  const { ObjectId } = require('mongodb');
  const { _id, ...cleanData } = serviceData;
  const result = await db.collection('services').updateOne(
    { _id: new ObjectId(id) },
    { $set: cleanData }
  );
  return result.modifiedCount > 0;
}

// Ensure at least some default services exist
async function seedDefaultServices() {
  const { db } = await connectToDatabase();
  const count = await db.collection('services').countDocuments();
  if (count === 0) {
    const defaultServices = [
      {
        icon: 'Globe',
        title: 'Web Dev',
        fullTitle: 'Web Development & Digital Platforms',
        body: 'Custom web applications, corporate digital portals, high-performance frontend architectures, and responsive web platforms.',
        tags: ['Next.js & React', 'High-Perf Frontend', 'Jamstack'],
        tagColor: 'text-[#92400e] bg-[#fffbeb] border-[#fde68a]',
        href: '/what-we-do/web-dev',
        image: '/images/landing-page/landing-2.jpg',
        price: '3499'
      },
      {
        icon: 'Smartphone',
        title: 'App Dev',
        fullTitle: 'Mobile & Web App Development',
        body: 'Native iOS & Android apps, cross-platform mobile solutions, progressive web apps (PWAs), and secure mobile backend APIs.',
        tags: ['iOS & Android Native', 'PWAs & Flutter', 'Mobile APIs'],
        tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
        href: '/what-we-do/app-dev',
        image: '/images/landing-page/landing-3.jpg',
        price: '4999'
      },
      {
        icon: 'Code',
        title: 'Software Dev',
        fullTitle: 'Custom Software Engineering',
        body: 'Bespoke enterprise software, microservices API architectures, legacy refactoring, and cloud-native solutions.',
        tags: ['Enterprise Code', 'Microservices APIs', 'Legacy Refactoring'],
        tagColor: 'text-[#1e40af] bg-[#eff6ff] border-[#bfdbfe]',
        href: '/what-we-do/software-dev',
        image: '/images/landing-page/landing-4.jpg',
        price: '6499'
      },
      {
        icon: 'TrendingUp',
        title: 'Digital Marketing',
        fullTitle: 'Digital Marketing & Growth',
        body: 'Data-driven performance marketing, technical SEO, conversion rate optimization (CRO), and enterprise growth funnels.',
        tags: ['Technical SEO', 'Performance PPC', 'Conversion Funnels'],
        tagColor: 'text-[#92400e] bg-[#fffbeb] border-[#fde68a]',
        href: '/what-we-do/digital-marketing',
        image: '/images/landing-page/landing-5.jpg',
        price: '2499'
      },
      {
        icon: 'Users',
        title: 'CRM Dev',
        fullTitle: 'CRM Systems Development',
        body: 'Custom Salesforce, HubSpot & proprietary CRM architecture, automated lead routing, and customer 360° data integration.',
        tags: ['Salesforce & HubSpot', 'Automated Lead Routing', 'Customer 360°'],
        tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
        href: '/what-we-do/crm-dev',
        image: '/images/landing-page/landing-6.jpg',
        price: '5999'
      },
      {
        icon: 'Briefcase',
        title: 'ERP Sol',
        fullTitle: 'ERP Enterprise Solutions',
        body: 'SAP, Oracle & custom ERP implementations, supply chain automation, inventory management, and financial orchestration.',
        tags: ['SAP & Oracle ERP', 'Supply Chain Automation', 'Financial Workflows'],
        tagColor: 'text-[#1e40af] bg-[#eff6ff] border-[#bfdbfe]',
        href: '/what-we-do/erp-sol',
        image: '/images/landing-page/landing-7.jpg',
        price: '8999'
      },
      {
        icon: 'MonitorCheck',
        title: 'IT Consulting',
        fullTitle: 'Enterprise IT Strategy',
        body: 'Strategic IT roadmap advisory, cloud infrastructure auditing, DevOps platform engineering, and executive CTO advisory.',
        tags: ['CIO Advisory', 'Infrastructure Audit', 'DevOps Governance'],
        tagColor: 'text-[#92400e] bg-[#fffbeb] border-[#fde68a]',
        href: '/what-we-do/it-consulting',
        image: '/images/landing-page/landing-8.jpg',
        price: '4499'
      },
      {
        icon: 'LineChart',
        title: 'Business Consulting',
        fullTitle: 'Business Transformation',
        body: 'Operating model redesign, process automation, digital strategy, post-merger integration, and ROI optimization.',
        tags: ['Operating Model TOM', 'Process Automation', 'Digital Strategy'],
        tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
        href: '/what-we-do/business-consulting',
        image: '/images/landing-page/landing-9.jpg',
        price: '5499'
      },
      {
        icon: 'Cpu',
        title: 'AI Consulting',
        fullTitle: 'Applied AI & LLM Advisory',
        body: 'Data strategy, vector search architectures, machine learning models, and compliance guardrails.',
        tags: ['LLMs & Sovereign RAG', 'Autonomous Agents', 'AI Governance'],
        tagColor: 'text-[#1e40af] bg-[#eff6ff] border-[#bfdbfe]',
        href: '/what-we-do/ai-consulting',
        image: '/images/landing-page/landing-10.jpg',
        price: '7999'
      }
    ];
    await db.collection('services').insertMany(defaultServices);
  }
}

module.exports = { getAllServices, createService, deleteService, updateService, seedDefaultServices };
