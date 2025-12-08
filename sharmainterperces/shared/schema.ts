// Shared schema types for the application

export interface LaborCategory {
  id: string;
  title: string;
  name: string;
  description: string;
  hourlyRate: number;
  features?: string[];
  popular?: boolean;
}

export interface Booking {
  id: string;
  categoryId: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  address: string;
  additionalNotes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export type BookingFormData = Omit<Booking, 'id' | 'status' | 'createdAt'>;
