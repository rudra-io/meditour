import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { hospitals, appointments } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock, Edit, Hospital as HospitalIcon, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

const user = {
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
    joined: '2023-05-15',
};
const favoriteHospitals = [hospitals[0], hospitals[2]];
const userAppointments = appointments;

const profileAvatar = PlaceHolderImages.find(img => img.id === 'profile-avatar');

export default function ProfilePage() {
    return (
        <div className="container py-8 md:py-12">
            <Card className="max-w-5xl mx-auto">
                <CardHeader className="bg-muted/30 p-6 md:flex-row md:items-center md:gap-6">
                    <div className="relative h-24 w-24 rounded-full">
                        {profileAvatar && 
                            <Image
                                src={profileAvatar.imageUrl}
                                alt={user.name}
                                fill
                                className="rounded-full object-cover"
                                data-ai-hint={profileAvatar.imageHint}
                            />
                        }
                    </div>
                    <div className="flex-grow">
                        <CardTitle className="text-3xl">{user.name}</CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                        <p className="text-sm text-muted-foreground mt-1">Joined on {new Date(user.joined).toLocaleDateString()}</p>
                    </div>
                    <Button variant="outline"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Button>
                </CardHeader>
                <CardContent className="p-6">
                    <Tabs defaultValue="appointments" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="appointments">My Appointments</TabsTrigger>
                            <TabsTrigger value="favorites">Favorite Hospitals</TabsTrigger>
                        </TabsList>
                        <TabsContent value="appointments" className="mt-6">
                            <h3 className="text-xl font-semibold mb-4">Upcoming & Past Appointments</h3>
                            <div className="space-y-4">
                                {userAppointments.map(appointment => {
                                    const hospital = hospitals.find(h => h.id === appointment.hospitalId);
                                    return (
                                        <Card key={appointment.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                            <div>
                                                <p className="font-bold">{appointment.treatmentName}</p>
                                                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                                    <HospitalIcon className="h-4 w-4" /> {hospital?.name}
                                                </p>
                                                <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                                    <Calendar className="h-4 w-4" /> {new Date(appointment.date).toLocaleDateString()}
                                                    <Clock className="h-4 w-4 ml-2" /> {new Date(appointment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                    appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                                    appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                    {appointment.status}
                                                </span>
                                                <Button variant="outline" size="sm">Manage</Button>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </TabsContent>
                        <TabsContent value="favorites" className="mt-6">
                            <h3 className="text-xl font-semibold mb-4">Saved Hospitals</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {favoriteHospitals.map(hospital => (
                                    <Card key={hospital.id} className="p-4 flex items-start gap-4 hover:bg-muted/50 transition-colors">
                                        <Image
                                            src={hospital.imageUrl}
                                            alt={hospital.name}
                                            width={100}
                                            height={100}
                                            className="rounded-lg object-cover w-24 h-24"
                                            data-ai-hint="hospital building"
                                        />
                                        <div className="flex-grow">
                                            <Link href={`/hospitals/${hospital.id}`} className="font-bold hover:underline">{hospital.name}</Link>
                                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3 w-3" />{hospital.city}, {hospital.country}</p>
                                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><Star className="h-3 w-3" />{hospital.rating} ({hospital.reviews} reviews)</p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
