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
    <section className="py-28 md:py-40 px-6 border-t border-border">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-tight">
          Regalo
        </h2>
        <div className="mt-8 space-y-1">
          <p className="font-body text-muted-foreground text-sm tracking-wide">
            alias: lunademiel.mariyroci
          </p>
          <p className="font-body text-muted-foreground text-sm tracking-wide">
            lunademiel.mariyroci.usd
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="mt-10 px-8 py-3 border border-foreground text-foreground font-body text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          No entendí
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-background border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">
              Sobre el regalo
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-sm">
            <p>
              Quienes tengan ganas de hacernos un regalo, pueden aportar con
              nuestro viaje de luna de miel
            </p>
            <div className="pt-2 space-y-2 text-foreground">
              <p>alias:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>mariyroci.lunademiel</li>
              </ul>
              <p className="text-muted-foreground text-xs break-all">
                CVU: 0000003100049499420612
              </p>
              <p className="text-muted-foreground text-xs">
                Nombre: Rocio Maria Rodriguez
              </p>
              <p className="mt-3">lunademiel.mariyroci.usd</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GiftSection;
