import { ClipboardList, BarChart3, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Input Profile",
    desc: "Tell us your daily commute, city constraints, and fuel preferences. We model your specific usage pattern.",
    mt: "",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Deep Compare",
    desc: "Our engine simulates 5-year running costs, factoring in maintenance schedules and local fuel volatility.",
    mt: "md:mt-24",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Final Verdict",
    desc: 'Get a ranked list of vehicles with a definitive "True Cost" score. No marketing fluff, just raw data.',
    mt: "md:mt-48",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-32 relative bg-background overflow-hidden">
      <div className="text-center mb-16 md:mb-24 relative z-10">
        <span className="text-primary font-headline font-black tracking-[0.4em] uppercase text-xs mb-4 block">
          Engineered Workflow
        </span>
        <h2 className="text-4xl md:text-7xl font-headline font-black tracking-tighter uppercase text-primary-foreground">
          The Intelligence Loop
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">
        {steps.map((step) => (
          <div key={step.num} className={`relative group ${step.mt}`}>
            <span className="absolute -top-20 md:-top-32 -left-6 md:-left-12 ghost-number select-none text-[8rem] md:text-[20rem]">
              {step.num}
            </span>
            <div className="glass-card p-8 md:p-10 rounded-sm relative z-10 hover:border-primary transition-all duration-500 min-h-[280px] md:min-h-[320px] flex flex-col justify-end">
              <div className="w-12 h-12 bg-primary rounded-full mb-6 flex items-center justify-center">
                <step.icon className="text-primary-foreground" size={20} />
              </div>
              <h3 className="text-2xl font-headline font-black uppercase text-primary-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
