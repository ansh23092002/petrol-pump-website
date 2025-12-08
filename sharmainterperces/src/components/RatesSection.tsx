"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { LaborCategory } from "@shared/schema";

interface RatesSectionProps {
  onBook?: (categoryId: string) => void;
}

export default function RatesSection({ onBook }: RatesSectionProps) {
  const { data: categories, isLoading } = useQuery<LaborCategory[]>({
    queryKey: ["/api/labor-categories"],
  });

  const rates = categories?.map((cat, index) => ({
    id: cat.id,
    title: cat.name,
    dailyRate: cat.hourlyRate * 8, // Assuming 8 hours per day
    weeklyRate: cat.hourlyRate * 40, // Assuming 5 days * 8 hours
    monthlyRate: cat.hourlyRate * 160, // Assuming 20 working days * 8 hours
    features: cat.features || [],
    popular: cat.popular || false,
  })).sort((a, b) => a.dailyRate - b.dailyRate) || [];

  if (isLoading) {
    return (
      <section className="py-20 bg-background" id="contractors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" id="contractors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight" data-testid="text-rates-heading">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. Choose the duration that works for your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rates.map((rate, index) => (
            <motion.div
              key={rate.id}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
            <Card 
              className={`relative h-full ${rate.popular ? "border-primary shadow-lg shadow-primary/20" : ""}`}
              data-testid={`card-rate-${rate.id}`}
            >
              {rate.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide" data-testid={`text-rate-title-${rate.id}`}>
                  {rate.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-primary" data-testid={`text-rate-daily-${rate.id}`}>
                      Rs {rate.dailyRate}
                    </span>
                    <span className="text-muted-foreground">/day</span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground space-y-1">
                    <p data-testid={`text-rate-weekly-${rate.id}`}>Rs {rate.weeklyRate}/week</p>
                    <p data-testid={`text-rate-monthly-${rate.id}`}>Rs {rate.monthlyRate}/month</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {rate.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={rate.popular ? "default" : "outline"}
                  onClick={() => onBook?.(rate.id)}
                  data-testid={`button-book-${rate.id}`}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
