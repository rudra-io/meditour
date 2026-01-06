'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Jan', bookings: 30 },
  { name: 'Feb', bookings: 45 },
  { name: 'Mar', bookings: 60 },
  { name: 'Apr', bookings: 55 },
  { name: 'May', bookings: 75 },
  { name: 'Jun', bookings: 90 },
];

export function AdminChart() {
    return (
        <Card>
          <CardHeader>
            <CardTitle>Appointment Bookings Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="bookings" fill="hsl(var(--primary))" name="Bookings" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
    )
}
