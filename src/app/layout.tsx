import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { Lora, Source_Sans_3 } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-headline',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'The Medical Travel Company',
  description: 'World-class healthcare without the wait',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-body antialiased", lora.variable, sourceSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
