import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Our Projects", href: "/our-projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isTransparent = location === "/" && !scrolled;
  const logoSrc = isTransparent || theme === "dark" ? "/logo-light.png" : "/logo-dark.png";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled || location !== "/"
          ? "bg-background/80 backdrop-blur-xl border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group cursor-pointer">
          <img
            src={logoSrc}
            alt="The Sahel Initiative"
            className="w-[120px] md:w-[140px] object-contain group-hover:opacity-80 transition-opacity"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/8 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <Link href="/support-us">
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 shadow-[0_0_20px_rgba(53,192,237,0.3)] hover:shadow-[0_0_30px_rgba(53,192,237,0.5)] transition-all duration-300">
              Donate
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-foreground hover:bg-foreground/8 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground py-2 border-b border-border/20"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/support-us" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full mt-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg">
              Donate
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
