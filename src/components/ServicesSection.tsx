import { Palette, Sparkles, Tag, Shirt, HeartHandshake, Users } from "lucide-react"; // Added HeartHandshake and Users for more semantic icons
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Consultoria de Imagem e Estilo",
      description: "Uma jornada completa para você descobrir sua identidade estilística, comunicar sua essência com autenticidade e construir um guarda-roupa que te empodera em todas as ocasiões.",
      icon: <Palette size={40} className="text-aline-gold mb-4" strokeWidth={1.5} />,
    },
    {
      title: "Re|Conexão com o Feminino (Turmas)",
      description: "Participe de nossas turmas de imersão e mergulhe em um processo transformador de autoconhecimento, cura e resgate da sua potência feminina sagrada. Conecte-se com sua essência.",
      icon: <HeartHandshake size={40} className="text-aline-pink mb-4" strokeWidth={1.5} />,
    },
    {
      title: "Análise de Coloração Pessoal",
      description: "Descubra a paleta de cores que realça sua beleza natural, ilumina seus traços e harmoniza sua imagem, trazendo mais confiança e assertividade para suas escolhas.",
      icon: <Sparkles size={40} className="text-aline-gold mb-4" strokeWidth={1.5} />,
    },
    {
      title: "Personal Shopper Estratégico",
      description: "Uma experiência de compras guiada e inteligente, focada em adquirir peças-chave que complementam seu estilo, otimizam seu guarda-roupa e respeitam seu orçamento.",
      icon: <Tag size={40} className="text-aline-pink mb-4" strokeWidth={1.5} />,
    },
     {
      title: "Organização de Guarda-Roupa Inteligente",
      description: "Transforme seu armário em um espaço funcional, inspirador e alinhado com quem você é hoje, facilitando suas escolhas e trazendo mais leveza para o seu dia a dia.",
      icon: <Shirt size={40} className="text-aline-gold mb-4" strokeWidth={1.5} />,
    },
    {
      title: "Palestras e Workshops",
      description: "Leve o conhecimento sobre imagem, estilo e o poder do feminino para seu grupo ou empresa, com encontros dinâmicos e personalizados para despertar o potencial de cada mulher.",
      icon: <Users size={40} className="text-aline-pink mb-4" strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="servicos" className="bg-gradient-to-br from-aline-beige via-white to-aline-beige/30 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 wow fadeIn" data-wow-delay="0.2s">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Descubra Sua Melhor Versão
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Ofereço uma gama de serviços personalizados para te guiar em uma jornada de autoconhecimento, estilo e reconexão com sua essência feminina. Cada detalhe é pensado para que você se sinta acolhida, compreendida e empoderada a expressar quem você realmente é.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
              <Card className="bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out rounded-xl overflow-hidden h-full flex flex-col border-none">
                <CardHeader className="items-center text-center pt-8 pb-4">
                  {service.icon}
                  <CardTitle className="text-xl md:text-2xl font-playfair text-gray-700">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-6 pb-8 text-center">
                  <CardDescription className="text-gray-600 text-md leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center wow fadeIn" data-wow-delay="0.8s">
          <Button 
            asChild
            size="lg"
            className="bg-aline-pink hover:bg-aline-pink/90 text-white text-lg px-10 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md font-semibold"
          >
            <a href="#contato">Agende Sua Consultoria</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

