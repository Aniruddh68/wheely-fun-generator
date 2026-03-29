import vehicleCar1 from "@/assets/vehicle-car-1.jpg";
import vehicleBike1 from "@/assets/vehicle-bike-1.jpg";
import vehicleEv1 from "@/assets/vehicle-ev-1.jpg";
import vehicleCar2 from "@/assets/vehicle-car-2.jpg";
import vehicleTruck1 from "@/assets/vehicle-truck-1.jpg";
import vehicleBike2 from "@/assets/vehicle-bike-2.jpg";

const vehicles = [
  { src: vehicleCar1, alt: "Sports car", style: "col-span-2 row-span-2", rotate: "-3deg", z: 30 },
  { src: vehicleBike1, alt: "Sport bike", style: "col-span-1 row-span-1", rotate: "2deg", z: 20 },
  { src: vehicleEv1, alt: "Electric SUV", style: "col-span-1 row-span-2", rotate: "-1deg", z: 25 },
  { src: vehicleCar2, alt: "Luxury sedan", style: "col-span-1 row-span-1", rotate: "3deg", z: 15 },
  { src: vehicleTruck1, alt: "Commercial truck", style: "col-span-1 row-span-1", rotate: "-2deg", z: 10 },
  { src: vehicleBike2, alt: "Cruiser bike", style: "col-span-2 row-span-1", rotate: "1deg", z: 20 },
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

        {/* 3D Mosaic Vehicle Grid */}
        <div className="w-full md:w-1/2" style={{ perspective: "1000px" }}>
          <div className="grid grid-cols-3 grid-rows-3 gap-3 auto-rows-[120px]">
            {vehicles.map((v, i) => (
              <div
                key={i}
                className={`${v.style} rounded-lg overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105`}
                style={{
                  transform: `rotate(${v.rotate}) translateZ(${v.z}px)`,
                  boxShadow: `0 ${v.z / 2}px ${v.z}px rgba(0,0,0,0.6), 0 0 20px rgba(255,26,26,0.08)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    alt={v.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={v.src}
                    loading="lazy"
                    width={640}
                    height={640}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute inset-0 border border-foreground/10 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltWithPurpose;
