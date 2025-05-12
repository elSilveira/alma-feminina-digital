import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react"; // Icon for Instagram link

const CemaSection = () => {
  return (
    <section id="cema" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6 wow fadeIn" data-wow-delay="0.2s">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-1">
              CEMA Costura Afetiva
            </h2>
            <p className="text-aline-pink font-semibold text-lg">Moda com Alma, Propósito e Afeto</p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              A CEMA Costura Afetiva transcende o conceito de uma simples marca de roupas; é uma manifestação de carinho, cuidado e intenção em cada detalhe, em cada costura. Nascida do desejo de vestir mulheres com autenticidade, conforto e uma dose generosa de afeto, a CEMA traduz em suas criações a beleza da alma feminina e o respeito pelo fazer manual.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Descubra peças que contam histórias, que te abraçam com suavidade e que celebram a sua individualidade de forma única. Cada criação é pensada para proporcionar não apenas beleza, mas também uma conexão genuína com o vestir, valorizando a produção em pequena escala e tecidos selecionados que respeitam seu corpo e o meio ambiente.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Convidamos você a conhecer a CEMA e a sentir a diferença de uma moda que é feita com o coração, com afeto genuíno e com um propósito que vai além do vestir: o de empoderar, acarinhar e celebrar a sua essência. Vista-se de afeto, autenticidade e conforto.
            </p>
            <div className="pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-aline-gold hover:bg-aline-gold/90 text-white text-md px-8 py-3 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md inline-flex items-center"
              >
                <a href="https://www.instagram.com/cema.costuraafetiva" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} className="mr-2" />
                  Ver Coleção no Instagram
                </a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 wow fadeIn" data-wow-delay="0.4s">
            <img
              src="https://images.unsplash.com/photo-1579725942955-4135d7034df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" // Placeholder - Idealmente uma imagem da CEMA
              alt="CEMA Costura Afetiva - Peças de roupa artesanais e com afeto"
              className="rounded-xl shadow-xl object-cover h-auto md:h-[550px] w-full aspect-square md:aspect-auto"
            />
            {/* TODO: Substituir esta imagem por uma foto de alta qualidade que represente a marca CEMA Costura Afetiva, suas peças ou o conceito de costura afetiva. */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CemaSection;

