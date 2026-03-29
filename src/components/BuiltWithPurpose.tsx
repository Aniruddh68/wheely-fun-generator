import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const BuiltWithPurpose = () => {
  return (
    <section className="py-24 md:py-32 px-8 md:px-32 bg-background border-y border-foreground/5">
      <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-headline font-black tracking-tighter uppercase text-primary-foreground mb-8">
            Built With <br />
            <span className="text-primary">Purpose.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
            Wheelify was founded by automotive engineers and data scientists who realized the car buying process was broken. We don't take commissions from dealers. Our only loyalty is to the data.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="block text-primary-foreground font-headline font-bold text-2xl mb-1">20+</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-label">
                Data Scientists
              </span>
            </div>
            <div>
              <span className="block text-primary-foreground font-headline font-bold text-2xl mb-1">100%</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-label">
                Independent
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="aspect-square bg-surface-container rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all">
            <img alt="Team member" className="w-full h-full object-cover" src={team1} loading="lazy" width={640} height={640} />
          </div>
          <div className="aspect-square bg-surface-container rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all mt-8">
            <img alt="Team member" className="w-full h-full object-cover" src={team2} loading="lazy" width={640} height={640} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWithPurpose;
