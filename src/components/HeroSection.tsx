const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-[clamp(6rem,20vw,16rem)] leading-[0.82] tracking-[-0.02em] text-foreground uppercase">
          MARI
          <span className="block text-muted-foreground text-[0.5em] leading-[1.6]">&</span>
          ROCI
        </h1>
        <p className="mt-10 text-[10px] md:text-xs font-body uppercase tracking-[0.5em] text-muted-foreground">
          Nos casamos y hacemos una fiesta
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
