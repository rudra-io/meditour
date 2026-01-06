import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function PatientStoriesPage() {
  return (
    <div className="container py-8 md:py-12 animate-fade-in-up">
       <header className="mb-8 md:mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Patient Stories</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Read about the experiences of patients we have helped.
        </p>
      </header>
      <Card className="flex flex-col items-center justify-center text-center p-12 min-h-[400px]">
        <Quote className="w-16 h-16 text-muted-foreground" />
        <h2 className="mt-4 text-xl font-semibold">Coming Soon</h2>
        <p className="mt-2 text-muted-foreground">The patient stories section is currently under construction.</p>
      </Card>
    </div>
  );
}
