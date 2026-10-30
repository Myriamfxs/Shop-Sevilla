/** Diseño: ficha legal de lectura clara, con la identidad de caoba, oro y marfil de The Cannabis Shop. */
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
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

export default function Privacy() {
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
              <div><h1 className="display-heading text-[clamp(3.5rem,7.4vw,7.7rem)] leading-[.82] tracking-[-.07em] text-[#d9a934]">Política<br /><em className="text-[#f3e9dd]">de privacidad.</em></h1></div>
              <p className="max-w-[510px] text-[1.05rem] leading-7 text-[#e6d8ca] lg:justify-self-end">Esta política explica cómo se tratan los datos personales que puedan generarse al navegar por la web o al utilizar los canales de contacto del establecimiento.</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <aside className="legal-aside">
              <p>Última actualización</p><strong>20 de agosto de 2026</strong>
              <div className="mt-10 border-t border-[#2f1c18]/20 pt-5"><p>Responsable del sitio</p><strong>Shops Baleares S.L.</strong></div>
            </aside>

            <div className="legal-copy">
              <section>
                <h2 className="display-heading">1. Responsable del tratamiento</h2>
                <div className="legal-company-card">
                  <p><strong>Razón social:</strong> Shops Baleares S.L.</p>
                  <p><strong>CIF:</strong> B56245186</p>
                  <p><strong>Domicilio social:</strong> Avenida Argentina, 16, Bajos, 07011, Palma de Mallorca (Illes Balears), España.</p>
                </div>
              </section>

              <section>
                <h2 className="display-heading">2. Qué datos tratamos</h2>
                <p>La navegación por esta web puede generar datos técnicos imprescindibles para recordar la configuración de cookies. Si aceptas la medición de audiencia, podrán tratarse datos agregados de uso del sitio. La página actual no incorpora registro de clientes, compra online ni formulario de contacto.</p>
              </section>

              <section>
                <h2 className="display-heading">3. Finalidades y base de tratamiento</h2>
                <div className="cookie-table-wrap">
                  <table className="cookie-table">
                    <thead><tr><th>Finalidad</th><th>Datos</th><th>Base</th></tr></thead>
                    <tbody>
                      <tr><td>Funcionamiento del sitio</td><td>Preferencia de cookies y datos técnicos mínimos.</td><td>Interés legítimo y necesidad técnica.</td></tr>
                      <tr><td>Medición de audiencia</td><td>Datos agregados de navegación, si se activa.</td><td>Consentimiento.</td></tr>
                      <tr><td>Atención de consultas</td><td>Solo si contactas voluntariamente por un canal habilitado.</td><td>Tu solicitud y, cuando corresponda, medidas precontractuales.</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="display-heading">4. Destinatarios y conservación</h2>
                <p>Los datos no se venden. Podrán ser tratados por proveedores que prestan servicios de alojamiento, mantenimiento o medición, únicamente cuando sea necesario para las finalidades descritas. Las preferencias técnicas se conservan hasta que las modifiques o elimines los datos de tu navegador; la información analítica, cuando se active, se conservará conforme a la configuración del servicio aplicable.</p>
              </section>

              <section>
                <h2 className="display-heading">5. Tus derechos</h2>
                <p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, cuando corresponda. Para ejercerlos, envía una solicitud por escrito a Shops Baleares S.L., Avenida Argentina, 16, Bajos, 07011, Palma de Mallorca (Illes Balears), España, indicando «Protección de datos» y aportando la información necesaria para identificar tu solicitud. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos.</p>
                <a className="aepd-link" href="https://www.aepd.es/" target="_blank" rel="noreferrer">Ir a la Agencia Española de Protección de Datos <ExternalLink size={15} /></a>
              </section>

              <section>
                <h2 className="display-heading">6. Cookies y cambios</h2>
                <p>Puedes revisar la información de cookies y cambiar tu elección de medición desde la <Link className="legal-inline-link" href="/cookies">Política de Cookies</Link>. Esta política podrá actualizarse cuando cambien los tratamientos, herramientas o requisitos aplicables.</p>
                <div className="legal-note"><ShieldCheck size={18} /><p><strong>Dato pendiente antes de publicar.</strong> Añade un correo electrónico de privacidad si deseas ofrecer un canal adicional al domicilio postal para el ejercicio de derechos.</p></div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <LegalFooter />
    </div>
  );
}
