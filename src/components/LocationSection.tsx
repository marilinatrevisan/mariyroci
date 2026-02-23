const LocationSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-tight">
          Aldea Nativa
        </h2>
        <p className="mt-2 text-lg text-muted-foreground font-body">
          Falda del Carmen
        </p>
        <a
          href="https://maps.app.goo.gl/kCVDvUrwGBC3ZFaY7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-8 py-3 border border-foreground text-foreground font-body text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Ver en Maps
        </a>
      </div>
    </section>
  );
};

export default LocationSection;
