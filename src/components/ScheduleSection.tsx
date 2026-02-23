const scheduleItems = [
  { time: "19 HS", label: "Ceremonia" },
  { time: "23 HS", label: "Fiesta" },
  { time: "05 HS", label: "Fin de fiesta" },
];

const ScheduleSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 md:space-y-0 md:flex md:justify-center md:gap-16">
          {scheduleItems.map((item) => (
            <div key={item.label} className="text-center">
              <span className="font-display text-5xl md:text-7xl text-foreground">
                {item.time}
              </span>
              <p className="mt-2 text-muted-foreground font-body uppercase tracking-[0.2em] text-sm">
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
