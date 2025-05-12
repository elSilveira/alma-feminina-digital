import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8"> {/* Using standard container for consistency */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="wow fadeIn" data-wow-delay="0.2s">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" // Consider a more specific placeholder or client image
              alt="Aline Loof - Consultora de Imagem e Estilo, especialista em reconexão com o feminino"
              className="rounded-xl shadow-xl object-cover h-auto md:h-[550px] w-full aspect-square md:aspect-auto"
            />
            {/* TODO: Substituir esta imagem por uma foto profissional de Aline Loof ou uma imagem que represente fortemente sua marca e a reconexão com o feminino. */}
          </div>
          <div className="space-y-6 wow fadeIn" data-wow-delay="0.4s">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-gray-800 mb-6">
              Sobre Aline Loof
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Aline Loof é uma consultora de imagem e estilo apaixonada por guiar mulheres em uma jornada de profunda reconexão com sua essência e com o poder do seu feminino sagrado. Seu trabalho vai além de tendências, focando em despertar a autenticidade e a força interior que cada mulher possui.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              A reconexão com o feminino é um caminho sagrado de cura, autoconhecimento e resgate da sua energia vital, intuição e sabedoria ancestral. É um convite amoroso para você se permitir ser quem nasceu para ser, em toda a sua plenitude, honrando seus ciclos, sua sensibilidade e a beleza única da sua alma feminina. Aline acredita que ao se reconectar com essa força, as mulheres florescem e transformam sua relação consigo mesmas e com o mundo.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Essa filosofia é a alma das turmas de Re|conexão com o Feminino e Consultoria de Imagem, um convite para mergulhar em sua essência, redescobrir sua força indomável e aprender a comunicar sua verdadeira identidade através da imagem – com autenticidade e poder. Cada encontro é uma experiência única, vibrando com energia transformadora e acolhedora, com o propósito de conectar você ao seu poder interior.
            </p>
            <Button 
              size="lg"
              className="bg-aline-gold hover:bg-aline-gold/90 text-white text-md px-8 py-3 mt-4 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md"
            >
              Conheça Minha História
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

