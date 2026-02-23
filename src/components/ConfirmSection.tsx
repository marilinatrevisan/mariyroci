const ConfirmSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-8xl text-neon-pink glow-pink tracking-tight">
          Confirmar asistencia
        </h2>
        <p className="mt-4 font-body text-foreground uppercase tracking-[0.3em] text-sm">
          Muy importante
        </p>
        <p className="mt-6 text-muted-foreground font-body leading-relaxed">
          Recordá confirmar asistencia completando el formulario que te enviamos
          por WhatsApp.
        </p>
      </div>
      <div className="mt-16 pb-8 text-center">
        <p className="text-muted-foreground/40 font-body text-xs uppercase tracking-[0.3em]">
          Mari & Roci · 2026
        </p>
      </div>
    </section>
  );
};

export default ConfirmSection;
