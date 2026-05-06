import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      title: "How Access to Water Changes Education Outcomes",
      date: "October 12, 2023",
      excerpt: "When children don't have to walk miles for water, they can spend that time in the classroom.",
      image: "/images/blog-2.png"
    },
    {
      title: "The Community Drilling Initiative in Kano",
      date: "September 28, 2023",
      excerpt: "A look inside our recent successful borehole project that brought water to 500+ residents.",
      image: "/images/blog-4.png"
    },
    {
      title: "Why Sustainability is Key to Our Mission",
      date: "September 15, 2023",
      excerpt: "Building a well is only step one. Ensuring it lasts for decades requires deep community involvement.",
      image: "/images/blog-3.png"
    },
    {
      title: "Water: The Foundation of Health and Hygiene",
      date: "August 30, 2023",
      excerpt: "Clean water fundamentally transforms the health outcomes of an entire village.",
      image: "/images/blog-1.png"
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
                  <p className="text-muted-foreground font-light mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${i}`} className="inline-flex items-center text-sm font-semibold tracking-wide uppercase text-white hover:text-primary transition-colors w-fit">
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
