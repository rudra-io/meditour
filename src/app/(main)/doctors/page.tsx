
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { doctors } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { DoctorPopup } from '@/components/doctor-popup';
import type { Doctor } from '@/lib/types';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function DoctorsPage() {
  const doctorsHeroImage = PlaceHolderImages.find(img => img.id === 'doctors-hero');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  
  const heroRef = useScrollAnimation<HTMLElement>();
  const formRef = useScrollAnimation<HTMLDivElement>();
  const listRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[50vh] w-full flex items-center justify-center text-center text-white anim-section">
        {doctorsHeroImage && (
          <Image
            src={doctorsHeroImage.imageUrl}
            alt="Doctors India"
            fill
            className="object-cover"
            data-ai-hint={doctorsHeroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 container flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl font-headline">
            Doctors India
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Connect with top doctors through our expert consultations and tailored treatment plans. We also manage travel arrangements for a seamless healthcare experience.
          </p>
          <div className="mt-8 w-full max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search hospitals, doctors, specialities"
                className="w-full rounded-full bg-white/90 py-6 pl-12 pr-4 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12 md:py-16">
        <header className="mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-headline">Best Doctors in India</h2>
        </header>

        <div ref={formRef} className="mb-8 p-4 border rounded-lg bg-card flex flex-col md:flex-row items-center gap-4 anim-section">
            <span className="font-medium text-muted-foreground whitespace-nowrap">Doctors by Country, City</span>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full">
                <Select defaultValue="india">
                    <SelectTrigger>
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="south-korea">South Korea</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                    <SelectValue placeholder="All Cities" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="gurugram">Gurugram</SelectItem>
                    <SelectItem value="new-delhi">New Delhi</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                    <SelectValue placeholder="All Specialities" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="oncology">Oncology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="cosmetic-surgery">Cosmetic Surgery</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

        <div ref={listRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 anim-section">
          {doctors.map((doctor) => (
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
                <p className="mt-2 text-sm font-semibold text-primary">{doctor.specialization}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
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
