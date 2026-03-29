const LocationSection = () => {
  return (
    <section className="py-32 md:py-44 px-6 border-t border-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-8xl text-foreground tracking-[-0.02em] uppercase">
          Aldea Nativa
        </h2>
        <p className="mt-4 text-[10px] md:text-xs text-muted-foreground font-body uppercase tracking-[0.4em]">
          Falda del Carmen
        </p>
        <a
          href="https://maps.app.goo.gl/kCVDvUrwGBC3ZFaY7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 px-10 py-3 border border-foreground text-foreground font-body text-[10px] uppercase tracking-[0.4em] hover:bg-foreground hover:text-background transition-all duration-300 focus:outline-none focus-visible:outline-none"
        >
          Ver en Maps
        </a>
      </div>
    </section>
  );
};

export default LocationSection;
