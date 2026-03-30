import { BarChart2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import techDashboard from "@/assets/tech-dashboard.jpg";

const WhyWheelify = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-background" style={{ perspective: "1200px" }}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-auto">
        {/* Precision Intelligence */}
        <motion.div
          className="md:col-span-8 bg-surface-low p-10 md:p-12 relative overflow-hidden flex flex-col justify-end group min-h-[300px] md:min-h-[350px] rounded-sm"
          initial={{ opacity: 0, x: -40, rotateY: -5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          whileHover={{ rotateY: 2, scale: 1.01, boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700">
            <img alt="Technology Dashboard" className="w-full h-full object-cover" src={techDashboard} loading="lazy" width={1280} height={720} />
          </div>
          <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-3xl md:text-4xl font-headline font-black tracking-tighter uppercase mb-4 text-primary-foreground">
              Precision Intelligence
            </h3>
            <p className="text-muted-foreground max-w-md">
              Access proprietary data sets on maintenance costs, residual value, and regional pricing across all 28 Indian states.
            </p>
          </div>
        </motion.div>

        {/* Market Redline */}
        <motion.div
          className="md:col-span-4 bg-primary p-10 md:p-12 flex flex-col justify-between group cursor-default min-h-[280px] rounded-sm"
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          whileHover={{ rotateX: -3, rotateY: 3, scale: 1.03, boxShadow: "0 30px 80px rgba(255,26,26,0.3)" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div whileHover={{ rotateZ: 12 }} transition={{ type: "spring", stiffness: 200 }}>
            <BarChart2 className="text-primary-foreground w-16 h-16" />
          </motion.div>
          <div style={{ transform: "translateZ(20px)" }}>
            <h3 className="text-2xl md:text-3xl font-headline font-black tracking-tighter uppercase text-primary-foreground mb-4">
              Market Redline
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Real-time dealer quote analysis for your specific pin code. No more guessing MSRP vs. Final price.
            </p>
          </div>
        </motion.div>

        {/* Speed stat */}
        <motion.div
          className="md:col-span-4 bg-surface-high p-8 flex flex-col items-center justify-center text-center border-t border-primary/20 rounded-sm"
          initial={{ opacity: 0, scale: 0.85, rotateY: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          whileHover={{ rotateY: -5, scale: 1.05, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="text-5xl font-headline font-black text-primary-foreground mb-2" style={{ transform: "translateZ(25px)" }}>0.2s</span>
          <span className="text-[10px] font-label text-muted-foreground tracking-widest uppercase">
            Comparison Speed
          </span>
        </motion.div>

        {/* Verified Data Streams */}
        <motion.div
          className="md:col-span-8 bg-surface-low p-8 flex items-center gap-8 border-t border-foreground/5 rounded-sm"
          initial={{ opacity: 0, x: 40, rotateY: 5 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          whileHover={{ rotateY: -2, scale: 1.01, boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="w-20 h-20 rounded-full border border-primary flex items-center justify-center shrink-0"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <ShieldCheck className="text-primary" size={28} />
          </motion.div>
          <div style={{ transform: "translateZ(15px)" }}>
            <h4 className="font-headline font-bold uppercase tracking-tight text-primary-foreground">
              Verified Data Streams
            </h4>
            <p className="text-sm text-muted-foreground">
              Aggregating from 200+ sources including OEM spec sheets and real-user logs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWheelify;
