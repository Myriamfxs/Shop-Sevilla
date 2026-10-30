/**
 * Diseño: Vitrina urbana. La landing recoge madera cálida, luz verde y energía de pizarra del interior real;
 * muestra categorías y atención presencial sin precios, claims de salud ni detalles de producto no confirmados.
 */
import { useEffect, useState, type FormEvent } from "react";
import "./arrival.css";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Mail,
  Menu,
  MessageCircle,
  MapPin,
  PackageOpen,
  Phone,
  Search,
  Sparkles,
  Store,
  X,
} from "lucide-react";

const assets = {
  hero: "/assets/interior-tienda-cbd-sevilla.webp",
  interior: "/assets/interior-tienda-cbd-sevilla.webp",
  cosmeticsOils: "/assets/cosmetica-cbd-sevilla-seleccion-02.webp",
  cbdOils: "/assets/aceites-cbd-sevilla-seleccion-01.webp",
  entrance: "/assets/entrada-tienda-cbd-catedral-sevilla.webp",
  logo: "/assets/logo-the-cannabis-shop-hemp-brothers-sevilla.png",
};

const categories = [
  { id: "01", title: "Flores y resinas", tag: "Categoría", object: "jar", text: "Flores, resinas y extractos, además de preenrollados. Selección de flores, resinas y extractos para consultar en tienda.", tone: "mahogany" },
  { id: "02", title: "Aceites", tag: "Categoría", object: "dropper", text: "Aceites del 2,5% al 30% y formatos de aceites y opciones para animales disponibles en tienda.", tone: "gold" },
  { id: "03", title: "Semillas", tag: "Categoría", object: "packet", text: "Variedades de semillas seleccionadas para consultar en tienda.", tone: "green" },
  { id: "04", title: "Accesorios", tag: "Categoría", object: "case", text: "Grinders, pipas, bongs, vaporizadores, baterías, papeles, filtros y complementos.", tone: "ivory" },
  { id: "05", title: "Cosmética y cuidado", tag: "Categoría", object: "bottle", text: "Facial, corporal, capilar, masaje, solar, after sun e higiene.", tone: "ivory" },
  { id: "06", title: "Alimentación y bebidas", tag: "Categoría", object: "jar", text: "Dulces, chocolates, repostería, bebidas e infusiones para disfrutar en cualquier momento.", tone: "mahogany" },
  { id: "07", title: "Ropa y regalos", tag: "Categoría", object: "case", text: "Ropa, complementos, regalos, souvenirs, velas e incienso.", tone: "gold" },
  { id: "08", title: "Selección de tienda", tag: "Novedades", object: "device", text: "Descubre nuevas referencias y propuestas seleccionadas para la tienda.", tone: "green" },
  { id: "09", title: "Artículos para mascotas", tag: "Categoría", object: "bottle", text: "Productos y accesorios para el cuidado diario de tus mascotas.", tone: "ivory" },
];

const faqs = [
  { question: "¿Cómo conozco la selección disponible?", answer: "La disponibilidad se consulta directamente en tienda. El equipo puede ayudarte a localizar las categorías y referencias que buscas durante tu visita." },
  { question: "¿Ofrecéis orientación sobre los productos?", answer: "La atención presencial está pensada para ayudarte a navegar por las categorías, la información disponible de cada referencia y los accesorios relacionados." },
  { question: "¿Incluye esta página compra online?", answer: "No. Esta landing está diseñada como escaparate de categorías y servicios de la tienda física. No incorpora carrito, precios ni promociones online." },
];

function StoreMark({ inverse = false }: { inverse?: boolean }) {
  return <a className={`store-mark ${inverse ? "store-mark-inverse" : ""}`} href="#inicio" aria-label="Ir al inicio de The Cannabis Shop"><img src={assets.logo} alt="Logotipo de The Cannabis Shop by Hemp Brothers" /><span className="store-wordmark"><small>The Cannabis</small><strong>Shop</strong><em>Sevilla</em></span></a>;
}

