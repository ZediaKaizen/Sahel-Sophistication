import { Link } from "wouter";
import { useTheme } from "@/lib/theme-context";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="bg-card pt-24 pb-12 border-t border-border relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand + social */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6 inline-block">
              <img
                src={theme === "light" ? "/logo-dark.png" : "/logo-light.png"}
                alt="The Sahel Initiative"
                className="w-[140px] object-contain"
              />
            </Link>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm mb-6">
              The Sahel Initiative is a volunteer-driven movement working to bring safe, reliable water to rural communities in Nigeria's Sahel region.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/thesahelinitiative/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-sahel-initiative/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Explore</h4>
            <div className="flex flex-col gap-3 text-muted-foreground font-light">
              <Link href="/about" className="hover:text-foreground transition-colors w-fit">About Us</Link>
              <Link href="/our-projects" className="hover:text-foreground transition-colors w-fit">Our Projects</Link>
              <Link href="/blog" className="hover:text-foreground transition-colors w-fit">Blog</Link>
              <Link href="/support-us" className="hover:text-foreground transition-colors w-fit">Support Us</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors w-fit">Contact</Link>
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-muted-foreground font-light">
              <p>
                <span className="text-foreground font-medium">Email: </span>
                <a
                  href="mailto:support@thesahelinitiative.org"
                  className="hover:text-foreground transition-colors"
                >
                  support@thesahelinitiative.org
                </a>
              </p>
              <p>
                <span className="text-foreground font-medium">Phone: </span>
                <a
                  href="tel:+2348162267132"
                  className="hover:text-foreground transition-colors"
                >
                  +234 816 226 7132
                </a>
              </p>
              <p>
                <span className="text-foreground font-medium">Location: </span>
                Kano State, Nigeria
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60 font-light">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} The Sahel Initiative. All rights reserved.</p>
            <Link href="/privacy-policy" className="hover:text-muted-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/thesahelinitiative/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-muted-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/the-sahel-initiative/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-muted-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
