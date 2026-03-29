const ConfirmSection = () => {
  return (
    <section className="py-32 md:py-44 px-6 border-t border-primary">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-6xl md:text-8xl text-foreground tracking-[-0.02em] uppercase">
          Confirmar asistencia
        </h2>
        <p className="mt-5 font-body text-foreground uppercase tracking-[0.4em] text-[10px]">
          Muy importante
        </p>
        <p className="mt-8 text-muted-foreground font-body leading-relaxed text-sm">
          Recordá confirmar asistencia completando el formulario que te enviamos
          por WhatsApp.
        </p>
      </div>
      <div className="mt-28 pb-10 text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.5em] text-[#d869a6]">
          Mari & Roci · 2026
        </p>
      </div>
    </section>
  );
};

export default ConfirmSection;
