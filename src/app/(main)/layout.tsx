
'use client';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className={cn('flex-1', !isHome && 'pt-20')}>{children}</main>
      <Footer />
    </div>
  );
}
