import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'sonner';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import { COMPANY } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: `${COMPANY.name} | ${COMPANY.tagline}`,
  description: 'Enterprise technology solutions for secure growth, resilient operations, and measurable business outcomes.',
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: 'Consulting, cybersecurity, cloud, data center, and managed services for mission-critical organizations.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: COMPANY.location,
  };

  return <html lang='en'><body className={`${inter.variable} ${space.variable} bg-[#080b14] text-[#f0f4ff]`}><script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} /><Navbar /> <main className='pt-20'>{children}</main><Footer /><WhatsAppFloat /><Toaster theme='dark'/></body></html>;
}

