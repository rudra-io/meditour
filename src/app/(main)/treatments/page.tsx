
'use client';
import { useSearchParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { getTreatmentById, getHospitalByTreatmentId } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Package, Stethoscope, Bed, Plane, Clock } from 'lucide-react';


export default function TreatmentPage() {
    const searchParams = useSearchParams();
    const treatmentId = searchParams.get('id');

    if (!treatmentId) {
        notFound();
    }
  
    const treatment = getTreatmentById(treatmentId);
    if (!treatment) {
        notFound();
    }

    const hospital = getHospitalByTreatmentId(treatmentId);


  return (
    <div className="bg-secondary/50 animate-fade-in-up">
        <div className="container py-8 md:py-12">
            {/* Header */}
            <div className="mb-8">
                <Badge variant="secondary" className="mb-2 text-base">{treatment.category}</Badge>
                <h1 className="text-4xl font-bold tracking-tight font-headline">{treatment.name}</h1>
                {hospital && (
                    <Link href={`/hospitals/${hospital.id}`} className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary mt-2">
                        at {hospital.name}, {hospital.city}
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* Procedure Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Stethoscope className="text-primary"/> The Procedure</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{treatment.details.procedure}</p>
                        </CardContent>
                    </Card>

                     {/* Recovery Details */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Bed className="text-primary"/> Recovery and Aftercare</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{treatment.details.recovery}</p>
                        </CardContent>
                    </Card>

                    {/* Package Inclusions / Exclusions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Package className="text-primary"/> Package Details</CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold mb-4 text-green-600">What's Included</h4>
                                <ul className="space-y-3">
                                    {treatment.details.inclusions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div>
                                <h4 className="font-semibold mb-4 text-destructive">What's Not Included</h4>
                                <ul className="space-y-3">
                                    {treatment.details.exclusions.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-1">
                    <Card className="sticky top-24">
                        {hospital && (
                            <Image 
                                src={hospital.imageUrl}
                                alt={hospital.name}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                                data-ai-hint="hospital building"
                            />
                        )}
                        <CardHeader>
                            <div className="flex justify-between items-baseline">
                                <div>
                                    <p className="text-sm text-muted-foreground">Starting from</p>
                                    <p className="text-4xl font-bold text-accent">${treatment.cost.toLocaleString()}</p>
                                </div>
                                <div>
                                     <p className="text-sm text-muted-foreground">Duration</p>
                                     <p className="text-xl font-semibold text-right">{treatment.duration}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href="/booking">Request this Package</Link>
                            </Button>
                            <Button variant="outline" className="w-full mt-2">
                                <Link href="/contact">Ask a Question</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}
