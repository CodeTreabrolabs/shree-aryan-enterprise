"use client"

import React from "react"

import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import axios from "axios"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+918108917612, +919322635844"],
    action: "tel:+919322635844"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["aryanestateconsultant10@gmail.com"],
    action: "mailto:aryanestateconsultant10@gmail.com"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["C/ 13 Uttkash", "Mahakali caves Road, Andheri (E), Mumbai - 400093"],
    action: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
    action: null
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Generate UUID for anonymous_id
    const anonymous_id = uuidv4()
    const now = new Date()
    const created_at = now.toISOString()

    // Prepare submitted_fields array as per API format
    const submitted_fields = [
      {
        key: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter Your Full Name",
        value: formData.name
      },
      {
        key: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "Enter Your Email Address",
        value: formData.email
      },
      {
        key: "field_1766940515513",
        type: "textarea",
        label: "Message",
        required: true,
        placeholder: "Enter Your message here",
        value: formData.message
      },
      {
        key: "phone",
        type: "text",
        label: "Phone Number",
        required: true,
        placeholder: "Enter Your Phone Number",
        value: formData.phone
      },
      {
        key: "requirement",
        type: "select",
        label: "What are you looking for?",
        required: false,
        placeholder: "Select an option",
        value: formData.requirement
      }
    ]

    // Prepare payload
    const payload = {
      anonymous_id,
      user_widget: 96,
      submitted_fields,
      created_at
    }

    try {
      await axios.post(
        "https://api.getwidgets.app/api/widgets/user-widgets/5c580c5c-b25b-4070-bd5e-ba67b10531a3/contact/",
        payload,
        { headers: { "Content-Type": "application/json" } }
      )
      
      // Prepare WhatsApp message with form data
      const whatsappMessage = `*Contact Form Submission*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Requirement:* ${formData.requirement}\n*Message:* ${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919322635844?text=${encodedMessage}`;
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
    } catch (error) {
      // Optionally handle error
    }

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", phone: "", email: "", requirement: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-background mb-4 text-balance">
              Contact Us
            </h1>
            <p className="text-background/70 max-w-2xl mx-auto">
              Have questions or ready to start your property journey? Our team is here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, index) => (
                    info.action ? (
                      <a
                        key={index}
                        href={info.action}
                        className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={index} className="text-muted-foreground text-sm">{detail}</p>
                    )
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. Our team will contact you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+918108917612, +919322635844"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="requirement" className="block text-sm font-medium text-foreground mb-1.5">
                          What are you looking for?
                        </label>
                        <Select
                          value={formData.requirement}
                          onValueChange={(value) => setFormData({ ...formData, requirement: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buy-residential">Buy Residential Property</SelectItem>
                            <SelectItem value="buy-commercial">Buy Commercial Property</SelectItem>
                            <SelectItem value="sell">Sell My Property</SelectItem>
                            <SelectItem value="invest">Property Investment</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                          Your Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements, budget, preferred locations, or any questions you have..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                  <div className="mt-4 pt-4 border-t text-center">
                    <a 
                      href="https://www.widgetkraft.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Powered by WidgetKraft
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map & Quick Contact */}
            <div className="space-y-6">
              {/* Map */}
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-muted relative">
  <iframe
    src="https://www.google.com/maps?q=C/13%20Uttkash,%20Mahakali%20Caves%20Road,%20MIDC%20Andheri%20(E),%20Mumbai%20400093&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Office Location"
    className="absolute inset-0"
  />
</div>

              </Card>

              {/* Quick Contact */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Prefer to Talk?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Skip the form and speak directly with one of our consultants. We are available to discuss your property needs.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+919322635844"
                      className="flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-primary-foreground/80 text-sm">+918108917612, +919322635844</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/+919322635844?text=Hi, I'm interested in your property listings."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-primary-foreground/80 text-sm">Message us directly</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
