import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

const projects = [
  {
    slug: "kiru-medile-tiga",
    title: "Kiru, Medile, and Tiga Water Projects",
    location: "Kano State, Nigeria",
    status: "Completed",
    year: "2023",
    excerpt: "Three communities — over 1,200 people — gained clean water through a single coordinated borehole and tap-stand network.",
    image: "/project-kiru.jpg",
  },
  {
    slug: "jirgabawa",
    title: "Jirgabawa Solar-Powered Borehole",
    location: "Kano State, Nigeria",
    status: "Completed",
    year: "2023",
    excerpt: "A solar-driven pump and overhead tank deliver free, clean water to 600+ residents with zero fuel costs and zero grid dependency.",
    image: "/project-jirgabawa.png",
  },
  {
    slug: "kawo-mariri",
    title: "Kawo/Mariri Project",
    location: "Kano State, Nigeria",
    status: "Completed",
    year: "2024",
    excerpt: "A 65-metre borehole paired with six community hand-washing stations — our first project to combine water access with hygiene infrastructure.",
    image: "/project-kawo.jpg",
  },
];

export default function OurProjects() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Banner — photo bg, text always white over overlay */}
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
      <section className="py-20 bg-muted/40">
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: (i % 3) * 0.15, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-card-border flex flex-col"
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-5 left-5 z-20 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-primary/20 text-white border border-primary/30">
                      {project.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md bg-white/15 text-white border border-white/20">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-snug">{project.title}</h3>
                  <p className="text-muted-foreground text-sm font-light flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {project.location}
                  </p>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1">{project.excerpt}</p>
                  <Link
                    href={`/our-projects/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-200 group/link"
                  >
                    View project
                    <span className="text-lg leading-none group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — photo bg, text always white */}
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
              <a
                href="https://paypal.me/thesahelinitiative?country.x=GB&locale.x=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center rounded-full bg-primary text-white px-8 py-3.5 text-base font-semibold hover:bg-primary/90 shadow-[0_0_30px_rgba(53,192,237,0.4)] transition-all duration-300"
              >
                Join the Mission
              </a>
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
