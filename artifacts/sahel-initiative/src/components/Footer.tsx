import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/10 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6 inline-block">
              <img 
                src="/logo-light.png" 
                alt="The Sahel Initiative" 
                className="w-[140px] object-contain"
              />
            </Link>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
              The Sahel Initiative is a volunteer-driven movement working to bring safe, reliable water to rural communities in Nigeria's Sahel region.
            </p>
          </div>
          
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
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-muted-foreground font-light">
              <p>Email: hello@thesahelinitiative.org</p>
              <p>Location: Kano State, Nigeria</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60 font-light">
          <p>© {new Date().getFullYear()} The Sahel Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
