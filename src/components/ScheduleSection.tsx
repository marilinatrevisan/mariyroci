const scheduleItems = [
  { time: "19 HS", label: "Ceremonia" },
  { time: "23 HS", label: "Fiesta" },
  { time: "05 HS", label: "Fin de fiesta" },
];

const ScheduleSection = () => {
  return (
    <section className="py-32 md:py-44 px-6 border-t border-primary">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12 md:space-y-0 md:flex md:justify-between md:items-baseline">
          {scheduleItems.map((item) => (
            <div key={item.label} className="text-center">
              <span className="font-display text-6xl md:text-8xl text-foreground tracking-[-0.02em]">
                {item.time}
              </span>
              <p className="mt-3 text-muted-foreground font-body uppercase tracking-[0.4em] text-[10px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
