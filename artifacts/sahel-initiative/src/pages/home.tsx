import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, CountUp } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

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
            <Link
              href="/support-us"
              className="w-full h-16 rounded-full bg-primary hover:bg-primary/90 active:scale-[0.98] flex items-center justify-center text-white font-semibold text-lg tracking-wide shadow-[0_0_40px_rgba(53,192,237,0.45)] hover:shadow-[0_0_60px_rgba(53,192,237,0.6)] transition-all duration-300"
            >
              Donate a Little, Change a Lot
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 relative z-20 bg-background border-t border-white/5">
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

      {/* Condensed Mission */}
      <section className="py-32 relative z-20 bg-zinc-950/50">
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
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
              Access to safe water keeps children in school, empowers women, improves health, and unlocks economic opportunity. We believe clean water is a fundamental human right, not a privilege.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12">
              <Link href="/about" className="inline-flex items-center text-lg font-semibold text-white hover:text-primary transition-colors">
                Read our full story <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-32 relative z-20 bg-background">
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
            <Link href="/our-projects">
              <div className="inline-flex items-center justify-center px-6 h-12 rounded-full hover:bg-white/5 font-medium transition-colors cursor-pointer group">
                View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Kiru, Medile, and Tiga Water Projects",
                location: "Kano State, Nigeria",
                status: "Completed",
                image: "/project-kiru.jpg"
              },
              {
                title: "Jirgabawa Solar-Powered Borehole",
                location: "Kano State, Nigeria",
                status: "Completed",
                image: "/project-jirgabawa.png"
              },
              {
                title: "Kawo/Mariri Project",
                location: "Kano State, Nigeria",
                status: "Completed",
                image: "/project-kawo.jpg"
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

      {/* Testimonial */}
      <section className="py-40 relative z-20 overflow-hidden bg-zinc-950 border-t border-white/5">
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

      {/* Latest from the Field */}
      <section className="py-32 relative z-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-4 block">From the Field</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Latest Stories</h2>
            </div>
            <Link href="/blog">
              <div className="inline-flex items-center gap-2 font-medium text-muted-foreground hover:text-foreground transition-colors group">
                View all posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Community Profile: KUYA Community, Kaduna State",
                date: "April 14, 2025",
                excerpt: "A closer look at the KUYA community in Kaduna State — the people, the land, and why reliable water access is the single biggest barrier to a better life here.",
                image: "/blog-kuya.jpg"
              },
              {
                title: "The Flagship Project",
                date: "March 3, 2025",
                excerpt: "From the first survey to the final pump test — an inside account of how The Sahel Initiative drilled its landmark borehole and what it means for the hundreds of families it now serves.",
                image: "/blog-flagship.jpg"
              }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="group flex flex-col rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-primary text-sm font-medium mb-3">{post.date}</span>
                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground font-light mb-8 flex-1">{post.excerpt}</p>
                  <Link href="/blog" className="inline-flex items-center text-sm font-semibold tracking-wide uppercase text-white hover:text-primary transition-colors w-fit">
                    Read More &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 relative z-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Ready to make an impact?
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Link 
                href="/support-us"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white text-primary px-8 text-lg font-bold hover:scale-105 transition-transform"
              >
                Donate Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
