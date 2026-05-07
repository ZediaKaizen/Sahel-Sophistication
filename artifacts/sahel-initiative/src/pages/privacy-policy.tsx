import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const sections = [
  {
    heading: "Information We Collect",
    items: [
      "Personal information you voluntarily provide, such as your name, email address, and contact details when you sign up for newsletters, volunteer, donate, or contact us.",
      "Non-personal information, such as browser type, IP address, and pages visited, collected via cookies and analytics tools.",
    ],
  },
  {
    heading: "How We Use Your Information",
    items: [
      "To respond to your inquiries and requests.",
      "To process donations and send donation receipts.",
      "To send updates, newsletters, or information about our work, if you opt in.",
      "To improve our website and services.",
    ],
  },
  {
    heading: "Sharing of Information",
    items: [
      "We do not sell or rent your personal information.",
      "We may share information with trusted service providers who assist us in operating our website and conducting our activities, but only as necessary and under confidentiality agreements.",
      "We may disclose information if required by law or to protect our rights.",
    ],
  },
  {
    heading: "Your Choices",
    items: [
      "You may opt out of receiving communications from us at any time by following the unsubscribe instructions in our emails or contacting us directly.",
      "You may request access to, correction, or deletion of your personal information by contacting us.",
    ],
  },
  {
    heading: "Updates to This Policy",
    items: [
      "We may update this Privacy Policy periodically. The effective date April 2025 indicates when it was last revised.",
    ],
  },
  {
    heading: "Contact Us",
    items: [
      "If you have questions about this Privacy Policy, please contact us at support@thesahelinitiative.org.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-primary/10 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Privacy Policy
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            {/* Intro */}
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground font-light leading-relaxed text-lg mb-12"
            >
              The Sahel Initiative ("we," "us," or "our") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information when
              you visit{" "}
              <a
                href="https://www.thesahelinitiative.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.thesahelinitiative.org
              </a>
              .
            </motion.p>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section) => (
                <motion.div key={section.heading} variants={fadeUp}>
                  <h2 className="text-xl font-bold mb-4">{section.heading}</h2>
                  <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground font-light leading-relaxed">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
