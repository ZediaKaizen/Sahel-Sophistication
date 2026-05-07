import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
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
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed">
              We'd love to hear from you. Reach out to learn more about our projects or how you can help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6 text-muted-foreground font-light">
                <div>
                  <h4 className="text-foreground font-medium mb-1">Email</h4>
                  <p>hello@thesahelinitiative.org</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Location</h4>
                  <p>Kano State, Nigeria</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Volunteer Enquiries</h4>
                  <p>volunteer@thesahelinitiative.org</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card p-8 rounded-3xl border border-card-border"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your Name" className="bg-muted border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="you@example.com" className="bg-muted border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="How can we help?" className="bg-muted border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea rows={5} placeholder="Your message..." className="bg-muted border-border resize-none" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-xl">
                  Send Message
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
