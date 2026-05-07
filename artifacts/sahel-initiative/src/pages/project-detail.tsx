import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "wouter";
import { useState } from "react";

type Project = {
  slug: string;
  title: string;
  location: string;
  status: string;
  year: string;
  category: string;
  heroImage: string;
  summary: string;
  body: string[];
  stats: { label: string; value: string }[];
  gallery: string[];
};

const projects: Project[] = [
  {
    slug: "kiru-medile-tiga",
    title: "Kiru, Medile, and Tiga Water Projects",
    location: "Kano State, Nigeria",
    status: "Completed",
    year: "2023",
    category: "Multi-Community Water Access",
    heroImage: "/project-kiru.jpg",
    summary:
      "Three neighbouring communities — Kiru, Medile, and Tiga — received safe, reliable water infrastructure through a single coordinated project, transforming daily life for over a thousand residents.",
    body: [
      "Before this project, the communities of Kiru, Medile, and Tiga shared a single, often-dry hand-pump that frequently broke down. Women and children walked up to four kilometres each day to collect water from unprotected sources, increasing exposure to waterborne illness and keeping girls out of school.",
      "The Sahel Initiative partnered with local engineers and community leaders to design and install a networked borehole system with multiple tap stands distributed across all three communities. The solar-assisted pump ensures consistent flow even during dry-season drops in the water table.",
      "Construction was completed over six weeks. On handover day, hundreds of residents gathered to see clean water flowing from taps just metres from their homes for the first time. Community water committees — elected by residents and trained by our team — now manage routine maintenance, ensuring the infrastructure remains operational for years to come.",
      "This project demonstrated that a single well-planned installation can serve multiple communities simultaneously, stretching every donor dollar further and building the kind of inter-community cooperation that makes future projects easier.",
    ],
    stats: [
      { label: "People served", value: "1,200+" },
      { label: "Communities", value: "3" },
      { label: "Tap stands installed", value: "6" },
      { label: "Year completed", value: "2023" },
    ],
    gallery: ["/project-kiru.jpg", "/project-extra-2.jpg", "/project-extra-3.jpg"],
  },
  {
    slug: "jirgabawa",
    title: "Jirgabawa Solar-Powered Borehole",
    location: "Kano State, Nigeria",
    status: "Completed",
    year: "2023",
    category: "Solar Borehole",
    heroImage: "/project-jirgabawa.png",
    summary:
      "A solar-powered borehole in Jirgabawa delivers clean, reliable water year-round — with zero fuel costs and zero carbon emissions — benefiting hundreds of households who previously depended on contaminated open wells.",
    body: [
      "Jirgabawa is a farming community on the edge of Nigeria's semi-arid Sahel belt. Despite sitting above a substantial groundwater reservoir, residents had no means to access it safely. Open, hand-dug wells — shallow, unlined, and vulnerable to seasonal contamination — were the only option for most families.",
      "The Sahel Initiative identified Jirgabawa through our community-nomination process, in which local leaders from across the region submit requests and our team assesses need, population, and hydrogeological feasibility.",
      "We chose a solar-powered submersible pump system for this site. Unlike diesel pumps — which require constant fuel purchases and break down frequently — a solar array needs only periodic cleaning and provides free energy indefinitely. The pump feeds a 5,000-litre overhead tank, which gravity-feeds three tap stands. Water flows without electricity from the grid and without recurring cost to the community.",
      "Jirgabawa's water committee took ownership of the system on completion day and has since collected a small monthly levy from member households — enough to fund minor repairs without outside support. This model of community-led financial sustainability is something we now replicate across all new installations.",
    ],
    stats: [
      { label: "People served", value: "600+" },
      { label: "Litres stored", value: "5,000" },
      { label: "Energy source", value: "Solar" },
      { label: "Year completed", value: "2023" },
    ],
    gallery: ["/project-jirgabawa.png", "/project-extra-1.png", "/project-extra-3.jpg"],
  },
  {
    slug: "kawo-mariri",
    title: "Kawo/Mariri Project",
    location: "Kano State, Nigeria",
    status: "Completed",
    year: "2024",
    category: "Borehole & Sanitation",
    heroImage: "/project-kawo.jpg",
    summary:
      "The Kawo/Mariri project brought clean water and improved sanitation infrastructure to two adjacent communities, combining a deep borehole with a first-of-its-kind hand-washing station programme.",
    body: [
      "Kawo and Mariri sit on the same road, separated by less than half a kilometre, yet neither community had ever had access to a functioning borehole. Residents purchased water from itinerant vendors at prices that consumed a significant share of household income, or they collected it from an irrigation canal that passed through agricultural land upstream.",
      "Our field assessment in late 2023 confirmed a serious need and strong community readiness. Local leaders had already formed a planning committee and identified land for the installation — an encouraging sign that the community would take long-term ownership of the project.",
      "The borehole was drilled to 65 metres, reaching a reliable aquifer that remains full throughout the dry season. Alongside the main borehole, we installed six hand-washing stations at key community gathering points: the primary school, the market, the mosque, and three residential cluster points. This was the first time any of our projects incorporated dedicated hygiene infrastructure, and the response from residents — especially parents and teachers — was overwhelmingly positive.",
      "We are proud that the Kawo/Mariri project has become a template for future installations. Every new borehole we commission now includes at least two hand-washing stations, because safe water and good hygiene practice go hand in hand.",
    ],
    stats: [
      { label: "People served", value: "800+" },
      { label: "Borehole depth", value: "65 m" },
      { label: "Hygiene stations", value: "6" },
      { label: "Year completed", value: "2024" },
    ],
    gallery: ["/project-kawo.jpg", "/project-extra-2.jpg", "/project-extra-1.png"],
  },
];