function SectionLabel({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <p className={`section-label ${inverse ? "section-label-inverse" : ""}`}><span aria-hidden="true" />{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [availabilityForm, setAvailabilityForm] = useState({ name: "", contact: "", category: "Cosmética", message: "" });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    document.documentElement.classList.add("motion-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const sendAvailabilityQuery = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = [
      "Hola, quiero consultar disponibilidad de productos en The Cannabis Shop.",
      "",
      `Nombre: ${availabilityForm.name}`,
      `Contacto: ${availabilityForm.contact}`,
      `Categoría: ${availabilityForm.category}`,
      availabilityForm.message ? `Consulta: ${availabilityForm.message}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/34634205061?text=${encodeURIComponent(query)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f0e8db] text-[#2d1c18]">
      <header className="site-header">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <StoreMark inverse />
          <nav className="hidden items-center gap-7 text-[0.69rem] font-extrabold uppercase tracking-[0.16em] text-[#f5ecdf] lg:flex" aria-label="Navegación principal">
            <a href="/productos">Productos</a><a href="#categorias">Categorías</a><a href="#servicios">La tienda</a><a href="#preguntas">Preguntas</a>
          </nav>
          <div className="header-actions">
            <a className="header-call" href="tel:+34954118908" aria-label="Llamar a The Cannabis Shop Sevilla"><Phone size={15} /><span className="hidden sm:inline">954 118 908</span></a>
            <a className="header-link hidden lg:inline-flex" href="#consulta">Consultar disponibilidad <ArrowDownRight size={15} /></a>
            <button className="menu-button lg:hidden" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((isOpen) => !isOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-menu" aria-label="Navegación móvil">{[["Productos", "/productos"], ["Categorías", "#categorias"], ["La tienda", "#servicios"], ["Preguntas", "#preguntas"]].map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}</nav>}
      </header>

      <main>
        <section id="inicio" className="product-hero" aria-labelledby="hero-heading">
          <div className="product-hero-texture" aria-hidden="true" />
          <img className="product-hero-image" src={assets.hero} alt="Interior real de The Cannabis Shop con vitrinas, iluminación cálida y mural verde" />
          <div className="product-hero-shade" />
          <p className="hero-neon-tag" aria-hidden="true">En frente de la Catedral de Sevilla</p>
          <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] px-5 pb-10 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-14 lg:pt-36">
            <div className="self-end">
              <SectionLabel inverse>THE CANNABIS SHOP · SEVILLA</SectionLabel>
              <h1 id="hero-heading" className="product-hero-heading mt-6">Tienda CBD<em>en Sevilla.</em></h1>
              <p className="mt-7 max-w-[560px] text-[1.05rem] leading-7 text-[#f1e8da] lg:text-[1.15rem]">Tu tienda de CBD en el centro de Sevilla, justo frente a la catedral. Descubre cosmética, aceites y extractos, vaporizadores, accesorios, semillas y más en Avenida Constitución 30, con atención en tienda y venta presencial.</p>
              <div className="mt-9 flex flex-wrap gap-4"><a className="button-gold" href="/productos">Ver productos <ArrowDownRight size={18} /></a><a className="text-link-light" href="#servicios">Conocer la selección <ArrowUpRight size={16} /></a></div>
            </div>
            <aside className="hero-selection-note self-end lg:justify-self-end"><Sparkles size={18} strokeWidth={1.8} /><p>Categorías de producto para comprar en tienda. Consulta la disponibilidad de cada referencia en el local.</p></aside>
          </div>
        </section>

        <section id="seleccion" data-reveal className="bg-[#f0e8db] px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="selection-heading">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.73fr_1.27fr] lg:items-end">
            <div><SectionLabel>Nuestros productos</SectionLabel><h2 id="selection-heading" className="display-heading mt-5 max-w-[470px] text-[clamp(3rem,5.4vw,6rem)] leading-[0.87] tracking-[-0.06em]">Productos para descubrir.</h2></div>
            <p className="max-w-[595px] text-[1.05rem] leading-7 text-[#654e47] lg:mb-2 lg:justify-self-end">Explora las categorías que encontrarás en la tienda. Localiza lo que buscas, consulta las referencias disponibles y completa tu compra en el local.</p>
          </div>
          <div id="categorias" className="mx-auto mt-14 grid max-w-[1240px] gap-px overflow-hidden bg-[#bba994] sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => <article data-reveal className={`category-card category-card-${category.tone}`} key={category.id}><div className="category-card-overlay" /><span className={`category-object category-object-${category.object}`} aria-hidden="true" /><div className="category-card-content"><span>{category.id}</span><strong className="category-sticker">{category.tag}</strong><h3 className="display-heading">{category.title}</h3><p>{category.text}</p><a href="#consulta" aria-label={`Consultar disponibilidad de ${category.title}`}>Consultar disponibilidad <ArrowUpRight size={16} /></a></div></article>)}
          </div>
        </section>

        <section id="servicios" data-reveal className="relative overflow-hidden bg-[#2f1c18] px-5 py-20 text-[#f1e8da] lg:px-10 lg:py-28" aria-labelledby="services-heading">
          <div className="service-ghost" aria-hidden="true">PASA</div>
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div><SectionLabel inverse>Sobre nosotros</SectionLabel><h2 id="services-heading" className="display-heading mt-5 max-w-[465px] text-[clamp(3rem,5.3vw,5.95rem)] leading-[0.88] tracking-[-0.06em]">Tu tienda de CBD en Sevilla desde 2022.</h2><p className="mt-7 max-w-[450px] text-[1.02rem] leading-7 text-[#e7d6c7]">Desde 2022 te atendemos en el centro de Sevilla con una selección de productos de CBD, accesorios y artículos para el día a día. Estamos frente a la Catedral para ayudarte a encontrar lo que buscas en un ambiente cercano.</p></div>
            <div className="service-showcase">
              <figure className="interior-store-photo"><img src={assets.interior} alt="Vitrinas y mural del interior de The Cannabis Shop" /><figcaption>Desde 2022 · tienda física en Sevilla</figcaption></figure>
              <div className="service-grid">
                <article><Search size={23} strokeWidth={1.65} /><span>01</span><h3 className="display-heading">Selección cuidada</h3><p>Reunimos categorías y referencias pensadas para descubrir nuevas opciones en tienda.</p></article>
                <article><PackageOpen size={23} strokeWidth={1.65} /><span>02</span><h3 className="display-heading">Atención cercana</h3><p>Te escuchamos y te ayudamos a recorrer la selección con una atención clara y personal.</p></article>
                <article><Store size={23} strokeWidth={1.65} /><span>03</span><h3 className="display-heading">En el centro de Sevilla</h3><p>Visítanos en Avenida Constitución 30, frente a la Catedral, y conoce la tienda.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section data-reveal className="product-feature px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20">
            <div className="feature-selection-board" aria-label="Muestrario de categorías de tienda"><div className="feature-board-head"><span>THE CANNABIS SHOP</span><span>SELECCIÓN</span></div><p className="feature-board-title display-heading">Lo ves.<br />Lo preguntas.</p><div className="feature-board-grid"><span>Cosmética</span><span>Aceites & extractos</span><span>Vaporizadores</span><span>Accesorios</span><span>Semillas</span><span>Selección de tienda</span></div><div className="feature-board-foot"><i aria-hidden="true">✦</i><span>Consulta presencial · Sevilla</span></div></div>
            <div className="self-center"><SectionLabel>THE CANNABIS SHOP</SectionLabel><h2 className="display-heading mt-5 max-w-[510px] text-[clamp(3rem,5.1vw,5.85rem)] leading-[0.88] tracking-[-0.06em]">Productos para tu selección.</h2><p className="mt-7 max-w-[510px] text-[1.05rem] leading-7 text-[#654e47]">Recorre las categorías y encuentra cosmética, aceites y extractos, vaporizadores, accesorios, semillas y novedades disponibles en tienda.</p><a className="inline-category-link mt-9" href="#categorias">Ver todos los productos <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section id="preguntas" data-reveal className="relative overflow-hidden bg-[#e6ddce] px-5 py-20 text-[#2f1c18] lg:px-10 lg:py-28" aria-labelledby="faq-heading">
          <div className="faq-grid-pattern" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div><SectionLabel>Preguntas frecuentes</SectionLabel><h2 id="faq-heading" className="display-heading mt-5 max-w-[460px] text-[clamp(3rem,5.2vw,5.95rem)] leading-[0.88] tracking-[-0.06em]">Encuentra lo que buscas.</h2><p className="mt-7 max-w-[400px] text-[1rem] leading-7 text-[#513221]">Si buscas un producto concreto, consulta la disponibilidad y las referencias actuales directamente en nuestra tienda.</p></div>
            <div className="lg:pt-5">{faqs.map((item, index) => { const isOpen = openFaq === index; return <div className="faq-item" key={item.question}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{item.question}</span><ChevronDown className={isOpen ? "rotate-180" : ""} size={22} /></button>{isOpen && <p>{item.answer}</p>}</div>; })}</div>
          </div>
        </section>

        <section id="consulta" data-reveal className="availability-section px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="availability-heading">
          <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div className="self-start lg:sticky lg:top-12">
              <SectionLabel inverse>Consulta de disponibilidad</SectionLabel>
              <h2 id="availability-heading" className="display-heading mt-5 max-w-[480px] text-[clamp(3.2rem,5.7vw,6.2rem)] leading-[.86] tracking-[-.07em] text-[#ffcf34]">¿Buscas algo concreto?</h2>
              <p className="mt-7 max-w-[430px] text-[1.02rem] leading-7 text-[#e7d6c7]">Cuéntanos qué producto necesitas y prepara tu consulta para WhatsApp. Te responderemos sobre la disponibilidad de la selección en tienda.</p>
              <div className="availability-whatsapp-note"><MessageCircle size={19} /><span>Las consultas se abren en WhatsApp con el número comercial de la tienda.</span></div>
            </div>
            <form data-reveal className="availability-form" onSubmit={sendAvailabilityQuery}>
              <div className="availability-form-top"><span>THE CANNABIS SHOP</span><span>DISPONIBILIDAD</span></div>
              <div className="availability-fields">
                <label>Tu nombre<input required name="name" value={availabilityForm.name} onChange={(event) => setAvailabilityForm({ ...availabilityForm, name: event.target.value })} placeholder="Escribe tu nombre" /></label>
                <label>Tu WhatsApp o email<input required name="contact" value={availabilityForm.contact} onChange={(event) => setAvailabilityForm({ ...availabilityForm, contact: event.target.value })} placeholder="Para responderte" /></label>
                <label className="availability-full">Categoría de interés<select name="category" value={availabilityForm.category} onChange={(event) => setAvailabilityForm({ ...availabilityForm, category: event.target.value })}><option>Cosmética</option><option>Aceites & extractos</option><option>Vaporizadores</option><option>Accesorios & gadgets</option><option>Semillas</option><option>Artículos para mascotas</option><option>Selección de tienda</option><option>Otra categoría</option></select></label>
                <label className="availability-full">¿Qué producto buscas?<textarea name="message" value={availabilityForm.message} onChange={(event) => setAvailabilityForm({ ...availabilityForm, message: event.target.value })} placeholder="Escribe la marca, producto o referencia que quieres consultar" rows={4} /></label>
              </div>
              <label className="privacy-check"><input required type="checkbox" /><span>He leído la <a href="/privacy">Política de Privacidad</a> y autorizo el envío de esta consulta por WhatsApp.</span></label>
              <button className="availability-submit" type="submit"><MessageCircle size={18} /> Enviar consulta por WhatsApp</button>
              <p className="availability-disclaimer">Este formulario no realiza ninguna compra ni reserva. Al enviarlo se abrirá WhatsApp con tu consulta preparada.</p>
            </form>
          </div>
        </section>

        <section data-reveal className="closing-product px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[940px] text-center"><SectionLabel inverse>THE CANNABIS SHOP · SEVILLA</SectionLabel><h2 className="display-heading mt-6 text-[clamp(3.2rem,6.5vw,7.05rem)] leading-[0.84] tracking-[-0.07em] text-[#d9a934]">Descubre nuestra selección.</h2><p className="mx-auto mt-7 max-w-[560px] text-[1.04rem] leading-7 text-[#eadfd1]">Explora las categorías, consulta la disponibilidad y compra tus productos directamente en The Cannabis Shop.</p><a className="button-gold mt-10" href="#consulta">Consultar disponibilidad <ArrowUpRight size={17} /></a></div>
        </section>

        <section id="ubicacion" data-reveal className="arrival-marker arrival-marker-final px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="arrival-heading">
          <div className="arrival-dots" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
            <div className="arrival-copy">
              <SectionLabel inverse>Ven a conocernos</SectionLabel>
              <p className="arrival-kicker"><MapPin size={16} /> Frente a la Catedral de Sevilla</p>
              <h2 id="arrival-heading" className="display-heading">La puerta está en Avenida Constitución, 30.</h2>
              <p>Encuentra The Cannabis Shop en pleno centro de Sevilla. Guarda la dirección, abre la ruta o llámanos antes de pasar por la tienda.</p>
              <div className="arrival-route-actions">
                <a className="arrival-map-button" href="https://maps.app.goo.gl/ANst3eEmqenoE7gE6" target="_blank" rel="noreferrer"><MapPin size={17} /> Abrir en Google Maps</a>
                <a className="arrival-phone-button" href="tel:+34954118908"><Phone size={16} /> Llamar a la tienda</a>
              </div>
            </div>
            <figure className="arrival-photo-frame">
              <img src={assets.entrance} alt="Entrada de The Cannabis Shop en Avenida Constitución, 30, Sevilla" />
              <figcaption><span>30</span> Avenida Constitución · Sevilla</figcaption>
            </figure>
          </div>
          <div className="relative mx-auto mt-14 grid max-w-[1240px] gap-px overflow-hidden bg-[#b88d38] md:grid-cols-3">
            <a className="arrival-contact-item" href="tel:+34954118908"><Phone size={20} /><span>Teléfono tienda</span><strong>954 118 908</strong></a>
            <a className="arrival-contact-item arrival-contact-item-green" href="https://wa.me/34634205061" target="_blank" rel="noreferrer"><MessageCircle size={20} /><span>WhatsApp</span><strong>634 205 061</strong></a>
            <a className="arrival-contact-item" href="mailto:cannabissevilla@lavetia.es"><Mail size={20} /><span>Email</span><strong>cannabissevilla@lavetia.es</strong></a>
          </div>
          <div className="relative mx-auto mt-8 max-w-[1240px]"><div className="store-hours"><div><SectionLabel inverse>Horario comercial</SectionLabel><p className="store-hours-note">Consulta el horario que corresponde a la temporada antes de venir.</p></div><div className="hours-grid"><div><span>Horario de verano</span><strong>10:00 — 22:00</strong></div><div><span>Horario de invierno</span><strong>10:00 — 21:00</strong></div></div></div></div>
        </section>
      </main>

      <footer className="bg-[#20130f] px-5 pb-8 pt-10 text-[#f1e8da] lg:px-10">
        <div className="mx-auto max-w-[1240px] border-b border-[#f1e8da]/20 pb-8"><StoreMark inverse /></div>
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 pt-6 text-[0.67rem] uppercase tracking-[0.12em] text-[#a9907e] md:flex-row"><span>© 2026 Shops Baleares S.L.</span><nav className="footer-legal-links" aria-label="Enlaces legales"><a href="/cookies">Cookies</a><a href="/privacy">Privacidad</a><a href="/aviso-legal">Aviso legal</a></nav></div>
      </footer>
    </div>
  );
}
