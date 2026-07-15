import React, { useState, useEffect } from 'react';
import { ShieldCheck, Info, Settings, Check, X } from 'lucide-react';

interface CookieBannerProps {
  onNavigateLegal: (tab: 'imprint' | 'terms' | 'privacy' | 'revocation') => void;
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner({ onNavigateLegal }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a decision
    const savedConsent = localStorage.getItem('onlinesolar_cookie_consent');
    if (!savedConsent) {
      // Delay showing the banner slightly for a smoother transition
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('onlinesolar_cookie_consent', JSON.stringify(allPreferences));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('onlinesolar_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minPreferences: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('onlinesolar_cookie_consent', JSON.stringify(minPreferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      id="cookie-consent-container"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white border border-[#E5E2D9] rounded-3xl p-5 md:p-6 shadow-2xl z-50 animate-slide-in font-sans"
    >
      <div className="flex items-start gap-3.5 mb-3.5">
        <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl flex items-center justify-center shrink-0 text-[#4A5D4E]">
          <ShieldCheck className="w-5.5 h-5.5 text-[#D4A373]" />
        </div>
        <div>
          <h4 className="text-sm font-serif font-black text-[#4A5D4E] tracking-tight">
            Ihre Cookie-Einstellungen
          </h4>
          <p className="text-[11px] text-[#6B705C] font-semibold mt-0.5">
            Wir schätzen Ihre Privatsphäre
          </p>
        </div>
      </div>

      {!showSettings ? (
        <>
          <p className="text-xs text-[#4A5D4E] leading-relaxed mb-4">
            Wir verwenden Cookies und ähnliche Technologien, um unsere Webseite optimal zu gestalten, den Datenverkehr zu analysieren und Ihnen personalisierte Inhalte anzuzeigen. Einige Cookies sind technisch notwendig, andere helfen uns, das Nutzererlebnis für Sie zu verbessern. Weitere Details finden Sie in unserer{' '}
            <button
              onClick={() => onNavigateLegal('privacy')}
              className="text-[#D4A373] underline hover:text-[#c59262] font-semibold cursor-pointer"
            >
              Datenschutzerklärung
            </button>{' '}
            und im{' '}
            <button
              onClick={() => onNavigateLegal('imprint')}
              className="text-[#D4A373] underline hover:text-[#c59262] font-semibold cursor-pointer"
            >
              Impressum
            </button>.
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <button
              id="cookie-accept-all"
              onClick={handleAcceptAll}
              className="w-full bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-extrabold py-2.5 px-4 rounded-xl transition shadow-xs cursor-pointer text-center"
            >
              Alle akzeptieren
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                id="cookie-reject-all"
                onClick={handleRejectAll}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 px-3 rounded-xl transition cursor-pointer text-center border border-slate-200"
              >
                Nur essenzielle
              </button>
              <button
                id="cookie-toggle-settings"
                onClick={() => setShowSettings(true)}
                className="bg-white hover:bg-slate-50 text-[#4A5D4E] border border-[#E5E2D9] text-xs font-bold py-2 px-3 rounded-xl transition cursor-pointer text-center flex items-center justify-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5" /> Anpassen
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4 animate-fade-in">
          <p className="text-[11px] text-[#6B705C] leading-relaxed">
            Wählen Sie aus, welche Cookie-Kategorien Sie zulassen möchten. Sie können Ihre Einstellungen jederzeit ändern.
          </p>

          <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
            {/* Category: Essential */}
            <div className="p-3 bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl flex items-start gap-2.5">
              <input
                type="checkbox"
                checked={preferences.essential}
                disabled
                className="mt-0.5 rounded text-[#4A5D4E] focus:ring-[#4A5D4E] accent-[#4A5D4E] shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#3D4035]">Notwendig (Essenziell)</span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">Immer aktiv</span>
                </div>
                <p className="text-[10px] text-[#6B705C] mt-0.5 leading-relaxed">
                  Erforderlich für grundlegende Funktionen wie den Warenkorb, Ihre Spracheinstellungen und das Speichern Ihrer Cookie-Präferenzen selbst.
                </p>
              </div>
            </div>

            {/* Category: Analytics */}
            <div 
              className="p-3 bg-white border border-[#E5E2D9] rounded-2xl flex items-start gap-2.5 cursor-pointer hover:bg-slate-50/50 transition"
              onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
            >
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => {
                  e.stopPropagation();
                  setPreferences(prev => ({ ...prev, analytics: e.target.checked }));
                }}
                className="mt-0.5 rounded text-[#4A5D4E] focus:ring-[#4A5D4E] accent-[#4A5D4E] shrink-0"
              />
              <div className="flex-1">
                <span className="text-xs font-extrabold text-[#3D4035]">Analysen &amp; Statistik</span>
                <p className="text-[10px] text-[#6B705C] mt-0.5 leading-relaxed">
                  Ermöglicht uns zu verstehen, wie Besucher unsere Website nutzen (z.B. welche Solar-Planer-Funktionen am beliebtesten sind), um den Service fortlaufend zu verbessern.
                </p>
              </div>
            </div>

            {/* Category: Marketing */}
            <div 
              className="p-3 bg-white border border-[#E5E2D9] rounded-2xl flex items-start gap-2.5 cursor-pointer hover:bg-slate-50/50 transition"
              onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
            >
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => {
                  e.stopPropagation();
                  setPreferences(prev => ({ ...prev, marketing: e.target.checked }));
                }}
                className="mt-0.5 rounded text-[#4A5D4E] focus:ring-[#4A5D4E] accent-[#4A5D4E] shrink-0"
              />
              <div className="flex-1">
                <span className="text-xs font-extrabold text-[#3D4035]">Marketing &amp; Medien</span>
                <p className="text-[10px] text-[#6B705C] mt-0.5 leading-relaxed">
                  Wird verwendet, um personalisierte Empfehlungen für Balkonkraftwerke anzuzeigen oder interaktive Medien (wie YouTube-Erklärvideos) zu laden.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowSettings(false)}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 px-3 rounded-xl transition cursor-pointer text-center"
            >
              Zurück
            </button>
            <button
              id="cookie-save-preferences"
              type="button"
              onClick={handleAcceptSelected}
              className="flex-1 bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-extrabold py-2.5 px-3 rounded-xl transition shadow-xs cursor-pointer text-center"
            >
              Auswahl speichern
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
