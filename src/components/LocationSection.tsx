const LocationSection = () => {
  return (
    <section className="py-28 md:py-40 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-tight">
          Aldea Nativa
        </h2>
        <p className="mt-3 text-sm text-muted-foreground font-body uppercase tracking-[0.3em]">
          Falda del Carmen
        </p>
        <a
          href="https://maps.app.goo.gl/kCVDvUrwGBC3ZFaY7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-8 py-3 border border-foreground text-foreground font-body text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Ver en Maps
        </a>
      </div>
    </section>
  );
};

export default LocationSection;
