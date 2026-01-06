import { RecommendationForm } from './recommendation-form';
import { BrainCircuit } from 'lucide-react';

export default function RecommendationsPage() {
  return (
    <div className="container py-8 md:py-12">
      <header className="mb-8 md:mb-12 text-center">
        <div className="inline-block rounded-full bg-primary/10 p-4">
            <BrainCircuit className="h-10 w-10 text-primary" />
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight font-headline">AI-Powered Recommendations</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Let our intelligent assistant guide you to the best hospitals and treatments based on your unique needs.
        </p>
      </header>

      <RecommendationForm />
    </div>
  );
}
