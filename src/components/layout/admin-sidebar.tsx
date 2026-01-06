'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Home, Hospital, Stethoscope, Users, LogOut, HeartPulse } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const menuItems = [
  { href: '/admin', label: 'Dashboard', icon: Home },
  { href: '/admin/hospitals', label: 'Hospitals', icon: Hospital },
  { href: '/admin/treatments', label: 'Treatments', icon: Stethoscope },
  { href: '/admin/users', label: 'Users', icon: Users },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <HeartPulse className="w-6 h-6 text-primary" />
          <span className={cn('font-bold', state === 'collapsed' && 'hidden')}>
            MediTour Admin
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <AdminSidebarSeparator />
        <Link href="/">
          <SidebarMenuButton tooltip="Logout">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </SidebarMenuButton>
        </Link>
        <AdminSidebarSeparator />
        <div
          className={cn(
            'flex items-center gap-3 p-2',
            state === 'collapsed' && 'justify-center'
          )}
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://picsum.photos/seed/admin/100/100" alt="Admin" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className={cn(state === 'collapsed' && 'hidden')}>
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@meditour.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function AdminSidebarSeparator() {
  const { state } = useSidebar();
  if (state === 'collapsed') return <hr className="my-2 border-sidebar-border" />;
  return (
    <p className="w-full h-px my-2 bg-sidebar-border" />
  );
}
