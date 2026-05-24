import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <Link
      href='https://wa.me/923155365552?text=Hi%20Hum%20Edge%20Solutions%2C%20I%20want%20to%20discuss%20my%20project.'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat on WhatsApp'
      className='fixed bottom-6 right-6 z-[90] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,.45)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80'
    >
      <MessageCircle className='h-7 w-7' />
    </Link>
  );
}
