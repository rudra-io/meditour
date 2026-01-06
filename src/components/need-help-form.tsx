'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from './ui/calendar';

export function NeedHelpForm() {
    const { toast } = useToast();
    const [date, setDate] = React.useState<Date>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Request Sent!",
            description: "Thank you for your inquiry. We will get back to you shortly.",
        });
    }
    
    return (
        <Card className="w-full shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground text-center">
                <CardTitle>Request a Free Quote</CardTitle>
                <CardDescription className="text-primary-foreground/80">Our team will get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Patient Full Name</Label>
                        <Input id="name" placeholder="Patient Full Name" required/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="country">Select Country</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="india">India</SelectItem>
                                    <SelectItem value="iraq">Iraq</SelectItem>
                                    <SelectItem value="uae">UAE</SelectItem>
                                    <SelectItem value="sudan">Sudan</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="city">Select City</Label>
                             <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select City" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="gurugram">Gurugram</SelectItem>
                                    <SelectItem value="new-delhi">New Delhi</SelectItem>
                                    <SelectItem value="baghdad">Baghdad</SelectItem>
                                    <SelectItem value="dubai">Dubai</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="mobile">Mobile Number</Label>
                            <Input id="mobile" type="tel" placeholder="(+91) Mobile Number" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Your Email</Label>
                            <Input id="email" type="email" placeholder="example@gmail.com" required/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="condition">Describe the current medical condition</Label>
                        <Textarea id="condition" placeholder="Describe the current medical condition" required/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth</Label>
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
                                    {date ? format(date, "PPP") : <span>dd-mm-yyyy</span>}
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
                        <div className="space-y-2">
                            <Label htmlFor="documents">Upload Documents</Label>
                            <Input id="documents" type="file" />
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">Book Appointment</Button>
                </form>
            </CardContent>
        </Card>
    )
}
