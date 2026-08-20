/**
 * Diseño: Patio botánico contemporáneo. La interfaz debe sentirse editorial, local y serena;
 * prioriza información verificable y visita presencial, sin códigos recreativos ni conversión transaccional.
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
  Phone,
  X,
} from "lucide-react";

const assets = {
  hero: "/manus-storage/soph-hero-patio_79857de2.jpg",
  material: "/manus-storage/soph-materiales-ceramica_b5a47995.jpg",
  facade: "/manus-storage/soph-sevilla-fachada_19955050.jpg",
  origin: "/manus-storage/soph-origen-laboratorio_d14bfb12.jpg",
  symbol: "/manus-storage/soph-symbol_4123e336.png",
};

const faqItems = [
  {
    question: "¿Qué información puedo consultar en tienda?",
    answer:
      "La atención puede orientarte sobre las categorías presentes, la composición indicada por el fabricante, el uso previsto declarado y la documentación disponible para cada referencia. La disponibilidad se confirma en persona.",
  },
  {
    question: "¿Esta página ofrece consejos de salud?",
    answer:
      "No. Este espacio es corporativo e informativo: no sustituye el criterio de profesionales sanitarios y no realiza promesas de prevención, alivio, tratamiento o curación.",
  },
  {
    question: "¿Cómo confirmo los horarios antes de ir?",
    answer:
      "Antes de desplazarte, consulta el horario actualizado y los posibles cambios festivos en el Perfil de Empresa de la tienda.",
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand-mark" href="#inicio" aria-label="Ir al inicio">
      <img src={assets.symbol} alt="Símbolo abstracto de The Cannabis Soph Brothers" />
      {!compact && (
        <span className="brand-name" aria-label="The Cannabis Soph Brothers">
          <span>The Cannabis</span>
          <strong>Soph Brothers</strong>
          <small>Sevilla</small>
        </span>
      )}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f0e6] text-[#17352b]">
      <header className="site-header">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10">
          <BrandMark />
          <nav className="hidden items-center gap-7 text-[0.69rem] font-bold uppercase tracking-[0.15em] lg:flex" aria-label="Navegación principal">
            <a href="#espacio">El espacio</a>
            <a href="#informacion">Información</a>
            <a href="#visita">Visita</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <a className="header-cta hidden lg:inline-flex" href="#visita">
            Planifica tu visita <ArrowUpRight size={15} strokeWidth={2.2} />
          </a>
          <button
            className="menu-button lg:hidden"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu" aria-label="Navegación móvil">
            {[
              ["El espacio", "#espacio"],
              ["Información", "#informacion"],
              ["Visita", "#visita"],
              ["Preguntas", "#preguntas"],
            ].map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero-section" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,240,230,0.96)_0%,rgba(245,240,230,0.84)_39%,rgba(245,240,230,0.12)_72%,rgba(245,240,230,0)_100%)]" />
          <div className="hero-grid relative mx-auto max-w-[1440px] px-5 pb-10 pt-14 lg:px-10 lg:pb-14 lg:pt-24">
            <div className="hero-copy max-w-[670px]">
              <SectionLabel>Sevilla · atención presencial</SectionLabel>
              <h1 id="hero-heading" className="font-editorial mt-5 text-[clamp(3.6rem,7.5vw,7.7rem)] leading-[0.88] tracking-[-0.065em] text-[#17352b]">
                Información clara,
                <em className="block font-normal text-[#315b4c]">una visita con criterio.</em>
              </h1>
              <p className="mt-8 max-w-[485px] text-[1.03rem] leading-7 text-[#3d5148] lg:text-[1.1rem]">
                The Cannabis Soph Brothers es un espacio local en Sevilla para conocer información sobre CBD y cáñamo, consultar la selección disponible y conversar con calma antes de decidir.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a className="button-primary" href="#visita">
                  Planifica tu visita <ArrowDownRight size={17} />
                </a>
                <a className="text-link" href="#informacion">
                  Qué puedes consultar <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <aside className="hero-note" aria-label="Compromiso editorial">
              <Info size={18} strokeWidth={1.8} />
              <p>
                Un lugar para preguntar, contrastar información y recibir atención presencial. Sin promesas de salud ni compra online en esta landing.
              </p>
            </aside>
          </div>
          <img
            className="hero-image"
            src={assets.hero}
            alt="Patio contemporáneo de inspiración sevillana con cerámica y vegetación mediterránea"
          />
          <div className="hero-arch" aria-hidden="true" />
        </section>

        <section id="espacio" className="relative overflow-hidden bg-[#1f4b3a] px-5 py-20 text-[#f5f0e6] lg:px-10 lg:py-28">
          <div className="tile-field tile-field-light" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <SectionLabel>El espacio</SectionLabel>
              <h2 className="font-editorial mt-5 max-w-[540px] text-[clamp(2.75rem,5vw,5.4rem)] leading-[0.94] tracking-[-0.055em]">
                Una conversación local, no un atajo.
              </h2>
            </div>
            <div className="max-w-[540px] justify-self-end lg:pb-2">
              <p className="text-[1.1rem] leading-8 text-[#e7e0d4]">
                Construimos la experiencia desde la cercanía: conocer el espacio, explicar los datos disponibles y facilitar una visita informada. El protagonismo no está en una promesa, sino en hacer las preguntas adecuadas.
              </p>
              <div className="mt-10 grid grid-cols-3 border-t border-[#f5f0e6]/25 pt-5 text-[#f5f0e6]">
                <div>
                  <span className="stat-index">01</span>
                  <p>Atención<br />presencial</p>
                </div>
                <div>
                  <span className="stat-index">02</span>
                  <p>Información<br />contrastable</p>
                </div>
                <div>
                  <span className="stat-index">03</span>
                  <p>Sevilla,<br />en persona</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="informacion" className="px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="info-heading">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <SectionLabel>Antes de venir</SectionLabel>
                <h2 id="info-heading" className="font-editorial mt-5 max-w-[430px] text-[clamp(2.8rem,5.2vw,5.7rem)] leading-[0.9] tracking-[-0.06em]">
                  Lo que puedes consultar aquí.
                </h2>
              </div>
              <p className="max-w-[600px] text-[1.05rem] leading-7 text-[#4e5b54] lg:mb-2 lg:justify-self-end">
                Un recorrido sencillo para identificar la información que te interesa antes de desplazarte. La disponibilidad, las referencias concretas y la documentación se confirman directamente en tienda.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden bg-[#b8b8a9] md:grid-cols-3">
              <article className="info-card">
                <span className="card-number">I</span>
                <h3 className="font-editorial">Origen y documentación</h3>
                <p>Consulta la información disponible de fabricante, composición declarada y documentación asociada cuando exista.</p>
                <a href="#preguntas" className="card-link">Qué preguntar <ArrowUpRight size={16} /></a>
              </article>
              <article className="info-card info-card-accent">
                <span className="card-number">II</span>
                <h3 className="font-editorial">Categorías disponibles</h3>
                <p>Conoce qué categorías puedes consultar presencialmente, siempre con la atención y el contexto adecuados.</p>
                <a href="#visita" className="card-link">Consultar en tienda <ArrowUpRight size={16} /></a>
              </article>
              <article className="info-card">
                <span className="card-number">III</span>
                <h3 className="font-editorial">Atención con criterio</h3>
                <p>Un punto de partida para resolver dudas de visita, horarios y acceso a información corporativa del negocio.</p>
                <a href="#visita" className="card-link">Planifica la visita <ArrowUpRight size={16} /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e8dfcf] px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
            <div className="image-arch image-arch-large self-start">
              <img src={assets.material} alt="Cerámica artesanal, papel y detalles botánicos de inspiración mediterránea" />
            </div>
            <div className="lg:pt-16">
              <SectionLabel>Transparencia práctica</SectionLabel>
              <h2 className="font-editorial mt-5 max-w-[480px] text-[clamp(2.75rem,4.8vw,5.4rem)] leading-[0.92] tracking-[-0.055em]">
                Las preguntas importan tanto como las respuestas.
              </h2>
              <p className="mt-7 max-w-[500px] text-[1.06rem] leading-7 text-[#4e5b54]">
                Una buena visita empieza sabiendo qué mirar: información de fabricante, uso previsto declarado, advertencias y criterios para resolver dudas de forma responsable.
              </p>
              <div className="mt-9 border-y border-[#17352b]/20">
                {[
                  ["01", "Información descriptiva", "Datos disponibles sobre la referencia, sin convertirlos en promesas."],
                  ["02", "Uso previsto declarado", "Siempre se parte de lo indicado por el fabricante y de la categoría real del producto."],
                  ["03", "Límites claros", "No se ofrecen diagnósticos, tratamientos ni instrucciones de consumo desde esta página."],
                ].map(([number, title, text]) => (
                  <div className="transparency-row" key={number}>
                    <span>{number}</span>
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

        <section id="visita" className="visit-section px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="visit-heading">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.91fr_1.09fr] lg:gap-20">
            <div>
              <SectionLabel>Planifica tu visita</SectionLabel>
              <h2 id="visit-heading" className="font-editorial mt-5 max-w-[450px] text-[clamp(2.85rem,5.3vw,5.8rem)] leading-[0.9] tracking-[-0.06em]">
                Sevilla empieza en la puerta.
              </h2>
              <p className="mt-7 max-w-[470px] text-[1.05rem] leading-7 text-[#4e5b54]">
                Antes de desplazarte, consulta la ubicación, el horario y la forma de contacto que la tienda mantiene al día en su Perfil de Empresa.
              </p>
              <img className="mt-10 h-auto w-full max-w-[455px] object-cover" src={assets.facade} alt="Fachada sevillana luminosa de inspiración mediterránea" />
            </div>

            <div className="visit-card">
              <div className="visit-card-head">
                <div>
                  <p className="eyebrow">Antes de salir</p>
                  <h3 className="font-editorial">Tu visita, bien orientada.</h3>
                </div>
                <img src={assets.symbol} alt="" aria-hidden="true" />
              </div>
              <div className="visit-data">
                <div className="visit-data-row">
                  <MapPin size={20} strokeWidth={1.8} />
                  <div>
                    <span>Ubicación</span>
                    <strong>Consulta la ruta actualizada<br />en el Perfil de Empresa</strong>
                  </div>
                </div>
                <div className="visit-data-row">
                  <Clock3 size={20} strokeWidth={1.8} />
                  <div>
                    <span>Horario</span>
                    <strong>Comprueba el horario de hoy<br />y los cambios festivos</strong>
                  </div>
                </div>
                <div className="visit-data-row">
                  <Phone size={20} strokeWidth={1.8} />
                  <div>
                    <span>Contacto</span>
                    <strong>Habla con la tienda antes<br />de acercarte, si lo necesitas</strong>
                  </div>
                </div>
              </div>
              <a className="visit-cta" href="#preguntas">
                Consejos antes de tu visita <ArrowUpRight size={18} />
              </a>
              <p className="visit-caption">Para una visita tranquila, verifica siempre la ficha actualizada antes de salir.</p>
            </div>
          </div>
        </section>

        <section id="preguntas" className="relative overflow-hidden bg-[#204b3a] px-5 py-20 text-[#f5f0e6] lg:px-10 lg:py-28" aria-labelledby="faq-heading">
          <div className="tile-field tile-field-dark" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <SectionLabel>Preguntas frecuentes</SectionLabel>
              <h2 id="faq-heading" className="font-editorial mt-5 max-w-[420px] text-[clamp(2.85rem,5.1vw,5.6rem)] leading-[0.91] tracking-[-0.055em]">
                Claridad antes de cruzar la puerta.
              </h2>
              <img className="faq-image" src={assets.origin} alt="Composición editorial de vidrio, papel y cerámica para representar la trazabilidad" />
            </div>
            <div className="lg:pt-5">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="faq-item" key={item.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="faq-trigger"
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={isOpen ? "rotate-180" : ""} size={22} />
                    </button>
                    {isOpen && <p className="faq-answer">{item.answer}</p>}
                  </div>
                );
              })}
              <p className="mt-10 max-w-[610px] text-sm leading-6 text-[#d8d0c3]">
                La información final de cada referencia depende de su categoría, etiquetado, composición y documentación. El contenido de la landing debe revisarse antes de publicar cualquier cambio de catálogo.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="closing-section px-5 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[970px] text-center">
            <SectionLabel>El siguiente paso</SectionLabel>
            <h2 className="font-editorial mt-6 text-[clamp(3.1rem,6.5vw,7.1rem)] leading-[0.88] tracking-[-0.065em] text-[#f5f0e6]">
              Una visita empieza con una conversación clara.
            </h2>
            <p className="mx-auto mt-7 max-w-[590px] text-[1.05rem] leading-7 text-[#e8dfcf]">
              Consulta el Perfil de Empresa de la tienda para contrastar la información de visita y preparar tu desplazamiento con calma.
            </p>
            <a className="button-light mt-10" href="#visita">
              Preparar la visita <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#17352b] px-5 pb-8 pt-10 text-[#e8dfcf] lg:px-10">
        <div className="mx-auto grid max-w-[1240px] gap-10 border-b border-[#e8dfcf]/20 pb-10 md:grid-cols-[1fr_auto]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-[420px] text-sm leading-6 text-[#d8d0c3]">
              Información local, atención presencial y una conversación clara antes de tu visita.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-[#e8dfcf]">
            <a href="#informacion">Información</a>
            <a href="#visita">Visita</a>
            <a href="#preguntas">Preguntas</a>
            <a href="#inicio">Volver arriba</a>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 pt-6 text-[0.68rem] uppercase tracking-[0.12em] text-[#afc1b6] md:flex-row">
          <span>© 2026 The Cannabis Soph Brothers · Sevilla</span>
          <span>Privacidad y aviso legal — enlaces por añadir</span>
        </div>
      </footer>
    </div>
  );
}
