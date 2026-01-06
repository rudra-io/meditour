import { Twitter, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
    'Top Procedures': [
        { href: '#', label: 'Cardiology' },
        { href: '#', label: 'Orthopedic & Joint Replacement' },
        { href: '#', label: 'Neurology' },
        { href: '#', label: 'Haemato Oncology & BMT' },
        { href: '#', label: 'Oncology' },
        { href: '#', label: 'Spine & Scoliosis Surgery' },
        { href: '#', label: 'Paediatric Cardiac Care' },
        { href: '#', label: 'Opthamology' },
        { href: '#', label: 'Urology & Kidney Transplant' },
    ],
    'Top Hospitals': [
        { href: '/hospitals', label: 'Cardiology' },
        { href: '/hospitals', label: 'Orthopedic & Joint Replacement' },
        { href: '/hospitals', label: 'Neurology' },
        { href: '/hospitals', label: 'Haemato Oncology & BMT' },
        { href: '/hospitals', label: 'Oncology' },
        { href: '/hospitals', label: 'Spine & Scoliosis Surgery' },
    ],
    'Top Doctors': [
        { href: '#', label: 'Cardiology' },
        { href: '#', label: 'Orthopedic & Joint Replacement' },
        { href: '#', label: 'Neurology' },
        { href: '#', label: 'Haemato Oncology & BMT' },
    ],
};


export function Footer() {
  return (
    <footer className="border-t bg-secondary/20">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="flex flex-col items-start space-y-4 md:col-span-2">
            <p className='text-muted-foreground'>We are a team of healthcare experts helping you find the right doctor, hospital, or treatment. Get trusted guidance and personalized support for your medical journey. Contact us to know more.</p>
            <p className='font-semibold'>Doctor Apartment, F-119, Shaheen Bagh, Jamia Nagar, Okhla, New Delhi, Delhi 110025</p>
            <p className='font-semibold'>Al Baghdadi, Heet District, Anbar Province, Iraq</p>
            <p><a href="mailto:info@medtripz.com" className="font-semibold text-primary hover:underline">info@medtripz.com</a></p>
            <p><a href="tel:+918076615942" className="font-semibold text-primary hover:underline">+91 8076615942</a></p>

            <div className="flex space-x-4 pt-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:col-span-3 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
                 <div key={title}>
                 <h3 className="font-semibold tracking-wider text-foreground">{title}</h3>
                 <ul className="mt-4 space-y-2">
                    {links.map(link => (
                        <li key={link.label}><Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">{link.label}</Link></li>
                    ))}
                    <li><Link href="#" className="text-sm text-primary hover:underline">View All</Link></li>
                 </ul>
               </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <div className='flex items-center gap-4'>
            <Link href='#' className='hover:text-foreground'>FAQs</Link>
            <Link href='#' className='hover:text-foreground'>Blogs</Link>
            <Link href='#' className='hover:text-foreground'>Privacy Policy</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} The Medical Travel Company. All rights reserved.</p>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">Note: This service is exclusively for international patients seeking treatment in India. We do not serve domestic patients.</p>
      </div>
    </footer>
  );
}