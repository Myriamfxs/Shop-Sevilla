# Estrategia de landing — The Cannabis Soph Brothers Sevilla

**Propósito:** Diseñar una landing de presencia local para Google Business que ayude a una persona a identificar la tienda, decidir si quiere visitarla y encontrar cómo contactar, sin convertir la web en un catálogo transaccional ni atribuir a productos de CBD propiedades sanitarias, recreativas o no verificadas.

> **Nota de cumplimiento:** Este documento es una propuesta editorial y técnica, no asesoramiento jurídico. Antes de publicar, debe revisarse la categoría, el etiquetado, la documentación y el lenguaje de cada producto real con asesoramiento profesional adecuado.

## Conclusión ejecutiva

El patrón que mejor encaja no es una tienda online simplificada. Es una **página de identidad local y orientación previa a la visita**. Google indica que un Perfil de Empresa verificado, completo y preciso ayuda a aparecer en búsquedas relevantes y recomienda mantener dirección, horarios, categoría y atributos correctos [1]. A la vez, su guía de SEO explica que no hay un atajo para ocupar una posición determinada y que conviene trabajar con contenido útil, fiable y comprensible para usuarios y buscadores [2].

La propuesta, por tanto, enfatiza el nombre comercial, Sevilla, el espacio físico, los horarios reales, el contacto, la explicación prudente de lo que se puede consultar en tienda y la documentación disponible. El modelo abandona precios, carros, descuentos, promociones, fichas de producto y claims de beneficio. En contenido de CBD destinado a alimentación, AESAN informa que el CBD se considera un nuevo alimento no autorizado en la UE y que su comercialización en ese ámbito está prohibida mientras no cuente con la autorización correspondiente [3]. Esta distinción obliga a no presentar como alimentos, complementos o tratamientos los artículos del negocio.

| Objetivo de la página | Mecanismo propuesto | Señal a evitar |
| --- | --- | --- |
| Mejorar la comprensión local | Nombre real, Sevilla, dirección, teléfono, horarios y cómo llegar, coherentes con el Perfil de Empresa | Repetir “CBD Sevilla” de forma artificial o añadir palabras clave al nombre comercial |
| Generar visitas y contactos | Llamadas a la acción de visita, consulta de horario e indicaciones | Carrito, precios, ofertas, códigos, escasez o urgencia comercial |
| Construir confianza | Explicar qué información se puede consultar y mostrar documentación solo cuando sea real y fechada | Sellos vagos, “100 % legal”, “seguro”, certificaciones no verificables o reseñas inventadas |
| Reducir riesgo editorial | Lenguaje descriptivo, advertencias y ausencia de beneficios de salud o instrucciones de consumo | Referencias a curación, alivio, ansiedad, dolor, euforia, efectos psicoactivos o consumo |

## Qué funciona en las referencias del sector y qué no se trasladará

La referencia española revisada utiliza una arquitectura transaccional directa: navegación por categorías, precios, valoraciones, promociones y carrito. Su valor para este proyecto está en la **claridad de la jerarquía** y en la facilidad para encontrar información; no en las tácticas de comercio electrónico ni en el lenguaje comercial. Esta propuesta conserva bloques fáciles de explorar, pero los convierte en orientación presencial y contenido corporativo.

Google también distingue los sectores regulados en sus políticas de contenido y publicaciones del Perfil de Empresa; por prudencia, las publicaciones del perfil deberían centrarse en horarios, ubicación, identidad y atención al cliente, y no en ofertas o características de productos regulados [4]. Las reglas de Google Ads y Merchant Center son ámbitos distintos, con restricciones específicas para drogas recreativas y productos relacionados; no deben usarse como permiso general para anunciar o vender CBD en España [5] [6].

## Arquitectura recomendada del boceto

La landing se organiza como un recorrido por un patio y no como una cuadrícula de comercio electrónico. Cada bloque responde a una pregunta real que alguien puede hacerse antes de visitar la tienda.

| Orden | Bloque | Pregunta del visitante | Contenido seguro | Acción propuesta |
| --- | --- | --- | --- | --- |
| 1 | Cabecera editorial | “¿Qué lugar es este?” | Identidad, Sevilla y una descripción local prudente | “Planifica tu visita” |
| 2 | Introducción de la tienda | “¿Por qué acercarme?” | Atención presencial, conversación clara, espacio local | “Conocer el espacio” |
| 3 | Qué puedes consultar | “¿Qué encontraré?” | Categorías generales, composición, uso previsto declarado y atención | “Consultar en tienda” |
| 4 | Transparencia | “¿Cómo decido?” | Fichas del fabricante y documentación real cuando exista | “Qué preguntar” |
| 5 | Información de visita | “¿Dónde y cuándo?” | Dirección, horario, teléfono y cómo llegar; solo datos reales | “Abrir indicaciones” |
| 6 | Preguntas frecuentes | “¿Qué debo saber antes?” | Límites de la información, disponibilidad y contacto | “Hablar con la tienda” |
| 7 | Pie legal y corporativo | “¿Quién responde?” | Nombre, contacto, privacidad y aviso legal | “Ver información legal” |

