
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "A consultoria com a Aline transformou não só o meu guarda-roupa, mas minha relação com a moda. Hoje me visto com mais confiança e expressando verdadeiramente quem sou.",
      author: "Marina Sousa",
      role: "Arquiteta"
    },
    {
      text: "O processo de reconexão com meu feminino através das roupas foi uma experiência transformadora. Aline tem um dom para entender nossa essência e traduzi-la em estilo.",
      author: "Carla Mendes",
      role: "Empresária"
    },
    {
      text: "As peças da CEMA são muito mais que roupas, são verdadeiras expressões de feminilidade. A qualidade e o caimento são impecáveis!",
      author: "Juliana Costa",
      role: "Psicóloga"
    }
  ];

  return (
    <section id="depoimentos" className="bg-aline-beige py-20">
      <div className="container-section">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Depoimentos</h2>
          <p className="text-aline-gray mt-6">
            O que dizem as mulheres que passaram pelo processo de consultoria e reconexão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-aline-gold">
                  {Array(5).fill("★").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
                <p className="text-aline-gray italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-aline-gray">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
