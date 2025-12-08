"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { LaborCategory } from "@shared/schema";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCategory?: string;
}

export default function BookingModal({ open, onOpenChange, selectedCategory }: BookingModalProps) {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    laborType: selectedCategory || "",
    duration: "",
    workers: "1",
    startDate: "",
    siteAddress: "",
  });

  useEffect(() => {
    if (selectedCategory) {
      setFormData(prev => ({ ...prev, laborType: selectedCategory }));
    }
  }, [selectedCategory]);

  const { data: categories } = useQuery<LaborCategory[]>({
    queryKey: ["/api/labor-categories"],
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const category = categories?.find(c => c.id === data.laborType);
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email || undefined,
          category: category?.name || data.laborType,
          date: data.startDate,
          time: data.duration,
          address: data.siteAddress,
          notes: `Workers needed: ${data.workers}`,
        }),
      });
      if (!response.ok) throw new Error('Failed to submit booking');
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 30 minutes to confirm your labor requirement.",
      });

      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          laborType: "",
          duration: "",
          workers: "1",
          startDate: "",
          siteAddress: "",
        });
      }, 2000);
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: "Please check all fields are filled correctly and try again.",
        variant: "destructive",
      });
    },
  });

  const validateForm = () => {
    if (!formData.name || formData.name.length < 2) {
      toast({ title: "Please enter your full name", variant: "destructive" });
      return false;
    }
    if (!formData.phone || formData.phone.length < 10) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return false;
    }
    if (!formData.laborType) {
      toast({ title: "Please select the type of labor", variant: "destructive" });
      return false;
    }
    if (!formData.duration) {
      toast({ title: "Please select a duration", variant: "destructive" });
      return false;
    }
    if (!formData.startDate) {
      toast({ title: "Please select a start date", variant: "destructive" });
      return false;
    }
    if (!formData.siteAddress || formData.siteAddress.length < 5) {
      toast({ title: "Please enter the site address", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    bookingMutation.mutate(formData);
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="font-heading text-2xl font-bold uppercase">Request Submitted!</h3>
            <p className="text-muted-foreground mt-2">
              Our team will contact you within 30 minutes.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl uppercase">Book Labor Now</DialogTitle>
          <DialogDescription>
            Fill in your requirements and we'll get back to you within 30 minutes.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                data-testid="input-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                data-testid="input-phone"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              data-testid="input-email"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="laborType">Type of Labor</Label>
              <Select
                value={formData.laborType}
                onValueChange={(value) => setFormData({ ...formData, laborType: value })}
              >
                <SelectTrigger id="laborType" data-testid="select-labor-type">
                  <SelectValue placeholder="Select trade" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                  )) || (
                    <>
                      <SelectItem value="masons">Skilled Masons</SelectItem>
                      <SelectItem value="electricians">Electricians</SelectItem>
                      <SelectItem value="plumbers">Plumbers</SelectItem>
                      <SelectItem value="helpers">Helpers & Coolies</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select
                value={formData.duration}
                onValueChange={(value) => setFormData({ ...formData, duration: value })}
              >
                <SelectTrigger id="duration" data-testid="select-duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="workers">Number of Workers</Label>
              <Select
                value={formData.workers}
                onValueChange={(value) => setFormData({ ...formData, workers: value })}
              >
                <SelectTrigger id="workers" data-testid="select-workers">
                  <SelectValue placeholder="Select count" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 10, 15, 20, 25, 30].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num} {num === 1 ? "Worker" : "Workers"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
                data-testid="input-start-date"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="siteAddress">Site Address</Label>
            <Input
              id="siteAddress"
              placeholder="Full address of construction site"
              value={formData.siteAddress}
              onChange={(e) => setFormData({ ...formData, siteAddress: e.target.value })}
              required
              data-testid="input-site-address"
            />
          </div>

          <Button type="submit" className="w-full" disabled={bookingMutation.isPending} data-testid="button-submit-booking">
            {bookingMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Booking Request"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
