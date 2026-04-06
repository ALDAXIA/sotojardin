// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "SotoJardín | Jardines Exclusivos de Alta Gama",
  description: "Diseño y mantenimiento de jardines exclusivos. Creamos espacios verdes de lujo que transforman propiedades en obras de arte vivas.",
  language: "es",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "SotoJardín",
  menuLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Nuestros Jardines", href: "#about" },
    { label: "Servicios", href: "#features" },
    { label: "Proyectos", href: "#gallery" },
    { label: "Contacto", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/sotojardin" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/sotojardin" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/sotojardin" },
  ],
  searchPlaceholder: "Buscar servicios...",
  cartEmptyText: "Tu carrito está vacío",
  cartCheckoutText: "Solicitar Consulta",
  continueShoppingText: "Continuar Explorando",
  menuBackgroundImage: "/images/jardin1.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "JARDINES DE EXCELENCIA",
  title: "Donde la Naturaleza\nEncuentra el Arte",
  ctaPrimaryText: "Descubre Nuestros Jardines",
  ctaPrimaryTarget: "#about",
  ctaSecondaryText: "Solicita una Consulta",
  ctaSecondaryTarget: "#contact",
  backgroundImage: "/images/jardin1.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "NUESTRA FILOSOFÍA",
  heading: "Cada Jardín, una Obra Maestra",
  bodyParagraphs: [
    "En SotoJardín no diseñamos simples jardines, creamos experiencias sensoriales únicas. Cada proyecto es una sinfonía cuidadosamente orchestrada donde la naturaleza y el diseño se funden en perfecta armonía.",
    "Nuestro equipo de paisajistas y horticultores expertos transforma espacios ordinarios en santuarios verdes de extraordinaria belleza, donde cada planta, cada sendero y cada fuente cuenta una historia de elegancia atemporal."
  ],
  linkText: "Conoce Nuestra Historia",
  linkTarget: "#about",
  image1: "/images/jardin3.jpg",
  image2: "/images/jaridn3.jpg",
  stats: [
    { value: 25, suffix: "+", label: "Años de Experiencia" },
    { value: 500, suffix: "+", label: "Jardines Creados" },
    { value: 98, suffix: "%", label: "Clientes Satisfechos" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "DISEÑO EXCLUSIVO",
  heading: "El Lujo de lo Natural",
  bodyParagraphs: [
    "Nuestros jardines son más que paisajes: son refugios de serenidad donde el tiempo parece detenerse. Cada elemento está pensado para despertar los sentidos y crear atmósferas de incomparable sofisticación.",
    "Desde jardines formales con fuentes majestuosas hasta oasis contemporáneos con piscinas integradas, diseñamos espacios que elevan la experiencia de vivir al aire libre."
  ],
  ctaText: "Explora Nuestros Servicios",
  ctaTarget: "#features",
  backgroundImage: "/images/jardinpano.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "NUESTROS PROYECTOS",
  heading: "Colección de Jardines Exclusivos",
  description: "Descubre nuestra selección de jardines diseñados para los espacios más prestigiosos. Cada proyecto es una expresión única de elegancia y naturaleza.",
  viewAllText: "Ver Todos los Proyectos",
  addToCartText: "Me Interesa",
  addedToCartText: "Añadido a Consultas",
  categories: ["Todos", "Jardines Formales", "Oasis Contemporáneos", "Paisajes Naturales"],
  products: [
    { id: 1, name: "Jardín Formal Clásico", price: 0, category: "Jardines Formales", image: "/images/jardin1.jpg" },
    { id: 2, name: "Oasis con Piscina Natural", price: 0, category: "Oasis Contemporáneos", image: "/images/jardin3.jpg" },
    { id: 3, name: "Vista Aérea de Senderos", price: 0, category: "Paisajes Naturales", image: "/images/jardinpano.jpg" },
    { id: 4, name: "Jardín Residencial de Lujo", price: 0, category: "Oasis Contemporáneos", image: "/images/jaridn3.jpg" },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Leaf",
      title: "Diseño Paisajístico",
      description: "Creación de jardines únicos que reflejan tu estilo de vida y elevan el valor de tu propiedad."
    },
    {
      icon: "ShieldCheck",
      title: "Mantenimiento Premium",
      description: "Cuidado experto que mantiene tu jardín en perfectas condiciones durante todo el año."
    },
    {
      icon: "Heart",
      title: "Instalación de Fuentes",
      description: "Elementos acuáticos que añaden serenidad y sofisticación a cualquier espacio."
    },
    {
      icon: "Truck",
      title: "Iluminación de Jardín",
      description: "Sistemas de iluminación que transforman tu jardín en un espectáculo nocturno."
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "INSPIRACIÓN",
  heading: "El Diario de SotoJardín",
  viewAllText: "Ver Todas las Entradas",
  readMoreText: "Leer Más",
  posts: [
    {
      id: 1,
      title: "Tendencias en Jardines de Lujo para 2025",
      date: "Enero 2025",
      image: "/images/jardin1.jpg",
      excerpt: "Descubre las últimas tendencias en diseño paisajístico que están definiendo los espacios verdes más exclusivos."
    },
    {
      id: 2,
      title: "El Arte de las Fuentes en el Jardín Moderno",
      date: "Diciembre 2024",
      image: "/images/jardin3.jpg",
      excerpt: "Cómo integrar elementos acuáticos que aporten serenidad y elegancia a tu espacio exterior."
    },
    {
      id: 3,
      title: "Mantenimiento de Jardines durante el Invierno",
      date: "Noviembre 2024",
      image: "/images/jaridn3.jpg",
      excerpt: "Consejos expertos para mantener tu jardín en óptimas condiciones durante las estaciones frías."
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "PREGUNTAS FRECUENTES",
  heading: "Todo lo que Necesitas Saber",
  ctaText: "¿Tienes más preguntas? Contáctanos",
  ctaTarget: "#contact",
  faqs: [
    {
      id: 1,
      question: "¿Cuánto tiempo toma diseñar e implementar un jardín?",
      answer: "El tiempo varía según la complejidad del proyecto. Un jardín residencial típico puede tomar de 4 a 12 semanas desde el diseño hasta la finalización. Proyectos más grandes pueden requerir varios meses. Durante la consulta inicial, te proporcionaremos un cronograma detallado."
    },
    {
      id: 2,
      question: "¿Ofrecen servicios de mantenimiento continuo?",
      answer: "Sí, ofrecemos planes de mantenimiento premium diseñados para mantener tu jardín en condiciones óptimas durante todo el año. Nuestros servicios incluyen poda, fertilización, control de plagas y ajustes estacionales."
    },
    {
      id: 3,
      question: "¿Trabajan en proyectos fuera de la ciudad?",
      answer: "Absolutamente. Hemos diseñado jardines en propiedades exclusivas en toda la región y también en el extranjero. Nuestro equipo está preparado para viajar y supervisar proyectos en cualquier ubicación."
    },
    {
      id: 4,
      question: "¿Cómo se determina el presupuesto de un proyecto?",
      answer: "El presupuesto se define tras una consulta inicial donde evaluamos el espacio, tus preferencias y necesidades específicas. Proporcionamos presupuestos detallados y transparentes sin compromiso."
    },
    {
      id: 5,
      question: "¿Pueden integrar elementos como piscinas o fuentes existentes?",
      answer: "Por supuesto. Somos expertos en integrar elementos existentes en diseños nuevos, creando espacios coherentes y armoniosos que aprovechan al máximo las características de tu propiedad."
    },
  ],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "NUESTRA ESENCIA",
      heading: "Pasión por la Naturaleza",
      paragraphs: [
        "SotoJardín nació de una profunda pasión por la naturaleza y el diseño. Durante más de 25 años, hemos dedicado nuestra vida a crear jardines que no solo embellecen propiedades, sino que enriquecen la vida de quienes los disfrutan.",
        "Nuestro enfoque combina la tradición hortícola con técnicas innovadoras, resultando en espacios que son tanto atemporales como contemporáneos."
      ],
      quote: "",
      attribution: "",
      image: "/images/jardin1.jpg",
      backgroundColor: "#2c3e2d",
      textColor: "#ffffff",
    },
    {
      tag: "NUESTRO COMPROMISO",
      heading: "Excelencia en Cada Detalle",
      paragraphs: [],
      quote: "Un jardín bien diseñado no es solo un espacio verde, es un santuario donde la naturaleza y el alma humana encuentran su conexión más pura.",
      attribution: "— Equipo SotoJardín",
      image: "/images/jardin3.jpg",
      backgroundColor: "#1a1a1a",
      textColor: "#ffffff",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Comienza tu Jardín de Ensueño",
  description: "Estamos listos para transformar tu visión en realidad. Contáctanos hoy y descubre cómo podemos crear el jardín exclusivo que siempre has soñado.",
  locationLabel: "Ubicación",
  location: "Madrid, España",
  emailLabel: "Email",
  email: "info@sotojardin.es",
  phoneLabel: "Teléfono",
  phone: "+34 912 345 678",
  formFields: {
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre completo",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos sobre tu proyecto...",
  },
  submitText: "Enviar Consulta",
  submittingText: "Enviando...",
  submittedText: "Enviado",
  successMessage: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
  backgroundImage: "/images/jaridn3.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "SotoJardín",
  brandDescription: "Diseño y mantenimiento de jardines exclusivos. Transformando espacios en obras de arte vivas desde 1999.",
  newsletterHeading: "Inspírate",
  newsletterDescription: "Suscríbete para recibir inspiración, consejos y novedades sobre jardines de lujo.",
  newsletterPlaceholder: "Tu email",
  newsletterButtonText: "Suscribirse",
  newsletterSuccessText: "¡Gracias por suscribirte!",
  linkGroups: [
    {
      title: "Servicios",
      links: [
        { label: "Diseño Paisajístico", href: "#" },
        { label: "Mantenimiento", href: "#" },
        { label: "Instalación de Fuentes", href: "#" },
        { label: "Iluminación", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nosotros", href: "#about" },
        { label: "Proyectos", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contacto", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Servicio", href: "#" },
  ],
  copyrightText: "© 2025 SotoJardín. Todos los derechos reservados.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/sotojardin" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/sotojardin" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com/sotojardin" },
  ],
};
