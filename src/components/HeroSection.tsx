
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center"
        style={{ filter: 'brightness(0.8)' }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 to-black/20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 md:max-w-3xl lg:max-w-4xl">
        <div className="text-white space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight">
            Reconecte-se com sua <span className="text-aline-gold italic">essência</span> e <span className="text-aline-pink italic">estilo</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl">
            Consultoria de moda e estilo focada na reconexão com o feminino, 
            transformando sua relação com as roupas e resgatando sua autenticidade.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-aline-pink hover:bg-aline-pink/90 text-primary-foreground">
              Agendar Consultoria
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
