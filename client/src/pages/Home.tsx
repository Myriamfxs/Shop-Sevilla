/**
 * Diseño: Showroom de selección. Producto y servicio primero, con imágenes de estudio sin marca;
 * no muestra personas, fachadas, precios, claims de salud ni detalles de producto no confirmados.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  PackageOpen,
  Search,
  Sparkles,
  Store,
  X,
} from "lucide-react";

const assets = {
  hero: "/manus-storage/cannabis-shop-showroom-hero_ab2b9183.jpg",
};

const categories = [
  { id: "01", title: "Cosmética", text: "Una categoría para descubrir fórmulas, texturas y selección disponible en tienda.", tone: "mahogany" },
  { id: "02", title: "Aceites & extractos", text: "Consulta las referencias presentes y su información disponible directamente en el establecimiento.", tone: "gold" },
  { id: "03", title: "Vaporizadores", text: "Encuentra dispositivos y accesorios de la categoría para revisar con atención presencial.", tone: "green" },
  { id: "04", title: "Accesorios & gadgets", text: "Objetos y complementos para configurar una selección que encaje contigo.", tone: "ivory" },
  { id: "05", title: "Semillas", text: "Una familia de producto para consultar por categorías y disponibilidad en el local.", tone: "ivory" },
  { id: "06", title: "Selección de tienda", text: "Novedades, favoritos y categorías que puedes explorar durante tu visita.", tone: "mahogany" },
];

const faqs = [
  {
    question: "¿Cómo conozco la selección disponible?",
    answer: "La disponibilidad se consulta directamente en tienda. El equipo puede ayudarte a localizar las categorías y referencias que buscas durante tu visita.",
  },
  {
    question: "¿Ofrecéis orientación sobre los productos?",
    answer: "La atención presencial está pensada para ayudarte a navegar por las categorías, la información disponible de cada referencia y los accesorios relacionados.",
  },
  {
    question: "¿Incluye esta página compra online?",
    answer: "No. Esta landing está diseñada como escaparate de categorías y servicios de la tienda física. No incorpora carrito, precios ni promociones online.",
  },
];

function StoreMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`store-mark ${inverse ? "store-mark-inverse" : ""}`} href="#inicio" aria-label="Ir al inicio de The Cannabis Shop">
      <span className="mark-monogram" aria-hidden="true">TCS</span>
      <span className="mark-words">
        <small>The</small>
        <strong>Cannabis</strong>
        <strong>Shop</strong>
      </span>
    </a>
  );
}

function SectionLabel({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return (
    <p className={`section-label ${inverse ? "section-label-inverse" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f0e8db] text-[#2d1c18]">
      <header className="site-header">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <StoreMark inverse />
          <nav className="hidden items-center gap-7 text-[0.69rem] font-extrabold uppercase tracking-[0.16em] text-[#f5ecdf] lg:flex" aria-label="Navegación principal">
            <a href="#seleccion">Selección</a>
            <a href="#categorias">Categorías</a>
            <a href="#servicios">Servicios</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <a className="header-link hidden lg:inline-flex" href="#categorias">
            Explorar categorías <ArrowDownRight size={15} />
          </a>
          <button
            className="menu-button lg:hidden"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu" aria-label="Navegación móvil">
            {[
              ["Selección", "#seleccion"],
              ["Categorías", "#categorias"],
              ["Servicios", "#servicios"],
              ["Preguntas", "#preguntas"],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}<ArrowUpRight size={17} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="product-hero" aria-labelledby="hero-heading">
          <div className="product-hero-texture" aria-hidden="true" />
          <img className="product-hero-image" src={assets.hero} alt="Composición editorial de una selección de productos y accesorios sin marca" />
          <div className="product-hero-shade" />
          <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] px-5 pb-10 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-14 lg:pt-36">
            <div className="self-end">
              <SectionLabel inverse>THE CANNABIS SHOP · SEVILLA</SectionLabel>
              <h1 id="hero-heading" className="product-hero-heading mt-6">
                Explora la selección.
                <em>Consulta en tienda.</em>
              </h1>
              <p className="mt-7 max-w-[530px] text-[1.05rem] leading-7 text-[#f1e8da] lg:text-[1.15rem]">
                Categorías de producto, accesorios y atención presencial en The Cannabis Shop · Sevilla. Ven a explorar la selección y consulta la disponibilidad en el local.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a className="button-gold" href="#categorias">Ver categorías <ArrowDownRight size={18} /></a>
                <a className="text-link-light" href="#servicios">Cómo te atendemos <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <aside className="hero-selection-note self-end lg:justify-self-end">
              <Sparkles size={18} strokeWidth={1.8} />
              <p>Tienda física en Sevilla · categorías, accesorios y disponibilidad para consultar presencialmente.</p>
            </aside>
          </div>
        </section>

        <section id="seleccion" className="bg-[#f0e8db] px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="selection-heading">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.73fr_1.27fr] lg:items-end">
            <div>
              <SectionLabel>La selección</SectionLabel>
              <h2 id="selection-heading" className="display-heading mt-5 max-w-[470px] text-[clamp(3rem,5.4vw,6rem)] leading-[0.87] tracking-[-0.06em]">
                Categorías para explorar en tienda.
              </h2>
            </div>
            <p className="max-w-[595px] text-[1.05rem] leading-7 text-[#654e47] lg:mb-2 lg:justify-self-end">
              Un recorrido directo por las familias de producto y accesorios que puedes consultar en el local. Empieza por tu categoría y continúa con la atención presencial.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1240px] gap-px overflow-hidden bg-[#bba994] sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article className={`category-card category-card-${category.tone}`} key={category.id}>
                <div className="category-card-overlay" />
                <div className="category-card-content">
                  <span>{category.id}</span>
                  <h3 className="display-heading">{category.title}</h3>
                  <p>{category.text}</p>
                  <a href="#servicios" aria-label={`Consultar ${category.title} en tienda`}>Consultar en tienda <ArrowUpRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="servicios" className="relative overflow-hidden bg-[#2f1c18] px-5 py-20 text-[#f1e8da] lg:px-10 lg:py-28" aria-labelledby="services-heading">
          <div className="service-ghost" aria-hidden="true">SELECCIÓN</div>
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionLabel inverse>Servicios en tienda</SectionLabel>
              <h2 id="services-heading" className="display-heading mt-5 max-w-[465px] text-[clamp(3rem,5.3vw,5.95rem)] leading-[0.88] tracking-[-0.06em]">
                Una tienda es también servicio.
              </h2>
              <p className="mt-7 max-w-[450px] text-[1.02rem] leading-7 text-[#e7d6c7]">
                Más allá de la selección, estamos para facilitar una experiencia de tienda directa: localizar lo que buscas, comprender las categorías disponibles y preparar tu visita con contexto.
              </p>
            </div>
            <div className="service-grid">
              <article>
                <Search size={23} strokeWidth={1.65} />
                <span>01</span>
                <h3 className="display-heading">Orientación por categorías</h3>
                <p>Te ayudamos a ubicar la familia de producto o accesorio que quieres consultar al llegar.</p>
              </article>
              <article>
                <PackageOpen size={23} strokeWidth={1.65} />
                <span>02</span>
                <h3 className="display-heading">Selección en tienda</h3>
                <p>Consulta referencias y disponibilidad de forma presencial, dentro de la selección del establecimiento.</p>
              </article>
              <article>
                <Store size={23} strokeWidth={1.65} />
                <span>03</span>
                <h3 className="display-heading">Atención presencial</h3>
                <p>Un punto de contacto directo para explorar productos, complementos y cultura cannabis en un solo lugar.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="product-feature px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20">
            <div className="feature-selection-board" aria-label="Muestrario de categorías de tienda">
              <div className="feature-board-head"><span>THE CANNABIS SHOP</span><span>SELECCIÓN</span></div>
              <p className="feature-board-title display-heading">Muestrario de tienda.</p>
              <div className="feature-board-grid">
                <span>Cosmética</span><span>Aceites & extractos</span><span>Vaporizadores</span><span>Accesorios</span><span>Semillas</span><span>Selección de tienda</span>
              </div>
              <div className="feature-board-foot"><i aria-hidden="true">✦</i><span>Consulta presencial · Sevilla</span></div>
            </div>
            <div className="self-center">
              <SectionLabel>THE CANNABIS SHOP</SectionLabel>
              <h2 className="display-heading mt-5 max-w-[510px] text-[clamp(3rem,5.1vw,5.85rem)] leading-[0.88] tracking-[-0.06em]">
                Selección de tienda, atención presencial.
              </h2>
              <p className="mt-7 max-w-[510px] text-[1.05rem] leading-7 text-[#654e47]">
                Recorre las categorías con facilidad, consulta la disponibilidad y recibe atención presencial para localizar la referencia o el accesorio que buscas.
              </p>
              <a className="inline-category-link mt-9" href="#categorias">Explorar todas las categorías <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="preguntas" className="relative overflow-hidden bg-[#e6ddce] px-5 py-20 text-[#2f1c18] lg:px-10 lg:py-28" aria-labelledby="faq-heading">
          <div className="faq-grid-pattern" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionLabel>Preguntas frecuentes</SectionLabel>
              <h2 id="faq-heading" className="display-heading mt-5 max-w-[460px] text-[clamp(3rem,5.2vw,5.95rem)] leading-[0.88] tracking-[-0.06em]">
                Consulta antes de venir.
              </h2>
              <p className="mt-7 max-w-[400px] text-[1rem] leading-7 text-[#513221]">
                Si necesitas una referencia concreta, la mejor forma de comprobarla es consultarla directamente durante tu visita a la tienda.
              </p>
            </div>
            <div className="lg:pt-5">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="faq-item" key={item.question}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                      <span>{item.question}</span><ChevronDown className={isOpen ? "rotate-180" : ""} size={22} />
                    </button>
                    {isOpen && <p>{item.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="closing-product px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[940px] text-center">
            <SectionLabel inverse>THE CANNABIS SHOP · SEVILLA</SectionLabel>
            <h2 className="display-heading mt-6 text-[clamp(3.2rem,6.5vw,7.05rem)] leading-[0.84] tracking-[-0.07em] text-[#d9a934]">
              Consulta la selección en tienda.
            </h2>
            <p className="mx-auto mt-7 max-w-[560px] text-[1.04rem] leading-7 text-[#eadfd1]">
              Explora las categorías, consulta la disponibilidad y encuentra en tienda el producto o accesorio que estás buscando.
            </p>
            <a className="button-gold mt-10" href="#categorias">Ver categorías <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="bg-[#20130f] px-5 pb-8 pt-10 text-[#f1e8da] lg:px-10">
        <div className="mx-auto grid max-w-[1240px] gap-10 border-b border-[#f1e8da]/20 pb-10 md:grid-cols-[1fr_auto]">
          <div>
            <StoreMark inverse />
            <p className="mt-5 max-w-[420px] text-sm leading-6 text-[#cbb7a6]">Selección de categorías, productos y accesorios para consultar en nuestra tienda física de Sevilla.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-[#eadfd1]">
            <a href="#seleccion">Selección</a><a href="#categorias">Categorías</a><a href="#servicios">Servicios</a><a href="#inicio">Volver arriba</a>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 pt-6 text-[0.67rem] uppercase tracking-[0.12em] text-[#a9907e] md:flex-row">
          <span>© 2026 The Cannabis Shop · Sevilla</span><span>Privacidad y aviso legal · enlaces por añadir</span>
        </div>
      </footer>
    </div>
  );
}
