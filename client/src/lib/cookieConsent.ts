/** Gestión de cookies: solo se carga la medición opcional tras una elección explícita del visitante. */
export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
};

export const CONSENT_STORAGE_KEY = "tcs_cookie_preferences";

export function readCookiePreferences(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as CookiePreferences;
    return { necessary: true, analytics: Boolean(parsed.analytics) };
  } catch {
    return null;
  }
}

function analyticsScriptId() {
  return "tcs-analytics-script";
}

export function applyAnalyticsPreference(allowed: boolean) {
  const existing = document.getElementById(analyticsScriptId());

  if (!allowed) {
    existing?.remove();
    return;
  }

  if (existing) return;

  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
  if (!endpoint || !websiteId) return;

  const script = document.createElement("script");
  script.id = analyticsScriptId();
  script.defer = true;
  script.src = `${endpoint}/umami`;
  script.dataset.websiteId = websiteId;
  document.head.appendChild(script);
}

export function saveCookiePreferences(preferences: CookiePreferences) {
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferences));
  applyAnalyticsPreference(preferences.analytics);
  window.dispatchEvent(new Event("tcs-cookie-preferences-updated"));
}
