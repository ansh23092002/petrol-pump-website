"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, HardHat } from "lucide-react";

interface NavbarProps {
  onHireClick?: () => void;
}

export default function Navbar({ onHireClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Find Workers", href: "#workers" },
    { label: "For Contractors", href: "#contractors" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <a href="#" className="flex items-center gap-2 " data-testid="link-logo">
            <HardHat className="h-8 w-8 text-primary" />
            <span className="font-heading text-xl font-bold tracking-wide uppercase">
              Sharma Enterprises
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={onHireClick}
              className="hidden sm:flex"
              data-testid="button-hire-workers"
            >
              Hire Workers
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover-elevate active-elevate-2 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button onClick={onHireClick} className="w-full" data-testid="button-hire-workers-mobile">
                  Hire Workers
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