## Estrategia de SEO local

El SEO local debe basarse en **coherencia y utilidad**, no en volumen de palabras clave. La página llevará un único H1 descriptivo, títulos de sección naturales y contenido visible que explique la propuesta local. El elemento crucial será que el nombre, dirección, teléfono y horarios sean idénticos —o inequívocamente consistentes— entre la web, el Perfil de Empresa, la señalización y los directorios legítimos. Google recomienda que esa información sea completa, incluida la dirección de un negocio visitable y los horarios especiales [1].

Una vez que los datos estén confirmados, puede añadirse JSON-LD de `LocalBusiness`. Google indica que este marcado permite comunicar detalles como horarios y señala `name` y `address` como propiedades obligatorias, además de teléfono, URL y coordenadas entre los campos recomendados [7]. El marcado no debe contener reseñas, valoraciones, categoría, coordenadas ni horarios inventados; debe reflejar exactamente información presente y verificable en la página.

| Elemento SEO | Borrador recomendado | Condición de publicación |
| --- | --- | --- |
| Título | `The Cannabis Soph Brothers | CBD y cáñamo en Sevilla` | Confirmar denominación comercial real |
| Meta descripción | `Información de contacto, horario y atención presencial de The Cannabis Soph Brothers en Sevilla.` | Mantenerla descriptiva; no incluir efectos, promesas ni promociones |
| H1 | `Información clara sobre CBD y cáñamo en Sevilla` | Usar una vez, en contenido visible |
| NAP | Nombre, dirección, teléfono, horario y enlace de Maps | Sustituir los campos de boceto por datos validados |
| Datos estructurados | `LocalBusiness` con campos reales | Añadir solo tras recibir y comprobar el NAP |
| Fotos | Fachada, interior, equipo y detalles de tienda reales | Evitar imágenes de sustancias, consumo, precios o producto regulado para las publicaciones de Perfil de Empresa |

## Lenguaje editorial: sí y no

La voz se mantiene **serena, informada y próxima**. Hace preguntas concretas, explica límites y dirige a una conversación presencial. No intenta diagnosticar, tratar ni prometer resultados. La información sobre productos se limita a lo que esté documentalmente respaldado por el fabricante y a su uso previsto declarado, sin extrapolaciones.

| Fórmulas recomendadas | Fórmulas no recomendadas |
| --- | --- |
| “Información clara antes de tu visita.” | “El mejor CBD para la ansiedad.” |
| “Consulta en tienda la selección y la documentación disponible.” | “Alivia el dolor y mejora el sueño.” |
| “Conoce la composición y el uso previsto declarado por el fabricante.” | “Efecto relajante garantizado.” |
| “Horario, ubicación y atención presencial en Sevilla.” | “Compra flores, hash, resinas o aceites ahora.” |
| “La disponibilidad se confirma en tienda.” | “Oferta limitada”, “envío”, “código descuento”, “100 % legal”. |

## Datos que faltan para convertir el boceto en la versión publicable

El prototipo utilizará marcadores inequívocos para la dirección, el teléfono, el horario, el correo y el enlace de Maps. Para transformar el boceto en una landing lista para un Perfil de Empresa, se necesitarán el **nombre comercial exacto**, la **dirección física**, el **teléfono**, el **horario habitual y especial**, el **enlace de Google Maps**, el **correo**, la **URL de privacidad/aviso legal** y fotografías reales de fachada e interior. También se deberá confirmar qué categorías de información puede mencionar la tienda y qué documentos, si existen, pueden compartirse públicamente.

## Referencias

[1]: https://support.google.com/business/answer/7091?hl=es-419 "Google Business Profile: Sugerencias para mejorar tu ranking local"
[2]: https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es "Google Search Central: Guía de SEO para principiantes"
[3]: https://www.aesan.gob.es/operadores-economicos/preguntas-y-respuestas-frecuentes "AESAN: Información acerca del cannabidiol (CBD)"
[4]: https://support.google.com/business/answer/7342169?hl=es "Google Business Profile: Crear y gestionar publicaciones"
[5]: https://support.google.com/merchants/answer/6150004?hl=es "Google Merchant Center: Política sobre drogas recreativas"
[6]: https://support.google.com/adspolicy/answer/16489299?hl=es-419 "Google Ads: Política sobre drogas recreativas"
[7]: https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=es "Google Search Central: Datos estructurados de empresa local"
