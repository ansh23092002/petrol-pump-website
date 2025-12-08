# Sharma Interpreneurs - Petrol Pump Labor Services

A modern Next.js application for booking skilled labor services for petrol pumps and construction projects.

## Features

- 🎯 Modern, responsive UI with animations
- 📧 Email notifications with Nodemailer
- 💼 Service categories (Mason, Electrician, Plumber, Helper)
- 📱 Mobile-friendly design
- ⚡ Fast performance with Next.js 16 & Turbopack

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Email:** Nodemailer
- **State Management:** TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ansh23092002/petrol-pump-website.git
cd sharmainterperces
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` and add your email credentials:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
ADMIN_EMAIL=admin@sharmainterperces.com
```

**Note for Gmail:** Use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── bookings/          # Booking submission endpoint
│   │   └── labor-categories/  # Service categories endpoint
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── BentoGrid.tsx          # Service showcase grid
│   ├── BookingModal.tsx       # Booking form modal
│   ├── Footer.tsx             # Site footer
│   ├── HeroSection.tsx        # Hero banner
│   ├── HowItWorks.tsx         # Process explanation
│   ├── Navbar.tsx             # Navigation bar
│   ├── RatesSection.tsx       # Pricing cards
│   └── WhyUs.tsx              # Benefits section
├── lib/
│   ├── queryClient.ts         # TanStack Query setup
│   └── utils.ts               # Utility functions
└── shared/
    └── schema.ts              # TypeScript types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Email Setup Guide

### Gmail Setup
1. Enable 2-Factor Authentication in your Google Account
2. Generate an App Password: [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Use the generated password in your `.env` file

### Other Email Providers
Update `SMTP_HOST` and `SMTP_PORT` in `.env`:
- **Outlook:** smtp-mail.outlook.com:587
- **Yahoo:** smtp.mail.yahoo.com:465
- **Custom SMTP:** Use your provider's settings

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard.

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## API Endpoints

### GET `/api/labor-categories`
Returns list of available service categories.

### POST `/api/bookings`
Submit a new booking request.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "category": "string",
  "date": "string",
  "time": "string",
  "address": "string",
  "notes": "string"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For questions or support, contact: admin@sharmainterperces.com