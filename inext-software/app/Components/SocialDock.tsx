"use client";

import Dock from "./ui/Dock";
import { FaWhatsapp, FaLinkedin, FaPhone, FaEnvelope, FaYoutube, FaTwitter } from "react-icons/fa";

export default function SocialDock() {
  const iconSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 24;
  
  const socialItems = [
    { 
      icon: <FaWhatsapp size={iconSize} className="text-green-400" />, 
      label: 'WhatsApp', 
      onClick: () => window.open('https://wa.me/1234567890', '_blank') 
    },
    { 
      icon: <FaLinkedin size={iconSize} className="text-blue-400" />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://linkedin.com', '_blank') 
    },
    { 
      icon: <FaPhone size={iconSize} className="text-purple-400" />, 
      label: 'Call', 
      onClick: () => window.location.href = 'tel:+1234567890' 
    },
    { 
      icon: <FaEnvelope size={iconSize} className="text-red-400" />, 
      label: 'Email', 
      onClick: () => window.location.href = 'mailto:contact@example.com' 
    },
    { 
      icon: <FaYoutube size={iconSize} className="text-red-500" />, 
      label: 'YouTube', 
      onClick: () => window.open('https://youtube.com', '_blank') 
    },
    { 
      icon: <FaTwitter size={iconSize} className="text-sky-400" />, 
      label: 'Twitter', 
      onClick: () => window.open('https://twitter.com', '_blank') 
    },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-sm px-4 sm:px-0">
      <Dock 
        items={socialItems}
        panelHeight={typeof window !== 'undefined' && window.innerWidth < 640 ? 56 : 68}
        baseItemSize={typeof window !== 'undefined' && window.innerWidth < 640 ? 40 : 50}
        magnification={typeof window !== 'undefined' && window.innerWidth < 640 ? 60 : 80}
      />
    </div>
  );
}
