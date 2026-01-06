import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getHospitalById, getTreatmentsByHospitalId } from '@/lib/data';
import { Star, MapPin, Phone, Mail, CheckCircle, BriefcaseMedical } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export default function HospitalDetailPage({ params }: { params: { id: string } }) {
  const hospital = getHospitalById(params.id);
  
  if (!hospital) {
    notFound();
  }

  const treatments = getTreatmentsByHospitalId(hospital.id);

  return (
    <div className="bg-secondary/50 animate-fade-in-up">
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 animate-fade-in-up">
            <Image
              src={hospital.imageUrl}
              alt={hospital.name}
              width={800}
              height={600}
              className="shadow-md w-full object-cover aspect-[4/3]"
              data-ai-hint="hospital building"
            />
          </div>
          <div className="md:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl font-bold tracking-tight font-headline">{hospital.name}</h1>
            <div className="mt-2 flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-5 w-5" />
                <span>{hospital.city}, {hospital.country}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-foreground">{hospital.rating}</span>
                <span>({hospital.reviews} reviews)</span>
              </div>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">{hospital.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hospital.specializations.map((spec) => (
                <Badge key={spec} variant="secondary" className="text-sm">{spec}</Badge>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
                <Link href="/booking">Book an Appointment</Link>
              </Button>
              <Button size="lg" variant="outline" className="transition-transform hover:scale-105">
                Contact Hospital
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-12" />

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Tabs defaultValue="services" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="services">Services & Facilities</TabsTrigger>
                <TabsTrigger value="treatments">Treatments</TabsTrigger>
              </TabsList>
              <TabsContent value="services" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Our Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {hospital.services.map((service, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="treatments" className="mt-6">
                <div className="space-y-4">
                  {treatments.map((treatment) => (
                    <Card key={treatment.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="flex items-center gap-2"><BriefcaseMedical className="h-5 w-5 text-primary"/>{treatment.name}</span>
                          <span className="text-xl font-bold text-accent">${treatment.cost.toLocaleString()}</span>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground pt-1">{treatment.description}</p>
                      </CardHeader>
                      <CardContent>
                          <Button asChild variant="secondary" className="transition-transform hover:scale-105">
                              <Link href={`/treatments?id=${treatment.id}`}>View Package Details</Link>
                          </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="lg:col-span-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">123 Health St, Medical City, {hospital.city}, {hospital.country}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">contact@{hospital.name.toLowerCase().replace(/\s/g, '')}.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
