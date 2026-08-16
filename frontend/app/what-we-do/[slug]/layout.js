import { SERVICES } from '@/lib/services-data';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function SubPageLayout({ children }) {
  return children;
}
