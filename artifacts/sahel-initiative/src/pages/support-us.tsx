import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SupportUs() {
  const [donationAmount, setDonationAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <section className="relative pt-40 pb-32 z-20 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Fund a Borehole.<br/>Save Lives.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                Your donation directly funds the drilling of boreholes in communities that have never had clean water. We operate with minimal overhead to ensure your impact is maximized.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">100% Transparency</h4>
                    <p className="text-muted-foreground text-sm">See exactly where your money goes with project reports.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Sustainable Impact</h4>
                    <p className="text-muted-foreground text-sm">Boreholes are designed to last decades, serving generations.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="bg-card border-card-border shadow-2xl p-6 md:p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <CardContent className="p-0 relative z-10">
                  <h3 className="text-2xl font-bold mb-8">Choose Donation Amount</h3>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[25, 50, 100, 250, 500].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => { setDonationAmount(amount); setCustomAmount(""); }}
                        className={`py-4 rounded-2xl font-medium transition-all duration-300 border ${
                          donationAmount === amount
                            ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(53,192,237,0.2)]'
                            : 'bg-muted text-foreground border-border hover:bg-muted/80 hover:border-border/80'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                    <button
                      onClick={() => setDonationAmount(null)}
                      className={`py-4 rounded-2xl font-medium transition-all duration-300 border ${
                        donationAmount === null
                          ? 'bg-primary/20 text-primary border-primary/50'
                          : 'bg-muted text-foreground border-border hover:bg-muted/80 hover:border-border/80'
                      }`}
                    >
                      Custom
                    </button>
                  </div>

                  <AnimatePresence>
                    {donationAmount === null && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                          <Input
                            type="number"
                            placeholder="Amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="pl-8 h-14 bg-muted border-border text-lg rounded-2xl focus-visible:ring-primary"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="bg-primary/5 rounded-2xl p-6 mb-8 border border-primary/10">
                    <p className="text-sm text-primary/80 font-medium">
                      {donationAmount === 25 && "Provides clean water for one child for a year."}
                      {donationAmount === 50 && "Provides clean water for a family for a year."}
                      {donationAmount === 100 && "Funds maintenance tools for a community borehole."}
                      {donationAmount === 250 && "Funds the survey process for a new borehole site."}
                      {donationAmount === 500 && "Provides significant funding toward drilling a new well."}
                      {donationAmount === null && "Every dollar brings us closer to a world where everyone has clean water."}
                    </p>
                  </div>

                  <a
                    href="https://paypal.me/thesahelinitiative?country.x=GB&locale.x=en_GB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full h-14 rounded-2xl text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group">
                      <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Donate Now via PayPal
                    </Button>
                  </a>

                  <p className="text-center text-muted-foreground text-xs mt-4">
                    Secure payment processed via PayPal.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
