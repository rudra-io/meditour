import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function AdminTreatmentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Manage Treatments</h1>
      <Card className="flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
        <Stethoscope className="w-16 h-16 text-muted-foreground" />
        <h2 className="mt-4 text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-muted-foreground">The treatment management section is currently under construction.</p>
      </Card>
    </div>
  );
}
