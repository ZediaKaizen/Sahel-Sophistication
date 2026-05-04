import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Droplet, ArrowRight, CheckCircle2, ChevronRight, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <div ref={nodeRef} className="font-medium tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [donationAmount, setDonationAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-border/50 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
              <Droplet className="w-4 h-4 fill-primary" />
            </div>
            <span className="font-semibold tracking-tight text-lg">The Sahel Initiative</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('about')} className="hover:text-foreground transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-foreground transition-colors">Projects</button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-foreground transition-colors">Impact</button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('donate')}
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 shadow-[0_0_20px_rgba(53,192,237,0.3)] hover:shadow-[0_0_30px_rgba(53,192,237,0.5)] transition-all duration-300"
          >
            Support Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col">
        {/* Background image with parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <img 
            src="/sahel-hero.png"
            alt="Sahel landscape at sunset"
            className="w-full h-full object-cover scale-110"
          />
          {/* Gradient overlays: subtle top darkening for nav legibility, bottom for text */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        </motion.div>

        {/* Content: vertically centered, filling the hero */}
        <div className="relative z-10 flex flex-col flex-1 px-6 md:px-12 pt-28 pb-10 justify-between">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
              The Sahel Initiative
            </span>
          </motion.div>

          {/* Main headline — fills the frame */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center flex-1 flex flex-col items-center justify-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(3.5rem,13vw,10rem)] font-bold tracking-tight leading-[0.95] text-white mb-6"
              style={{ fontWeight: 800 }}
            >
              Water<br />
              changes<br />
              everything.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-2xl font-light text-white/70 tracking-wide"
            >
              One borehole at a time.
            </motion.p>
          </motion.div>

          {/* Wide pill CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg mx-auto"
          >
            <button
              onClick={() => scrollToSection('donate')}
              className="w-full h-16 rounded-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-semibold text-lg tracking-wide shadow-[0_0_40px_rgba(53,192,237,0.45)] hover:shadow-[0_0_60px_rgba(53,192,237,0.6)] transition-all duration-300"
            >
              Donate a Little, Change a Lot
            </button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-24 relative z-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/5">
            {[
              { label: "People Served", number: 1200, suffix: "+" },
              { label: "Boreholes Drilled", number: 12, suffix: "" },
              { label: "Communities Reached", number: 5, suffix: "" },
              { label: "Volunteer-Powered", number: 100, suffix: "%" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="flex flex-col items-center justify-center text-center px-4"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 flex">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / About */}
      <section id="about" className="py-32 relative z-20 bg-zinc-950/50">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
              Why Water? <br/>
              <span className="text-muted-foreground font-light">Because it is the foundation of everything.</span>
            </motion.h2>
            
            <motion.div variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground/90 font-light leading-relaxed space-y-8 text-left md:text-center">
              <p>
                The Sahel Initiative is a volunteer-driven movement working to bring safe, reliable water to rural communities in Nigeria's Sahel region.
              </p>
              <p>
                Access to safe water keeps children in school, empowers women, improves health, and unlocks economic opportunity. Without it, survival is a daily struggle.
              </p>
              <p className="text-foreground font-medium">
                We believe clean water is a fundamental human right, not a privilege.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 relative z-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Our Projects</h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl">Real impact in real communities across the Sahel region.</p>
            </div>
            <Button variant="ghost" className="group rounded-full hover:bg-white/5">
              View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Borehole Drilling",
                location: "Kano State, Nigeria",
                status: "Completed",
                image: "/images/project-drilling.png"
              },
              {
                title: "School Water Tap",
                location: "Jigawa State, Nigeria",
                status: "Completed",
                image: "/images/project-children.png"
              },
              {
                title: "Community Reservoir",
                location: "Yobe State, Nigeria",
                status: "In Progress",
                image: "/images/project-community.png"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-card-border"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                      project.status === 'Completed' ? 'bg-primary/20 text-white border border-primary/30' : 'bg-white/10 text-white border border-white/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-8 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 relative z-20 bg-zinc-950/50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">
              How It Works
            </motion.h2>
            
            <div className="space-y-12">
              {[
                { step: "01", title: "Identify", desc: "We identify rural communities with severe water scarcity and partner with local leaders." },
                { step: "02", title: "Fund & Build", desc: "Through grassroots funding, we contract local engineers to drill deep, sustainable boreholes." },
                { step: "03", title: "Transform", desc: "Communities gain immediate, lifetime access to clean water, transforming health and education." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-6 md:gap-10 group">
                  <div className="text-4xl md:text-6xl font-light text-primary/30 group-hover:text-primary transition-colors duration-300">
                    {item.step}
                  </div>
                  <div className="pt-2 md:pt-4">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 relative z-20 overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="mb-10 text-primary opacity-50 flex justify-center">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-12">
              "Before this borehole, I walked 5 kilometers every day for water. Now my children go to school, and we have hope for tomorrow."
            </h2>
            <div className="inline-flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-semibold text-lg border border-white/20">
                A
              </div>
              <div>
                <div className="font-semibold text-lg">Aisha</div>
                <div className="text-muted-foreground">Community Member, Kano State</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-32 relative z-20 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Fund a Borehole.<br/>Save Lives.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                Your donation directly funds the drilling of boreholes in communities that have never had clean water. We operate with minimal overhead to ensure your impact is maximized.
              </motion.p>
              
              <motion.div variants={fadeUp} className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">100% Transparency</h4>
                    <p className="text-muted-foreground text-sm">See exactly where your money goes with project reports.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Sustainable Impact</h4>
                    <p className="text-muted-foreground text-sm">Boreholes are designed to last decades, serving generations.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="bg-card border-card-border shadow-2xl p-6 md:p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <CardContent className="p-0 relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Choose Donation Amount</h3>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[25, 50, 100, 250, 500].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => { setDonationAmount(amount); setCustomAmount(""); }}
                        className={`py-4 rounded-2xl font-medium transition-all duration-300 border ${
                          donationAmount === amount 
                            ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(53,192,237,0.2)]' 
                            : 'bg-white/5 text-foreground border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                    <button
                      onClick={() => setDonationAmount(null)}
                      className={`py-4 rounded-2xl font-medium transition-all duration-300 border ${
                        donationAmount === null 
                          ? 'bg-primary/20 text-primary border-primary/50' 
                          : 'bg-white/5 text-foreground border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      Custom
                    </button>
                  </div>

                  <AnimatePresence>
                    {donationAmount === null && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                          <Input 
                            type="number" 
                            placeholder="Amount" 
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="pl-8 h-14 bg-white/5 border-white/10 text-lg rounded-2xl focus-visible:ring-primary"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="bg-primary/5 rounded-2xl p-6 mb-8 border border-primary/10">
                    <p className="text-sm text-primary/80 font-medium">
                      {donationAmount === 25 && "Provides clean water for one child for a year."}
                      {donationAmount === 50 && "Provides clean water for a family for a year."}
                      {donationAmount === 100 && "Funds maintenance tools for a community borehole."}
                      {donationAmount === 250 && "Funds the survey process for a new borehole site."}
                      {donationAmount === 500 && "Provides significant funding toward drilling a new well."}
                      {donationAmount === null && "Every dollar brings us closer to a world where everyone has clean water."}
                    </p>
                  </div>

                  <Button className="w-full h-14 rounded-2xl text-lg font-bold bg-white text-black hover:bg-white/90 transition-all duration-300 group">
                    Donate ${donationAmount || customAmount || "0"}
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                    <LockIcon className="w-3 h-3" /> Secure payment processing
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Droplet className="w-4 h-4 fill-primary" />
                </div>
                <span className="font-semibold tracking-tight text-lg">The Sahel Initiative</span>
              </div>
              <p className="text-muted-foreground max-w-sm font-light">
                A volunteer-driven movement bringing safe, reliable water to rural communities in Nigeria's Sahel region.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Our Projects</button></li>
                <li><button onClick={() => scrollToSection('impact')} className="hover:text-white transition-colors">Impact</button></li>
                <li><button onClick={() => scrollToSection('donate')} className="hover:text-white transition-colors">Support Us</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li>hello@sahelinitiative.org</li>
                <li>Kano, Nigeria</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© 2025 The Sahel Initiative. All rights reserved.</p>
            <p>Registered Non-Profit Organization</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
