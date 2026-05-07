import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
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
    },
    {
      title: "The Impact of Clean Water on Child Health in the Sahel",
      date: "October 12, 2023",
      excerpt: "When children don't have to walk miles for water, they can spend that time in the classroom — and their bodies stay healthier too.",
      image: "/images/blog-2.png"
    },
    {
      title: "Water Crisis in the Sahel Region of Nigeria: The Intersection of Insecurities and COVID-19",
      date: "September 28, 2023",
      excerpt: "The pandemic laid bare a crisis that was already unfolding. A look at how water scarcity and instability compound one another across Nigeria's Sahel belt.",
      image: "/images/blog-4.png"
    },
    {
      title: "The Water Crisis in the Sahel Region: A Growing Problem",
      date: "September 15, 2023",
      excerpt: "Rising temperatures, shifting rainfall, and rapid population growth are pushing millions of people further from a safe water source every year.",
      image: "/images/blog-3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
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
              Insights & Stories
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed">
              Updates from the field, stories of impact, and thoughts on sustainable development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-20 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: (i % 2) * 0.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border hover:border-border/80 transition-colors"
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
                  <p className="text-muted-foreground font-light mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${i}`} className="inline-flex items-center text-sm font-semibold tracking-wide uppercase text-foreground hover:text-primary transition-colors w-fit">
                    Read More &rarr;
                  </Link>
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
