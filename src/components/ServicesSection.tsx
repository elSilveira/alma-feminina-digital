
import { Palette, Sparkles, Tag, Shirt } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Consultoria de Estilo",
      description: "Descubra sua identidade estilística e aprenda a expressar sua personalidade através das roupas.",
      icon: <Palette className="h-10 w-10 text-aline-gold" />,
    },
    {
      title: "Coloração Pessoal",
      description: "Identifique sua paleta de cores ideal e potencialize sua beleza natural.",
      icon: <Palette className="h-10 w-10 text-aline-pink" />,
    },
    {
      title: "Personal Shopper",
      description: "Assistência personalizada para compras estratégicas e conscientes.",
      icon: <Tag className="h-10 w-10 text-aline-gold" />,
    },
    {
      title: "Organização de Guarda-Roupa",
      description: "Transforme seu armário em um espaço funcional e alinhado com seu estilo.",
      icon: <Shirt className="h-10 w-10 text-aline-pink" />,
    },
  ];

  return (
    <section id="servicos" className="bg-aline-beige py-20">
      <div className="container-section">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Serviços</h2>
          <p className="text-aline-gray mt-6">
            Consultoria personalizada para reconectar você com sua essência e transformar
            sua relação com a moda e estilo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow border-none">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-playfair">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-aline-gray text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a 
            href="#contato" 
            className="inline-block px-8 py-3 bg-aline-pink text-primary-foreground rounded-md hover:bg-aline-pink/90 transition-colors"
          >
            Agende sua consultoria
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
