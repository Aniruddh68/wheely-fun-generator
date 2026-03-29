const footerLinks = {
  Platform: ["Intelligence", "Comparison Engine", "TCO Calculator"],
  Vehicles: ["Electric", "High Performance", "Hybrid Systems"],
  Legal: ["Privacy Policy", "Terms of Service", "Press Kit"],
};

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 bg-footer font-headline uppercase overflow-hidden">
      <div className="h-px bg-primary w-full absolute top-0" />

      <div className="flex flex-col items-center w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full mb-20 px-4 md:px-8">
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-black text-primary-foreground tracking-tighter">
              Wheelify<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-muted-foreground normal-case leading-relaxed font-body">
              The new benchmark in automotive selection. Engineered for performance, designed for clarity.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h5 className="text-primary-foreground font-bold text-sm tracking-widest">{category}</h5>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a className="text-muted-foreground hover:text-primary transition-colors text-xs" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant brand text */}
        <div className="w-full relative py-10">
          <span className="text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter text-center w-full block text-gradient-fade select-none">
            WHEELIFY
          </span>
          <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-primary font-black tracking-[0.3em] text-sm md:text-lg whitespace-nowrap">
              Drive Smarter. Decide Better.
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-10 text-[10px] text-muted-foreground tracking-widest gap-4">
          <p>© 2024 WHEELIFY PERFORMANCE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-1 font-body normal-case">
            Made with <span className="text-primary">❤️</span> for India
          </div>
          <div className="flex gap-8">
            <a className="hover:text-primary-foreground transition-colors" href="#">INSTAGRAM</a>
            <a className="hover:text-primary-foreground transition-colors" href="#">TWITTER</a>
            <a className="hover:text-primary-foreground transition-colors" href="#">YOUTUBE</a>
          </div>
        </div>
      </div>

      <div className="h-px bg-primary w-full absolute bottom-0" />
    </footer>
  );
};

export default Footer;
