import Link from "next/link";
import { Phone, Mail, MapPin, ClipboardCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src="https://res.cloudinary.com/dn1ccd6zb/image/upload/v1769435519/logo_qzj9tg.png"
                  alt="Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-md"
                />
              </div>
              <div>
                <span className="font-serif text-lg sm:text-xl font-semibold text-[#4F95C9]">
                  Shree Aryan Estate
                </span>
                <span className="font-serif text-lg sm:text-xl text-[#4F95C9] ml-1">
                  Enterprise
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted partner in premium real estate consulting. We help
              you find the perfect property with expert guidance and
              personalized service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "Properties" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-semibold text-background mb-4">
              Property Types
            </h4>
            <ul className="space-y-2">
              {[
                "Apartments",
                "Villas",
                "Commercial Spaces",
                "Office Buildings",
                "Retail Shops",
              ].map((type) => (
                <li key={type}>
                  <Link
                    href="/properties"
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  C/ 13 Uttkash, Mahakali Caves Road, MIDC Andheri (E), Mumbai -
                  400093
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+919322635844"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  +918108917612, +919322635844
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ClipboardCheck className="w-5 h-5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">
                  MahaRERA No. - A51800011626
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:aryanestateconsultant10@gmail.com"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  aryanestateconsultant10@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Shree Aryan Estate Enterprise. All
              rights reserved.
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4">
            <p className="text-background/50 text-sm">
              Made with <span className="text-red-500">❤️</span> by
            </p>
            <a
              href="https://treabrolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-background/70 hover:text-background transition-colors text-sm"
            >
              <img
                src="https://treabrolabs.com/favicon.ico"
                alt="Treabrolabs"
                className="w-4 h-4"
              />
              <span>Treabrolabs</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
