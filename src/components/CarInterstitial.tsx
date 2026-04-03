import { motion } from "framer-motion";
import luxuryCar from "@/assets/luxury-car-interstitial.jpg";

const CarInterstitial = () => {
  return (
    <section className="w-full px-4 md:px-16 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden aspect-video md:aspect-[21/9]"
      >
        <img
          src={luxuryCar}
          alt="Luxury black sedan"
          loading="lazy"
          width={1920}
          height={768}
          className="w-full h-full object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </motion.div>
    </section>
  );
};

export default CarInterstitial;
