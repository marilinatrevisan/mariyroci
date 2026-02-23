import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GiftSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-tight">
          Regalo
        </h2>
        <div className="mt-8 space-y-2">
          <p className="font-body text-foreground text-lg tracking-wide">
            alias: <span className="text-neon-blue glow-blue">lunademiel.mariyroci</span>
          </p>
          <p className="font-body text-foreground text-lg tracking-wide">
            <span className="text-neon-blue glow-blue">lunademiel.mariyroci.usd</span>
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="mt-8 px-8 py-3 border border-foreground text-foreground font-body text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          No entendí
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">
              Sobre el regalo
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-sm">
            <p>
              Quienes quieran hacernos un regalo que implique dinero, pueden
              ayudarnos con nuestro viaje de luna de miel {"<3"}
            </p>
            <div className="pt-2 space-y-1 text-foreground">
              <p>alias: <span className="text-neon-blue">lunademiel.mariyroci</span></p>
              <p><span className="text-neon-blue">lunademiel.mariyroci.usd</span></p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GiftSection;
