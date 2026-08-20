/** Diseño: Showroom de selección. La política se presenta como una ficha legal de lectura cómoda, sobria y coherente con la marca. */
import { ArrowLeft, Check, Cookie, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { readCookiePreferences, saveCookiePreferences } from "@/lib/cookieConsent";

const logoUrl = "/manus-storage/the-cannabis-shop-hemp-brothers-logo_44a74b59.png";

export default function Cookies() {
  const [analytics, setAnalytics] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setAnalytics(readCookiePreferences()?.analytics ?? false);
  }, []);

  const savePreferences = () => {
    saveCookiePreferences({ necessary: true, analytics });
    setSaved(true);
  };

  return (
    <div className="legal-page min-h-screen bg-[#f0e8db] text-[#2f1c18]">
      <header className="legal-header">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 lg:px-10">
          <Link className="legal-logo" href="/" aria-label="Volver a The Cannabis Shop">
            <img src={logoUrl} alt="Logotipo de The Cannabis Shop by Hemp Brothers" />
          </Link>
          <Link className="legal-back" href="/"><ArrowLeft size={16} /> Volver a la tienda</Link>
        </div>
      </header>

      <main>
        <section className="legal-hero px-5 pb-16 pt-18 lg:px-10 lg:pb-20 lg:pt-24">
          <div className="mx-auto max-w-[1240px]">
            <p className="legal-eyebrow"><span />The Cannabis Shop · Sevilla</p>
            <div className="mt-7 grid gap-10 lg:grid-cols-[1.04fr_.96fr] lg:items-end">
              <div>
                <h1 className="display-heading text-[clamp(3.5rem,7.4vw,7.7rem)] leading-[.82] tracking-[-.07em] text-[#d9a934]">Política<br /><em className="text-[#f3e9dd]">de cookies.</em></h1>
              </div>
              <p className="max-w-[510px] text-[1.05rem] leading-7 text-[#e6d8ca] lg:justify-self-end">
                Aquí explicamos qué tecnologías usamos, para qué sirven y cómo puedes decidir sobre las que no son necesarias para el funcionamiento del sitio.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <aside className="legal-aside">
              <p>Última actualización</p>
              <strong>20 de agosto de 2026</strong>
              <div className="mt-10 border-t border-[#2f1c18]/20 pt-5">
                <p>Responsable del sitio</p>
                <strong>Shops Baleares S.L.</strong>
              </div>
            </aside>

            <div className="legal-copy">
              <section>
                <h2 className="display-heading">1. Qué son las cookies</h2>
                <p>Las cookies y tecnologías similares son pequeños archivos o identificadores que se almacenan o consultan desde tu dispositivo al navegar. Pueden ser necesarias para que el sitio funcione, ayudar a recordar una elección o permitir medir, de forma agregada, cómo se utiliza la web.</p>
              </section>

              <section>
                <h2 className="display-heading">2. Quién es el responsable</h2>
                <div className="legal-company-card">
                  <p><strong>Razón social:</strong> Shops Baleares S.L.</p>
                  <p><strong>CIF:</strong> B56245186</p>
                  <p><strong>Fecha de constitución:</strong> 25 de julio de 2023</p>
                  <p><strong>Domicilio social:</strong> Avenida Argentina, 16, Bajos, 07011, Palma de Mallorca (Illes Balears), España.</p>
                </div>
              </section>

              <section>
                <h2 className="display-heading">3. Categorías de cookies</h2>
                <div className="cookie-table-wrap">
                  <table className="cookie-table">
                    <thead><tr><th>Tipo</th><th>Finalidad</th><th>Base</th></tr></thead>
                    <tbody>
                      <tr><td>Técnicas</td><td>Guardar tu elección de cookies y permitir el funcionamiento básico del sitio.</td><td>Necesarias</td></tr>
                      <tr><td>Analíticas</td><td>Medir de forma agregada el uso de la web para entender qué contenido resulta útil.</td><td>Tu elección</td></tr>
                      <tr><td>De terceros</td><td>No se activan de forma predeterminada. Se revisarán si se añaden mapas, vídeo u otros servicios externos.</td><td>Según el servicio</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="display-heading">4. Gestiona tus preferencias</h2>
                <p>Las cookies técnicas permanecen activas porque permiten conservar tu elección. La medición de audiencia es opcional y solo se activa si la aceptas. Puedes cambiar esta preferencia en cualquier momento desde este apartado.</p>
                <div className="preference-panel">
                  <div className="preference-row">
                    <div><span className="preference-icon"><ShieldCheck size={18} /></span><div><h3>Técnicas necesarias</h3><p>Necesarias para registrar tu configuración.</p></div></div>
                    <span className="status-fixed"><Check size={15} /> Siempre activas</span>
                  </div>
                  <div className="preference-row">
                    <div><span className="preference-icon"><Cookie size={18} /></span><div><h3>Medición de audiencia</h3><p>Ayuda a entender el uso agregado de la web.</p></div></div>
                    <label className="cookie-switch"><input type="checkbox" checked={analytics} onChange={(event) => { setAnalytics(event.target.checked); setSaved(false); }} /><span aria-hidden="true" /></label>
                  </div>
                  <button className="save-preferences" type="button" onClick={savePreferences}>{saved ? "Preferencias guardadas" : "Guardar preferencias"}</button>
                </div>
              </section>

              <section>
                <h2 className="display-heading">5. Más información</h2>
                <p>La configuración de tu navegador también puede permitir bloquear o eliminar cookies. Ten en cuenta que, si bloqueas tecnologías necesarias, algunas funciones del sitio podrían no recordar tus elecciones. Esta política se revisará cuando cambien las herramientas de medición o se incorporen nuevos servicios.</p>
                <a className="aepd-link" href="https://www.aepd.es/guias/guia-cookies.pdf" target="_blank" rel="noreferrer">Consultar la guía de cookies de la AEPD <ExternalLink size={15} /></a>
              </section>
            </div>
          </div>
        </section>
      </main>

      <footer className="legal-footer px-5 py-8 lg:px-10"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 text-[.67rem] uppercase tracking-[.12em] text-[#bda996] md:flex-row"><span>© 2026 Shops Baleares S.L.</span><Link href="/">The Cannabis Shop · Sevilla</Link></div></footer>
    </div>
  );
}
