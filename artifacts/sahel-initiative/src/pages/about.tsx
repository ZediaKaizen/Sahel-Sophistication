import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our Mission
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed">
              We are a volunteer-driven movement working to bring safe, reliable water to rural communities in Nigeria's Sahel region.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Water? */}
      <section className="py-24 relative z-20 bg-muted/40 border-y border-border/20">
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
                Access to safe water keeps children in school, empowers women, improves health, and unlocks economic opportunity. Without it, survival is a daily struggle.
              </p>
              <p className="text-foreground font-medium">
                We believe clean water is a fundamental human right, not a privilege.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 relative z-20 bg-background">
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

      {/* Volunteer Callout */}
      <section className="py-24 relative z-20 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Join Our Movement
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light mb-10">
              We are 100% volunteer-powered. Whether you want to fundraise, spread awareness, or lend your skills, there is a place for you here.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:volunteer@thesahelinitiative.org"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-[0_0_20px_rgba(53,192,237,0.3)] hover:shadow-[0_0_30px_rgba(53,192,237,0.5)] transition-all duration-300"
              >
                Become a Volunteer
              </a>
              <Link
                href="/team"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border text-foreground px-8 text-lg font-semibold hover:bg-foreground/5 transition-all duration-300"
              >
                Meet the Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
