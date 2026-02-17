import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Palette, Zap, CheckCircle2, ArrowRight, ExternalLink, Monitor, Code, Layers, Sparkles, Shield, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Logo_1771363129441.png";
import cardVisualImg from "@/assets/images/card-visual-storytelling.jpg";
import cardDeviceImg from "@/assets/images/card-device-perfect.jpg";
import cardArchImg from "@/assets/images/card-modern-architecture.jpg";
import cardConvertImg from "@/assets/images/card-conversion-focused.jpg";
import cardRapidImg from "@/assets/images/card-rapid-delivery.jpg";
import cardGrowthImg from "@/assets/images/card-growth-ready.jpg";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] } })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.9, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] } })
};

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 10, -15, 0],
        x: [0, 10, -5, 8, 0],
        scale: [1, 1.05, 0.97, 1.03, 1],
      }}
      transition={{
        duration: 10 + delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function LandingPage() {
  const createInquiry = useCreateInquiry();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, { onSuccess: () => form.reset() });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-terra/20">
      <Navigation />

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#3b2318] via-[#4a2e1c] to-[#5c3d2e]" data-testid="section-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(194,122,74,0.2),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(194,122,74,0.15),transparent)]"></div>

        <FloatingOrb className="absolute top-[15%] left-[5%] w-[350px] h-[350px] rounded-full bg-[#c27a4a]/15 blur-[100px]" delay={0} />
        <FloatingOrb className="absolute bottom-[10%] right-[10%] w-[280px] h-[280px] rounded-full bg-[#5c3d2e]/20 blur-[90px]" delay={3} />
        <FloatingOrb className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full bg-[#c27a4a]/10 blur-[80px]" delay={5} />

        <motion.div style={{ opacity: heroOpacity }} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 max-w-[50px] bg-gradient-to-r from-[#c27a4a] to-transparent"></div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c27a4a]">
                    Web Design &middot; Paralegal &middot; Transcription
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial="hidden" animate="visible" custom={1} variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-[68px] font-serif-display font-bold leading-[1.05] mb-8 text-white"
              >
                We don't just build websites.{" "}
                <span className="shimmer-text">We craft experiences.</span>
              </motion.h1>

              <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp} className="w-24 h-[3px] shimmer-line mb-8 rounded-full"></motion.div>

              <motion.p
                initial="hidden" animate="visible" custom={3} variants={fadeUp}
                className="text-xl md:text-2xl text-white leading-relaxed max-w-xl mb-12 font-medium"
              >
                From concept to click, we transform ideas into digital realities that captivate your audience and grow your business &mdash; with the precision of a legal mind and the eye of a designer.
              </motion.p>

              <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#c27a4a] text-white border-[#c27a4a]" data-testid="button-hero-getstarted">
                  <a href="https://readydeskservices.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.15em]">Legal Services</a>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white backdrop-blur-sm bg-white/5" data-testid="button-hero-learnmore">
                  <a href="#showcase" className="text-xs font-bold uppercase tracking-[0.15em] inline-flex items-center gap-2">Web Design and Development <ArrowRight className="w-4 h-4" /></a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="absolute w-[500px] h-[500px] rounded-full border border-[#c27a4a]/10 animate-pulse-glow"></div>
              <div className="absolute w-[420px] h-[420px] rounded-full border border-[#5c3d2e]/15 animate-float-slow"></div>
              <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#c27a4a]/8 to-[#5c3d2e]/8 animate-float"></div>
              <img src={logoImg} alt="Ready Desk Services" className="relative w-[380px] h-[380px] object-contain drop-shadow-[0_0_100px_rgba(194,122,74,0.5)]" data-testid="img-hero-logo" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-24 bg-[#2e1e14]/80 backdrop-blur-sm rounded-md p-10 border border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "15+", label: "Years of Expertise" },
                { val: "3-in-1", label: "Service Suite" },
                { val: "0", label: "Cookie-Cutter Sites" },
                { val: "100%", label: "Hands-On Approach" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.1, duration: 0.5 }}
                  className="text-center"
                  data-testid={`stat-item-${i}`}
                >
                  <div className="text-4xl font-serif-display font-bold text-[#e8a76e] mb-2">{stat.val}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ SERVICE STRIP ════════════════════════════════════════ */}
      <div className="w-full bg-gradient-to-r from-[#c27a4a] via-[#d4925e] to-[#c27a4a] py-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-8 md:gap-16 px-6"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-white" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">Web Design & Development</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">Paralegal Services</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-white" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">Transcription Services</span>
          </div>
        </motion.div>
      </div>

      {/* ═══ SHOWCASE SECTION ═════════════════════════════════════ */}
      <section id="showcase" className="bg-background section-padding" data-testid="section-webdesign">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c27a4a] block mb-4">What We Bring to the Table</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold text-espresso mb-6 leading-[1.1]">
                Where legal precision meets<br/><span className="italic text-[#c27a4a]">creative fire.</span>
              </h2>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#c27a4a] to-[#5c3d2e] mx-auto mb-8 rounded-full"></div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Most designers make things pretty. We make things work. With roots in law and an obsession with detail, every project we touch is engineered to convert visitors into believers.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: cardVisualImg,
                title: "Visual Storytelling",
                desc: "We don't just arrange pixels. We tell your brand's story through design that pulls people in and doesn't let go.",
                tags: ["Brand Narrative", "Visual Impact", "Emotion"]
              },
              {
                img: cardDeviceImg,
                title: "Device-Perfect",
                desc: "From a 6-inch phone screen to a 34-inch ultrawide, your site looks flawless everywhere your audience lives.",
                tags: ["Responsive", "Retina-Ready", "Lightning Fast"]
              },
              {
                img: cardArchImg,
                title: "Modern Architecture",
                desc: "No clunky page builders. We write real code that loads fast, ranks high, and never fights against you.",
                tags: ["React", "Performance", "SEO Native"]
              },
              {
                img: cardConvertImg,
                title: "Conversion-Focused",
                desc: "Beautiful design means nothing if it doesn't work. Every button, headline, and layout is engineered to drive action.",
                tags: ["CRO", "A/B Tested", "Data-Driven"]
              },
              {
                img: cardRapidImg,
                title: "Rapid Delivery",
                desc: "Ideas move fast. We move faster. From first call to live site in weeks, not months &mdash; without cutting corners.",
                tags: ["Agile", "Milestone-Based", "On Time"]
              },
              {
                img: cardGrowthImg,
                title: "Growth-Ready",
                desc: "Launch lean today, scale tomorrow. Our builds are designed to evolve as your ambitions do &mdash; no rebuilds required.",
                tags: ["Scalable", "Modular", "Future-Proof"]
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={scaleIn}
                className="relative rounded-md bg-white border border-border hover-elevate overflow-visible"
                data-testid={`card-service-${i}`}
              >
                <div className="h-48 overflow-hidden rounded-t-md">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif-display font-bold text-espresso mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: card.desc }}></p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#c27a4a]/5 text-[#5c3d2e] text-[10px] uppercase tracking-[0.1em] font-bold rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE DIFFERENCE ══════════════════════════════════════ */}
      <section className="bg-[#5c3d2e] text-white section-padding relative overflow-hidden" data-testid="section-approach">
        <FloatingOrb className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#c27a4a]/8 blur-[100px]" delay={2} />
        <FloatingOrb className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-[#5c3d2e]/12 blur-[80px]" delay={4} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c27a4a] block mb-4">The Difference</span>
              <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 leading-[1.1]">
                Other agencies sell you a template.<br/><span className="italic shimmer-text">We build you a brand.</span>
              </h2>
              <div className="w-16 h-[3px] shimmer-line mb-8 rounded-full"></div>
              <p className="text-white text-lg leading-relaxed mb-10">
                Fifteen years of working inside law firms taught us something most designers never learn: details aren't just important &mdash; they're everything. That discipline shows in every pixel, every interaction, and every line of code we deliver.
              </p>

              <div className="space-y-6">
                {[
                  "One page or one hundred &mdash; same obsessive attention to craft",
                  "Transparent, fixed pricing that respects your budget",
                  "Direct access to the person doing the work &mdash; no middlemen",
                  "Ongoing evolution as your business hits new milestones",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#c27a4a]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c27a4a]" />
                    </div>
                    <p className="text-white text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: text }}></p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={scaleIn}>
              <div className="bg-white/5 border border-white/10 rounded-md p-10 backdrop-blur-sm">
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c27a4a] mb-6">Investment Tiers</div>
                <div className="space-y-8">
                  {[
                    { title: "Spark", desc: "A single high-impact page to validate your idea, capture leads, and make a powerful first impression.", price: "$250–$300" },
                    { title: "Ignite", desc: "A multi-page site with custom branding, mobile-first design, and built-in SEO foundations to compete from day one.", price: "From $300" },
                    { title: "Blaze", desc: "The complete package: strategy, branding, content, development, and ongoing partnership to dominate your market.", price: "Custom" },
                  ].map((tier, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="pb-8 border-b border-white/5 last:border-b-0 last:pb-0"
                      data-testid={`tier-${i}`}
                    >
                      <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
                        <h3 className="font-serif-display text-xl font-bold text-white">{tier.title}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#c27a4a] whitespace-nowrap">{tier.price}</span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">{tier.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ════════════════════════════════════════════ */}
      <section id="process" className="bg-[#f5ede0] section-padding" data-testid="section-process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c27a4a] block mb-4">From Zero to Launch</span>
              <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-espresso mb-6">
                Four steps to a site that<br/><span className="italic text-[#c27a4a]">actually delivers.</span>
              </h2>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#c27a4a] to-[#5c3d2e] mx-auto mb-8 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Deep Dive", desc: "We get into your world &mdash; your audience, your competitors, what makes you impossible to ignore." },
              { step: "02", title: "Blueprint", desc: "Before code, we map every detail. You'll see and approve the vision before a single pixel goes live." },
              { step: "03", title: "Construct", desc: "Modern, hand-written code. Fast, secure, search-engine friendly. No shortcuts, no compromises." },
              { step: "04", title: "Ignition", desc: "We go live, monitor everything, and make sure your launch day is the beginning of growth &mdash; not a headache." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="relative"
                data-testid={`step-${i}`}
              >
                <div className="text-7xl font-serif-display font-bold text-[#c27a4a]/40 leading-none mb-4">{item.step}</div>
                <h3 className="text-xl font-serif-display font-bold text-espresso mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEYOND WEB DESIGN ════════════════════════════════════ */}
      <section className="bg-white section-padding" data-testid="section-also">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c27a4a] block mb-4">Beyond Web Design</span>
            <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-espresso mb-6 leading-[1.1]">
              The foundation behind<br/>the <span className="italic text-[#c27a4a]">polish.</span>
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#c27a4a] to-[#5c3d2e] mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our roots run deep in the legal world. That background isn't just a footnote &mdash; it's the engine behind our relentless attention to detail, deadline discipline, and commitment to getting every single thing right.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { title: "Paralegal Support", desc: "Litigation-ready expertise for solo practitioners and boutique firms who demand excellence." },
                { title: "Transcription Precision", desc: "Every word captured with the accuracy and confidentiality your cases demand." },
              ].map((svc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="flex gap-4 items-start p-5 rounded-md bg-[#c27a4a]/5 border border-[#c27a4a]/10"
                >
                  <Shield className="w-5 h-5 text-[#c27a4a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif-display font-bold text-espresso mb-1">{svc.title}</h4>
                    <p className="text-muted-foreground text-sm">{svc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild variant="outline" data-testid="link-readydesk">
              <a href="https://readydeskservices.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.15em] inline-flex items-center gap-2">
                Explore Legal Service <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={scaleIn}
            className="bg-[#5c3d2e] text-white p-10 md:p-14 rounded-md relative overflow-visible"
          >
            <FloatingOrb className="absolute top-0 right-0 w-64 h-64 bg-[#c27a4a]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" delay={6} />
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="relative flex justify-center items-center">
                  <div className="absolute w-[220px] h-[220px] rounded-full border border-[#c27a4a]/15 animate-pulse-glow"></div>
                  <div className="absolute w-[185px] h-[185px] rounded-full border border-white/10 animate-float-slow"></div>
                  <div className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#c27a4a]/10 to-[#5c3d2e]/10 animate-float"></div>
                  <img src={logoImg} alt="RDS" className="relative w-40 h-40 object-contain drop-shadow-[0_0_60px_rgba(194,122,74,0.4)]" />
                </div>
              </div>
              <blockquote className="font-serif-display text-2xl md:text-3xl leading-relaxed mb-8 text-center italic text-white">
                "Three services, one team &mdash; customizable packages built to fit every need."
              </blockquote>
              <div className="text-sm font-bold tracking-[0.15em] uppercase text-[#c27a4a] text-center">Ready Desk Services, LLC</div>

              <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10">
                {[
                  { val: "Legal", label: "Background" },
                  { val: "Design", label: "Obsessed" },
                  { val: "Results", label: "Driven" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-serif-display font-bold text-[#c27a4a] mb-1">{s.val}</div>
                    <div className="text-[9px] uppercase tracking-wider text-white/80">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══════════════════════════════════════════ */}
      <section className="relative text-white section-padding overflow-hidden bg-gradient-to-br from-[#6b4a35] via-[#7d5940] to-[#8c6849]" data-testid="section-cta">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(194,122,74,0.12),transparent)]"></div>

        <FloatingOrb className="absolute -top-10 right-[20%] w-[350px] h-[350px] rounded-full bg-[#c27a4a]/12 blur-[110px]" delay={1} />
        <FloatingOrb className="absolute bottom-0 left-[10%] w-[250px] h-[250px] rounded-full bg-[#5c3d2e]/15 blur-[90px]" delay={3} />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c27a4a] block mb-6">Your Move</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold mb-8 leading-[1.1]">
                  The best time to launch was yesterday.<br/><span className="italic shimmer-text">The next best time is now.</span>
                </h2>
                <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  Stop blending in. Let's create a digital presence that makes people stop scrolling and start paying attention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-[#c27a4a] text-white border-[#c27a4a]" data-testid="button-cta-contact">
                    <a href="#contact" className="text-xs font-bold uppercase tracking-[0.15em]">Launch Your Project</a>
                  </Button>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ════════════════════════════════════════ */}
      <section id="contact" className="bg-[#f5ede0] section-padding" data-testid="section-contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c27a4a] block mb-4">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-espresso mb-6 leading-[1.1]">
              Have a project<br/>in <span className="italic text-[#c27a4a]">mind?</span>
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#c27a4a] to-[#5c3d2e] mb-8 rounded-full"></div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Drop us a line. We read every message personally and respond with a candid assessment of how we can help &mdash; no bots, no runaround.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <Monitor className="w-5 h-5 text-[#c27a4a]" />
                <span className="text-sm text-muted-foreground">Websites that outperform your competition</span>
              </div>
              <div className="flex gap-4 items-center">
                <Shield className="w-5 h-5 text-[#c27a4a]" />
                <span className="text-sm text-muted-foreground">Legal support with 15+ years of field depth</span>
              </div>
              <div className="flex gap-4 items-center">
                <Zap className="w-5 h-5 text-[#c27a4a]" />
                <span className="text-sm text-muted-foreground">Responsive, reliable, and refreshingly honest</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={scaleIn}>
            <div className="bg-white rounded-md p-8 md:p-10 border border-border shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] font-bold tracking-[0.15em] text-espresso/50">Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} className="bg-[#f5ede0]/50 border-border" data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] font-bold tracking-[0.15em] text-espresso/50">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@company.com" {...field} className="bg-[#f5ede0]/50 border-border" data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] font-bold tracking-[0.15em] text-espresso/50">Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us what you're building, where you're headed, and how we can help..."
                            className="min-h-[140px] bg-[#f5ede0]/50 border-border resize-none"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={createInquiry.isPending}
                    className="w-full bg-[#c27a4a] text-white text-xs font-bold uppercase tracking-[0.15em] py-6"
                    data-testid="button-submit"
                  >
                    {createInquiry.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
