import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ServiceCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  isNew?: boolean;
  delay?: number;
}

export default function ServiceCard({ number, icon, title, description, tags, isNew, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative p-8 rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isNew ? 'bg-white border-gold/30 shadow-lg shadow-gold/5' : 'bg-white border-border shadow-sm'}`}
    >
      {isNew && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
          New
        </div>
      )}
      
      <div className="text-6xl font-serif-display text-espresso/5 font-bold absolute top-4 right-6 pointer-events-none select-none">
        {number}
      </div>

      <div className="text-4xl mb-6">{icon}</div>
      
      <h3 className="text-2xl font-serif-display font-bold text-espresso mb-4 leading-tight">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed text-sm mb-8">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-sand-bg text-espresso/70 text-[10px] uppercase tracking-wider font-bold rounded-sm">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
