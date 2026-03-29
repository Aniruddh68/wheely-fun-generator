import { BarChart2, ShieldCheck } from "lucide-react";
import techDashboard from "@/assets/tech-dashboard.jpg";

const WhyWheelify = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-auto">
        {/* Precision Intelligence - large card */}
        <div className="md:col-span-8 bg-surface-low p-10 md:p-12 relative overflow-hidden flex flex-col justify-end group min-h-[300px] md:min-h-[350px] rounded-sm">
          <div className="absolute top-0 right-0 w-full h-full opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700">
            <img
              alt="Technology Dashboard"
              className="w-full h-full object-cover"
              src={techDashboard}
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-headline font-black tracking-tighter uppercase mb-4 text-primary-foreground">
              Precision Intelligence
            </h3>
            <p className="text-muted-foreground max-w-md">
              Access proprietary data sets on maintenance costs, residual value, and regional pricing across all 28 Indian states.
            </p>
          </div>
        </div>

        {/* Market Redline - red card */}
        <div className="md:col-span-4 bg-primary p-10 md:p-12 flex flex-col justify-between group cursor-default min-h-[280px] rounded-sm">
          <BarChart2 className="text-primary-foreground w-16 h-16 group-hover:rotate-12 transition-transform" />
          <div>
            <h3 className="text-2xl md:text-3xl font-headline font-black tracking-tighter uppercase text-primary-foreground mb-4">
              Market Redline
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Real-time dealer quote analysis for your specific pin code. No more guessing MSRP vs. Final price.
            </p>
          </div>
        </div>

        {/* Speed stat */}
        <div className="md:col-span-4 bg-surface-high p-8 flex flex-col items-center justify-center text-center border-t border-primary/20 rounded-sm">
          <span className="text-5xl font-headline font-black text-primary-foreground mb-2">0.2s</span>
          <span className="text-[10px] font-label text-muted-foreground tracking-widest uppercase">
            Comparison Speed
          </span>
        </div>

        {/* Verified Data Streams */}
        <div className="md:col-span-8 bg-surface-low p-8 flex items-center gap-8 border-t border-foreground/5 rounded-sm">
          <div className="w-20 h-20 rounded-full border border-primary flex items-center justify-center shrink-0">
            <ShieldCheck className="text-primary" size={28} />
          </div>
          <div>
            <h4 className="font-headline font-bold uppercase tracking-tight text-primary-foreground">
              Verified Data Streams
            </h4>
            <p className="text-sm text-muted-foreground">
              Aggregating from 200+ sources including OEM spec sheets and real-user logs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWheelify;
