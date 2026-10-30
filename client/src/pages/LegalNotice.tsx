/** Diseño: aviso legal de lectura clara, coherente con la identidad editorial del resto de páginas legales. */
import { ArrowLeft, ExternalLink, Landmark } from "lucide-react";
import { Link } from "wouter";

const logoUrl = "/assets/logo-the-cannabis-shop-hemp-brothers-sevilla.png";

function LegalFooter() {
  return (
    <footer className="legal-footer px-5 py-8 lg:px-10">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 text-[.67rem] uppercase tracking-[.12em] text-[#bda996] md:flex-row">
        <span>© 2026 Shops Baleares S.L.</span>
        <nav className="legal-footer-links" aria-label="Enlaces legales"><Link href="/cookies">Cookies</Link><Link href="/privacy">Privacidad</Link><Link href="/aviso-legal">Aviso legal</Link></nav>
      </div>
    </footer>
  );
}

export default function LegalNotice() {
  return (
    <div className="legal-page min-h-screen bg-[#f0e8db] text-[#2f1c18]">
      <header className="legal-header">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 lg:px-10">
          <Link className="legal-logo" href="/" aria-label="Volver a The Cannabis Shop"><img src={logoUrl} alt="Logotipo de The Cannabis Shop by Hemp Brothers" /></Link>
          <Link className="legal-back" href="/"><ArrowLeft size={16} /> Volver a la tienda</Link>
        </div>
      </header>

      <main>
        <section className="legal-hero px-5 pb-16 pt-18 lg:px-10 lg:pb-20 lg:pt-24">
          <div className="mx-auto max-w-[1240px]">
            <p className="legal-eyebrow"><span />The Cannabis Shop · Sevilla</p>
            <div className="mt-7 grid gap-10 lg:grid-cols-[1.04fr_.96fr] lg:items-end">
              <div><h1 className="display-heading text-[clamp(3.5rem,7.4vw,7.7rem)] leading-[.82] tracking-[-.07em] text-[#d9a934]">Aviso<br /><em className="text-[#f3e9dd]">legal.</em></h1></div>
              <p className="max-w-[510px] text-[1.05rem] leading-7 text-[#e6d8ca] lg:justify-self-end">Información general de la entidad responsable de este sitio y condiciones básicas de acceso, uso y propiedad intelectual.</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <aside className="legal-aside">
              <p>Última actualización</p><strong>20 de agosto de 2026</strong>
              <div className="mt-10 border-t border-[#2f1c18]/20 pt-5"><p>Titular del sitio</p><strong>Shops Baleares S.L.</strong></div>
            </aside>

            <div className="legal-copy">
              <section>
                <h2 className="display-heading">1. Datos identificativos</h2>
                <div className="legal-company-card">
                  <p><strong>Razón social:</strong> Shops Baleares S.L.</p>
                  <p><strong>CIF:</strong> B56245186</p>
                  <p><strong>Fecha de constitución:</strong> 25 de julio de 2023</p>
                  <p><strong>Domicilio social:</strong> Avenida Argentina, 16, Bajos, 07011, Palma de Mallorca (Illes Balears), España.</p>
                  <p><strong>Nombre comercial del sitio:</strong> The Cannabis Shop.</p>
                </div>
              </section>

              <section>
                <h2 className="display-heading">2. Objeto del sitio</h2>
                <p>Este sitio ofrece información corporativa sobre The Cannabis Shop, sus categorías y la atención presencial. No constituye una plataforma de comercio electrónico, no muestra un catálogo transaccional ni incorpora precios, promociones, instrucciones de uso o contratación online.</p>
              </section>

              <section>
                <h2 className="display-heading">3. Condiciones de uso</h2>
                <p>El acceso al sitio implica la aceptación de este aviso. La persona usuaria se compromete a utilizar los contenidos de manera diligente y lícita, sin alterar el funcionamiento de la web, introducir código malicioso ni utilizar la información para fines contrarios a la legislación aplicable.</p>
              </section>

              <section>
                <h2 className="display-heading">4. Propiedad intelectual</h2>
                <p>Los textos, diseños, logotipos, elementos gráficos y demás contenidos del sitio están protegidos por la normativa de propiedad intelectual e industrial. No podrán reproducirse, transformarse, distribuirse o comunicarse públicamente sin autorización, salvo en los casos previstos legalmente.</p>
              </section>

              <section>
                <h2 className="display-heading">5. Responsabilidad y enlaces</h2>
                <p>La entidad procura que la información publicada sea clara y actualizada, pero puede modificarla o retirarla cuando resulte necesario. Los enlaces externos se facilitan únicamente como referencia; Shops Baleares S.L. no controla ni asume responsabilidad por sus contenidos, disponibilidad o políticas.</p>
              </section>

              <section>
                <h2 className="display-heading">6. Privacidad, cookies y normativa</h2>
                <p>El tratamiento de datos personales se explica en la <Link className="legal-inline-link" href="/privacy">Política de Privacidad</Link>. La configuración de tecnologías de almacenamiento se detalla en la <Link className="legal-inline-link" href="/cookies">Política de Cookies</Link>. Este aviso se interpreta conforme a la normativa española aplicable.</p>
                <a className="aepd-link" href="https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758" target="_blank" rel="noreferrer">Consultar la Ley 34/2002 en el BOE <ExternalLink size={15} /></a>
              </section>

              <section>
                <h2 className="display-heading">7. Información por completar</h2>
                <div className="legal-note"><Landmark size={18} /><p><strong>Antes de publicar.</strong> Confirma e incorpora los datos de inscripción registral y un correo electrónico de contacto del prestador, si resultan aplicables, para completar la información general del sitio.</p></div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <LegalFooter />
    </div>
  );
}
