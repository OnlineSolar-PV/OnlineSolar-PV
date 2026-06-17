/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Mail, Phone, MapPin, Shield, RefreshCw, Truck, Lock } from 'lucide-react';

interface FooterProps {
  onNavigateLegal?: (tab: 'imprint' | 'terms' | 'privacy' | 'revocation') => void;
}

export default function Footer({ onNavigateLegal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4A5D4E] text-[#FAF9F6] border-t border-[#E5E2D9]">
      {/* Premium Trust Signals Bar */}
      <div className="bg-[#3D4D41] border-b border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          
          <div className="flex items-center gap-4 p-4.5 bg-[#4A5D4E]/50 rounded-2xl border border-white/10">
            <div className="bg-[#FAF9F6]/10 text-[#D4A373] p-2.5 rounded-xl shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Schnelle Speditionslieferung</h4>
              <p className="text-xs text-[#FAF9F6]/75 mt-0.5">Palettenversand sicher verpackt binnen weniger Tage.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4.5 bg-[#4A5D4E]/50 rounded-2xl border border-white/10">
            <div className="bg-[#FAF9F6]/10 text-[#D4A373] p-2.5 rounded-xl shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Bis zu 30 Jahre Garantie</h4>
              <p className="text-xs text-[#FAF9F6]/75 mt-0.5">Nur zertifizierte Ware mit deutschen Herstellergarantien.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4.5 bg-[#4A5D4E]/50 rounded-2xl border border-white/10">
            <div className="bg-[#FAF9F6]/10 text-[#D4A373] p-2.5 rounded-xl shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">30 Tage Rückgaberecht</h4>
              <p className="text-xs text-[#FAF9F6]/75 mt-0.5">Sorgenfreier Kauf mit unkomplizierter Retoure.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4.5 bg-[#4A5D4E]/50 rounded-2xl border border-white/10">
            <div className="bg-[#FAF9F6]/10 text-[#D4A373] p-2.5 rounded-xl shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Sichere 256-Bit SSL Zahlung</h4>
              <p className="text-xs text-[#FAF9F6]/75 mt-0.5">Ihre Daten sind durchgehend geschützt.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#FAF9F6]/10 p-2 rounded-xl text-[#D4A373]">
              <Sun className="w-5 h-5 text-[#D4A373]" />
            </div>
            <span className="text-lg font-extrabold text-white">
              Online<span className="text-[#D4A373]">Solar</span>
            </span>
          </div>
          <p className="text-xs text-[#FAF9F6]/85 leading-relaxed mb-6 font-medium">
            Ihr zertifizierter deutscher Fachhändler für zukunftssichere Photovoltaik-Komponenten, Balkonkraftwerke und hocheffiziente Wärmepumpen. Wir begleiten Sie auf dem Weg zur energetischen Selbstständigkeit.
          </p>
          <div className="flex flex-col gap-2 font-mono text-[10px] text-[#FAF9F6]/75">
            <span className="bg-[#3D4D41] py-1 px-3 rounded-lg border border-white/10 w-fit">Registrierter Fachhändler</span>
            <span className="bg-[#3D4D41] py-1 px-3 rounded-lg border border-white/10 w-fit">Innung Elektro / Solar</span>
          </div>
        </div>

        {/* Categories Shortcut */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-[#D4A373] pl-2.5 font-sans">Kategorien</h3>
          <ul className="space-y-2.5 text-xs text-[#FAF9F6]/85 font-medium">
            <li><a href="#" className="hover:text-[#D4A373] transition duration-200">Balkonkraftwerke (Plug & Play)</a></li>
            <li><a href="#" className="hover:text-[#D4A373] transition duration-200">Hocheffiziente Solarmodule</a></li>
            <li><a href="#" className="hover:text-[#D4A373] transition duration-200">Mikro- & Hybrid-Wechselrichter</a></li>
            <li><a href="#" className="hover:text-[#D4A373] transition duration-200">Heimspeicher & Batteriesysteme</a></li>
            <li><a href="#" className="hover:text-[#D4A373] transition duration-200">Wärmepumpen (Monoblock/Split)</a></li>
            <li><a href="#" className="hover:text-[#D4A373] transition duration-200">Kabel, Halterungen & Zubehör</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-[#D4A373] pl-2.5 font-sans">Kundenservice</h3>
          <ul className="space-y-3.5 text-xs text-[#FAF9F6]/85 font-medium">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white text-xs">Beratungs-Hotline</p>
                <p className="text-white/90 mt-0.5 font-mono">+49 (0) 800 SOLAR 24</p>
                <p className="text-[10px] text-[#FAF9F6]/75 font-normal">(Mo-Fr: 08:00 - 18:00 Uhr, kostenfrei)</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white text-xs">E-Mail Service</p>
                <p className="text-white/90 mt-0.5 font-mono">support@onlinesolar-pv.de</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white text-xs">Zentrallager Deutschland</p>
                <p className="text-white/90 mt-0.5">Sonnenallee 102, 34117 Kassel</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter simulated */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-l-2 border-[#D4A373] pl-2.5 font-sans">Vorteile sichern</h3>
          <p className="text-xs text-[#FAF9F6]/85 mb-4 leading-relaxed font-medium">
            Abonnieren Sie unseren Newsletter für aktuelle Sonderangebote, Solarpaket-I-Updates und exklusive Einkaufsgutscheine.
          </p>
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="bg-[#3D4D41] text-white placeholder-white/50 border border-white/10 rounded-xl py-2 px-3 text-xs focus:outline-none focus:border-[#D4A373] flex-1 min-w-0"
              />
              <button className="bg-[#D4A373] hover:bg-[#c59262] text-white font-extrabold px-3 py-2 rounded-xl text-xs transition duration-200 uppercase tracking-wider shrink-0">
                Anmelden
              </button>
            </div>
            <p className="text-[10px] text-[#FAF9F6]/65 leading-normal">
              Abmeldung jederzeit möglich. Datenschutzkonforme Abwicklung.
            </p>
          </div>
        </div>

      </div>

      {/* Payment methods section - Warm Sand Container */}
      <div className="bg-[#FAF9F6] border-t border-[#E5E2D9] py-8 px-6 md:px-8 text-[#3D4035]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="text-[10px] text-[#6B705C] font-extrabold tracking-widest uppercase">Akzeptierte Zahlungsarten:</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-white text-[#3D4035] text-[10px] font-bold py-1 px-3 rounded-full border border-[#E5E2D9] shadow-xs">PayPal</span>
              <span className="bg-white text-[#3D4035] text-[10px] font-bold py-1 px-3 rounded-full border border-[#E5E2D9] shadow-xs">Klarna (Rechnung)</span>
              <span className="bg-white text-[#3D4035] text-[10px] font-bold py-1 px-3 rounded-full border border-[#E5E2D9] shadow-xs">Kreditkarte</span>
              <span className="bg-white text-[#3D4035] text-[10px] font-bold py-1 px-3 rounded-full border border-[#E5E2D9] shadow-xs">Vorkasse (-3% Skonto)</span>
              <span className="bg-white text-[#3D4035] text-[10px] font-bold py-1 px-3 rounded-full border border-[#E5E2D9] shadow-xs">Sofort</span>
            </div>
          </div>
          <div className="text-[10px] text-[#6B705C] font-semibold">
            Entwickelt nach VDE-Normen und Steuerrichtlinien 2026.
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="bg-[#FAF9F6] py-5 px-6 md:px-8 text-xs border-t border-[#E5E2D9]/65">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-[#6B705C]">
          <p className="font-medium text-center sm:text-left">© {currentYear} OnlineSolar GmbH. Alle Rechte vorbehalten. 0% MwSt. für PV-Endabnehmer.</p>
          <div className="flex flex-wrap gap-4 font-bold">
            <button
              id="footer-link-imprint"
              onClick={() => onNavigateLegal?.('imprint')}
              className="hover:text-[#4A5D4E] transition duration-200 cursor-pointer bg-transparent border-none p-0 text-[#6B705C] font-bold text-xs"
            >
              Impressum
            </button>
            <button
              id="footer-link-privacy"
              onClick={() => onNavigateLegal?.('privacy')}
              className="hover:text-[#4A5D4E] transition duration-200 cursor-pointer bg-transparent border-none p-0 text-[#6B705C] font-bold text-xs"
            >
              Datenschutz
            </button>
            <button
              id="footer-link-terms"
              onClick={() => onNavigateLegal?.('terms')}
              className="hover:text-[#4A5D4E] transition duration-200 cursor-pointer bg-transparent border-none p-0 text-[#6B705C] font-bold text-xs"
            >
              AGB
            </button>
            <button
              id="footer-link-revocation"
              onClick={() => onNavigateLegal?.('revocation')}
              className="hover:text-[#4A5D4E] transition duration-200 cursor-pointer bg-transparent border-none p-0 text-[#6B705C] font-bold text-xs"
            >
              Widerruf
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
