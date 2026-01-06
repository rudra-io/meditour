'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hospital, Stethoscope, Users, CalendarCheck } from 'lucide-react';
import { AdminChart } from './admin-chart';

const summaryData = [
  { title: 'Total Hospitals', value: '12', icon: <Hospital className="h-6 w-6 text-muted-foreground" /> },
  { title: 'Total Treatments', value: '45', icon: <Stethoscope className="h-6 w-6 text-muted-foreground" /> },
  { title: 'Registered Users', value: '1,284', icon: <Users className="h-6 w-6 text-muted-foreground" /> },
  { title: 'Appointments Booked', value: '312', icon: <CalendarCheck className="h-6 w-6 text-muted-foreground" /> },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryData.map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No recent activity to display.</p>
          </CardContent>
        </Card>
        <AdminChart />
      </div>
    </div>
  );
}
