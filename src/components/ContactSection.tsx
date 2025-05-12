import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react"; // Added Send icon

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envio do formulário para um backend ou serviço de email.
    console.log("Form data:", formData);
    toast({
      title: "Mensagem Enviada com Sucesso!",
      description: "Obrigada pelo seu contato. Retornaremos o mais breve possível.",
      variant: "default", // Explicitly set variant for clarity, can be 'destructive' for errors
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-aline-pink" strokeWidth={1.5} />,
      title: "Email para Contato",
      value: "contato@alineloof.com.br",
      href: "mailto:contato@alineloof.com.br",
    },
    {
      icon: <Phone size={24} className="text-aline-pink" strokeWidth={1.5} />,
      title: "Telefone / WhatsApp",
      value: "(45) 99999-1980", // TODO: Confirmar número de telefone
      href: "https://wa.me/5545999991980", // TODO: Confirmar link do WhatsApp
    },
    {
      icon: <Instagram size={24} className="text-aline-pink" strokeWidth={1.5} />,
      title: "Siga-me no Instagram",
      value: "@alineloof.consultoria",
      href: "https://www.instagram.com/alineloof.consultoria/",
    },
    {
      icon: <MapPin size={24} className="text-aline-pink" strokeWidth={1.5} />,
      title: "Atendimento (Online e Presencial)",
      value: "PR, Brasil (Consultar agenda para sua cidade)", // TODO: Confirmar e detalhar a localização e forma de atendimento
      href: "#",
    },
  ];

  return (
    <section id="contato" className="bg-gradient-to-br from-aline-beige via-white to-aline-beige/30 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 wow fadeIn" data-wow-delay="0.2s">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Estou à disposição para te guiar em sua jornada de transformação. Preencha o formulário abaixo ou utilize um dos canais de contato. Será um prazer te conhecer!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8 wow fadeInLeft" data-wow-delay="0.4s">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-700 text-lg mb-1">{item.title}</h4>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-aline-pink transition-colors duration-300 break-all"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-xl wow fadeInRight" data-wow-delay="0.6s">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                  Seu Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Como podemos te chamar?"
                  required
                  className="bg-white/50 border-gray-300 focus:border-aline-pink focus:ring-aline-pink rounded-md text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                  Seu Melhor Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="exemplo@email.com"
                  required
                  className="bg-white/50 border-gray-300 focus:border-aline-pink focus:ring-aline-pink rounded-md text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">
                  Seu WhatsApp (Opcional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  className="bg-white/50 border-gray-300 focus:border-aline-pink focus:ring-aline-pink rounded-md text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                  Sua Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre o que você busca..."
                  rows={5}
                  required
                  className="bg-white/50 border-gray-300 focus:border-aline-pink focus:ring-aline-pink rounded-md text-gray-700 placeholder-gray-400"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-aline-pink hover:bg-aline-pink/90 text-white text-md font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md inline-flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

