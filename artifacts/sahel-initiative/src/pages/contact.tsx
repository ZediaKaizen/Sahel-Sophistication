import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const DIAL_CODES = [
  { code: "+234", country: "NG", flag: "🇳🇬" },
  { code: "+1",   country: "US", flag: "🇺🇸" },
  { code: "+44",  country: "GB", flag: "🇬🇧" },
  { code: "+49",  country: "DE", flag: "🇩🇪" },
  { code: "+33",  country: "FR", flag: "🇫🇷" },
  { code: "+27",  country: "ZA", flag: "🇿🇦" },
  { code: "+254", country: "KE", flag: "🇰🇪" },
  { code: "+233", country: "GH", flag: "🇬🇭" },
  { code: "+20",  country: "EG", flag: "🇪🇬" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+91",  country: "IN", flag: "🇮🇳" },
  { code: "+86",  country: "CN", flag: "🇨🇳" },
  { code: "+81",  country: "JP", flag: "🇯🇵" },
  { code: "+61",  country: "AU", flag: "🇦🇺" },
  { code: "+55",  country: "BR", flag: "🇧🇷" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [dialCode, setDialCode] = useState("+234");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          phone: dialCode + form.phone,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

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

            {/* Contact info column */}
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
                  <a href="mailto:support@thesahelinitiative.org" className="hover:text-foreground transition-colors">
                    support@thesahelinitiative.org
                  </a>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Phone</h4>
                  <a href="tel:+2348162267132" className="hover:text-foreground transition-colors">
                    +234 816 226 7132
                  </a>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Location</h4>
                  <p>Kano State, Nigeria</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Volunteer Enquiries</h4>
                  <a href="mailto:volunteer@thesahelinitiative.org" className="hover:text-foreground transition-colors">
                    volunteer@thesahelinitiative.org
                  </a>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2">Follow Us</h4>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/thesahelinitiative/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/the-sahel-initiative/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card p-8 rounded-3xl border border-card-border"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                  <CheckCircle className="w-14 h-14 text-primary" />
                  <h3 className="text-xl font-bold">Message sent!</h3>
                  <p className="text-muted-foreground font-light">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* First name + Last name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First name</label>
                      <Input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Ada"
                        className="bg-muted border-border"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last name</label>
                      <Input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Okafor"
                        className="bg-muted border-border"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone with dial code */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone <span className="text-muted-foreground font-normal">(required)</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={dialCode}
                        onChange={(e) => setDialCode(e.target.value)}
                        className="h-10 rounded-md border border-border bg-muted px-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shrink-0"
                        aria-label="Country dial code"
                      >
                        {DIAL_CODES.map((d) => (
                          <option key={d.code + d.country} value={d.code}>
                            {d.flag} {d.code}
                          </option>
                        ))}
                      </select>
                      <Input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="816 226 7132"
                        className="bg-muted border-border flex-1"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-muted-foreground font-normal">(required)</span>
                    </label>
                    <Input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="you@example.com"
                      className="bg-muted border-border"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your message..."
                      className="bg-muted border-border resize-none"
                      required
                    />
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <div className="flex items-start gap-2 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-xl"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
