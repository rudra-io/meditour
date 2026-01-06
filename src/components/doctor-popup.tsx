
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Briefcase, GraduationCap, Stethoscope, User } from 'lucide-react';
import type { Doctor } from '@/lib/types';

interface DoctorPopupProps {
  doctor: Doctor | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DoctorPopup({ doctor, open, onOpenChange }: DoctorPopupProps) {
  if (!doctor) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1 bg-muted/30 p-8 flex flex-col items-center text-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
                <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                fill
                className="object-cover"
                data-ai-hint="doctor portrait"
                />
            </div>
            <DialogHeader className="mt-4 p-0">
              <h2 className="text-2xl font-bold">{doctor.name}</h2>
              <p className="text-primary font-semibold">{doctor.specialization}</p>
              <p className="text-sm text-muted-foreground">{doctor.hospital}</p>
            </DialogHeader>
            <Button asChild className="w-full mt-6">
                <Link href="/booking">Book a Consultation</Link>
            </Button>
          </div>
          <div className="md:col-span-2 p-8">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about"><User className="mr-2 h-4 w-4"/>About</TabsTrigger>
                <TabsTrigger value="experience"><Award className="mr-2 h-4 w-4"/>Experience</TabsTrigger>
                <TabsTrigger value="treatments"><Stethoscope className="mr-2 h-4 w-4"/>Treatments</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4 text-sm text-muted-foreground">
                <p>{doctor.about}</p>
              </TabsContent>
              <TabsContent value="experience" className="mt-4">
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <Briefcase className="h-5 w-5 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold">Experience</h4>
                            <p className="text-muted-foreground text-sm">{doctor.experience} years</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <GraduationCap className="h-5 w-5 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold">Qualifications</h4>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {doctor.qualifications.map(q => <Badge key={q} variant="secondary">{q}</Badge>)}
                            </div>
                        </div>
                    </li>
                </ul>
              </TabsContent>
              <TabsContent value="treatments" className="mt-4">
                <div className="flex flex-wrap gap-2">
                    {doctor.treatments.map(t => (
                        <Badge key={t} variant="outline">{t}</Badge>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
