import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DressCodeSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-32 md:py-44 px-6 border-t border-border">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm md:text-base font-body text-foreground leading-relaxed">
          Código de vestimenta: festivo.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="mt-12 px-10 py-3 border border-foreground text-foreground font-body text-[10px] uppercase tracking-[0.4em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Necesito más info
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-background border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl text-foreground tracking-[-0.02em] uppercase">
              Vestimenta
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-sm">
            <p>Un punto intermedio entre formal e informal.</p>
            <p>
              Nadie estará fuera de lugar por venir arreglado con su estilo
              personal.
            </p>
            <p>
              Quien quiera jugar, aprovechar y usar esa prenda para la que no
              encuentra ocasión, vivir su sueño avant-garde o delirar fantasía
              alfombra roja: tómelo como una gran oportunidad.
            </p>
            <p>
              Un detalle: el espacio es serrano, hay escaleras y desniveles
              (para tener en cuenta, especialmente en el calzado).
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DressCodeSection;
