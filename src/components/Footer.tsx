
import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aline-beige border-t border-aline-taupe/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-medium mb-4">Aline Loof</h3>
            <p className="text-aline-gray mb-6 max-w-sm">
              Consultoria de moda e estilo focada na reconexão com o feminino,
              transformando sua relação com as roupas e resgatando sua autenticidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/alineloof.consultoria/"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-aline-taupe text-white hover:bg-aline-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/cema.costuraafetiva/"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-aline-taupe text-white hover:bg-aline-gold transition-colors"
                aria-label="Instagram CEMA"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@alineloof.com.br"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-aline-taupe text-white hover:bg-aline-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase text-sm">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-aline-gray hover:text-aline-gold transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-aline-gray hover:text-aline-gold transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-aline-gray hover:text-aline-gold transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#cema" className="text-aline-gray hover:text-aline-gold transition-colors">
                  CEMA
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-aline-gray hover:text-aline-gold transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-aline-gray hover:text-aline-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase text-sm">Newsletter</h4>
            <p className="text-aline-gray mb-4">
              Inscreva-se para receber dicas de estilo, novidades e conteúdo exclusivo.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-l-md border-y border-l border-aline-taupe/30 focus:outline-none focus:ring-1 focus:ring-aline-pink"
              />
              <button className="bg-aline-gold text-white px-4 py-2 rounded-r-md hover:bg-aline-gold/90 transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-aline-taupe/10 pt-8 text-center">
          <p className="text-aline-gray text-sm">
            © {currentYear} Aline Loof Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-aline-gray text-sm mt-1 flex items-center justify-center">
            Feito com <Heart className="h-4 w-4 text-aline-pink mx-1" /> para reconectar você com sua essência
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
