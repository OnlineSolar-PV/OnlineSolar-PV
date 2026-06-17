/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import homepageHero from '../assets/images/homepage_hero_banner_1781679438278.jpg';
import { 
  ShieldCheck, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Info, 
  BadgePercent, 
  Zap, 
  Leaf, 
  Coins, 
  Scale, 
  Flame,
  Award,
  Globe
} from 'lucide-react';

interface BrandHomepageProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  compareList: Product[];
  onNavigateToPlanner: () => void;
  onSwitchToCatalog: () => void;
}

interface BrandPartner {
  id: string;
  name: string;
  description: string;
  logoText: string;
  founded?: string;
  origin: string;
  specialty: string;
  tagline: string;
}

export default function BrandHomepage({
  products,
  onViewDetails,
  onAddToCart,
  onToggleCompare,
  compareList,
  onNavigateToPlanner,
  onSwitchToCatalog,
}: BrandHomepageProps) {
  
  // Real-time animated ticker stats for simulation
  const [liveYield, setLiveYield] = useState<number>(3462.8);
  const [activePanelsCount, setActivePanelsCount] = useState<number>(1429402);

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate live fluctuating solar generation in Germany (kW)
      setLiveYield((prev) => {
        const change = (Math.random() - 0.48) * 4.5;
        return parseFloat((prev + change).toFixed(1));
      });
      // Simulate new panels added/registered
      if (Math.random() > 0.7) {
        setActivePanelsCount((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Filter criteria for our brands and partners
  const partners: BrandPartner[] = [
    {
      id: 'anker-solix',
      name: 'Anker Solix',
      tagline: 'Smarte Energie für ein selbstbestimmtes Leben.',
      description: 'Anker Solix steht für erstklassige, bahnbrechend einfache Plug & Play Solarlösungen. Von hochentwickelten Balkonkraftwerken mit der beliebten Solarbank-Speicherserie bis hin zu modular skalierbaren, smarten Heimspeichersystemen.',
      logoText: 'Anker Solix',
      origin: 'Shenzhen / München',
      specialty: 'Balkonkraftwerke & LFP-Heimspeicher'
    },
    {
      id: 'ecoflow',
      name: 'EcoFlow',
      tagline: 'Die mobile und stationäre Energiezukunft.',
      description: 'EcoFlow revolutioniert die private Stromspeicherung durch tragbare Powerstations, die innovative PowerStream Balkonkraftwerk-Einbindung und zukunftsfähige Heimspeichersysteme der PowerOcean-Serie.',
      logoText: 'EcoFlow',
      origin: 'Düsseldorf / Shenzhen',
      specialty: 'Powerstations & Hybrid-Inverter'
    },
    {
      id: 'zendure',
      name: 'Zendure',
      tagline: 'Die Benchmark für smarte Balkonspeicherung.',
      description: 'Zendure steht für absolute Spitzentechnologie mit der berühmten SolarFlow Serie. Ob der neue, bahnbrechend smarte Hyper 2000 AC-Hub oder die winterfesten AB2000S Zusatz-Akkus mit integrierter Zell-Temperierung.',
      logoText: 'Zendure',
      origin: 'Shenzhen / Silicon Valley',
      specialty: 'Smarte Speichersysteme & Smart-Plug Regler'
    },
    {
      id: 'foxess',
      name: 'FoxESS',
      tagline: 'Hocheffiziente PV-Hybridwechselrichter & Hochvolt-Batterieracks.',
      description: 'FoxESS ist ein weltweit führender Pionier für Wechselrichter- und Batteriespeichersäulen. Die All-in-One und H3-Hybrid-Wechselrichter zeichnen sich durch unübertroffene Schaltzeiten im Notstrombetrieb und erstklassige deutsche Ingenieur-Unterstützung aus.',
      logoText: 'FoxESS',
      origin: 'Wuxi, China / Deutschland',
      specialty: '3-Phasen Hybrid-WR & Speichersäulen'
    }
  ];

  // Helper to retrieve brand association
  const getBestsellersForPartner = (partnerId: string): Product[] => {
    switch (partnerId) {
      case 'anker-solix':
        return products.filter((p) => p.brand === 'Anker Solix').slice(0, 3);
      case 'ecoflow':
        return products.filter((p) => p.brand === 'EcoFlow').slice(0, 3);
      case 'zendure':
        return products.filter((p) => p.brand === 'Zendure').slice(0, 3);
      case 'foxess':
        return products.filter((p) => p.brand === 'FoxESS').slice(0, 3);
      default:
        return [];
    }
  };

  return (
    <div id="brand-homepage-container" className="font-sans text-[#3D4035] bg-transparent">
      
      {/* 1. HERO SECTOR WITH BRAND CREDENTIALS */}
      <section className="bg-slate-950 text-white rounded-[2rem] mx-4 md:mx-8 my-6 overflow-hidden py-14 md:py-20 px-6 md:px-12 relative border border-slate-800 shadow-xl">
        {/* Background Image Banner with smooth dark overlay for excellent readability */}
        <img
          src={homepageHero}
          alt="OnlineSolar Premium Partner"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-40 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-[#D4A373]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
          <div className="flex-1 space-y-5 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 bg-[#D4A373] text-white font-extrabold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full shadow-xs">
              <Award className="w-3.5 h-3.5" /> Offizieller Partner führender Solarmarken
            </span>
            
            <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight italic">
              Erstklassige Komponenten.<br />
              <span className="text-[#D4A373] not-italic font-sans font-extrabold">Starke Partner.</span>
            </h1>
            
            <p className="text-xs md:text-sm text-white/85 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Bei OnlineSolar finden Sie kein unübersichtliches Billigsortiment. Wir vertreiben ausschließlich geprüfte Original-Markenware führender globaler Branchengrößen mit echten Herstellergarantien von bis zu 30 Jahren.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="btn-switch-to-catalog"
                onClick={onSwitchToCatalog}
                className="bg-[#D4A373] hover:bg-[#c59262] text-white font-extrabold px-6 py-3.5 rounded-xl transition shadow-xs hover:scale-[1.02] transform text-xs uppercase tracking-wider cursor-pointer"
              >
                Kompletten Katalog durchstöbern →
              </button>
              
              <button
                id="btn-to-planner"
                onClick={onNavigateToPlanner}
                className="bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 rounded-xl border border-white/20 transition text-xs font-bold cursor-pointer"
              >
                PV-Systemplaner starten
              </button>
            </div>
          </div>

          {/* Slogan Visual Grid Badge with Partner Logos */}
          <div className="lg:w-[450px] shrink-0 w-full">
            <div className="bg-[#FAF9F6]/10 border border-white/15 rounded-3xl p-6 backdrop-blur-xs space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#D4A373] font-bold block border-b border-white/10 pb-2">Unsere Allianzpartner</span>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono font-bold text-white/90">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                  <span className="text-[#D4A373] font-sans font-bold text-sm">Zendure</span>
                  <span className="text-[8px] text-white/50 uppercase mt-0.5">SolarFlow</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                  <span className="font-sans font-extrabold text-sm">Anker Solix</span>
                  <span className="text-[8px] text-white/50 uppercase mt-0.5">Smart Speicher</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                  <span className="font-sans font-black text-sm text-[#D4A373]">EcoFlow</span>
                  <span className="text-[8px] text-white/50 uppercase mt-0.5">STREAM Serie</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-center">
                  <span className="font-serif italic text-sm">FoxESS</span>
                  <span className="text-[8px] text-white/50 uppercase mt-0.5">PV-Inverter</span>
                </div>
              </div>
              <div className="p-3 bg-[#D4A373]/10 border border-[#D4A373]/20 rounded-xl text-center">
                <p className="text-[10px] text-[#FAF9F6] font-medium leading-relaxed">
                  ✓ Alle Komponenten entsprechen den strengen Standards der Bundesnetzagentur und sind VDE-zertifiziert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "WARUM SOLAR?" (WHY SOLAR) HIGH-POLISHED FACTS GAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 select-none">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="bg-[#4A5D4E]/10 text-[#4A5D4E] font-extrabold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full">
            Echte Vorteile sichern
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-black text-[#4A5D4E] italic mt-2.5">
            Warum lohnt sich Photovoltaik jetzt?
          </h2>
          <p className="text-xs md:text-sm text-[#6B705C] font-semibold mt-1.5 leading-relaxed">
            Die dezentrale Energieversorgung schützt nicht nur die Umwelt, sondern schont Ihren Geldbeutel unmittelbar ab dem ersten Sonnenstrahl.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Item 1: 0% Tax */}
          <div className="bg-white border border-[#E5E2D9] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-[#4A5D4E]/30 duration-200">
            <div className="space-y-4">
              <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl w-12 h-12 flex items-center justify-center text-[#D4A373]">
                <BadgePercent className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#3D4035]">0% Umsatzsteuer</h3>
              <p className="text-xs text-[#6B705C] leading-relaxed font-semibold">
                Es fällt keinerlei Mehrwertsteuer auf PV-Module, Speichersysteme und Wechselrichter an. Sie sparen sofort satte 19% Anschaffungskosten dank § 12 Abs. 3 UStG gesetzlicher Ausnahmesteuerung.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#4A5D4E] uppercase tracking-wider inline-flex items-center gap-1 mt-6">
              Direkt Ersparnis ✓
            </span>
          </div>

          {/* Item 2: Self Sufficiency */}
          <div className="bg-white border border-[#E5E2D9] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-[#4A5D4E]/30 duration-200">
            <div className="space-y-4">
              <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl w-12 h-12 flex items-center justify-center text-[#7D8E7E]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#3D4035]">Bis zu 85% Autarkie</h3>
              <p className="text-xs text-[#6B705C] leading-relaxed font-semibold">
                Durch Kopplung hocheffizienter N-Type Solarmodule mit erstklassigen Lithium-Eisenphosphat-Speichern steuern Sie gänzlich unabhängig durch das Jahr. Unabhängig von Netzversorgern und steigenden Tarifen.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#4A5D4E] uppercase tracking-wider inline-flex items-center gap-1 mt-6">
              Maximale Freiheit ✓
            </span>
          </div>

          {/* Item 3: CO2 mitigation */}
          <div className="bg-white border border-[#E5E2D9] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-[#4A5D4E]/30 duration-200">
            <div className="space-y-4">
              <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl w-12 h-12 flex items-center justify-center text-[#4A5D4E]">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#3D4035]">Aktiver Klimaschutz</h3>
              <p className="text-xs text-[#6B705C] leading-relaxed font-semibold">
                Ein klassisches Balkonkraftwerk spart im Durchschnitt bereits 550kg CO₂ pro Betriebsjahr. Eine größere 10kWp Dachanlage entlastet die CO₂-Bilanz über zweieinhalb Jahrzehnte hinweg um über 150 Tonnen.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#7D8E7E] uppercase tracking-wider inline-flex items-center gap-1 mt-6">
              Green Planet ✓
            </span>
          </div>

          {/* Item 4: ROI Payback */}
          <div className="bg-white border border-[#E5E2D9] rounded-3xl p-6 shadow-xs flex flex-col justify-between hover:border-[#4A5D4E]/30 duration-200">
            <div className="space-y-4">
              <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl w-12 h-12 flex items-center justify-center text-[#D4A373]">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#3D4035]">Rasch amortisiert</h3>
              <p className="text-xs text-[#6B705C] leading-relaxed font-semibold">
                Stecker-Solaranlagen spielen ihre Kosten meist schon nach 2-3 Jahren ein. Große Solaranlagen mit Speicher sind in der Regel in 6 bis 9 Jahren voll abbezahlt. Danach erzeugen Sie kostenlosen Gratisstrom für weitere 20+ Jahre.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#4A5D4E] uppercase tracking-wider inline-flex items-center gap-1 mt-6">
              Optimale Rendite ✓
            </span>
          </div>

        </div>
      </section>

      {/* 3. "WIE DER AUSBAU VORANGEHT" GERMANY PV REAL-TIME PROGRESS TRACKER */}
      <section className="bg-[#FAF9F6] border-t border-b border-[#E5E2D9] py-12 md:py-16 select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side text and background details */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-[#4A5D4E] text-[#FAF9F6] font-extrabold text-[9px] tracking-widest uppercase py-1 px-3.5 rounded-full select-none">
                <Globe className="w-3.5 h-3.5" /> Ausbaustatus Energiewende
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-black text-[#4A5D4E] italic leading-tight">
                Wie weit ist Deutschland auf dem PV-Ausbaupfad?
              </h2>
              <p className="text-xs md:text-sm text-[#6B705C] leading-relaxed font-semibold">
                Das gesetzliche Ausbauziel der Bundesregierung ist ambitioniert: Bis zum Jahr <strong>2030</strong> sollen in Deutschland mindestens <strong>215 GWp (Gigawatt-Peak)</strong> Photovoltaik-Leistung installiert und am Netz sein. 
              </p>
              <p className="text-xs text-[#6B705C] leading-relaxed font-medium">
                Unsere interaktive Simulation visualisiert den gegenwärtigen Status basierend auf den offiziellen Berichtsdaten der Bundesnetzagentur. Seien Sie aktiver Teil dieses bemerkenswerten historischen Kraftaktes!
              </p>

              <div className="p-4 bg-white border border-[#E5E2D9] rounded-2xl space-y-3.5 shadow-2xs">
                <span className="text-[10px] text-[#A5A58D] font-mono tracking-widest uppercase font-extrabold block">Live-Yield Simulation</span>
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-mono font-black text-[#4A5D4E] tracking-tight">{liveYield.toLocaleString('de-DE')} kW</span>
                  <span className="text-[10px] bg-[#7D8E7E]/10 text-[#4A5D4E] font-bold px-2 py-0.5 rounded-lg animate-pulse border border-[#7D8E7E]/20">Echtzeit Ertrag</span>
                </div>
                <p className="text-[10px] text-[#A5A58D] leading-relaxed font-semibold -mt-1 bg-[#FAF9F6] p-2.5 rounded-xl border border-[#E5E2D9]/60">
                 Basierend auf den aktuellen Sonneneinstrahlungsdaten im Einzugsgebiet Kassel beträgt die berechnete Durchschnittsleistung dezentraler Balkonkraftwerke im Verbund momentan diesen Wert.
                </p>
              </div>
            </div>

            {/* Right side Dashboard visuals and interactive gauge bars */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5E2D9] p-6 md:p-8 shadow-xs space-y-6">
              <div className="flex justify-between items-center border-b border-[#F0EFEA] pb-3">
                <span className="text-xs font-bold text-[#4A5D4E] uppercase tracking-wider">PV-Ausbau Dashboard (Inlandsdaten)</span>
                <span className="text-[10px] text-[#A5A58D] font-semibold font-mono">Stand: Juni 2026</span>
              </div>

              {/* Grid with statistics meters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl p-4 flex flex-col justify-between">
                  <span className="text-[10px] text-[#A5A58D] font-extrabold uppercase tracking-wider">Installierte Gesamtleistung</span>
                  <span className="text-2xl font-sans font-black text-[#4A5D4E] mt-2 block">88.4 GWp</span>
                  <span className="text-[10px] text-[#6B705C] font-semibold mt-1">Vom gesetzlichen Ziel 215 GWp</span>
                </div>

                <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl p-4 flex flex-col justify-between">
                  <span className="text-[10px] text-[#A5A58D] font-extrabold uppercase tracking-wider">Aktive Solarsysteme</span>
                  <span className="text-2xl font-mono font-black text-[#4A5D4E] mt-2 block">
                    {activePanelsCount.toLocaleString('de-DE')} ★
                  </span>
                  <span className="text-[10px] bg-[#D4A373]/10 text-[#D4A373] px-1.5 py-0.5 rounded-md font-bold w-fit mt-1 animate-pulse">
                    +1 alle 3 Min im Netz
                  </span>
                </div>
              </div>

              {/* Progress target bar visually impressive */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#3D4035]">
                  <span>Fortschritt bis 2030 Ziel (215 GWp)</span>
                  <span className="text-[#4A5D4E] bg-[#7D8E7E]/10 px-20 py-0.5 rounded-xl border border-[#7D8E7E]/10">41.1% Erreicht</span>
                </div>
                <div className="relative w-full h-4 bg-[#FAF9F6] border border-[#E5E2D9] rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7D8E7E] via-[#4A5D4E] to-[#D4A373] rounded-full transition-all duration-1000"
                    style={{ width: '41.1%' }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-[#A5A58D] font-mono">
                  <span>0 GWp (Start 1990)</span>
                  <span>Ziel: 215 GWp (2030)</span>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl p-4">
                <h4 className="flex items-center gap-1.5 text-xs font-bold text-[#4A5D4E] mb-1">
                  <Info className="w-4 h-4 text-[#D4A373]" />
                  <span>Wussten Sie schon?</span>
                </h4>
                <p className="text-[11px] text-[#6B705C] leading-normal font-medium">
                  Deutsche Haushalte speisen mittlerweile fast 25% ihrer Solarernte direkt für den Eigenbedarf ein oder nutzen es für Heizwärme per hocheffizienter Monoblock-Wärmepumpe. Die Kombination beider Technologien verkürzt die Amortisationszeit des Gesamtsystems im Schnitt um zusätzliche 1.5 Jahre!
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND INDEX - PROFILE CARDS + BESTSELLERS PRODUCT STRIP */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 select-none">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="bg-[#D4A373]/10 text-[#D4A373] font-extrabold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full">
            Elite-Hersteller Index
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-black text-[#4A5D4E] italic mt-2.5">
            Unsere exklusiven Markenpartner
          </h2>
          <p className="text-xs md:text-sm text-[#6B705C] font-semibold mt-1.5 leading-relaxed">
            Wir kooperieren nur mit Marktführern. Jede Marke steht für höchste Qualitätsstufen, ausgedehnte Garantiebereiche und unerreichte Zuverlässigkeit.
          </p>
        </div>

        {/* Dynamic Mapping through partners, displaying partner details and up to 3 best seller products for each! */}
        <div className="space-y-16 md:space-y-24">
          {partners.map((partner) => {
            const partnerProducts = getBestsellersForPartner(partner.id);
            return (
              <div key={partner.id} className="border-b border-[#FAF9F6] pb-12 last:border-b-0 space-y-6">
                
                {/* Brand Identity Panel Card */}
                <div className="bg-white border border-[#E5E2D9] p-6 rounded-3xl shadow-2xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-[#4A5D4E] text-white font-mono font-black text-xs px-3.5 py-1.5 rounded-xl uppercase tracking-wider">
                        {partner.logoText}
                      </span>
                      <span className="text-[11px] font-mono text-[#A5A58D] font-bold">Herstellungsort: {partner.origin}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold text-[#3D4035] leading-tight">
                      Partner: {partner.name}
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#D4A373] tracking-tight italic -mt-0.5">
                      {partner.tagline}
                    </p>
                    <p className="text-xs text-[#6B705C] leading-normal font-semibold max-w-3xl pt-1">
                      {partner.description}
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl w-full md:w-fit shrink-0 font-medium">
                    <span className="text-[9px] text-[#A5A58D] font-mono font-extrabold uppercase tracking-wide">Fokus &amp; Kernkompetenz</span>
                    <p className="text-xs font-bold text-[#4A5D4E] mt-0.5">{partner.specialty}</p>
                    <span className="text-[10px] text-[#7D8E7E] block mt-1.5 font-bold">✓ Original Ware &amp; Garantie gesichert</span>
                  </div>
                </div>

                {/* Bestseller Items (horizontal grid layout) */}
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 px-2">
                    <Sparkles className="w-4 h-4 text-[#D4A373] animate-pulse" />
                    <span className="text-[11px] font-bold text-[#4A5D4E] uppercase tracking-wider">Top-Bestseller von {partner.name} :</span>
                  </div>

                  {partnerProducts.length === 0 ? (
                    <div className="text-center py-6 bg-white border border-[#E5E2D9]/60 rounded-2xl text-xs text-[#A5A58D] font-mono font-semibold">
                      Keine Produkte in dieser Demoliste vorhanden.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {partnerProducts.map((prod) => (
                        <div key={prod.id} className="h-full">
                          <ProductCard
                            product={prod}
                            onViewDetails={onViewDetails}
                            onAddToCart={onAddToCart}
                            onToggleCompare={onToggleCompare}
                            isComparing={compareList.some((p) => p.id === prod.id)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 5. BIG BRAND BOTTOM CALL TO ACTION */}
      <section className="bg-gradient-to-tr from-[#4A5D4E] to-[#7D8E7E] text-white rounded-[2rem] mx-4 md:mx-8 my-10 overflow-hidden py-10 md:py-14 px-6 md:px-12 relative text-center border border-[#E5E2D9] shadow-md select-none">
        <div className="absolute inset-0 bg-radial-gradient from-[#D4A373]/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-black italic">Suchen Sie etwas Spezielles?</h2>
          <p className="text-xs md:text-sm text-white/80 leading-relaxed font-semibold">
            Nutzen Sie unsere Filter nach Budget, Lieferverfügbarkeit und Hersteller-Kategorie, um aus dem globalen Gesamtkatalog die für Sie idealen Photovoltaik-Komponenten zusammenzustellen.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={onSwitchToCatalog}
              className="bg-[#D4A373] hover:bg-[#c59262] text-white font-extrabold px-6 py-3.5 rounded-xl transition shadow-xs hover:scale-[1.02] transform text-xs uppercase tracking-wider cursor-pointer"
            >
              Zum kompletten Solarkatalog →
            </button>
            <button
              onClick={onNavigateToPlanner}
              className="bg-white hover:bg-white/95 text-[#4A5D4E] font-extrabold px-6 py-3.5 rounded-xl transition shadow-xs text-xs uppercase tracking-wider cursor-pointer"
            >
              Komponenten interaktiv planen
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
