/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product } from '../types';
import { Sun, Sparkles, TrendingUp, Sliders, Battery, ArrowDownToLine } from 'lucide-react';
import { PRODUCTS } from '../data';

interface SolarPlannerProps {
  products?: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function SolarPlanner({ products = [], onSelectProduct, onAddToCart }: SolarPlannerProps) {
  // Config state
  const [annualConsumption, setAnnualConsumption] = useState(4000);
  const [roofArea, setRoofArea] = useState(45);
  const [orientation, setOrientation] = useState('south');
  const [hasBattery, setHasBattery] = useState(true);

  // Constants
  const PANEL_POWER_WP = 440; // 440W from Trina Vertex S+
  const PANEL_AREA_QM = 2.0; // approx area needed including brackets

  // Calculations
  const maxPanelsByArea = Math.floor(roofArea / PANEL_AREA_QM);
  
  const recommendedPowerKWp = annualConsumption / 950;
  const recommendedPanelsPct = Math.ceil((recommendedPowerKWp * 1000) / PANEL_POWER_WP);
  
  const panelsCount = Math.min(maxPanelsByArea, Math.max(2, recommendedPanelsPct));
  const systemPowerKWp = (panelsCount * PANEL_POWER_WP) / 1000;

  const orientationFactor =
    orientation === 'south'
      ? 1.0
      : orientation === 'southwest' || orientation === 'southeast'
      ? 0.9
      : orientation === 'eastwest'
      ? 0.82
      : 0.6; // North

  const annualYieldKWh = Math.round(systemPowerKWp * 950 * orientationFactor);

  const selfConsumptionRate = hasBattery ? 0.75 : 0.35; 
  const energySavedKWh = Math.min(annualConsumption, annualYieldKWh) * selfConsumptionRate;
  const gridInfeedKWh = Math.max(0, annualYieldKWh - energySavedKWh);

  const annualSavingsEuro = Math.round(
    energySavedKWh * 0.35 + gridInfeedKWh * 0.082
  );

  const panelsEstimatedCost = panelsCount * 65.00; 
  const inverterEstimatedCost = systemPowerKWp > 4 ? 1549.00 : 115.00; 
  const batteryEstimatedCost = hasBattery ? 3699.00 : 0; 
  const materialsCost = Math.round(panelsCount * 45 + 300); 
  const totalSystemCost = panelsEstimatedCost + inverterEstimatedCost + batteryEstimatedCost + materialsCost;

  const paybackYears = Number((totalSystemCost / (annualSavingsEuro || 1)).toFixed(1));

  const getRecommendedProducts = (): Product[] => {
    const list: Product[] = [];
    const productsSource = products && products.length > 0 ? products : PRODUCTS;
    
    if (panelsCount <= 4) {
      const bkwPremium = productsSource.find((p) => p.id === 'bkw-800-premium');
      const bkwSpeicher = productsSource.find((p) => p.id === 'bkw-1600-speicher');
      if (bkwPremium) list.push(bkwPremium);
      if (bkwSpeicher) list.push(bkwSpeicher);
    } else {
      const trina = productsSource.find((p) => p.id === 'mod-trina-440');
      if (trina) list.push(trina);

      if (systemPowerKWp > 4) {
        const fronius = productsSource.find((p) => p.id === 'wr-fronius-10');
        if (fronius) list.push(fronius);
      } else {
        const hoymiles = productsSource.find((p) => p.id === 'wr-hoymiles-800');
        if (hoymiles) list.push(hoymiles);
      }

      if (hasBattery) {
        const byd = productsSource.find((p) => p.id === 'bat-byd-77');
        if (byd) list.push(byd);
      }

      const shelly = productsSource.find((p) => p.id === 'zub-shelly-pro3em');
      if (shelly) list.push(shelly);
    }
    
    return list;
  };

  const recommendedProducts = getRecommendedProducts();

  return (
    <div className="bg-[#FAF9F6] border-t border-b border-[#E5E2D9] py-12 md:py-16 text-[#3D4035] select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Planner Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="bg-[#FAF9F6] text-[#4A5D4E] border border-[#E5E2D9] text-[10px] font-extrabold tracking-widest px-3.5 py-1.5 rounded-full uppercase inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>Kostenloses Planungstool</span>
          </span>
          <h2 className="text-2xl md:text-3.5xl font-serif font-black text-[#3D4035] italic tracking-tight mt-3">
            Interaktiver PV-Ertragsrechner
          </h2>
          <p className="text-xs md:text-sm text-[#6B705C] leading-relaxed mt-2.5 font-medium">
            Geben Sie einfach Ihre Verbrauchsdaten und Dachwerte ein. Unser systematischer Simulator empfiehlt Ihnen sofort die passenden Komponenten aus unserem Online-Katalog.
          </p>
        </div>

        {/* Bento Board Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel (5/12) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E5E2D9] p-6 md:p-8 shadow-xs space-y-6">
            <h3 className="text-xs font-bold text-[#4A5D4E] flex items-center gap-2 border-b border-[#F0EFEA] pb-3 mb-2 uppercase tracking-widest">
              <Sliders className="w-4 h-4 text-[#D4A373]" />
              <span>Dach- & Verbrauchsdaten</span>
            </h3>

            {/* Slider 1: Annual Consumption */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center font-bold text-[#3D4035]">
                <span>Jährlicher Stromverbrauch:</span>
                <span className="font-mono bg-[#FAF9F6] text-[#4A5D4E] border border-[#E5E2D9] px-2.5 py-0.5 rounded-lg font-bold">
                  {annualConsumption.toLocaleString('de-DE')} kWh
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="12000"
                step="250"
                className="w-full accent-[#4A5D4E] h-1.5 bg-[#FAF9F6] rounded-lg cursor-pointer"
                value={annualConsumption}
                onChange={(e) => setAnnualConsumption(Number(e.target.value))}
              />
              <div className="flex justify-between text-[10px] text-[#A5A58D] font-semibold font-mono">
                <span>1.000 (Zweipersonenhaushalt)</span>
                <span>12.000 (Wärmepumpe, E-Auto)</span>
              </div>
            </div>

            {/* Slider 2: Roof Area */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center font-bold text-[#3D4035]">
                <span>Nutzbare Dachfläche (Süd/West):</span>
                <span className="font-mono bg-[#FAF9F6] text-[#4A5D4E] border border-[#E5E2D9] px-2.5 py-0.5 rounded-lg font-bold">
                  {roofArea} m²
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="150"
                step="2"
                className="w-full accent-[#4A5D4E] h-1.5 bg-[#FAF9F6] rounded-lg cursor-pointer"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
              />
              <div className="flex justify-between text-[10px] text-[#A5A58D] font-semibold font-mono">
                <span>6 m² (Balkongitter)</span>
                <span>150 m² (Großes Dach)</span>
              </div>
            </div>

            {/* Radio Select 3: Orientation */}
            <div className="space-y-2 text-xs">
              <span className="text-[#3D4035] font-bold block">Dachausrichtung:</span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: 'south', label: '☀️ Süden (100% Ertrag)' },
                  { key: 'southwest', label: '🌤️ Südwest/Ost (90%)' },
                  { key: 'eastwest', label: '🌗 Ost-West (82%)' },
                  { key: 'north', label: '☁️ Norden (60% Ertrag)' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setOrientation(item.key)}
                    className={`py-2.5 px-3 border rounded-xl text-left font-bold transition duration-150 cursor-pointer ${
                      orientation === item.key
                        ? 'bg-[#4A5D4E] border-[#4A5D4E] text-white shadow-xs'
                        : 'bg-white border-[#E5E2D9] text-[#3D4035] hover:bg-[#FAF9F6]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Checkbox 4: Battery storage required */}
            <div className="flex items-center justify-between p-3.5 bg-[#FAF9F6] rounded-2xl border border-[#E5E2D9] text-xs">
              <div className="flex items-center gap-2.5">
                <Battery className="w-5 h-5 text-[#D4A373] shrink-0" />
                <div>
                  <p className="font-bold text-[#3D4035]">Lithium-Speicher einplanen</p>
                  <p className="text-[10px] text-[#6B705C] font-semibold leading-normal">
                    Erhöht Eigenstromverbrauch von 35% auf bis zu 75%.
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={hasBattery}
                onChange={(e) => setHasBattery(e.target.checked)}
                className="w-4.5 h-4.5 accent-[#4A5D4E] rounded cursor-pointer border-[#E5E2D9]"
              />
            </div>
          </div>

          {/* Right panel (7/12) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Calculations Dashboard View card */}
            <div className="bg-[#4A5D4E] text-white rounded-3xl p-6 md:p-8 shadow-xs border border-[#E5E2D9]">
              <h3 className="text-[10px] font-bold text-[#D4A373] uppercase tracking-widest mb-6">
                Berechneter PV-Auslegungsvorschlag
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-center border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-[10px] text-[#FAF9F6]/85 block font-extrabold uppercase tracking-widest">
                    Solarmodule
                  </span>
                  <span className="text-2xl md:text-3xl font-bold font-mono text-white block mt-1.5">
                    {panelsCount}x
                  </span>
                  <span className="text-[9px] text-[#FAF9F6]/65 block font-semibold mt-0.5">
                    (je 440Wp N-Type)
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#FAF9F6]/85 block font-extrabold uppercase tracking-widest">
                    Leistung
                  </span>
                  <span className="text-2xl md:text-3xl font-bold font-mono text-white block mt-1.5">
                    {systemPowerKWp.toFixed(2)}
                  </span>
                  <span className="text-[9px] text-[#FAF9F6]/65 block font-semibold mt-0.5">
                    kWp Peak
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#FAF9F6]/85 block font-extrabold uppercase tracking-widest">
                    Jahresertrag
                  </span>
                  <span className="text-2xl md:text-3xl font-bold font-mono text-[#D4A373] block mt-1.5">
                    {annualYieldKWh.toLocaleString('de-DE')}
                  </span>
                  <span className="text-[9px] text-[#FAF9F6]/65 block font-semibold mt-0.5">
                    kWh / Jahr
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#FAF9F6]/85 block font-extrabold uppercase tracking-widest">
                    Ersparnis
                  </span>
                  <span className="text-2xl md:text-3xl font-bold font-mono text-[#FAF9F6] block mt-1.5">
                    ~{annualSavingsEuro} €
                  </span>
                  <span className="text-[9px] text-[#FAF9F6]/65 block font-semibold mt-0.5">
                    Stromwert / Jahr
                  </span>
                </div>
              </div>

              {/* Amortisation analytics & dynamic text review */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs bg-[#3D4D41] p-4.5 rounded-2xl border border-white/5">
                <p className="text-[#FAF9F6]/90 leading-relaxed font-semibold max-w-md">
                  Bei einem assumed Strompreis von 35 Cent/kWh und einer geschätzten Investition von ca.{' '}
                  <span className="font-bold text-white font-mono">
                    {totalSystemCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 })}
                  </span>{' '}
                  amortisiert sich die Komplettanlage voraussichtlich nach{' '}
                  <span className="font-extrabold text-[#3D4035] font-sans bg-[#D4A373] text-white px-2.5 py-1 rounded-lg shadow-xs mx-1">
                    {paybackYears} Jahren
                  </span>
                  .
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-white bg-white/10 border border-white/10 py-1.5 px-3.5 rounded-xl w-fit shrink-0 self-start sm:self-center font-bold uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-[#D4A373]" />
                  <span>Rendite: {Number((100 / paybackYears).toFixed(1))}% / Jahr</span>
                </div>
              </div>
            </div>

            {/* Recommended Products Feed */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#6B705C] uppercase tracking-widest pl-1">
                Vorgeschlagene Komponenten aus dem Shop:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-4 bg-white border border-[#E5E2D9] rounded-2xl flex gap-3.5 items-center hover:border-[#4A5D4E]/30 hover:shadow-xs transition duration-200 group relative"
                  >
                    <img
                      src={prod.images[0]}
                      alt={prod.shortTitle}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-contain bg-[#FAF9F6] rounded-xl p-1.5 border border-[#E5E2D9] shrink-0 transform group-hover:scale-[1.03] transition"
                    />

                    <div className="flex-1 min-w-0 text-xs font-medium">
                      <span className="text-[9px] bg-[#FAF9F6] border border-[#E5E2D9] font-extrabold text-[#6B705C] rounded-lg px-2 py-0.5 uppercase tracking-wide font-mono">
                        {prod.brand}
                      </span>
                      <h4
                        onClick={() => onSelectProduct(prod)}
                        className="font-serif font-bold text-[#3D4035] line-clamp-1 truncate mt-1 hover:underline cursor-pointer group-hover:text-[#4A5D4E] block text-xs"
                      >
                        {prod.title}
                      </h4>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-mono font-bold text-[#4A5D4E] text-xs">
                          {prod.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                        </span>
                        <span className="text-[10px] text-[#A5A58D] font-normal">Inkl. 0% MwSt.</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onAddToCart(prod)}
                      disabled={prod.stock === 'out_of_stock'}
                      className="p-3 bg-[#D4A373] text-white border border-[#D4A373] hover:bg-[#c59262] hover:border-[#c59262] disabled:bg-[#F0EFEA] disabled:text-[#A5A58D] disabled:border-[#E5E2D9] rounded-xl active:scale-90 transition shadow-xs pointer-events-auto shrink-0 cursor-pointer"
                      title="Zum Warenkorb hinzufügen"
                    >
                      <ArrowDownToLine className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
