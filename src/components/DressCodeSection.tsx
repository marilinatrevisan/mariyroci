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
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg md:text-xl font-body leading-relaxed text-foreground">
          No hay código de vestimenta. No es formal, ni es con etiqueta.
          <br />
          <span className="text-neon-pink">Pero es una fiesta.</span>
        </p>
        <button
          onClick={() => setOpen(true)}
          className="mt-8 px-8 py-3 bg-neon-pink text-foreground font-body text-sm uppercase tracking-[0.2em] hover:opacity-80 transition-opacity duration-300 box-glow-pink"
        >
          Necesito más info
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-border max-w-lg">
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
