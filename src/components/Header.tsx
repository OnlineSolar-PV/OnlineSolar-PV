/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sun, ShoppingCart, Search, Scale, HelpCircle, ShieldCheck, Mail, Phone } from 'lucide-react';
import { CATEGORY_LABELS } from '../data';

interface HeaderProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  compareCount: number;
  onOpenCompare: () => void;
  onBackToHome: () => void;
  onNavigateToPlanner: () => void;
}

export default function Header({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  cartCount,
  cartTotal,
  onOpenCart,
  compareCount,
  onOpenCompare,
  onBackToHome,
  onNavigateToPlanner,
}: HeaderProps) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="bg-white text-[#3D4035] sticky top-0 z-40 shadow-sm border-b border-[#E5E2D9] font-sans">
      {/* 0% VAT Advantage Top-Banner */}
      <div className="bg-[#4A5D4E] text-white font-medium py-1.5 px-4 text-xs tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 text-center sm:text-left">
          <span className="flex items-center gap-1 justify-center sm:justify-start">
            <span className="bg-white/15 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">0% MwSt.</span>
            <span>UStG Steuersatz für Solarstromanlagen beträgt weiterhin 0%!</span>
          </span>
          <div className="flex items-center gap-4 text-[11px] font-semibold opacity-90">
            <span className="border-r border-white/20 pr-3 hidden md:inline">✓ DE-Versandkostenfrei ab 150 €</span>
            <span className="hidden md:inline">✓ Premium Fachunterstützung</span>
          </div>
        </div>
      </div>

      {/* Info-Kontakt-Leiste */}
      <div className="bg-[#FAF9F6] border-b border-[#E5E2D9] text-[#6B705C] py-1.5 px-4 text-xs hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-[#4A5D4E] transition">
              <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Mo-Fr: 08:00 - 18:00 Uhr | +49 (0) 800 SOLAR 24</span>
            </span>
            <span className="flex items-center gap-1 hover:text-[#4A5D4E] transition">
              <Mail className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>support@onlinesolar-pv.de</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#4A5D4E] font-semibold hover:text-[#7D8E7E] transition cursor-pointer" onClick={onNavigateToPlanner}>
              <Sun className="w-3.5 h-3.5 animate-spin-slow text-[#D4A373]" />
              <span>Interaktiver PV-Systemplaner</span>
            </span>
          </div>
        </div>
      </div>

      {/* Haupt-Kopfzeile */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          onClick={onBackToHome}
          className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
        >
          <div className="bg-[#7D8E7E] p-2 rounded-full text-white shadow-sm group-hover:scale-105 transition duration-300">
            <Sun className="w-5 h-5 text-yellow-100" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-black tracking-tight text-[#4A5D4E] group-hover:text-[#7D8E7E] transition duration-300 italic">
              Online<span className="text-[#D4A373] text-lg font-sans not-italic font-bold">Solar</span>
            </span>
            <span className="text-[9px] text-[#A5A58D] tracking-widest font-mono uppercase bg-[#FAF9F6] px-1 py-0.5 rounded border border-[#E5E2D9] -mt-1 block font-bold">
              Photovoltaik &amp; Wärmepumpen
            </span>
          </div>
        </div>

        {/* Suche (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Nach Balkonkraftwerken, Modulen, Wechselrichtern suchen..."
            className="w-full bg-white text-[#3D4035] placeholder-[#A5A58D] pl-4 pr-10 py-2 rounded-xl text-sm border border-[#E5E2D9] focus:outline-none focus:border-[#4A5D4E] focus:ring-1 focus:ring-[#4A5D4E]/10 transition duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-[#A5A58D]" />
        </div>

        {/* Buttons & Interaktionen */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Mobile Such-Toggle */}
          <button
            onClick={() => setShowSearchInput(!showSearchInput)}
            className="p-2 text-[#6B705C] hover:text-[#4A5D4E] hover:bg-[#FAF9F6] rounded-xl transition md:hidden"
            title="Suchen"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Systemplaner Shortcut (Mobile) */}
          <button
            onClick={onNavigateToPlanner}
            className="p-2 text-[#6B705C] hover:text-[#4A5D4E] hover:bg-[#FAF9F6] rounded-xl transition sm:hidden"
            title="PV Planer"
          >
            <Sun className="w-5 h-5" />
          </button>

          {/* Vergleichs-Button */}
          <button
            onClick={onOpenCompare}
            className={`flex items-center gap-1.5 p-2 rounded-xl transition ${
              compareCount > 0
                ? 'bg-[#D4A373]/10 text-[#D4A373] border border-[#D4A373]/30 font-medium'
                : 'text-[#6B705C] hover:text-[#4A5D4E] hover:bg-[#FAF9F6]'
            }`}
            title="Produktvergleich öffnen"
          >
            <Scale className="w-5 h-5" />
            <span className="text-sm hidden lg:inline font-bold">Vergleichen</span>
            {compareCount > 0 && (
              <span className="bg-[#D4A373] text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                {compareCount}
              </span>
            )}
          </button>

          {/* Warenkorb-Button */}
          <button
            onClick={onOpenCart}
            id="cart-header-button"
            className="flex items-center gap-2 bg-[#4A5D4E] text-white px-3 sm:px-4 py-2.5 rounded-xl font-bold hover:bg-[#3d4d41] transition duration-300 shadow-sm active:scale-95 transform"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Warenkorb</span>
            <span className="bg-white text-[#4A5D4E] text-[10px] font-extrabold ml-1 px-1.5 py-0.5 rounded-md">
              {cartCount}
            </span>
            <span className="text-xs font-mono font-medium border-l border-white/25 pl-2 hidden lg:inline">
              {cartTotal.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Suchleiste (Einklappbar) */}
      {showSearchInput && (
        <div className="bg-[#FAF9F6] px-4 py-3 border-t border-[#E5E2D9] md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Nach Produkten suchen..."
              className="w-full bg-white text-[#3D4035] placeholder-[#A5A58D] pl-4 pr-10 py-2.5 rounded-xl text-sm border border-[#E5E2D9] focus:outline-none focus:border-[#4A5D4E]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <Search className="absolute right-3 top-3 w-4 h-4 text-[#A5A58D]" />
          </div>
        </div>
      )}

      {/* Kategorien-Navigationsleiste */}
      <nav className="bg-[#FAF9F6] border-t border-b border-[#E5E2D9] overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-1 md:gap-2">
          <div className="flex items-center gap-0.5 sm:gap-1 py-1 shrink-0">
            {/* "Alle" option */}
            <a
              id="category-tab-all"
              href="#/kategorie/all"
              onClick={(e) => {
                e.preventDefault();
                setActiveCategory('all');
              }}
              className={`px-3 md:px-4 py-3 text-xs md:text-sm font-semibold rounded-none border-b-2 transition duration-200 shrink-0 cursor-pointer decoration-none ${
                activeCategory === 'all'
                  ? 'border-[#4A5D4E] text-[#4A5D4E] bg-white/50'
                  : 'border-transparent text-[#6B705C] hover:text-[#4A5D4E] hover:bg-white/30'
              }`}
            >
              Alle Produkte
            </a>

            {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
              const isSelected = activeCategory === key;
              return (
                <a
                  key={key}
                  id={`category-tab-${key}`}
                  href={`#/kategorie/${key}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory(key);
                  }}
                  className={`px-3 md:px-4 py-3 text-xs md:text-sm font-semibold rounded-none border-b-2 transition duration-200 shrink-0 cursor-pointer decoration-none ${
                    isSelected
                      ? 'border-[#4A5D4E] text-[#4A5D4E] bg-white/50'
                      : 'border-transparent text-[#6B705C] hover:text-[#4A5D4E] hover:bg-white/30'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-4 text-xs font-semibold text-[#6B705C] shrink-0 py-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#4A5D4E]" />
              <span>Geprüfter PV-Fachhändler</span>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
