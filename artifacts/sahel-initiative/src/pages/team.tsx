import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

type Member = {
  name: string;
  title: string;
  image: string | null;
  initials: string;
  color: string;
  bio: string;
};

const members: Member[] = [
  {
    name: "Dr Mukhtar Ahmad MB, BS MMedSci FRCS",
    title: "Trustee and Chief Executive",
    image: "/team-mohammed.png",
    initials: "MA",
    color: "#1a3a5c",
    bio: "Dr Mukhtar Ahmad is a consultant surgeon with extensive experience in global health and community development. He co-founded The Sahel Initiative to bring the same commitment to care that defines his medical career to the communities in northern Nigeria most in need.",
  },
  {
    name: "Fatima Funsho",
    title: "Trustee and Co-Chief Executive",
    image: "/team-mukhtar.jpg",
    initials: "FF",
    color: "#1a4a3c",
    bio: "Fatima Funsho leads the organisation's field operations and community engagement programmes. Her deep roots in the region and her experience working with grassroots organisations make her uniquely positioned to identify communities in need and ensure every project delivers lasting impact.",
  },
  {
    name: "Dr. Mohammed Alhaji Mohammed",
    title: "Trustee",
    image: "/team-placeholder.png",
    initials: "MM",
    color: "#3a2a5c",
    bio: "Dr. Mohammed Alhaji Mohammed brings decades of experience in public health and community medicine across northern Nigeria. As a trustee, he guides the organisation's project selection and monitors health outcomes in communities that have received boreholes.",
  },
  {
    name: "Chichi Osuagwu",
    title: "Trustee",
    image: "/team-fatima.png",
    initials: "CO",
    color: "#4a2a2a",
    bio: "Chichi Osuagwu brings a wealth of expertise in non-profit governance and fundraising strategy. She plays a central role in developing the donor network that powers The Sahel Initiative's quarterly borehole programme.",
  },
  {
    name: "Mrs Maryam Augie Abdulmumin",
    title: "Trustee",
    image: null,
    initials: "MA",
    color: "#2a3a1a",
    bio: "Mrs Maryam Augie Abdulmumin is a community advocate and women's rights leader with extensive experience in rural development across the Sahel. She ensures that the voices of women and children — the primary beneficiaries of clean water — are central to every decision the board makes.",
  },
  {
    name: "Dr. Adamu Sambo",
    title: "Trustee",
    image: null,
    initials: "AS",
    color: "#1a2a4a",
    bio: "Dr. Adamu Sambo is a hydrogeologist and water infrastructure specialist with over 20 years of fieldwork in northern Nigeria. He provides the technical expertise that underpins every borehole assessment, ensuring sites are viable and installations are built to last.",
  },
];

function Avatar({ member }: { member: Member }) {
  if (member.image) {
    return (
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top"
      />
    );
  }
  return (
    <div
      className="w-full h-full flex items-center justify-center text-4xl font-bold text-white/80"
      style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}99 100%)` }}
    >
      {member.initials}
    </div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/projects-hero.avif"
            alt=""
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.p
              variants={fadeUp}
              className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4"
            >
              The People Behind the Mission
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            >
              Board Members
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-muted-foreground font-light leading-relaxed"
            >
              A volunteer board of trustees committed to bringing clean water to communities across Nigeria's Sahel region — one borehole at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8 pb-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-300"
              >
                {/* Photo */}
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <Avatar member={member} />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-xs font-medium uppercase tracking-wider mb-4">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-muted/40 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Join our movement
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light mb-10">
              We are 100% volunteer-powered. Whether you want to fundraise, spread awareness, or lend your professional skills, there is a place for you here.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:volunteer@thesahelinitiative.org"
                className="inline-flex h-13 items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3.5 text-base font-semibold hover:bg-primary/90 shadow-[0_0_30px_rgba(53,192,237,0.3)] hover:shadow-[0_0_40px_rgba(53,192,237,0.5)] transition-all duration-300"
              >
                Become a Volunteer
              </a>
              <Link
                href="/about"
                className="inline-flex h-13 items-center justify-center rounded-full border border-border text-foreground px-8 py-3.5 text-base font-semibold hover:bg-foreground/5 transition-all duration-300"
              >
                Our Mission
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
