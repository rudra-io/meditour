
'use client';
import { notFound } from 'next/navigation';
import { specialties, treatments, doctors, hospitals } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import { BriefcaseMedical, Hospital as HospitalIcon, Clock, CheckCircle, ShieldCheck, Tag, HeartHandshake, Download, Hourglass, Stethoscope } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React, { useState } from 'react';
import type { Doctor } from '@/lib/types';
import { DoctorPopup } from '@/components/doctor-popup';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

// Helper to get Lucide icon component by name
const getIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    if (Icon) {
        return <Icon className="w-8 h-8 text-primary" />;
    }
    return <LucideIcons.HelpCircle className="w-8 h-8 text-primary" />; // Fallback icon
};

const whyMedicoFeatures = [
    { icon: Clock, title: "No waiting lists", description: "Get immediate access to top specialists without the long delays common in other countries." },
    { icon: Tag, title: "Save up to 50%", description: "Receive world-class medical care at a fraction of the cost compared to the UK or US." },
    { icon: ShieldCheck, title: "Insurance cover", description: "We assist with international insurance claims and documentation for a hassle-free process." },
    { icon: HospitalIcon, title: "Internationally accredited & vetted", description: "Our network includes only the best hospitals that meet global standards of excellence." },
    { icon: HeartHandshake, title: "All inclusive aftercare", description: "We provide comprehensive post-treatment support, including follow-ups and recovery assistance." },
]


