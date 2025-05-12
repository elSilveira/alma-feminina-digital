
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

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
    // Aqui iria a lógica de envio do formulário para um backend
    console.log("Form data:", formData);
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contato" className="bg-white py-20">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">Entre em Contato</h2>
            <p className="text-aline-gray mb-8">
              Estou pronta para ajudar você a reconectar-se com sua essência
              através da consultoria de moda e estilo. Entre em contato para
              saber mais sobre os serviços ou agendar uma consulta.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-aline-gold mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-aline-gray">contato@alineloof.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-aline-gold mt-1" />
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-aline-gray">(00) 00000-0000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-aline-gold mt-1" />
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-aline-gray">São Paulo - SP, Brasil</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="h-5 w-5 text-aline-gold mt-1" />
                <div>
                  <h4 className="font-medium">Instagram</h4>
                  <a
                    href="https://www.instagram.com/alineloof.consultoria/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-aline-gray hover:text-aline-pink transition-colors"
                  >
                    @alineloof.consultoria
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="border-aline-taupe/30 focus-visible:ring-aline-pink"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  required
                  className="border-aline-taupe/30 focus-visible:ring-aline-pink"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Seu telefone"
                  required
                  className="border-aline-taupe/30 focus-visible:ring-aline-pink"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como posso ajudar você?"
                  rows={5}
                  className="border-aline-taupe/30 focus-visible:ring-aline-pink"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-aline-pink hover:bg-aline-pink/90 text-primary-foreground"
              >
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
