import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Manage Users</h1>
      <Card className="flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
        <Users className="w-16 h-16 text-muted-foreground" />
        <h2 className="mt-4 text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-muted-foreground">The user management section is currently under construction.</p>
      </Card>
    </div>
  );
}
