import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { heroConfig } from '../config';

const Hero = () => {
  if (!heroConfig.title) return null;

  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#subhero');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  const titleLines = heroConfig.title.split('\n');

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Ken Burns + Parallax Background */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${heroConfig.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(1.1) translateY(${scrollY * 0.3}px)`,
          animation: 'kenburns 20s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      {/* Gradient Overlay — más refinado que un simple negro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

      {/* Línea decorativa lateral izquierda */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 w-px bg-white/30 origin-top"
        style={{
          height: isVisible ? '120px' : '0px',
          transition: 'height 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDelay: '1400ms',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">

        {/* Tagline con línea */}
        <div
          className="mb-6 flex items-center gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: '300ms',
          }}
        >
          <div
            className="h-px bg-white/50 origin-right"
            style={{
              width: isVisible ? '40px' : '0px',
              transition: 'width 0.8s ease',
              transitionDelay: '700ms',
            }}
          />
          <span className="text-xs tracking-[0.4em] font-light uppercase text-white/80">
            {heroConfig.tagline}
          </span>
          <div
            className="h-px bg-white/50 origin-left"
            style={{
              width: isVisible ? '40px' : '0px',
              transition: 'width 0.8s ease',
              transitionDelay: '700ms',
            }}
          />
        </div>

        {/* Título — cada línea entra con delay escalonado */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight">
          {titleLines.map((line, i) => (
            <span
              key={i}
              className="block overflow-hidden"
            >
              <span
                className="block"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${500 + i * 150}ms`,
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* Línea decorativa bajo el título */}
        <div
          className="mt-8 h-px bg-white/40 origin-center"
          style={{
            width: isVisible ? '60px' : '0px',
            transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: '900ms',
          }}
        />

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s ease, transform 1s ease',
            transitionDelay: '1100ms',
          }}
        >
          {heroConfig.ctaPrimaryText && (
            <a
              href={heroConfig.ctaPrimaryTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(heroConfig.ctaPrimaryTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-4 bg-[#8b6d4b] text-white font-light tracking-widest text-sm relative overflow-hidden group"
            >
              <span className="relative z-10">{heroConfig.ctaPrimaryText}</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          )}
          {heroConfig.ctaSecondaryText && (
            <a
              href={heroConfig.ctaSecondaryTarget}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(heroConfig.ctaSecondaryTarget)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-12 py-4 border border-white/60 text-white font-light tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-500"
            >
              {heroConfig.ctaSecondaryText}
            </a>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 group"
        style={{
          opacity: isVisible ? 0.7 : 0,
          transition: 'opacity 1s ease',
          transitionDelay: '1400ms',
        }}
      >
        <span className="text-xs tracking-[0.2em] uppercase font-light text-white/60 group-hover:text-white/90 transition-colors">
          Scroll
        </span>
        <ChevronDown size={20} strokeWidth={1} className="animate-bounce" />
      </button>

      {/* Ken Burns keyframe */}
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1.1) translateY(0px); }
          100% { transform: scale(1.18) translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

