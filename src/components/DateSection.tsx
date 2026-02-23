const DateSection = () => {
  return (
    <section className="py-28 md:py-40 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-6 md:gap-12">
          <span className="font-display text-[clamp(5rem,20vw,14rem)] leading-none text-foreground">05</span>
          <span className="font-display text-[clamp(2rem,5vw,4rem)] leading-none text-muted-foreground">·</span>
          <span className="font-display text-[clamp(5rem,20vw,14rem)] leading-none text-foreground">12</span>
          <span className="font-display text-[clamp(2rem,5vw,4rem)] leading-none text-muted-foreground">·</span>
          <span className="font-display text-[clamp(5rem,20vw,14rem)] leading-none text-foreground">26</span>
        </div>
        <a
          href="https://calendar.app.google/y7xxXHiH7MTuST7a9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 px-8 py-3 border border-foreground text-foreground font-body text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Agendar en Calendar
        </a>
      </div>
    </section>
  );
};

export default DateSection;
