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
        <p className="text-base md:text-lg font-body leading-relaxed text-muted-foreground">
          No hay código de vestimenta. No es formal, ni es con etiqueta.
        </p>
        <p className="mt-2 text-base md:text-lg font-body text-foreground">
          Pero es una fiesta.
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
              Como es una fiesta, también es una oportunidad. Quien quiera jugar
              con el estilo, ponerse esa ropita hermosa para la cual no encuentra
              ocasión o vestir algo avant-garde (soñado): esta es una gran
              ocasión. Nadie estará fuera de lugar por ir con su estilo personal.
            </p>
            <p>
              Un detalle: el espacio es serrano, por lo que hay escaleras y
              desniveles para tener en cuenta, especialmente en el calzado.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DressCodeSection;
