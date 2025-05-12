import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const carouselImages = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    // Adicione mais imagens conforme necessário, idealmente com a mesma proporção
  ];

  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date('2025-07-01T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, []);

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 -z-20" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((src, index) => (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              <img src={src} alt={`Carrossel imagem ${index + 1}`} className="absolute block h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-black/60"></div> {/* Overlay escuro */}

      <div className="container mx-auto px-4 lg:px-8 text-center z-10 space-y-8 py-12 md:py-20">
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair tracking-tight">
            FALTAM
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mt-6 text-center">
            <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <div className="text-4xl md:text-6xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Dias</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <div className="text-4xl md:text-6xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Horas</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <div className="text-4xl md:text-6xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Minutos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <div className="text-4xl md:text-6xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-sm md:text-base uppercase tracking-wider">Segundos</div>
            </div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mt-8 max-w-3xl mx-auto">
            Para a próxima turma de Re|Conexão com Sua Essência!
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-playfair leading-tight">
            Descubra o poder da sua <span className="text-aline-gold italic">imagem</span> e a força do seu <span className="text-aline-pink italic">feminino</span>.
          </h1>
          <p className="text-md md:text-lg font-light max-w-2xl mx-auto">
            Uma jornada de transformação em consultoria de imagem e reconexão com o feminino. Vagas limitadas!
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-aline-pink hover:bg-aline-pink/90 text-primary-foreground text-lg px-8 py-3">
            Garanta Sua Vaga Agora!
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
            Conhecer Consultoria
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

