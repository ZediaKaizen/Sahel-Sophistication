import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

const projects = [
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
];

export default function OurProjects() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[420px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects-hero.avif"
            alt="Our projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Our projects
          </motion.h1>
        </div>
      </section>

      {/* Intro Copy */}
      <section className="py-20 bg-zinc-950/60">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed"
          >
            <motion.p variants={fadeUp}>
              Our mission is simple: to bring safe, reliable water to rural communities in Nigeria's Sahel region. Every quarter, with the help of our incredible network of small-dollar donors, we fund and install a new borehole where it's needed most.
            </motion.p>
            <motion.p variants={fadeUp}>
              Each borehole provides hundreds of people with clean water for drinking, cooking, and daily living, reducing the burden on women and children, improving health, and opening doors to education and opportunity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 pb-32 relative z-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: (i % 3) * 0.15, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-card-border"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-primary/20 text-white border border-primary/30">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/85 to-transparent z-20">
                  <h3 className="text-xl font-bold text-white mb-1 leading-snug">{project.title}</h3>
                  <p className="text-white/60 text-sm font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects-hero.avif"
            alt=""
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 py-24 container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10">
              Water is a Right, Not a Privilege — Your Donation Helps Provide Safe, Clean Water to Those in Need. Give Now to Make a Lasting Impact!
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/support-us"
                className="inline-flex h-13 items-center justify-center rounded-full bg-primary text-white px-8 py-3.5 text-base font-semibold hover:bg-primary/90 shadow-[0_0_30px_rgba(53,192,237,0.4)] transition-all duration-300"
              >
                Join the Mission
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/30 text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
