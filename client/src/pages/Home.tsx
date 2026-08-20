/**
 * Diseño: Rótulo de calle, oro y caoba. La página refleja la tienda física real de The Cannabis Shop
 * con fotografía de fachada, tipografía de rótulo y contenido corporativo prudente, sin venta online ni claims.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Info,
  MapPin,
  Menu,
  Store,
  X,
} from "lucide-react";

const assets = {
  facade: "/manus-storage/the-cannabis-shop-sevilla-fachada-horizontal_9f62f6ec.jpeg",
  entrance: "/manus-storage/the-cannabis-shop-sevilla-entrada-vertical_98ac1b94.jpeg",
  street: "/manus-storage/the-cannabis-shop-sevilla-calle_91026c8e.jpeg",
  verticalFacade: "/manus-storage/the-cannabis-shop-sevilla-fachada-vertical_282fa968.jpeg",
};

const categories = [
  "Productos",
  "Ropa",
  "Cosmética",
  "Extractos",
  "Comidas",
  "Accesorios & gadget",
  "Aceite",
  "Semillas",
  "Vaporizadores",
];

const faqItems = [
  {
    question: "¿Dónde encuentro el horario actualizado?",
    answer:
      "Consulta el Perfil de Empresa de The Cannabis Shop antes de desplazarte. Ahí deben figurar el horario habitual, los cambios de festivos y la ruta actualizada.",
  },
  {
    question: "¿Puedo consultar las categorías antes de visitar?",
    answer:
      "La señalética del local recoge las principales categorías. La atención presencial puede ayudarte a localizar la información disponible y a resolver dudas de visita.",
  },
  {
    question: "¿Esta página incluye venta online o consejos de salud?",
    answer:
      "No. Esta landing presenta el establecimiento físico y no incorpora carrito, precios, promociones, instrucciones de uso ni promesas de salud.",
  },
];

function StoreMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`store-mark ${inverse ? "store-mark-inverse" : ""}`} href="#inicio" aria-label="Ir al inicio de The Cannabis Shop">
      <span className="mark-leaf" aria-hidden="true">✦</span>
      <span className="mark-words">
        <small>The</small>
        <strong>Cannabis</strong>
        <strong>Shop</strong>
        <em>Sevilla</em>
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
    <div className="min-h-screen overflow-x-hidden bg-[#eee7da] text-[#2d1c18]">
      <header className="site-header site-header-dark">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <StoreMark inverse />
          <nav className="hidden items-center gap-7 text-[0.69rem] font-extrabold uppercase tracking-[0.16em] text-[#f0e6d7] lg:flex" aria-label="Navegación principal">
            <a href="#tienda">La tienda</a>
            <a href="#categorías">Categorías</a>
            <a href="#visita">Visita</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <a className="header-cta header-cta-gold hidden lg:inline-flex" href="#visita">
            Antes de visitar <ArrowUpRight size={15} strokeWidth={2.3} />
          </a>
          <button
            className="menu-button menu-button-dark lg:hidden"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu mobile-menu-dark" aria-label="Navegación móvil">
            {[
              ["La tienda", "#tienda"],
              ["Categorías", "#categorías"],
              ["Visita", "#visita"],
              ["Preguntas", "#preguntas"],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="shop-hero" aria-labelledby="hero-heading">
          <img className="shop-hero-image" src={assets.facade} alt="Fachada real de The Cannabis Shop en Sevilla" />
          <div className="shop-hero-shade" />
          <div className="shop-hero-grain" aria-hidden="true" />
          <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] px-5 pb-10 pt-32 lg:grid-cols-[1.07fr_0.93fr] lg:px-10 lg:pb-14 lg:pt-40">
            <div className="self-end">
              <SectionLabel inverse>Tienda física · Sevilla</SectionLabel>
              <h1 id="hero-heading" className="shop-hero-title mt-6">
                The Cannabis
                <span>Shop</span>
              </h1>
              <p className="mt-7 max-w-[520px] text-[1.06rem] leading-7 text-[#f0e6d7] lg:text-[1.14rem]">
                Una tienda de cannabis en Sevilla con presencia real de calle. Conócenos, revisa las categorías señalizadas en el local y prepara tu visita con información clara.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a className="button-gold" href="#tienda">
                  Conocer la tienda <ArrowDownRight size={18} />
                </a>
                <a className="text-link-light" href="#visita">
                  Antes de desplazarte <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <aside className="hero-side-note self-end lg:justify-self-end">
              <Store size={19} strokeWidth={1.7} />
              <p>
                Tienda física en Sevilla. Esta página presenta el espacio y su información de visita; no incorpora compra online, precios ni promociones.
              </p>
            </aside>
          </div>
        </section>

        <section id="tienda" className="relative overflow-hidden bg-[#3a221d] px-5 py-20 text-[#eee7da] lg:px-10 lg:py-28" aria-labelledby="store-heading">
          <div className="perforated-field" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <SectionLabel inverse>La tienda</SectionLabel>
              <h2 id="store-heading" className="display-heading mt-5 max-w-[500px] text-[clamp(3rem,5.6vw,6.25rem)] leading-[0.87] tracking-[-0.06em]">
                Se reconoce antes de entrar.
              </h2>
            </div>
            <div className="max-w-[575px] justify-self-end lg:pb-3">
              <p className="text-[1.1rem] leading-8 text-[#e7dacc]">
                El rótulo, la entrada y la señalética forman parte de una identidad propia: caoba, oro y verde. La landing conserva ese carácter para que quien llega desde Google encuentre el mismo lugar que ve al doblar la esquina.
              </p>
              <div className="mt-10 grid grid-cols-3 border-t border-[#eee7da]/25 pt-5">
                {[
                  ["01", "Identidad\nde calle"],
                  ["02", "Atención\npresencial"],
                  ["03", "Sevilla\nen persona"],
                ].map(([number, label]) => (
                  <div key={number}>
                    <span className="stat-index-gold">{number}</span>
                    <p className="text-[0.68rem] font-bold uppercase leading-[1.45] tracking-[0.08em] text-[#e7dacc]">
                      {label.split("\n").map((line) => <span className="block" key={line}>{line}</span>)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="categorías" className="bg-[#eee7da] px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="categories-heading">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <div>
              <SectionLabel>Categorías en el local</SectionLabel>
              <h2 id="categories-heading" className="display-heading mt-5 max-w-[450px] text-[clamp(2.9rem,5.2vw,5.9rem)] leading-[0.88] tracking-[-0.06em]">
                Lo que muestra la señalética.
              </h2>
              <p className="mt-7 max-w-[400px] text-[1.02rem] leading-7 text-[#5b4540]">
                Estas son las categorías visibles en la entrada. Para conocer la información disponible de cada una, consulta directamente en tienda.
              </p>
            </div>
            <div className="category-board">
              <div className="category-board-heading">
                <span>THE CANNABIS SHOP</span>
                <span>SEVILLA</span>
              </div>
              <div className="category-list">
                {categories.map((category, index) => (
                  <div className="category-item" key={category}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{category}</strong>
                    <i aria-hidden="true">↗</i>
                  </div>
                ))}
              </div>
              <p className="category-board-note">Orientación de tienda · La disponibilidad se confirma presencialmente.</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20">
            <div className="real-photo-frame real-photo-frame-tall">
              <img src={assets.entrance} alt="Entrada real de The Cannabis Shop con su señalética de categorías" />
              <span className="frame-caption">Entrada y señalética del local</span>
            </div>
            <div className="lg:pt-16">
              <SectionLabel>Una visita con contexto</SectionLabel>
              <h2 className="display-heading mt-5 max-w-[510px] text-[clamp(2.9rem,5.2vw,5.85rem)] leading-[0.89] tracking-[-0.06em]">
                Local, directo y reconocible.
              </h2>
              <p className="mt-7 max-w-[530px] text-[1.05rem] leading-7 text-[#5b4540]">
                La página no intenta sustituir una visita ni convertir información en una promesa. Su función es sencilla: identificar la tienda, facilitar el contacto y mostrar con honestidad el entorno en el que te recibimos.
              </p>
              <div className="mt-10 border-y border-[#3a221d]/20">
                {[
                  ["A", "Identidad física", "Fotografías reales de fachada y entrada para reconocer el establecimiento."],
                  ["B", "Información de visita", "Horarios, ruta y contacto deben consultarse en la ficha actualizada del negocio."],
                  ["C", "Atención presencial", "Las consultas sobre categorías e información disponible se realizan directamente en el local."],
                ].map(([letter, title, text]) => (
                  <div className="store-principle" key={letter}>
                    <span>{letter}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="visita" className="relative overflow-hidden bg-[#6e422f] px-5 py-20 text-[#eee7da] lg:px-10 lg:py-28" aria-labelledby="visit-heading">
          <div className="visit-motif" aria-hidden="true">TCS · SEVILLA · TCS · SEVILLA ·</div>
          <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <div>
              <SectionLabel inverse>Antes de desplazarte</SectionLabel>
              <h2 id="visit-heading" className="display-heading mt-5 max-w-[480px] text-[clamp(2.9rem,5.2vw,5.85rem)] leading-[0.89] tracking-[-0.06em]">
                La visita empieza aquí.
              </h2>
              <p className="mt-7 max-w-[475px] text-[1.04rem] leading-7 text-[#eee2d5]">
                Confirma el horario y la ruta en el Perfil de Empresa antes de salir. La información al día es la mejor forma de que tu llegada sea sencilla.
              </p>
              <img className="mt-10 w-full max-w-[425px] object-cover" src={assets.verticalFacade} alt="Fachada vertical de The Cannabis Shop en Sevilla" />
            </div>
            <div className="visit-plaque">
              <div className="visit-plaque-top">
                <span className="plaque-symbol">✦</span>
                <p>THE CANNABIS SHOP · SEVILLA</p>
              </div>
              <h3 className="display-heading">Para llegar bien informado.</h3>
              <div className="visit-plaque-lines">
                <div>
                  <MapPin size={20} strokeWidth={1.7} />
                  <p><span>Ubicación</span>Consulta la ruta de la ficha del negocio</p>
                </div>
                <div>
                  <Clock3 size={20} strokeWidth={1.7} />
                  <p><span>Horario</span>Comprueba la apertura antes de desplazarte</p>
                </div>
                <div>
                  <Info size={20} strokeWidth={1.7} />
                  <p><span>Consulta</span>Pregunta en el local por la información disponible</p>
                </div>
              </div>
              <a className="visit-plaque-cta" href="#preguntas">
                Ver preguntas de visita <ArrowUpRight size={18} />
              </a>
              <p className="visit-plaque-caption">Los datos de contacto, mapa y horarios reales se incorporarán a esta sección al confirmar la ficha de Google Business.</p>
            </div>
          </div>
        </section>

        <section id="preguntas" className="relative overflow-hidden bg-[#eee7da] px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionLabel>Preguntas de visita</SectionLabel>
              <h2 id="faq-heading" className="display-heading mt-5 max-w-[430px] text-[clamp(2.95rem,5.1vw,5.75rem)] leading-[0.89] tracking-[-0.06em]">
                Antes de cruzar la puerta.
              </h2>
              <div className="faq-photo-card mt-10">
                <img src={assets.street} alt="Vista exterior de The Cannabis Shop integrada en una calle de Sevilla" />
                <span>Una tienda física, una identidad visible.</span>
              </div>
            </div>
            <div className="lg:pt-5">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="shop-faq-item" key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="shop-faq-trigger"
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={isOpen ? "rotate-180" : ""} size={22} />
                    </button>
                    {isOpen && <p className="shop-faq-answer">{item.answer}</p>}
                  </div>
                );
              })}
              <p className="mt-10 max-w-[610px] text-sm leading-6 text-[#705952]">
                La información final sobre cualquier referencia depende de su categoría, etiquetado, composición, documentación y marco aplicable. La web debe revisarse antes de publicar contenido adicional sobre productos.
              </p>
            </div>
          </div>
        </section>

        <section className="shop-closing px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[960px] text-center">
            <SectionLabel inverse>THE CANNABIS SHOP · SEVILLA</SectionLabel>
            <h2 className="display-heading mt-6 text-[clamp(3.15rem,6.6vw,7.2rem)] leading-[0.86] tracking-[-0.065em] text-[#e2b741]">
              Una tienda que se reconoce en la calle.
            </h2>
            <p className="mx-auto mt-7 max-w-[575px] text-[1.04rem] leading-7 text-[#e8dbcb]">
              Consulta la ficha actualizada del negocio para planificar tu visita y encontrar la información práctica que necesitas antes de venir.
            </p>
            <a className="button-gold mt-10" href="#visita">
              Preparar la visita <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#211512] px-5 pb-8 pt-10 text-[#eee7da] lg:px-10">
        <div className="mx-auto grid max-w-[1240px] gap-10 border-b border-[#eee7da]/20 pb-10 md:grid-cols-[1fr_auto]">
          <div>
            <StoreMark inverse />
            <p className="mt-5 max-w-[420px] text-sm leading-6 text-[#c9b9a9]">
              Tienda física de cannabis en Sevilla. Consulta el Perfil de Empresa para horarios, ubicación y datos de contacto actualizados.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-[#e8dbcb]">
            <a href="#tienda">La tienda</a>
            <a href="#categorías">Categorías</a>
            <a href="#visita">Visita</a>
            <a href="#inicio">Volver arriba</a>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 pt-6 text-[0.67rem] uppercase tracking-[0.12em] text-[#a9907e] md:flex-row">
          <span>© 2026 The Cannabis Shop · Sevilla</span>
          <span>Privacidad y aviso legal · enlaces por añadir</span>
        </div>
      </footer>
    </div>
  );
}
