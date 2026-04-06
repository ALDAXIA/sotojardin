import { useEffect, useRef, useState } from 'react';
import { subHeroConfig } from '../config';

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [start, end, duration]);

  return count;
};

const useParallax = () => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        setOffset((progress - 0.5) * 60);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, offset };
};

const StatCounter = ({ value, suffix, label, isVisible, index }: {
  value: number; suffix: string; label: string; isVisible: boolean; index: number;
}) => {
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div
      className="flex flex-col items-center text-center px-6 py-8 relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.8s ease, transform 0.8s ease`,
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Separador vertical entre stats */}
      {index > 0 && (
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-px bg-[#8b6d4b]/20"
          style={{
            height: isVisible ? '48px' : '0px',
            transition: 'height 0.6s ease',
            transitionDelay: `${index * 150 + 400}ms`,
          }}
        />
      )}
      <span className="block font-serif text-4xl md:text-5xl text-[#8b6d4b] mb-2 tabular-nums">
        {count}{suffix}
      </span>
      <div
        className="w-6 h-px bg-[#8b6d4b]/40 mb-2"
        style={{
          width: isVisible ? '24px' : '0px',
          transition: 'width 0.4s ease',
          transitionDelay: `${index * 150 + 600}ms`,
        }}
      />
      <span className="text-[#696969] text-xs tracking-[0.2em] uppercase">{label}</span>
    </div>
  );
};

const SubHero = () => {
  if (!subHeroConfig.heading) return null;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const img1Parallax = useParallax();
  const img2Parallax = useParallax();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="subhero"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content Side */}
          <div className="relative z-10">

            {/* Tag */}
            <div
              className="flex items-center gap-3 mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: '100ms',
              }}
            >
              <div
                className="h-px bg-[#8b6d4b]"
                style={{
                  width: isVisible ? '32px' : '0px',
                  transition: 'width 0.6s ease',
                  transitionDelay: '400ms',
                }}
              />
              <span className="text-xs tracking-[0.3em] text-[#8b6d4b] font-medium uppercase">
                {subHeroConfig.tag}
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-black leading-tight mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease, transform 1s ease',
                transitionDelay: '250ms',
              }}
            >
              {subHeroConfig.heading}
            </h2>

            {/* Línea decorativa bajo el título */}
            <div
              className="h-px bg-[#8b6d4b]/30 mb-8 origin-left"
              style={{
                width: isVisible ? '80px' : '0px',
                transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '500ms',
              }}
            />

            {/* Párrafos escalonados */}
            {subHeroConfig.bodyParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#696969] text-lg leading-relaxed mb-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.9s ease, transform 0.9s ease',
                  transitionDelay: `${400 + index * 150}ms`,
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* CTA link */}
            {subHeroConfig.linkText && (
              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                  transitionDelay: `${400 + subHeroConfig.bodyParagraphs.length * 150}ms`,
                }}
              >
                <a
                  href={subHeroConfig.linkTarget}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(subHeroConfig.linkTarget)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-[#8b6d4b] font-medium tracking-wide group"
                >
                  <span className="border-b border-[#8b6d4b]/40 group-hover:border-[#8b6d4b] transition-colors pb-0.5">
                    {subHeroConfig.linkText}
                  </span>
                  <span
                    className="text-lg transition-transform duration-300 group-hover:translate-x-2"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Image Side */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px]" style={{ perspective: '1200px' }}>

            {/* Main Image */}
            {subHeroConfig.image1 && (
              <div
                ref={img1Parallax.ref}
                className="absolute top-0 right-0 w-[85%] h-[75%] overflow-hidden shadow-2xl group cursor-pointer"
                style={{
                  clipPath: isVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
                  transition: 'clip-path 1.4s cubic-bezier(0.77, 0, 0.18, 1) 0.2s, transform 1.4s cubic-bezier(0.33, 1, 0.68, 1) 0.2s',
                  transform: isVisible
                    ? `translateY(${img1Parallax.offset * 0.4}px) rotateY(0deg)`
                    : `translateY(40px) rotateY(-4deg)`,
                  transformOrigin: 'right center',
                }}
              >
                <img
                  src={subHeroConfig.image1}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    transform: `scale(1.1) translateY(${img1Parallax.offset * 0.2}px)`,
                  }}
                />
                {/* Overlay sutil en hover */}
                <div className="absolute inset-0 bg-[#8b6d4b]/0 group-hover:bg-[#8b6d4b]/10 transition-colors duration-500" />
              </div>
            )}

            {/* Secondary Image */}
            {subHeroConfig.image2 && (
              <div
                ref={img2Parallax.ref}
                className="absolute bottom-0 left-0 w-[60%] h-[50%] overflow-hidden shadow-2xl group cursor-pointer"
                style={{
                  clipPath: isVisible ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
                  transition: 'clip-path 1.4s cubic-bezier(0.77, 0, 0.18, 1) 0.6s, transform 1.4s cubic-bezier(0.33, 1, 0.68, 1) 0.6s',
                  transform: isVisible
                    ? `translateY(${img2Parallax.offset * 0.6}px) rotateX(0deg)`
                    : `translateY(60px) rotateX(4deg)`,
                  transformOrigin: 'bottom center',
                }}
              >
                <img
                  src={subHeroConfig.image2}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    transform: `scale(1.08) translateY(${img2Parallax.offset * 0.3}px)`,
                  }}
                />
                <div className="absolute inset-0 bg-[#8b6d4b]/0 group-hover:bg-[#8b6d4b]/10 transition-colors duration-500" />
              </div>
            )}

            {/* Cuadrado decorativo con animación de borde */}
            <div
              className="absolute top-[10%] left-[-5%] w-32 h-32"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.6) rotate(-12deg)',
                transition: 'all 1.2s cubic-bezier(0.33, 1, 0.68, 1) 1s',
              }}
            >
              <div className="w-full h-full border border-[#8b6d4b]/20 relative">
                {/* Esquinas animadas */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#8b6d4b]/60" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#8b6d4b]/60" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#8b6d4b]/60" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#8b6d4b]/60" />
              </div>
            </div>

            {/* Punto flotante */}
            <div
              className="absolute bottom-[15%] right-[-3%] w-4 h-4 rounded-full bg-[#8b6d4b]/30"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transition: 'all 0.8s cubic-bezier(0.33, 1, 0.68, 1) 1.4s',
                animation: isVisible ? 'pulse 3s ease-in-out infinite' : 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      {subHeroConfig.stats.length > 0 && (
        <div ref={statsRef} className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-20 lg:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 border border-[#8b6d4b]/15 divide-x divide-[#8b6d4b]/15">
            {subHeroConfig.stats.map((stat, index) => (
              <StatCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={statsVisible}
                index={index}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default SubHero;

