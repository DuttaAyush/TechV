// Client configuration
export const clientConfig = {
  // Client name - can be overridden by environment variable
  name: process.env.NEXT_PUBLIC_CLIENT_NAME || 'TechSensi Technologies',

  // Short name (without "Technologies" or other suffixes)
  shortName: process.env.NEXT_PUBLIC_CLIENT_SHORT_NAME || 'TechSensi',

  // Website URL
  url: process.env.NEXT_PUBLIC_CLIENT_URL || 'https://SensiTech.tech',

  // Contact email
  contactEmail: process.env.NEXT_PUBLIC_CLIENT_CONTACT_EMAIL || 'contact@SensiTech.tech',

  // Social media handles
  social: {
    twitter: process.env.NEXT_PUBLIC_CLIENT_TWITTER || 'TechSensiTech',
    linkedin: process.env.NEXT_PUBLIC_CLIENT_LINKEDIN || 'company/TechSensi-technologies',
  }
};

// Helper function to replace text with client name
export function replaceClientText(text) {
  if (!text) return text;

  // Replace variations of the old client name
  return text
    .replace(/TechSensi Technologies/g, clientConfig.name)
    .replace(/TechSensi Technologies/g, clientConfig.name)
    .replace(/TechSensi/g, clientConfig.shortName)
    .replace(/TechSensi/g, clientConfig.shortName);
}

// Metadata configuration
export const siteMetadata = {
  title: {
    default: `${clientConfig.name} — Enterprise Technology Consulting`,
    template: `%s · ${clientConfig.name}`,
  },
  description: `${clientConfig.name} partners with global enterprises on cloud modernization, AI adoption, cybersecurity, and digital transformation. Strategy through execution.`,
  keywords: [
    'enterprise technology consulting',
    'digital transformation',
    'cloud modernization',
    'AI adoption',
    'cybersecurity',
    clientConfig.name,
  ],
  openGraph: {
    title: `${clientConfig.name} — Enterprise Technology Consulting`,
    description: 'Strategy through execution for the world\'s most demanding enterprises.',
    type: 'website',
    locale: 'en_US',
    url: clientConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: clientConfig.name,
    description: 'Enterprise technology consulting. Cloud, AI, cybersecurity, transformation.',
  },
};