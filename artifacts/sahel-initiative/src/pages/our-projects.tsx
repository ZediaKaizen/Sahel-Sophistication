import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function OurProjects() {
  const projects = [
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
    },
    {
      title: "Community Sanitation",
      location: "Borno State, Nigeria",
      status: "Completed",
      image: "/images/project-sanitation.png"
    },
    {
      title: "Agricultural Irrigation",
      location: "Katsina State, Nigeria",
      status: "Planning",
      image: "/images/project-irrigation.png"
    },
    {
      title: "Water Purification System",
      location: "Sokoto State, Nigeria",
      status: "In Progress",
      image: "/images/project-purification.png"
    }
  ];

  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Our Projects
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed">
              Real impact in real communities across the Sahel region.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-20 bg-background">
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: (i % 3) * 0.2, ease: [0.16, 1, 0.3, 1] } }
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

      <Footer />
    </div>
  );
}
