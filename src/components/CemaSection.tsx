
import { Button } from "@/components/ui/button";

const CemaSection = () => {
  return (
    <section id="cema" className="bg-white py-20">
      <div className="container-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">CEMA Costura Afetiva</h2>
            <p className="text-aline-gray mb-4">
              Uma marca que nasceu do amor pela moda consciente e afetiva.
              Cada peça CEMA é criada com intenção, carregando a essência da
              feminilidade e conexão com quem somos.
            </p>
            <p className="text-aline-gray mb-4">
              Produção em pequena escala, com tecidos selecionados e
              modelagem que valoriza diferentes tipos de corpos.
            </p>
            <p className="text-aline-gray mb-6">
              A costura afetiva vai além da roupa – é um convite para você
              reconectar-se com o feminino através de peças que contam histórias.
            </p>
            <div className="space-x-4">
              <Button className="bg-aline-gold hover:bg-aline-gold/90 text-white">
                Conheça a coleção
              </Button>
              <Button variant="outline" className="border-aline-gold text-aline-gold hover:bg-aline-gold/10">
                Siga no Instagram
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="CEMA Costura Afetiva - Marca exclusiva de Aline Loof"
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CemaSection;
