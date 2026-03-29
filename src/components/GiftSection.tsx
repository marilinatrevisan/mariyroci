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
    <section className="py-32 md:py-44 px-6 border-t border-border">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-6xl md:text-8xl text-foreground tracking-[-0.02em] uppercase">
          Regalo
        </h2>
        <div className="mt-10 space-y-1">
          <p className="font-body text-muted-foreground text-xs tracking-wide">
            alias: mariyroci
          </p>
          <p className="font-body text-muted-foreground text-xs tracking-wide">
            mariyroci.usd
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="mt-12 px-10 py-3 border border-foreground text-foreground font-body text-[10px] uppercase tracking-[0.4em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          No entendí
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-background border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl text-foreground tracking-[-0.02em] uppercase">
              Sobre el regalo
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-sm">
            <p>
              Quienes tengan ganas de hacernos un regalo, pueden aportar con
              nuestro viaje de luna de miel.
            </p>
            <div className="space-y-1 text-foreground">
              <p className="font-bold text-xs uppercase tracking-widest">Cuenta en pesos</p>
              <p className="text-muted-foreground text-xs">Alias: MARIYROCI</p>
              <p className="text-muted-foreground text-xs break-all">CVU: 0000003100049499420612</p>
              <p className="text-muted-foreground text-xs">Titular: Rocio Maria Rodriguez</p>
              <p className="text-muted-foreground text-xs">CUIL: 27376161930</p>
              <p className="text-muted-foreground text-xs">Mercado Pago</p>
            </div>
            <div className="space-y-1 text-foreground">
              <p className="font-bold text-xs uppercase tracking-widest">Cuenta en dólares</p>
              <p className="text-muted-foreground text-xs">Alias: MARIYROCI.USD</p>
              <p className="text-muted-foreground text-xs break-all">CBU: 4530000800023863868282</p>
              <p className="text-muted-foreground text-xs">Titular: Rocio Maria Rodriguez</p>
              <p className="text-muted-foreground text-xs">CUIL: 27376161930</p>
              <p className="text-muted-foreground text-xs">Naranja X</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GiftSection;
