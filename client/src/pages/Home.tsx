/**
 * Diseño: Vitrina urbana. La landing recoge madera cálida, luz verde y energía de pizarra del interior real;
 * muestra categorías y atención presencial sin precios, claims de salud ni detalles de producto no confirmados.
 */
import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  MessageCircle,
  PackageOpen,
  Search,
  Sparkles,
  Store,
  X,
} from "lucide-react";

const assets = {
  hero: "/manus-storage/the-cannabis-shop-interior_b3c16ce0.jpeg",
  interior: "/manus-storage/the-cannabis-shop-interior_b3c16ce0.jpeg",
  cosmeticsOils: "/manus-storage/the-cannabis-shop-cosmetica-aceites_edd43117.jpeg",
  cbdOils: "/manus-storage/the-cannabis-shop-aceites-cbd-vitrina_d53925e2.jpeg",
  logo: "/manus-storage/the-cannabis-shop-hemp-brothers-logo_44a74b59.png",
};

const categories = [
  { id: "01", title: "Cosmética", tag: "Productos", object: "bottle", text: "Descubre la cosmética disponible dentro de nuestra selección de tienda.", tone: "mahogany" },
  { id: "02", title: "Aceites & extractos", tag: "Productos", object: "dropper", text: "Explora las referencias disponibles de esta categoría en el establecimiento.", tone: "gold" },
  { id: "03", title: "Vaporizadores", tag: "Productos", object: "device", text: "Encuentra dispositivos y complementos de la categoría disponibles en tienda.", tone: "green" },
  { id: "04", title: "Accesorios & gadgets", tag: "Accesorios", object: "case", text: "Complementos y objetos para completar tu selección de productos.", tone: "ivory" },
  { id: "05", title: "Semillas", tag: "Productos", object: "packet", text: "Consulta las referencias de semillas presentes en la selección actual.", tone: "ivory" },
  { id: "06", title: "Selección de tienda", tag: "Novedades", object: "jar", text: "Descubre novedades y productos destacados disponibles en el local.", tone: "mahogany" },
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
            <a href="#seleccion">Selección</a><a href="#categorias">Categorías</a><a href="#servicios">La tienda</a><a href="#preguntas">Preguntas</a>
          </nav>
          <a className="header-link hidden lg:inline-flex" href="#consulta">Consultar disponibilidad <ArrowDownRight size={15} /></a>
          <button className="menu-button lg:hidden" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((isOpen) => !isOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <nav className="mobile-menu" aria-label="Navegación móvil">{[["Selección", "#seleccion"], ["Categorías", "#categorias"], ["La tienda", "#servicios"], ["Preguntas", "#preguntas"]].map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}</nav>}
      </header>

      <main>
        <section id="inicio" className="product-hero" aria-labelledby="hero-heading">
          <div className="product-hero-texture" aria-hidden="true" />
          <img className="product-hero-image" src={assets.hero} alt="Interior real de The Cannabis Shop con vitrinas, iluminación cálida y mural verde" />
          <div className="product-hero-shade" />
          <p className="hero-neon-tag" aria-hidden="true">Tienda real · luz verde · Sevilla</p>
          <div className="hero-counter-display" aria-hidden="true"><span className="counter-object counter-jar" /><span className="counter-object counter-bottle" /><span className="counter-object counter-case" /><p>Vitrina · selección · consulta</p></div>
          <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] px-5 pb-10 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-14 lg:pt-36">
            <div className="self-end">
              <SectionLabel inverse>THE CANNABIS SHOP · SEVILLA</SectionLabel>
              <h1 id="hero-heading" className="product-hero-heading mt-6">Productos.<br />Accesorios.<em>Selección.</em></h1>
              <p className="mt-7 max-w-[530px] text-[1.05rem] leading-7 text-[#f1e8da] lg:text-[1.15rem]">Encuentra cosmética, aceites y extractos, vaporizadores, accesorios, semillas y más. Explora la selección disponible y compra tus productos en The Cannabis Shop · Sevilla.</p>
              <div className="mt-9 flex flex-wrap gap-4"><a className="button-gold" href="#categorias">Ver productos <ArrowDownRight size={18} /></a><a className="text-link-light" href="#servicios">Conocer la selección <ArrowUpRight size={16} /></a></div>
            </div>
            <aside className="hero-selection-note self-end lg:justify-self-end"><Sparkles size={18} strokeWidth={1.8} /><p>Categorías de producto para comprar en tienda. Consulta la disponibilidad de cada referencia en el local.</p></aside>
          </div>
        </section>

        <section id="seleccion" className="bg-[#f0e8db] px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="selection-heading">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.73fr_1.27fr] lg:items-end">
            <div><SectionLabel>Nuestros productos</SectionLabel><h2 id="selection-heading" className="display-heading mt-5 max-w-[470px] text-[clamp(3rem,5.4vw,6rem)] leading-[0.87] tracking-[-0.06em]">Productos para descubrir.</h2></div>
            <p className="max-w-[595px] text-[1.05rem] leading-7 text-[#654e47] lg:mb-2 lg:justify-self-end">Explora las categorías que encontrarás en la tienda. Localiza lo que buscas, consulta las referencias disponibles y completa tu compra en el local.</p>
          </div>
          <div id="categorias" className="mx-auto mt-14 grid max-w-[1240px] gap-px overflow-hidden bg-[#bba994] sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => <article className={`category-card category-card-${category.tone}`} key={category.id}><div className="category-card-overlay" /><span className={`category-object category-object-${category.object}`} aria-hidden="true" /><div className="category-card-content"><span>{category.id}</span><strong className="category-sticker">{category.tag}</strong><h3 className="display-heading">{category.title}</h3><p>{category.text}</p><a href="#consulta" aria-label={`Consultar disponibilidad de ${category.title}`}>Consultar disponibilidad <ArrowUpRight size={16} /></a></div></article>)}
          </div>
        </section>

        <section className="product-spotlight px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="oils-heading">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <div className="self-start lg:sticky lg:top-12">
              <SectionLabel>Aceites y cosmética</SectionLabel>
              <h2 id="oils-heading" className="display-heading mt-5 max-w-[470px] text-[clamp(3.1rem,5.4vw,6.1rem)] leading-[.86] tracking-[-.07em]">Selección real, desde la vitrina.</h2>
              <p className="mt-7 max-w-[430px] text-[1.03rem] leading-7 text-[#624c45]">Explora aceites de la selección, aceites de masaje y referencias de cuidado para piel, cabello y uñas. Consulta en tienda las presentaciones y la disponibilidad actual.</p>
              <a className="inline-category-link mt-9" href="#consulta">Consultar disponibilidad de aceites <ArrowUpRight size={17} /></a>
            </div>
            <div className="product-visual-grid">
              <figure className="product-real-photo product-real-photo-primary"><img src={assets.cbdOils} alt="Selección de aceites de CBD en distintos envases de colores" /><figcaption>Aceites de la selección de tienda</figcaption></figure>
              <figure className="product-real-photo product-real-photo-secondary"><img src={assets.cosmeticsOils} alt="Aceites de masaje y cuidado personal en una vitrina" /><figcaption>Masaje y cuidado personal</figcaption></figure>
            </div>
          </div>
          <div className="mx-auto mt-14 grid max-w-[1240px] gap-px overflow-hidden bg-[#d8c3aa] md:grid-cols-3">
            <article className="product-info-card"><span>01</span><h3 className="display-heading">Aceites de la selección</h3><p>Consulta las referencias etiquetadas y las presentaciones disponibles en la vitrina.</p></article>
            <article className="product-info-card"><span>02</span><h3 className="display-heading">Masaje y cuidado</h3><p>Aceites de masaje y productos de cuidado para explorar dentro de la categoría cosmética.</p></article>
            <article className="product-info-card"><span>03</span><h3 className="display-heading">Piel, cabello y uñas</h3><p>Referencias de cuidado personal cuya presentación y uso se confirman directamente en tienda.</p></article>
          </div>
        </section>

        <section id="servicios" className="relative overflow-hidden bg-[#2f1c18] px-5 py-20 text-[#f1e8da] lg:px-10 lg:py-28" aria-labelledby="services-heading">
          <div className="service-ghost" aria-hidden="true">PASA</div>
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div><SectionLabel inverse>Compra en tienda</SectionLabel><h2 id="services-heading" className="display-heading mt-5 max-w-[465px] text-[clamp(3rem,5.3vw,5.95rem)] leading-[0.88] tracking-[-0.06em]">Tus productos. Nuestra selección.</h2><p className="mt-7 max-w-[450px] text-[1.02rem] leading-7 text-[#e7d6c7]">Reunimos categorías, accesorios y novedades para que encuentres los productos que buscas. Consulta las referencias disponibles y compra directamente en el local.</p></div>
            <div className="service-showcase">
              <figure className="interior-store-photo"><img src={assets.interior} alt="Vitrinas y mural del interior de The Cannabis Shop" /><figcaption>Productos, vitrinas y selección en tienda.</figcaption></figure>
              <div className="service-grid">
                <article><Search size={23} strokeWidth={1.65} /><span>01</span><h3 className="display-heading">Encuentra tu categoría</h3><p>Localiza la familia de producto o accesorio que quieres comprar dentro de la tienda.</p></article>
                <article><PackageOpen size={23} strokeWidth={1.65} /><span>02</span><h3 className="display-heading">Revisa la selección</h3><p>Consulta las referencias y la disponibilidad actual de la selección del establecimiento.</p></article>
                <article><Store size={23} strokeWidth={1.65} /><span>03</span><h3 className="display-heading">Compra en tienda</h3><p>Compra los productos disponibles directamente en The Cannabis Shop · Sevilla.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="product-feature px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20">
            <div className="feature-selection-board" aria-label="Muestrario de categorías de tienda"><div className="feature-board-head"><span>THE CANNABIS SHOP</span><span>SELECCIÓN</span></div><p className="feature-board-title display-heading">Lo ves.<br />Lo preguntas.</p><div className="feature-board-grid"><span>Cosmética</span><span>Aceites & extractos</span><span>Vaporizadores</span><span>Accesorios</span><span>Semillas</span><span>Selección de tienda</span></div><div className="feature-board-foot"><i aria-hidden="true">✦</i><span>Consulta presencial · Sevilla</span></div></div>
            <div className="self-center"><SectionLabel>THE CANNABIS SHOP</SectionLabel><h2 className="display-heading mt-5 max-w-[510px] text-[clamp(3rem,5.1vw,5.85rem)] leading-[0.88] tracking-[-0.06em]">Productos para tu selección.</h2><p className="mt-7 max-w-[510px] text-[1.05rem] leading-7 text-[#654e47]">Recorre las categorías y encuentra cosmética, aceites y extractos, vaporizadores, accesorios, semillas y novedades disponibles en tienda.</p><a className="inline-category-link mt-9" href="#categorias">Ver todos los productos <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section id="preguntas" className="relative overflow-hidden bg-[#e6ddce] px-5 py-20 text-[#2f1c18] lg:px-10 lg:py-28" aria-labelledby="faq-heading">
          <div className="faq-grid-pattern" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div><SectionLabel>Preguntas frecuentes</SectionLabel><h2 id="faq-heading" className="display-heading mt-5 max-w-[460px] text-[clamp(3rem,5.2vw,5.95rem)] leading-[0.88] tracking-[-0.06em]">Encuentra lo que buscas.</h2><p className="mt-7 max-w-[400px] text-[1rem] leading-7 text-[#513221]">Si buscas un producto concreto, consulta la disponibilidad y las referencias actuales directamente en nuestra tienda.</p></div>
            <div className="lg:pt-5">{faqs.map((item, index) => { const isOpen = openFaq === index; return <div className="faq-item" key={item.question}><button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}><span>{item.question}</span><ChevronDown className={isOpen ? "rotate-180" : ""} size={22} /></button>{isOpen && <p>{item.answer}</p>}</div>; })}</div>
          </div>
        </section>

        <section id="consulta" className="availability-section px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="availability-heading">
          <div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div className="self-start lg:sticky lg:top-12">
              <SectionLabel inverse>Consulta de disponibilidad</SectionLabel>
              <h2 id="availability-heading" className="display-heading mt-5 max-w-[480px] text-[clamp(3.2rem,5.7vw,6.2rem)] leading-[.86] tracking-[-.07em] text-[#ffcf34]">¿Buscas algo concreto?</h2>
              <p className="mt-7 max-w-[430px] text-[1.02rem] leading-7 text-[#e7d6c7]">Cuéntanos qué producto necesitas y prepara tu consulta para WhatsApp. Te responderemos sobre la disponibilidad de la selección en tienda.</p>
              <div className="availability-whatsapp-note"><MessageCircle size={19} /><span>Las consultas se abren en WhatsApp con el número comercial de la tienda.</span></div>
            </div>
            <form className="availability-form" onSubmit={sendAvailabilityQuery}>
              <div className="availability-form-top"><span>THE CANNABIS SHOP</span><span>DISPONIBILIDAD</span></div>
              <div className="availability-fields">
                <label>Tu nombre<input required name="name" value={availabilityForm.name} onChange={(event) => setAvailabilityForm({ ...availabilityForm, name: event.target.value })} placeholder="Escribe tu nombre" /></label>
                <label>Tu WhatsApp o email<input required name="contact" value={availabilityForm.contact} onChange={(event) => setAvailabilityForm({ ...availabilityForm, contact: event.target.value })} placeholder="Para responderte" /></label>
                <label className="availability-full">Categoría de interés<select name="category" value={availabilityForm.category} onChange={(event) => setAvailabilityForm({ ...availabilityForm, category: event.target.value })}><option>Cosmética</option><option>Aceites & extractos</option><option>Vaporizadores</option><option>Accesorios & gadgets</option><option>Semillas</option><option>Selección de tienda</option><option>Otra categoría</option></select></label>
                <label className="availability-full">¿Qué producto buscas?<textarea name="message" value={availabilityForm.message} onChange={(event) => setAvailabilityForm({ ...availabilityForm, message: event.target.value })} placeholder="Escribe la marca, producto o referencia que quieres consultar" rows={4} /></label>
              </div>
              <label className="privacy-check"><input required type="checkbox" /><span>He leído la <a href="/privacy">Política de Privacidad</a> y autorizo el envío de esta consulta por WhatsApp.</span></label>
              <button className="availability-submit" type="submit"><MessageCircle size={18} /> Enviar consulta por WhatsApp</button>
              <p className="availability-disclaimer">Este formulario no realiza ninguna compra ni reserva. Al enviarlo se abrirá WhatsApp con tu consulta preparada.</p>
            </form>
          </div>
        </section>

        <section className="closing-product px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[940px] text-center"><SectionLabel inverse>THE CANNABIS SHOP · SEVILLA</SectionLabel><h2 className="display-heading mt-6 text-[clamp(3.2rem,6.5vw,7.05rem)] leading-[0.84] tracking-[-0.07em] text-[#d9a934]">Descubre nuestra selección.</h2><p className="mx-auto mt-7 max-w-[560px] text-[1.04rem] leading-7 text-[#eadfd1]">Explora las categorías, consulta la disponibilidad y compra tus productos directamente en The Cannabis Shop.</p><a className="button-gold mt-10" href="#consulta">Consultar disponibilidad <ArrowUpRight size={17} /></a></div>
        </section>
      </main>

      <footer className="bg-[#20130f] px-5 pb-8 pt-10 text-[#f1e8da] lg:px-10">
        <div className="mx-auto grid max-w-[1240px] gap-10 border-b border-[#f1e8da]/20 pb-10 md:grid-cols-[1fr_auto]"><div><StoreMark inverse /><p className="mt-5 max-w-[420px] text-sm leading-6 text-[#cbb7a6]">Selección de categorías, productos y accesorios para consultar en nuestra tienda física de Sevilla.</p></div><div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-[#eadfd1]"><a href="#seleccion">Selección</a><a href="#categorias">Categorías</a><a href="#servicios">La tienda</a><a href="#inicio">Volver arriba</a></div></div>
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 pt-6 text-[0.67rem] uppercase tracking-[0.12em] text-[#a9907e] md:flex-row"><span>© 2026 Shops Baleares S.L.</span><nav className="footer-legal-links" aria-label="Enlaces legales"><a href="/cookies">Cookies</a><a href="/privacy">Privacidad</a><a href="/aviso-legal">Aviso legal</a></nav></div>
      </footer>
    </div>
  );
}
