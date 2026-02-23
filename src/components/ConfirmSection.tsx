const ConfirmSection = () => {
  return (
    <section className="py-28 md:py-40 px-6 border-t border-border">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-tight">
          Confirmar asistencia
        </h2>
        <p className="mt-4 font-body text-foreground uppercase tracking-[0.3em] text-xs">
          Muy importante
        </p>
        <p className="mt-6 text-muted-foreground font-body leading-relaxed text-sm">
          Recordá confirmar asistencia completando el formulario que te enviamos
          por WhatsApp.
        </p>
      </div>
      <div className="mt-24 pb-8 text-center">
        <p className="text-muted-foreground/30 font-body text-[10px] uppercase tracking-[0.4em]">
          Mari & Roci · 2026
        </p>
      </div>
    </section>
  );
};

export default ConfirmSection;
