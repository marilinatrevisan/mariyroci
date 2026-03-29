const DateSection = () => {
  return (
    <section className="py-32 md:py-44 px-6 border-t border-[#f10486]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-0">
          <span className="font-display text-[clamp(7rem,25vw,18rem)] leading-[0.85] tracking-[-0.02em] text-foreground">05</span>
          <span className="font-display text-[clamp(7rem,25vw,18rem)] leading-[0.85] tracking-[-0.02em] text-foreground">12</span>
          <span className="font-display text-[clamp(7rem,25vw,18rem)] leading-[0.85] tracking-[-0.02em] text-foreground">26</span>
        </div>
        <a
          href="https://calendar.app.google/y7xxXHiH7MTuST7a9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-14 px-10 py-3 border border-foreground text-foreground font-body text-[10px] uppercase tracking-[0.4em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Agendar en Calendar
        </a>
      </div>
    </section>
  );
};

export default DateSection;
