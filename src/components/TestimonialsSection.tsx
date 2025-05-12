import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "A consultoria com a Aline transformou não só o meu guarda-roupa, mas minha relação com a moda. Hoje me visto com mais confiança e expressando verdadeiramente quem sou. Foi libertador!",
      author: "Marina S.",
      role: "Arquiteta",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Placeholder
    },
    {
      text: "O processo de reconexão com meu feminino através das roupas foi uma experiência transformadora. Aline tem um dom para entender nossa essência e traduzi-la em estilo. Recomendo de olhos fechados!",
      author: "Carla M.",
      role: "Empresária",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Placeholder
    },
    {
      text: "As peças da CEMA são muito mais que roupas, são verdadeiras expressões de feminilidade e afeto. A qualidade, o caimento e o cuidado em cada detalhe são impecáveis! Amo cada uma delas.",
      author: "Juliana C.",
      role: "Psicóloga",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Placeholder
    }
    // TODO: Adicionar mais depoimentos reais e fotos das clientes, se disponíveis e autorizadas.
  ];

  return (
    <section id="depoimentos" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 wow fadeIn" data-wow-delay="0.2s">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Transformações Reais
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Veja o que algumas mulheres incríveis que embarcaram nesta jornada de autoconhecimento e estilo têm a dizer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
              <Card className="bg-aline-beige/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out rounded-xl overflow-hidden h-full flex flex-col border-gray-200/50">
                <CardHeader className="pt-8 pb-4 px-6">
                  <div className="flex mb-3">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-aline-gold fill-aline-gold" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow px-6">
                  <p className="text-gray-700 italic text-md leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-8 pt-4 border-t border-gray-200/70 mt-auto">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-aline-pink/50">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.substring(0,1)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-700 text-md">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

