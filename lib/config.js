// Client configuration
export const clientConfig = {
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

// Metadata configuration
export const siteMetadata = {
  title: {
    default: 'VRTANS — Enterprise Technology Consulting',
    template: '%s · VRTANS',
  },
  description: 'VRTANS partners with global enterprises on cloud modernization, AI adoption, cybersecurity, and digital transformation. Strategy through execution.',
  keywords: [
    'enterprise technology consulting',
    'digital transformation',
    'cloud modernization',
    'AI adoption',
    'cybersecurity',
    'VRTANS',
  ],
  openGraph: {
    title: 'VRTANS — Enterprise Technology Consulting',
    description: 'Strategy through execution for the world\'s most demanding enterprises.',
    type: 'website',
    locale: 'en_US',
    url: clientConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VRTANS',
    description: 'Enterprise technology consulting. Cloud, AI, cybersecurity, transformation.',
  },
};