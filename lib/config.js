// Client configuration
export const clientConfig = {
  // Client name - can be overridden by environment variable
  name: process.env.NEXT_PUBLIC_CLIENT_NAME || 'VRTANS',

  // Short name (without "Technologies" or other suffixes)
  shortName: process.env.NEXT_PUBLIC_CLIENT_SHORT_NAME || 'VRTANS',

  // Website URL
  url: process.env.NEXT_PUBLIC_CLIENT_URL || 'https://VRTANS.tech',

  // Contact email
  contactEmail: process.env.NEXT_PUBLIC_CLIENT_CONTACT_EMAIL || 'contact@VRTANS.tech',

  // Social media handles
  social: {
    twitter: process.env.NEXT_PUBLIC_CLIENT_TWITTER || 'VRTANSTech',
    linkedin: process.env.NEXT_PUBLIC_CLIENT_LINKEDIN || 'company/VRTANS-technologies',
  }
};

// Helper function to replace text with client name
export function replaceClientText(text) {
  if (!text) return text;

  // Replace variations of the old client name
  return text
    .replace(/VRTANS/g, clientConfig.name)
    .replace(/VRTANS/g, clientConfig.name)
    .replace(/VRTANS/g, clientConfig.shortName)
    .replace(/VRTANS/g, clientConfig.shortName);
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