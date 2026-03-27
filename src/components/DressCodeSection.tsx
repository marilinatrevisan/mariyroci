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
    <section className="py-28 md:py-40 px-6 border-t border-border">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-base md:text-lg font-body text-foreground">
          Código de vestimenta: festivo.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="mt-10 px-8 py-3 border border-foreground text-foreground font-body text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Necesito más info
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-background border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">
              Sobre la vestimenta
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-sm">
            <p>
              Nadie estará fuera de lugar por venir arreglado con su estilo
              personal, sin necesidad de ajustarse a formalidades de etiqueta.
            </p>
            <p>Montense como mas les guste.</p>
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
