import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import "./products.css";

const logo = "/manus-storage/the-cannabis-shop-hemp-brothers-logo_44a74b59.png";

function StoreMark({ inverse = false }: { inverse?: boolean }) {
  return <a className={`store-mark ${inverse ? "store-mark-inverse" : ""}`} href="/" aria-label="Ir al inicio de The Cannabis Shop"><img src={logo} alt="Logotipo de The Cannabis Shop by Hemp Brothers" /><span className="store-wordmark"><small>The Cannabis</small><strong>Shop</strong><em>Sevilla</em></span></a>;
}

function SectionLabel({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <p className={`section-label ${inverse ? "section-label-inverse" : ""}`}><span aria-hidden="true" />{children}</p>;
}

type ProductImage = { src: string; alt: string; title: string; caption: string };
type ProductGroup = { id: string; title: string; intro: string; images: ProductImage[] };

const productGroups: ProductGroup[] = [
  {
    id: "flores-resinas",
    title: "Flores y resinas",
    intro: "Selección de flores, polen, resinas y extractos presentada en tienda. Consulta la disponibilidad actual y la información de cada referencia.",
    images: [
      { src: "/manus-storage/flores-cbd-sevilla_1180dadc.webp", alt: "Flores de CBD disponibles en The Cannabis Shop Sevilla", title: "Flores", caption: "Referencia de flores" },
      { src: "/manus-storage/polen-cbd-sevilla_c886cca8.webp", alt: "Polen de CBD de la selección de The Cannabis Shop Sevilla", title: "Polen", caption: "Referencia de polen" },
    ],
  },
  {
    id: "aceites",
    title: "Aceites",
    intro: "Aceites y extractos en distintos formatos y concentraciones. La información final se consulta en el etiquetado de cada producto.",
    images: [
      { src: "/manus-storage/aceites-cbd-sevilla-01_4af54541.webp", alt: "Aceites de CBD en vitrina de The Cannabis Shop Sevilla", title: "Aceites · selección 01", caption: "Aceites y extractos" },
      { src: "/manus-storage/aceites-cbd-sevilla-02_81298e6b.webp", alt: "Selección de aceites de CBD en distintos envases", title: "Aceites · selección 02", caption: "Formatos en tienda" },
      { src: "/manus-storage/aceites-cbd-sevilla-03_e2543bcb.webp", alt: "Aceites de CBD de la selección de tienda en Sevilla", title: "Aceites · selección 03", caption: "Referencias disponibles" },
    ],
  },
  {
    id: "cosmetica-cuidado",
    title: "Cosmética y cuidado",
    intro: "Cremas, sérum, bálsamos, aceites de masaje, champú y otras referencias de cuidado personal pendientes de clasificación por ficha.",
    images: [{ src: "/manus-storage/cosmetica-cbd-sevilla_894237ad.webp", alt: "Cosmética y productos de cuidado con CBD en Sevilla", title: "Cosmética y cuidado", caption: "Cuidado personal" }],
  },
  {
    id: "vaporizadores",
    title: "Vaporizadores y baterías",
    intro: "Dispositivos y complementos de vapeo visibles en la selección actual de la tienda física.",
    images: [{ src: "/manus-storage/vaporizadores-cbd-sevilla_26196a98.webp", alt: "Vaporizadores y dispositivos disponibles en The Cannabis Shop Sevilla", title: "Vaporizadores", caption: "Dispositivos y baterías" }],
  },
  {
    id: "semillas",
    title: "Semillas",
    intro: "Consulta las referencias de semillas presentes en tienda y la información disponible para cada variedad.",
    images: [{ src: "/manus-storage/semillas-cbd-sevilla_73bed883.webp", alt: "Selección de semillas en The Cannabis Shop Sevilla", title: "Semillas", caption: "Referencias por variedad" }],
  },
  {
    id: "alimentacion-bebidas",
    title: "Alimentación y bebidas",
    intro: "Selección de alimentación y bebidas pendiente de revisión individual de cada referencia y su etiquetado.",
    images: [{ src: "/manus-storage/alimentacion-bebidas-cbd-sevilla_4d937dba.webp", alt: "Alimentación y bebidas de la selección de The Cannabis Shop Sevilla", title: "Alimentación y bebidas", caption: "Referencias en revisión" }],
  },
  { id: "accesorios", title: "Accesorios", intro: "Grinders, pipas, bongs, mecheros, papeles, conos, filtros, bandejas y ceniceros. Añadiremos las fotografías de cada familia progresivamente.", images: [] },
  { id: "ropa-regalos", title: "Ropa y regalos", intro: "Ropa, complementos, regalos, souvenirs, velas e incienso. Galería pendiente de nuevas fotografías.", images: [] },
  { id: "mascotas", title: "Artículos para mascotas", intro: "Línea para animales pendiente de revisión y clasificación de sus fichas. Añadiremos las referencias cuando estén documentadas.", images: [] },
];

export default function Products() {
  useEffect(() => {
    document.title = "Productos CBD en Sevilla | The Cannabis Shop";
    return () => { document.title = "The Cannabis Shop by Hemp Brothers | Sevilla"; };
  }, []);

  return <div className="products-page min-h-screen bg-[#f0e8db] text-[#2d1c18]">
    <header className="products-header">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10"><StoreMark inverse /><nav className="products-nav hidden items-center gap-7 lg:flex" aria-label="Navegación de productos"><a href="/">Inicio</a><a className="is-active" href="/productos">Productos</a><a href="/#ubicacion">Contacto</a></nav><a className="products-header-call" href="tel:+34954118908"><Phone size={15} /> <span className="hidden sm:inline">954 118 908</span></a></div>
    </header>

    <main>
      <section className="products-hero px-5 pb-16 pt-36 lg:px-10 lg:pb-24 lg:pt-48" aria-labelledby="products-heading">
        <div className="products-hero-texture" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div><SectionLabel>Catálogo de tienda · Sevilla</SectionLabel><h1 id="products-heading" className="products-title mt-6">Productos.<br /><em>Selección.</em></h1><p className="products-lead">Explora los productos fotografiados de The Cannabis Shop, agrupados por categoría. La disponibilidad puede cambiar: consulta cada referencia directamente en tienda.</p><a className="products-back-link" href="/"><ArrowLeft size={16} /> Volver a la portada</a></div>
          <aside className="products-hero-note"><MapPin size={19} /><p>Estamos en Avenida Constitución 30, frente a la Catedral de Sevilla. Atención y venta presencial.</p></aside>
        </div>
      </section>

      <section className="products-catalog px-5 py-16 lg:px-10 lg:py-24" aria-label="Catálogo por categorías">
        <div className="mx-auto max-w-[1240px]">{productGroups.map((group, index) => <section className="product-group" id={group.id} key={group.id} aria-labelledby={`${group.id}-heading`}><div className="product-group-heading"><div><SectionLabel>{String(index + 1).padStart(2, "0")} · Categoría</SectionLabel><h2 id={`${group.id}-heading`} className="display-heading">{group.title}</h2></div><p>{group.intro}</p></div>{group.images.length > 0 ? <div className={`product-gallery product-gallery-${Math.min(group.images.length, 3)}`}>{group.images.map((image) => <figure className="product-photo-card" key={image.src}><div className="product-photo-wrap"><img loading="lazy" src={image.src} alt={image.alt} /><span className="product-photo-mark">The Cannabis Shop</span></div><figcaption><strong>{image.title}</strong><span>{image.caption}</span></figcaption></figure>)}</div> : <div className="product-empty"><span>Fotos en preparación</span><strong>Próximamente añadiremos las referencias de esta categoría.</strong><a href="/#consulta">Preguntar por disponibilidad <ArrowUpRight size={16} /></a></div>}</section>)}</div>
      </section>

      <section className="products-contact px-5 py-16 lg:px-10 lg:py-24"><div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end"><div><SectionLabel inverse>Consulta en tienda</SectionLabel><h2 className="display-heading mt-5">¿Buscas una referencia concreta?</h2><p>Las fotografías muestran parte de la selección actual. Para confirmar una referencia, formato o disponibilidad, escríbenos antes de venir.</p></div><div className="products-contact-actions"><a href="https://wa.me/34634205061" target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar por WhatsApp</a><a href="mailto:cannabissevilla@lavetia.es"><Mail size={18} /> Enviar un email</a></div></div></section>
    </main>

    <footer className="bg-[#20130f] px-5 pb-8 pt-10 text-[#f1e8da] lg:px-10"><div className="mx-auto max-w-[1240px] border-b border-[#f1e8da]/20 pb-8"><StoreMark inverse /></div><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 pt-6 text-[0.67rem] uppercase tracking-[0.12em] text-[#a9907e] md:flex-row"><span>© 2026 Shops Baleares S.L.</span><nav className="footer-legal-links" aria-label="Enlaces legales"><a href="/cookies">Cookies</a><a href="/privacy">Privacidad</a><a href="/aviso-legal">Aviso legal</a></nav></div></footer>
  </div>;
}
