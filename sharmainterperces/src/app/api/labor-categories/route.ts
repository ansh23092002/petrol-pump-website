import { NextResponse } from 'next/server';
import type { LaborCategory } from '@shared/schema';

// Mock data - replace with database in production
const categories: LaborCategory[] = [
  {
    id: 'mason',
    name: 'Skilled Mason',
    description: 'Expert masons for construction and repair work',
    hourlyRate: 250,
    features: ['Expert craftsmanship', 'Quality materials', 'Timely completion'],
    popular: true,
  },
  {
    id: 'electrician',
    name: 'Certified Electrician',
    description: 'Licensed electricians for all electrical work',
    hourlyRate: 300,
    features: ['Licensed & insured', '24/7 availability', 'Emergency services'],
    popular: true,
  },
  {
    id: 'helper',
    name: 'Construction Helper',
    description: 'General construction and labor assistance',
    hourlyRate: 180,
    features: ['Flexible hours', 'Multiple workers', 'Cost-effective'],
  },
  {
    id: 'plumber',
    name: 'Professional Plumber',
    description: 'Expert plumbers for installation and repairs',
    hourlyRate: 280,
    features: ['Quick response', 'Quality parts', 'Warranty included'],
    popular: true,
  },
];

export async function GET() {
  return NextResponse.json(categories);
}
