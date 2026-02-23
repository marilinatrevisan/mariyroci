import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-tight text-foreground">
          MARI
          <span className="block text-neon-pink glow-pink">&</span>
          ROCI
        </h1>
        <p className="mt-6 text-lg md:text-xl font-body uppercase tracking-[0.3em] text-muted-foreground">
          Nos casamos y hacemos una fiesta
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
