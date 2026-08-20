/** Diseño: aviso de cookies sobrio en caoba y marfil, con decisiones simétricas y acceso directo a configuración. */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { readCookiePreferences, saveCookiePreferences } from "@/lib/cookieConsent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const preferences = readCookiePreferences();
    if (!preferences) setVisible(true);
  }, []);

  if (!visible) return null;

  const choose = (analytics: boolean) => {
    saveCookiePreferences({ necessary: true, analytics });
    setVisible(false);
  };

  return (
    <aside className="cookie-banner" role="dialog" aria-label="Preferencias de cookies">
      <div>
        <p className="cookie-banner-kicker">Cookies</p>
        <p className="cookie-banner-copy">
          Usamos almacenamiento técnico para que la web funcione y, si lo aceptas, medición de audiencia para mejorarla.
        </p>
      </div>
      <div className="cookie-banner-actions">
        <button type="button" onClick={() => choose(false)}>Rechazar</button>
        <Link href="/cookies">Configurar</Link>
        <button className="cookie-accept" type="button" onClick={() => choose(true)}>Aceptar</button>
      </div>
    </aside>
  );
}
