import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/site/theme-provider';
import { CartProvider } from '@/lib/cart-context';
import { siteMetadata, clientConfig } from '@/lib/config';

export const metadata = {
  metadataBase: new URL(clientConfig.url),
  ...siteMetadata,
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <CartProvider>
            {children}
            <Toaster position="bottom-right" closeButton />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
