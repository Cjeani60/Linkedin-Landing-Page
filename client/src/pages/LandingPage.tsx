import { motion } from "framer-motion";
import { Globe, Palette, Smartphone, Zap, CheckCircle2, ArrowRight, ExternalLink, Monitor, Code, Layers, Sparkles, Shield, Clock } from "lucide-react";
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
import officeImg from "@assets/image_1771363205037.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" } })
};

export default function LandingPage() {
  const createInquiry = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, { onSuccess: () => form.reset() });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/20">
      <Navigation />

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="section-hero">
        <img src={officeImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/95 via-[#1a1410]/85 to-[#1a1410]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-[#1a1410]/40"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-[#b8922a] to-transparent"></div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b8922a]">
                    Paralegal &middot; Transcription &middot; Web Design
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial="hidden" animate="visible" custom={1} variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-[72px] font-serif-display font-bold leading-[1.05] mb-8 text-white"
              >
                Your startup deserves a{" "}
                <span className="italic text-[#b8922a]">stunning</span>{" "}
                digital presence.
              </motion.h1>

              <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp} className="w-20 h-[3px] bg-gradient-to-r from-[#b8922a] to-[#d4a93a] mb-8"></motion.div>

              <motion.p
                initial="hidden" animate="visible" custom={3} variants={fadeUp}
                className="text-lg md:text-xl text-white/50 leading-relaxed max-w-xl mb-12 font-light"
              >
                Beautifully crafted, professionally built websites designed with intention &mdash; at a fraction of the cost. Start small and grow, or launch with everything you need.
              </motion.p>

              <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#b8922a] text-white border-[#b8922a]" data-testid="button-hero-getstarted">
                  <a href="#contact" className="text-xs font-bold uppercase tracking-[0.15em]">Get Started Today</a>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white/70 backdrop-blur-sm bg-white/5" data-testid="button-hero-learnmore">
                  <a href="#web-design" className="text-xs font-bold uppercase tracking-[0.15em] inline-flex items-center gap-2">See Our Work <ArrowRight className="w-4 h-4" /></a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#b8922a]/20 to-transparent rounded-full blur-[80px]"></div>
              <img src={logoImg} alt="Ready Desk Services" className="relative w-80 h-80 object-contain drop-shadow-[0_0_60px_rgba(184,146,42,0.3)]" data-testid="img-hero-logo" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-20 pt-10 border-t border-white/5"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "15+", label: "Years Legal Experience" },
                { val: "ABA", label: "Approved Program" },
                { val: "3", label: "Core Services" },
                { val: "$", label: "Startup Friendly Pricing" },
              ].map((stat, i) => (
                <div key={i} className="text-center" data-testid={`stat-item-${i}`}>
                  <div className="text-3xl font-serif-display font-bold text-[#b8922a] mb-1">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ALSO OFFERING STRIP ════════════════════════════════════ */}
      <div className="w-full bg-gradient-to-r from-[#b8922a] to-[#d4a93a] py-4 overflow-hidden">
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 px-6">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-white/80" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">Paralegal Services</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-white/80" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">Transcription Services</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-white" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white">Web Design & Development</span>
          </div>
        </div>
      </div>

      {/* ═══ WEB DESIGN & DEVELOPMENT ════════════════════════════ */}
      <section id="web-design" className="bg-background section-padding" data-testid="section-webdesign">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b8922a] block mb-4">Web Design & Development</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold text-espresso mb-6 leading-[1.1]">
                Built for startups.<br/>Designed to <span className="italic text-[#b8922a]">impress.</span>
              </h2>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#b8922a] to-[#d4a93a] mx-auto mb-8"></div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every startup deserves a website that looks like a million dollars &mdash; without costing like one. We create digital experiences that are intentional, beautiful, and built to grow with your business.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Custom Design",
                desc: "No templates, no shortcuts. Every pixel is placed with purpose to reflect your brand's unique identity and vision.",
                tags: ["Brand Identity", "Visual Design", "Color Theory"]
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile-First Build",
                desc: "Your customers are on their phones. We design for mobile first, then scale up beautifully to every screen size.",
                tags: ["Responsive", "Cross-Browser", "Fast Loading"]
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Clean Code",
                desc: "Built with modern technologies that are fast, secure, and easy to maintain. No bloated frameworks slowing you down.",
                tags: ["Modern Stack", "SEO Ready", "Performance"]
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Scalable Solutions",
                desc: "Start with a landing page today, expand to a full platform tomorrow. Our architecture grows with your ambitions.",
                tags: ["Start Small", "Build Up", "Future-Ready"]
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Turnaround",
                desc: "We understand startup timelines. Get a polished, professional website up and running when you need it &mdash; not months from now.",
                tags: ["Quick Launch", "Agile Process", "On Schedule"]
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Intentional UX",
                desc: "Every interaction is designed to guide your visitors toward action. Beautiful design that actually converts.",
                tags: ["User Research", "Conversion", "Accessibility"]
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group relative p-8 rounded-md bg-white border border-border hover-elevate"
                data-testid={`card-service-${i}`}
              >
                <div className="w-14 h-14 rounded-md bg-[#b8922a]/10 flex items-center justify-center text-[#b8922a] mb-6 transition-colors duration-300 group-hover:bg-[#b8922a] group-hover:text-white">
                  {card.icon}
                </div>
                <h3 className="text-xl font-serif-display font-bold text-espresso mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#f5ede0] text-espresso/60 text-[10px] uppercase tracking-[0.1em] font-bold rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING / APPROACH ════════════════════════════════ */}
      <section className="bg-[#1a1410] text-white section-padding relative overflow-hidden" data-testid="section-approach">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#b8922a] blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b8922a] block mb-4">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-serif-display font-bold mb-6 leading-[1.1]">
                Expert design,<br/><span className="italic text-[#b8922a]">startup pricing.</span>
              </h2>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#b8922a] to-[#d4a93a] mb-8"></div>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                We believe exceptional design shouldn't be reserved for companies with deep pockets. With 15 years of professional experience and the precision that comes from our legal background, we deliver work that rivals top agencies &mdash; at a price point that makes sense for startups.
              </p>

              <div className="space-y-6">
                {[
                  "Start with a single page and add more as you grow",
                  "Full website packages with branding, copy, and launch strategy",
                  "Ongoing support and updates as your business evolves",
                  "No hidden fees, no surprises &mdash; transparent pricing from day one",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#b8922a]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b8922a]" />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: text }}></p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
              <div className="bg-white/5 border border-white/10 rounded-md p-10 backdrop-blur-sm">
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b8922a] mb-6">Flexible Options</div>
                <div className="space-y-8">
                  {[
                    { title: "Landing Page", desc: "A single, stunning page to launch your idea and start collecting leads. Perfect for MVPs and coming-soon launches.", price: "Starting at $500" },
                    { title: "Starter Website", desc: "A multi-page site with custom design, mobile optimization, and SEO foundations. Everything a new business needs.", price: "Starting at $1,500" },
                    { title: "Full Digital Presence", desc: "Complete branding, website, content strategy, and ongoing support. The full package for serious startups ready to compete.", price: "Custom Quote" },
                  ].map((tier, i) => (
                    <div key={i} className="pb-8 border-b border-white/5 last:border-b-0 last:pb-0" data-testid={`tier-${i}`}>
                      <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
                        <h3 className="font-serif-display text-xl font-bold text-white">{tier.title}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#b8922a] whitespace-nowrap">{tier.price}</span>
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">{tier.desc}</p>
                    </div>
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
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b8922a] block mb-4">How It Works</span>
              <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-espresso mb-6">
                Simple process,<br/><span className="italic text-[#b8922a]">exceptional results.</span>
              </h2>
              <div className="w-16 h-[3px] bg-gradient-to-r from-[#b8922a] to-[#d4a93a] mx-auto mb-8"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, your audience, and what makes you different. No questionnaires &mdash; a real conversation." },
              { step: "02", title: "Design", desc: "We create mockups that capture your brand's essence. You'll see your vision come to life before a single line of code is written." },
              { step: "03", title: "Build", desc: "Clean, modern code that's fast, secure, and built to last. We handle all the technical details so you can focus on your business." },
              { step: "04", title: "Launch", desc: "We deploy, test, and make sure everything is perfect. Then we hand you the keys and show you how to keep it running." },
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
                <div className="text-7xl font-serif-display font-bold text-[#b8922a]/10 leading-none mb-4">{item.step}</div>
                <h3 className="text-xl font-serif-display font-bold text-espresso mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALSO PARALEGAL & TRANSCRIPTION ════════════════════ */}
      <section className="bg-white section-padding" data-testid="section-also">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b8922a] block mb-4">Also Available</span>
            <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-espresso mb-6 leading-[1.1]">
              Legal expertise<br/>that powers <span className="italic text-[#b8922a]">everything</span> we do.
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#b8922a] to-[#d4a93a] mb-8"></div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready Desk Services was built on 15 years of paralegal and transcription work for solo practitioners and small law firms. That same precision, confidentiality, and attention to detail is the foundation of every website we design.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { title: "Paralegal Services", desc: "Trial preparation, document drafting, case management, and litigation support." },
                { title: "Transcription Services", desc: "Accurate, confidential transcription of depositions, hearings, and client interviews." },
              ].map((svc, i) => (
                <div key={i} className="flex gap-4 items-start p-5 rounded-md bg-[#f5ede0]/60 border border-border">
                  <Shield className="w-5 h-5 text-[#b8922a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif-display font-bold text-espresso mb-1">{svc.title}</h4>
                    <p className="text-muted-foreground text-sm">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" data-testid="link-readydesk">
              <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.15em] inline-flex items-center gap-2">
                Visit ReadyDesk.com <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="bg-[#1a1410] text-white p-10 md:p-14 rounded-md relative overflow-visible"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8922a]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <img src={logoImg} alt="RDS" className="w-24 h-24 object-contain opacity-60" />
              </div>
              <blockquote className="font-serif-display text-2xl md:text-3xl leading-relaxed mb-8 text-center italic text-white/80">
                "We sweat the small stuff &mdash; so you don't have to."
              </blockquote>
              <div className="text-sm font-bold tracking-[0.15em] uppercase text-[#b8922a] text-center">Ready Desk Services, LLC</div>

              <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-serif-display font-bold text-[#b8922a] mb-1">15+</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/30">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif-display font-bold text-[#b8922a] mb-1">ABA</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/30">Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif-display font-bold text-[#b8922a] mb-1">ΛΕΧ</div>
                  <div className="text-[9px] uppercase tracking-wider text-white/30">Honor Soc.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-[#1a1410] via-[#2a1f14] to-[#1a1410] text-white section-padding relative overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -top-20 right-1/4 w-[400px] h-[400px] rounded-full bg-[#b8922a] blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#6b4f38] blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b8922a] block mb-6">Ready to Stand Out?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold mb-8 leading-[1.1]">
              Let's build something<br/><span className="italic text-[#b8922a]">remarkable</span> together.
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Whether you need a simple landing page to test an idea or a complete digital presence to launch your brand &mdash; we're here to make it happen, beautifully and affordably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#b8922a] text-white border-[#b8922a]" data-testid="button-cta-contact">
                <a href="#contact" className="text-xs font-bold uppercase tracking-[0.15em]">Start Your Project</a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white/70 backdrop-blur-sm bg-white/5" data-testid="button-cta-website">
                <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.15em] inline-flex items-center gap-2">
                  Explore All Services <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ════════════════════════════════════════ */}
      <section id="contact" className="bg-[#f5ede0] section-padding" data-testid="section-contact">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#b8922a] block mb-4">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-espresso mb-6 leading-[1.1]">
              Tell us about<br/>your <span className="italic text-[#b8922a]">vision.</span>
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#b8922a] to-[#d4a93a] mb-8"></div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Share a few details about your project and we'll get back to you with a clear plan and honest pricing. No sales pitches &mdash; just real answers.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <Monitor className="w-5 h-5 text-[#b8922a]" />
                <span className="text-sm text-muted-foreground">Web design & development for startups</span>
              </div>
              <div className="flex gap-4 items-center">
                <Shield className="w-5 h-5 text-[#b8922a]" />
                <span className="text-sm text-muted-foreground">Paralegal & transcription services</span>
              </div>
              <div className="flex gap-4 items-center">
                <Zap className="w-5 h-5 text-[#b8922a]" />
                <span className="text-sm text-muted-foreground">Quick turnaround, transparent pricing</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
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
                            placeholder="Tell us about your project, timeline, and budget..."
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
                    className="w-full bg-[#1a1410] text-white text-xs font-bold uppercase tracking-[0.15em] py-6"
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
