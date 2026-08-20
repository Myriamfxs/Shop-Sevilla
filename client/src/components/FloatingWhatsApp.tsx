/** Diseño: acceso directo de vitrina urbana. Acción flotante visible, breve y coherente con caoba, oro y verde. */
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Hola, quiero consultar un producto de The Cannabis Shop.");

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/34634205061?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp con The Cannabis Shop"
    >
      <MessageCircle size={22} strokeWidth={2.15} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
