import { motion } from "framer-motion";
import { Scale, Mic, Laptop, CheckCircle2, Quote, ArrowRight, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const createInquiry = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-[hsl(33,24%,97%)] text-espresso selection:bg-gold/20">
      <Navigation />

      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-block px-3 py-1 mb-6 border border-gold/30 rounded-full bg-gold/5">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold">
                Legal & Administrative Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif-display font-bold leading-[1.1] mb-8 text-espresso">
              Precision. Partnership.<br/>
              <span className="italic text-gold">Peace of mind.</span>
            </h1>

            <div className="w-20 h-1 bg-gold mb-8"></div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 font-light">
              Attorney support that thinks like a lawyer and works like a partner. From trial-ready paralegal services to accurate transcription — and now, the digital presence your practice deserves.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Visit Our Website
              </a>
              <a href="#services" className="btn-outline text-center">
                Our Services
              </a>
            </div>
          </motion.div>

          {/* Right Column - Credibility Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gold/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-espresso text-white p-10 rounded-xl shadow-2xl shadow-espresso/20 border border-white/10">
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold/80 mb-8 border-b border-white/10 pb-4">
                Professional Credentials
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-colors">
                    <Scale className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-serif-display text-xl font-bold mb-1">ABA-Approved</div>
                    <div className="text-sm text-white/60 leading-relaxed">Graduate of an ABA-approved paralegal program with a B.S. in Paralegal Studies.</div>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-serif-display text-xl font-bold mb-1">15 Years Experience</div>
                    <div className="text-sm text-white/60 leading-relaxed">I know the pace, the pressure, and the details that matter in the legal field.</div>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-colors">
                    <div className="font-serif-display font-bold text-gold text-sm">ΛΕΧ</div>
                  </div>
                  <div>
                    <div className="font-serif-display text-xl font-bold mb-1">Honor Society</div>
                    <div className="text-sm text-white/60 leading-relaxed">Recognized by Lambda Epsilon Chi — National Paralegal Honor Society.</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="font-serif-display italic text-lg text-white/80">
                  "When cost, security, confidentiality, and getting it right counts — call us."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICE STRIP ════════════════════════════════════════ */}
      <div className="w-full bg-white border-y border-border py-6 overflow-hidden">
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 px-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-espresso/20"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-espresso/70">Paralegal Services</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-espresso/20"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-espresso/70">Transcription Services</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-espresso">Web Design & Development</span>
            <span className="text-[9px] font-bold uppercase bg-gold text-white px-2 py-0.5 rounded-full ml-1">New</span>
          </div>
        </div>
      </div>

      {/* ═══ SERVICES ════════════════════════════════════════════ */}
      <section id="services" className="bg-sand-bg section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold block mb-4">What We Offer</span>
            <h2 className="text-4xl md:text-5xl text-espresso mb-6">Three ways we show up<br/>for your practice</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready Desk Services brings the experience, attention to detail, and confidentiality that solo practitioners and small firms deserve — at every stage of their work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              number="01"
              icon={<Scale className="w-10 h-10 text-espresso" />}
              title="Paralegal Services"
              description="Trial preparation, document drafting, case management, and litigation support — handled by someone who has lived inside law firms for 15 years and knows what attorneys actually need."
              tags={["Personal Injury", "Civil Litigation", "Trial Prep", "Drafting"]}
              delay={0}
            />
            <ServiceCard 
              number="02"
              icon={<Mic className="w-10 h-10 text-espresso" />}
              title="Transcription Services"
              description="Accurate, confidential transcription of depositions, hearings, client interviews, and recorded dictation. Every word captured correctly — because precision in the record is non-negotiable."
              tags={["Depositions", "Hearings", "Interviews", "Dictation"]}
              delay={0.1}
            />
            <ServiceCard 
              number="03"
              icon={<Laptop className="w-10 h-10 text-gold" />}
              title="Web Design"
              description="A professional online presence built by someone who understands the legal world. Clean, credible websites that attract the right clients — with the same precision we bring to every matter."
              tags={["Law Firm Sites", "Custom Design", "Mobile Ready", "Identity"]}
              isNew={true}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ═══════════════════════════════════════════ */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold block mb-4">Why Ready Desk Services</span>
            <h2 className="text-4xl md:text-5xl text-espresso mb-6">You need more than<br/>just support staff</h2>
            <div className="w-16 h-1 bg-gold mb-10"></div>
            
            <div className="space-y-10">
              {[
                { num: "01", title: "No supervision required", desc: "C.J. brings 15 years of legal field experience. You explain the matter once and it gets done right — without hand-holding." },
                { num: "02", title: "Confidentiality as a standard", desc: "Every matter is treated with strict discretion. Your client files, recordings, and case details are always protected." },
                { num: "03", title: "Built for small firms & solos", desc: "You don't need a 10-person firm's overhead. You need a reliable partner who scales with your caseload and shows up when it matters." },
                { num: "04", title: "Detail-oriented, always", desc: "ABA-approved training and Honor Society recognition reflect a standard that carries into every document, transcript, and deliverable." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="font-serif-display text-2xl font-bold text-gold/40">{item.num}</div>
                  <div>
                    <h3 className="font-serif-display text-xl font-bold text-espresso mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-espresso text-white p-10 md:p-14 rounded-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 text-center">
              <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
              <blockquote className="font-serif-display text-2xl md:text-3xl leading-relaxed mb-8">
                "When cost, security, confidentiality, and getting it right counts — call us."
              </blockquote>
              <div className="text-sm font-bold tracking-widest uppercase text-gold">— C.J., Ready Desk Services, LLC</div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-serif-display font-bold text-gold mb-1">15+</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Years Legal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif-display font-bold text-gold mb-1">ABA</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif-display font-bold text-gold mb-1">ΛΕΧ</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Honor Soc.</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif-display font-bold text-gold mb-1">3</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Core Svcs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ WEB DESIGN SPOTLIGHT ════════════════════════════════ */}
      <section className="bg-sand-bg section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side (Browser Mockup) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="bg-white rounded-xl shadow-[0_24px_56px_rgba(42,31,20,0.12)] border border-[#e8e0d4] overflow-hidden relative z-10">
              <div className="bg-[#e8e0d4]/50 px-4 py-3 flex items-center gap-2 border-b border-[#e0ccb4]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e87070]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#e8c070]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#70c870]"></div>
                <div className="flex-1 ml-2 bg-white rounded-md px-3 py-1 text-[10px] text-muted-foreground font-mono">
                  yourlawfirm.com
                </div>
              </div>
              <div className="p-6 bg-white min-h-[340px]">
                {/* Mock Content */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-20 h-2.5 bg-sand-bg rounded-full"></div>
                  <div className="flex gap-2">
                    <div className="w-8 h-2 bg-sand-bg rounded-sm"></div>
                    <div className="w-8 h-2 bg-sand-bg rounded-sm"></div>
                    <div className="w-8 h-2 bg-sand-bg rounded-sm"></div>
                  </div>
                </div>
                <div className="bg-sand-bg/50 rounded-lg p-6 mb-4 text-center">
                  <div className="w-3/4 h-3 bg-sand-pale mx-auto rounded-sm mb-2"></div>
                  <div className="w-1/2 h-3 bg-sand-pale mx-auto rounded-sm mb-4"></div>
                  <div className="w-24 h-6 bg-espresso mx-auto rounded-sm"></div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-sand-bg/30 p-3 rounded-md">
                      <div className="w-full h-1.5 bg-gold/40 mb-2 rounded-full"></div>
                      <div className="w-full h-1 bg-sand-pale mb-1 rounded-full"></div>
                      <div className="w-2/3 h-1 bg-sand-pale rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-lg shadow-xl shadow-gold/30 z-20"
            >
              <span className="block text-[9px] font-bold uppercase tracking-widest opacity-80 mb-1">Now Offering</span>
              <div className="font-serif-display font-bold text-lg leading-tight">Web Design &<br/>Development</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold block mb-4">Expanding Our Services</span>
            <h2 className="text-4xl md:text-5xl text-espresso mb-6">Your firm deserves a website that works as hard as you do</h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            
            <div className="bg-gold/10 border-l-2 border-gold p-5 rounded-r-sm text-brown mb-10 text-sm leading-relaxed">
              A strong online presence isn't optional anymore — it's how clients find you, evaluate you, and decide to call you. We build websites that make that first impression count.
            </div>

            <div className="space-y-6 mb-10">
              {[
                "Designed for legal professionals — we understand your audience and tone.",
                "Mobile-responsive and search-ready — built to perform on every device.",
                "Clean, credible, and on-brand — reflecting professionalism and trust.",
                "The same attention to detail you expect from our paralegal services."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-espresso flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm text-brown leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Learn More <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══════════════════════════════════════════ */}
      <section className="bg-espresso text-white relative overflow-hidden section-padding">
        {/* Decorative Circles */}
        <div className="absolute -top-20 right-40 w-80 h-80 bg-brown rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brown-mid rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold block mb-4">Ready to work together?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-display font-bold mb-6">Let's talk about what<br/>your practice needs.</h2>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-lg">
              Whether you need paralegal support for a complex PI matter, accurate transcription under a tight deadline, or a website that finally reflects the quality of your work — we're ready.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="btn-primary w-full md:w-auto text-center">
              Visit ReadyDesk.com
            </a>
            <a href="https://readydesk.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT FORM ════════════════════════════════════════ */}
      <section id="contact" className="bg-white section-padding">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold block mb-4">Direct Message</span>
            <h2 className="text-3xl md:text-4xl text-espresso mb-4">Send us a message</h2>
            <div className="w-12 h-1 bg-gold mx-auto"></div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold tracking-wider text-espresso/60">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Full Name" {...field} className="bg-sand-bg border-border h-12" />
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
                    <FormLabel className="uppercase text-xs font-bold tracking-wider text-espresso/60">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} className="bg-sand-bg border-border h-12" />
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
                    <FormLabel className="uppercase text-xs font-bold tracking-wider text-espresso/60">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="min-h-[120px] bg-sand-bg border-border resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold-lt text-white font-bold tracking-widest uppercase py-6"
                disabled={createInquiry.isPending}
              >
                {createInquiry.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