export default function SpecialtyPage({ params }: { params: { slug: string } }) {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const heroRef = useScrollAnimation<HTMLElement>();
  const whyMedicoRef = useScrollAnimation<HTMLElement>();
  const whoNeedsItRef = useScrollAnimation<HTMLElement>();
  const whatToExpectRef = useScrollAnimation<HTMLElement>();
  const treatmentsRef = useScrollAnimation<HTMLElement>();
  const doctorsRef = useScrollAnimation<HTMLElement>();
  const hospitalsRef = useScrollAnimation<HTMLElement>();
  const faqsRef = useScrollAnimation<HTMLElement>();


  const specialty = specialties.find((s) => s.slug === params.slug);

  if (!specialty) {
    notFound();
  }

  const specialtyTreatments = treatments.filter((t) => t.category === specialty.name);
  const specialtyDoctors = doctors.filter((d) => d.specialization === specialty.name || d.specialization.includes(specialty.name));
  const specialtyHospitals = hospitals.filter(h => h.specializations.includes(specialty.name));
  
  const heroImage = PlaceHolderImages.find(p => p.imageHint === specialty.imageHint);
  const whoNeedsItImage = PlaceHolderImages.find(p => p.imageHint === specialty.whoNeedsItImageHint);
  const whyMedicoImage = PlaceHolderImages.find(p => p.id === 'why-medico');


  return (
    <div className="fade-in">
        {/* Hero Section */}
        <section ref={heroRef} className="bg-secondary/30 py-16 anim-section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="">
                        <h1 className="text-4xl font-bold tracking-tight font-headline">{specialty.name}</h1>
                        <p className="mt-4 text-lg text-muted-foreground">{specialty.description}</p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href="/booking">Book a Free Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline">
                                Chat with Expert
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-[5/4] rounded-lg overflow-hidden shadow-lg">
                        {heroImage && (
                            <Image 
                                src={heroImage.imageUrl} 
                                alt={specialty.name} 
                                fill
                                className="object-cover"
                                data-ai-hint={heroImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>

        {/* Why Medico Section */}
        <section ref={whyMedicoRef} className="py-16 sm:py-24 anim-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                        Why Choose Medico for {specialty.name}?
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="grid grid-cols-1 gap-6">
                        {whyMedicoFeatures.map((feature, index) => (
                            <Card key={feature.title} className="flex items-center p-4 bg-secondary/20 border-none shadow-sm">
                                <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mr-4">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="font-bold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                     <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                        {whyMedicoImage && (
                            <Image 
                                src={whyMedicoImage.imageUrl} 
                                alt="Why Choose Medico"
                                fill
                                className="object-cover"
                                data-ai-hint={whyMedicoImage.imageHint}
                            />
                        )}
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Button size="lg" variant="outline">
                        <Download className="mr-2" /> Download Our Brochure
                    </Button>
                </div>
            </div>
        </section>

        {/* Who Needs It Section */}
        <section ref={whoNeedsItRef} className="py-16 sm:py-24 bg-secondary/30 anim-section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="relative aspect-[5/4] rounded-lg overflow-hidden shadow-lg">
                        {whoNeedsItImage && (
                            <Image 
                                src={whoNeedsItImage.imageUrl} 
                                alt={`Who needs ${specialty.name}`}
                                fill
                                className="object-cover"
                                data-ai-hint={whoNeedsItImage.imageHint}
                            />
                        )}
                    </div>
                     <div className="" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                            Who Needs {specialty.name}?
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">{specialty.whoNeedsIt}</p>
                        <ul className="mt-6 space-y-3">
                            {specialty.conditions.map(condition => (
                                <li key={condition} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                                    <span>{condition}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* What to Expect Section */}
        {specialty.whatToExpect.before.length > 0 && (
        <section ref={whatToExpectRef} className="py-16 sm:py-24 anim-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                        What to Expect: Before, During & After Surgery
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-6 bg-secondary/20 border-none">
                        <CardHeader className="text-center">
                            <Hourglass className="mx-auto w-10 h-10 text-primary mb-4" />
                            <CardTitle>Before Surgery</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {specialty.whatToExpect.before.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="p-6 bg-secondary/20 border-none">
                        <CardHeader className="text-center">
                            <Stethoscope className="mx-auto w-10 h-10 text-primary mb-4" />
                            <CardTitle>During Surgery</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {specialty.whatToExpect.during.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="p-6 bg-secondary/20 border-none">
                        <CardHeader className="text-center">
                            <HeartHandshake className="mx-auto w-10 h-10 text-primary mb-4" />
                            <CardTitle>After Surgery</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {specialty.whatToExpect.after.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        )}


        {/* Featured Treatments */}
        <section ref={treatmentsRef} className="py-16 sm:py-24 bg-secondary/30 anim-section">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight font-headline mb-8 text-center">
                Treatments in {specialty.name}
                </h2>
                {specialtyTreatments.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {specialtyTreatments.map((treatment) => {
                    const hospital = hospitals.find(h => h.id === treatment.hospitalId);
                    return (
                        <Card key={treatment.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
                        <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2">
                                <BriefcaseMedical className="h-5 w-5 text-primary"/>{treatment.name}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">{treatment.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                            <div className="flex justify-between items-center bg-background/80 p-4 rounded-md">
                                <div>
                                    <p className="text-xs text-muted-foreground">Starting from</p>
                                    <p className="text-2xl font-bold text-accent">${treatment.cost.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground text-right">Duration</p>
                                    <p className="text-lg font-semibold text-right">{treatment.duration}</p>
                                </div>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t space-y-3 text-sm text-muted-foreground">
                            {hospital && (
                                <div className="flex items-center gap-2">
                                    <HospitalIcon className="h-4 w-4" />
                                    <span>{hospital.name}, {hospital.city}</span>
                                </div>
                            )}
                            </div>
                            
                            <Button asChild className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                                <Link href={`/treatments?id=${treatment.id}`}>View Package</Link>
                            </Button>

                        </CardContent>
                        </Card>
                    );
                    })}
                </div>
                ) : (
                <p className="text-center text-muted-foreground">No specific treatment packages found for this specialty yet.</p>
                )}
            </div>
        </section>

        {/* Top Doctors */}
        <section ref={doctorsRef} className="py-16 sm:py-24 anim-section">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight font-headline mb-8 text-center">
                Top Doctors for {specialty.name}
                </h2>
                {specialtyDoctors.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {specialtyDoctors.map((doctor) => (
                    <Card key={doctor.id} className="overflow-hidden text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-lg cursor-pointer" onClick={() => setSelectedDoctor(doctor)}>
                        <div className="bg-muted p-4">
                        <Image
                            src={doctor.imageUrl}
                            alt={`Dr. ${doctor.name}`}
                            width={200}
                            height={200}
                            className="rounded-full object-cover aspect-square mx-auto border-4 border-white shadow-lg"
                            data-ai-hint="doctor portrait"
                        />
                        </div>
                        <div className="p-6">
                        <h3 className="text-xl font-bold">{doctor.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{doctor.hospital}, {doctor.location}</p>
                        </div>
                    </Card>
                    ))}
                </div>
                ) : (
                <p className="text-center text-muted-foreground">No featured doctors for this specialty yet.</p>
                )}
                <div className="text-center mt-8">
                    <Button asChild>
                        <Link href="/doctors">View All Doctors</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Top Hospitals */}
        <section ref={hospitalsRef} className="py-16 sm:py-24 bg-secondary/30 anim-section">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tight font-headline mb-8 text-center">
                Top Hospitals for {specialty.name}
                </h2>
                {specialtyHospitals.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {specialtyHospitals.map((hospital) => (
                        <Card key={hospital.id} className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="relative">
                                <Image
                                    src={hospital.imageUrl}
                                    alt={hospital.name}
                                    width={600}
                                    height={400}
                                    className="h-56 w-full object-cover"
                                    data-ai-hint="hospital building"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl">{hospital.name}</CardTitle>
                                <CardDescription className="flex items-center gap-2 pt-1">
                                    {hospital.city}, {hospital.country}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {hospital.specializations.slice(0, 3).map((spec) => (
                                    <Badge key={spec} variant="secondary">{spec}</Badge>
                                    ))}
                                </div>
                                <Button asChild className="w-full mt-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                                    <Link href={`/hospitals/${hospital.id}`}>View Details</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                ) : (
                <p className="text-center text-muted-foreground">No featured hospitals for this specialty yet.</p>
                )}
                <div className="text-center mt-8">
                    <Button asChild>
                        <Link href="/hospitals">View All Hospitals</Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* FAQs Section */}
        {specialty.faqs.length > 0 && (
            <section ref={faqsRef} className="py-16 sm:py-24 anim-section">
                <div className="container max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {specialty.faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        )}

        {selectedDoctor && (
            <DoctorPopup 
                doctor={selectedDoctor} 
                open={!!selectedDoctor} 
                onOpenChange={(isOpen) => {
                    if(!isOpen) {
                        setSelectedDoctor(null);
                    }
                }}
            />
      )}
    </div>
  );
}
