

import Link from 'next/link';
import { treatments, hospitals, specialties } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import * as LucideIcons from 'lucide-react';
import { Clock, Hospital as HospitalIcon, Stethoscope } from 'lucide-react';

// Helper to get Lucide icon component by name
const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    if (Icon) {
        return <Icon className="w-8 h-8 text-primary" />;
    }
    return <LucideIcons.HelpCircle className="w-8 h-8 text-primary" />; // Fallback icon
};


export default function ProceduresPage() {
  return (
    <div className="container py-8 md:py-12 animate-fade-in-up">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Treatment Packages</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse comprehensive, all-inclusive medical packages from our trusted hospital partners.
        </p>
      </header>
      
      <div className="mb-8 p-4 border rounded-lg bg-card">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Input placeholder="Search by treatment or specialty..." className="md:col-span-2" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map(spec => <SelectItem key={spec.name} value={spec.slug}>{spec.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline mb-4">
            Specialized Treatments
        </h2>
        <p className="mt-2 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            India is a global hub for advanced healthcare. Through MedTripz, you gain access to leading doctors and specialists across multiple fields.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {specialties.map((specialty, index) => (
              <Link href={`/procedures/${specialty.slug}`} key={specialty.name}>
                <Card className="group text-center p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.03}s` }}>
                  <div className="flex justify-center mb-3">
                    <div className="animate-pulse-and-glow">{getIcon(specialty.icon)}</div>
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">{specialty.name}</h3>
                  <div className="text-xs mt-2 space-x-2">
                      <span className="text-primary hover:underline">Top Hospitals</span>
                      <span className="text-primary hover:underline">Top Doctors</span>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline mb-4">
            Featured Treatment Packages
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {treatments.map((treatment, index) => {
            const hospital = hospitals.find(h => h.id === treatment.hospitalId);
            return (
                <Card key={treatment.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardHeader>
                    <div className="flex justify-between items-start">
                    <div>
                        <Badge variant="outline" className="mb-2">{treatment.category}</Badge>
                        <CardTitle className="text-xl">{treatment.name}</CardTitle>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                        <p className="text-2xl font-bold text-accent">${treatment.cost.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">package price</p>
                    </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                    <CardDescription className="flex-grow">{treatment.description}</CardDescription>
                    
                    <div className="mt-4 pt-4 border-t space-y-3 text-sm text-muted-foreground">
                    {hospital && (
                        <div className="flex items-center gap-2">
                        <div className="animate-pulse-and-glow"><HospitalIcon className="h-4 w-4" /></div>
                        <span>{hospital.name}, {hospital.city}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <div className="animate-pulse-and-glow"><Clock className="h-4 w-4" /></div>
                        <span>Approx. {treatment.duration} stay</span>
                    </div>
                    </div>
                    
                    <Button asChild className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                     <Link href={`/treatments?id=${treatment.id}`}>View Package</Link>
                    </Button>
                </CardContent>
                </Card>
            );
            })}
        </div>
      </div>
    </div>
  );
}
