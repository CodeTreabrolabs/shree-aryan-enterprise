"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Phone, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PropertyEnquiryFormProps {
  property: {
    title: string;
    location: string;
  };
}

export function PropertyEnquiryForm({ property }: PropertyEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: `I am interested in "${property.title}" at ${property.location}.`,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate UUID for anonymous_id
    const anonymous_id = uuidv4();
    const created_at = new Date().toISOString();

    // Prepare submitted_fields array as per API format
    const submitted_fields = [
      {
        key: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter Your Full Name",
        value: formData.name,
      },
      {
        key: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "Enter Your Email Address",
        value: formData.email,
      },
      {
        key: "field_1766940515513",
        type: "textarea",
        label: "Message",
        required: true,
        placeholder: "Enter Your message here",
        value: formData.message,
      },
      {
        key: "phone",
        type: "text",
        label: "Phone Number",
        required: true,
        placeholder: "Enter Your Phone Number",
        value: formData.phone,
      },
    ];

    // Prepare payload
    const payload = {
      anonymous_id,
      user_widget: 96,
      submitted_fields,
      created_at,
    };

    try {
      await axios.post(
        "https://api.getwidgets.app/api/widgets/user-widgets/5c580c5c-b25b-4070-bd5e-ba67b10531a3/contact/",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      setIsSubmitted(true);
      
      // Prepare WhatsApp message with form data
      const whatsappMessage = `*Property Enquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919322635844?text=${encodedMessage}`;
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: `I am interested in "${property.title}" at ${property.location}.`,
      });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      // Optionally handle error
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="sticky top-20 md:top-28">
      <CardHeader>
        <CardTitle className="font-serif text-lg md:text-xl">
          Interested in This Property?
        </CardTitle>
        <p className="text-muted-foreground text-xs md:text-sm">
          Fill out the form below and our team will get back to you shortly.
        </p>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
              Enquiry Sent!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest. Our team will contact you shortly.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Enquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <Input
              placeholder="Your Name"
              className="text-sm md:text-base"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="text-sm md:text-base"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="text-sm md:text-base"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <Textarea
              placeholder="Tell us about your requirements..."
              rows={3}
              className="text-sm md:text-base"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full text-sm md:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
            <div className="mt-3 text-center">
              <a 
                href="https://www.widgetkraft.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Powered by WidgetKraft
              </a>
            </div>
          </form>
        )}

        <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border">
          <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
            Or contact us directly:
          </p>
          <div className="space-y-3">
            <a
              href="tel:+919322635844"
              className="flex items-start md:items-center gap-3 text-foreground hover:text-primary transition-colors text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5 md:mt-0" />
              <span>+918108917612, +919322635844</span>
            </a>
            <a
              href="mailto:aryanestateconsultant10@gmail.com"
              className="flex items-start md:items-center gap-3 text-foreground hover:text-primary transition-colors text-sm md:text-base"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5 md:mt-0" />
              <span className="break-all">
                aryanestateconsultant10@gmail.com
              </span>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
