import { hospitals } from '@/lib/data';
import { HospitalsClient } from './hospitals-client';

export default function AdminHospitalsPage() {
  // In a real app, you would fetch this data from your database
  const hospitalData = hospitals;

  return <HospitalsClient hospitals={hospitalData} />;
}