function LightboxGallery({ images, onClose, startIndex }: { images: string[]; onClose: () => void; startIndex: number }) {
  const [current, setCurrent] = useState(startIndex);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none"
      >
        ✕
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); }}
        className="absolute left-4 md:left-10 text-white/70 hover:text-white text-4xl leading-none px-2"
      >
        ‹
      </button>
      <motion.img
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        src={images[current]}
        alt=""
        className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); }}
        className="absolute right-4 md:right-10 text-white/70 hover:text-white text-4xl leading-none px-2"
      >
        ›
      </button>
      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectDetail() {
  const params = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">Project not found</h1>
            <Link href="/our-projects" className="text-primary underline">← Back to all projects</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero — photo bg, text always white over overlay */}
      <section className="relative h-[520px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-14">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <Link href="/our-projects" className="text-white/60 hover:text-white text-sm transition-colors">
                ← Our Projects
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/60 text-sm">{project.title}</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm">
                {project.category}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight"
            >
              {project.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-white/60 text-sm font-light flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {project.location}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border/30 bg-muted/60 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/30">
            {project.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="py-8 px-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-light uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary + Body */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-foreground font-light leading-relaxed border-l-2 border-primary pl-6"
            >
              {project.summary}
            </motion.p>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              {project.body.map((para, i) => (
                <motion.p key={i} variants={fadeUp}>{para}</motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Project Gallery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((src, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-2xl bg-card ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}
              >
                <img
                  src={src}
                  alt={`${project.title} photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">⊕</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — photo bg, text always white */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/projects-hero.avif" alt="" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 py-24 container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help us fund the next project
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-white/70 font-light max-w-xl mx-auto mb-10">
              Every donation — no matter the size — goes directly towards drilling the next borehole and bringing clean water to another community in need.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/support-us"
                className="inline-flex h-13 items-center justify-center rounded-full bg-primary text-white px-8 py-3.5 text-base font-semibold hover:bg-primary/90 shadow-[0_0_30px_rgba(53,192,237,0.4)] transition-all duration-300"
              >
                Donate now
              </Link>
              <Link
                href="/our-projects"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/30 text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-all duration-300"
              >
                ← All projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Lightbox — always dark overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxGallery
            images={project.gallery}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
