
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Aline Loof - Consultora de Moda e Estilo"
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="section-title">Aline Loof</h2>
            <p className="text-aline-gray mb-4">
              Consultora de moda e estilo apaixonada por ajudar mulheres a
              reencontrarem sua essência através da vestimenta.
            </p>
            <p className="text-aline-gray mb-4">
              Com mais de 10 anos de experiência no mercado de moda, desenvolvi uma
              metodologia única que vai além das tendências e valoriza a conexão
              emocional com as roupas.
            </p>
            <p className="text-aline-gray mb-6">
              Meu trabalho é guiado por um propósito maior: reconectar as mulheres
              com seu feminino sagrado, ajudando-as a expressarem quem realmente
              são através de um estilo autêntico e alinhado.
            </p>
            <Button className="bg-aline-gold hover:bg-aline-gold/90 text-white">
              Conheça minha história
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
