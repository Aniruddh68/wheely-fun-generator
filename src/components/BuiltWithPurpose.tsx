import vehicleCar1 from "@/assets/vehicle-car-1.jpg";
import vehicleBike1 from "@/assets/vehicle-bike-1.jpg";
import vehicleEv1 from "@/assets/vehicle-ev-1.jpg";
import vehicleCar2 from "@/assets/vehicle-car-2.jpg";
import vehicleTruck1 from "@/assets/vehicle-truck-1.jpg";
import vehicleBike2 from "@/assets/vehicle-bike-2.jpg";

const vehicles = [
  { src: vehicleCar1, alt: "Sports car", label: "SPORTS", rotate: -4, z: 40, top: "0%", left: "5%", w: "55%", h: "48%" },
  { src: vehicleBike1, alt: "Sport bike", label: "SUPERBIKE", rotate: 3, z: 25, top: "2%", left: "55%", w: "42%", h: "35%" },
  { src: vehicleEv1, alt: "Electric SUV", label: "EV", rotate: -1, z: 35, top: "34%", left: "52%", w: "46%", h: "38%" },
  { src: vehicleCar2, alt: "Luxury sedan", label: "LUXURY", rotate: 2, z: 20, top: "50%", left: "0%", w: "40%", h: "35%" },
  { src: vehicleTruck1, alt: "Commercial truck", label: "COMMERCIAL", rotate: -3, z: 15, top: "70%", left: "35%", w: "32%", h: "30%" },
  { src: vehicleBike2, alt: "Cruiser bike", label: "CRUISER", rotate: 1, z: 30, top: "65%", left: "62%", w: "36%", h: "34%" },
];

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

        {/* 3D Floating Vehicle Cards */}
        <div className="w-full md:w-1/2 relative" style={{ perspective: "1200px", height: "520px" }}>
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="absolute rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-50"
              style={{
                top: v.top,
                left: v.left,
                width: v.w,
                height: v.h,
                transform: `rotate(${v.rotate}deg) translateZ(${v.z}px)`,
                boxShadow: `0 ${v.z}px ${v.z * 1.5}px rgba(0,0,0,0.7), 0 0 ${v.z}px rgba(255,26,26,0.06)`,
                transformStyle: "preserve-3d",
                zIndex: v.z,
              }}
            >
              <img
                alt={v.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={v.src}
                loading="lazy"
                width={640}
                height={640}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
              {/* Label */}
              <span className="absolute bottom-2 left-3 text-[9px] font-label tracking-[0.2em] uppercase text-primary-foreground/70 group-hover:text-primary transition-colors duration-300">
                {v.label}
              </span>
              {/* Border */}
              <div className="absolute inset-0 border border-foreground/10 rounded-xl group-hover:border-primary/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltWithPurpose;
