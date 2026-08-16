import { INDUSTRIES } from '@/lib/industries-data';

export async function generateStaticParams() {
  return Object.values(INDUSTRIES).map((industry) => ({
    slug: industry.slug,
  }));
}

export default function SubPageLayout({ children }) {
  return children;
}
