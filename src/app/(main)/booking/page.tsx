'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import React from 'react';
import { hospitals, treatments } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export default function BookingPage() {
    const [date, setDate] = React.useState<Date>();
    const { toast } = useToast();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        toast({
            title: "Appointment Requested",
            description: "A hospital representative will contact you shortly to confirm your appointment.",
        });
    }

  return (
    <div className="container py-8 md:py-12">
        <Card className="max-w-3xl mx-auto">
        <CardHeader>
            <CardTitle className="text-3xl">Book an Appointment</CardTitle>
            <CardDescription>Fill out the form below to request an appointment. We will get back to you within 24 hours.</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="hospital">Hospital</Label>
                    <Select required>
                        <SelectTrigger id="hospital">
                            <SelectValue placeholder="Select a hospital" />
                        </SelectTrigger>
                        <SelectContent>
                            {hospitals.map(h => <SelectItem key={h.id} value={h.id}>{h.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="treatment">Treatment Package (Optional)</Label>
                    <Select>
                        <SelectTrigger id="treatment">
                            <SelectValue placeholder="Select a treatment" />
                        </SelectTrigger>
                        <SelectContent>
                            {treatments.map(t => <SelectItem key={t.id} value={t.id}>{t.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="appointment-date">Preferred Date</Label>
                <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                    >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    />
                </PopoverContent>
                </Popover>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="Please provide any additional information or questions." />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">Request Appointment</Button>
            </form>
        </CardContent>
        </Card>
    </div>
  );
}
