const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-[clamp(5rem,18vw,14rem)] leading-[0.85] tracking-tight text-foreground">
          MARI
          <span className="block text-muted-foreground">&</span>
          ROCI
        </h1>
        <p className="mt-8 text-sm md:text-base font-body uppercase tracking-[0.4em] text-muted-foreground">
          Nos casamos y hacemos una fiesta
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
