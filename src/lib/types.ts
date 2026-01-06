

export type Hospital = {
  id: string;
  name: string;
  city: string;
  country: string;
  specializations: string[];
  services: string[];
  description: string;
  imageUrl: string;
  rating: number;
  reviews: number;
};

export type Treatment = {
  id: string;
  name: string;
  hospitalId: string;
  description: string;
  cost: number;
  duration: string;
  category: string;
  details: {
    procedure: string;
    recovery: string;
    inclusions: string[];
    exclusions: string[];
  };
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
};

export type Appointment = {
  id: string;
  userId: string;
  hospitalId: string;
  treatmentName: string;
  date: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
};

export type Doctor = {
  id:string;
  name: string;
  hospital: string;
  location: string;
  specialization: string;
  imageUrl: string;
  experience: number;
  qualifications: string[];
  about: string;
  treatments: string[];
};

export type JourneyStep = {
    week: number;
    title?: string;
    description?: string;
    imageHint: string;
}

export type Specialty = {
    name: string;
    slug: string;
    icon: string;
    description: string;
    whoNeedsIt: string;
    conditions: string[];
    imageHint: string;
    whoNeedsItImageHint: string;
    whatToExpect: {
      before: string[];
      during: string[];
      after: string[];
    };
    faqs: {
      question: string;
      answer: string;
    }[];
}
