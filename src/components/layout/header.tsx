
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComponentProps, SVGProps } from 'react';
import { useState, useEffect } from 'react';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/hospitals', label: 'Hospitals' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/procedures', label: 'Procedures' },
  { href: '/patient-stories', label: 'Patient Stories' },
  { href: '/about', label: 'About Us' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact Us' },
];

function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="80" 
      height="24" 
      viewBox="0 0 80 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text 
        x="0" 
        y="18" 
        fontFamily="sans-serif" 
        fontSize="20" 
        fontWeight="bold" 
        fill="currentColor"
      >
        medico
      </text>
    </svg>
  );
}

export function Header() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled past the hero section (which is 100vh)
            const isScrolled = window.scrollY > window.innerHeight;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        if (isHome) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }

        // Run on mount to set initial state
        handleScroll();

        return () => {
            if (isHome) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isHome, scrolled]);

    const headerClasses = cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        isHome 
            ? scrolled 
                ? "bg-primary" // Solid green background when scrolled on home
                : "bg-transparent"
            : "relative bg-primary/10 backdrop-blur-sm border-b" // Light green on other pages
    );

    const navLinkIsHomeAndTop = isHome && !scrolled;
  
    return (
      <header className={headerClasses}>
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className={cn("flex items-center space-x-2", navLinkIsHomeAndTop ? "text-white" : scrolled ? "text-primary-foreground" : "text-primary")}>
              <Logo />
              <div className={cn("border-l h-8 ml-2 mr-4", navLinkIsHomeAndTop || scrolled ? "border-white/50" : "border-foreground/30")}></div>
              <div className="flex flex-col text-xs font-semibold tracking-wider leading-tight">
                <span>THE MEDICAL</span>
                <span>TRAVEL COMPANY</span>
              </div>
            </Link>
          </div>
  
          <nav className="hidden lg:flex items-center gap-6 text-base">
              {mainNavLinks.map((link) => (
                  <NavLink
                      key={link.label}
                      href={link.href}
                      isHomeAndTop={navLinkIsHomeAndTop}
                      isScrolled={scrolled}
                  >
                      {link.label}
                  </NavLink>
              ))}
          </nav>
  
          <div className="flex items-center gap-4">
            <Button asChild className='bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105 rounded-full'>
              <Link href="/booking">Get a Free Quote</Link>
            </Button>
            <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn(navLinkIsHomeAndTop || scrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-foreground/60 hover:text-foreground')}>
                      <Menu className="h-7 w-7" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                      <div className="p-4 mt-8">
                          <nav className="grid gap-6 text-xl font-medium">
                              {mainNavLinks.map((link) => (
                              <NavLink
                                  key={link.label}
                                  href={link.href}
                                  className="text-muted-foreground hover:text-foreground"
                                  isHomeAndTop={false}
                                  isScrolled={false}
                              >
                                  {link.label}
                              </NavLink>
                              ))}
                          </nav>
                      </div>
                  </SheetContent>
                </Sheet>
              </div>
          </div>
        </div>
      </header>
    );
  }

function NavLink({ className, children, isHomeAndTop, isScrolled, ...props }: ComponentProps<typeof Link> & { isHomeAndTop: boolean; isScrolled: boolean }) {
    const pathname = usePathname();
    const isActive = pathname === props.href;
  
    return (
      <Link
        {...props}
        className={cn(
          'transition-colors font-medium',
          isHomeAndTop 
            ? (isActive ? 'text-white' : 'text-white/80 hover:text-white') // Top of home
            : isScrolled
              ? (isActive ? 'text-white font-bold' : 'text-primary-foreground/80 hover:text-primary-foreground') // Scrolled on home
              : (isActive ? 'text-primary' : 'text-foreground/60 hover:text-foreground'), // Other pages
          className
        )}
      >
          {children}
      </Link>
    );
  }
