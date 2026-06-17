/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Product } from '../types';
import { X, Scale, ShoppingCart, Trash2, Info } from 'lucide-react';
import { CATEGORY_LABELS } from '../data';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  compareList: Product[];
  onRemoveFromCompare: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ComparisonModal({
  isOpen,
  onClose,
  compareList,
  onRemoveFromCompare,
  onAddToCart,
}: ComparisonModalProps) {
  if (!isOpen) return null;

  // Gather unique spec keys across compared products
  const allSpecKeysMap: { [subCategory: string]: Set<string> } = {};
  compareList.forEach((prod) => {
    Object.entries(prod.specs).forEach(([sub, spList]) => {
      if (!allSpecKeysMap[sub]) {
        allSpecKeysMap[sub] = new Set<string>();
      }
      Object.keys(spList).forEach((k) => {
        allSpecKeysMap[sub].add(k);
      });
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans text-xs text-[#3D4035]" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#3D4035]/65 backdrop-blur-xs" onClick={onClose} />

      {/* Box Container */}
      <div className="relative bg-white rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col justify-between shadow-2xl z-10 animate-scale-in border border-[#E5E2D9]">
        
        {/* Header toolbar */}
        <div className="p-4 md:p-6 border-b border-[#E5E2D9] bg-[#4A5D4E] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#D4A373]" />
            <h2 className="text-base md:text-lg font-serif font-bold italic tracking-tight">Produkt-Vergleichstool ({compareList.length})</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Comparison Panel */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          {compareList.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center gap-3">
              <Scale className="w-12 h-12 text-[#6B705C] animate-bounce" />
              <p className="font-serif font-bold italic text-base text-[#3D4035]">Vergleichsliste leer.</p>
              <p className="text-xs text-[#6B705C] max-w-md leading-relaxed -mt-1.5 font-medium">
                Klicken Sie bei beliebigen Produkten auf das Waage-Symbol, um bis zu 4 Produkte übersichtlich nebeneinander zu vergleichen.
              </p>
              <button
                onClick={onClose}
                className="bg-[#4A5D4E] hover:bg-[#3d4d41] text-white px-5 py-2.5 text-xs font-bold rounded-xl mt-3 cursor-pointer transition uppercase tracking-wider"
              >
                Produkte ansehen
              </button>
            </div>
          ) : (
            <div className="min-w-[720px]">
              {/* Product Header Row */}
              <div className="grid grid-cols-12 gap-4 border-b border-[#E5E2D9] pb-6 mb-6">
                {/* Info block Column */}
                <div className="col-span-3 flex flex-col justify-end p-4 bg-[#FAF9F6] rounded-2xl border border-[#E5E2D9] min-h-[120px] font-medium">
                  <div className="flex items-center gap-1.5 text-[#4A5D4E] font-bold mb-1">
                    <Info className="w-4 h-4 text-[#D4A373]" />
                    <span>PV-Vergleich</span>
                  </div>
                  <p className="text-[10px] text-[#6B705C] leading-normal font-semibold">
                    Vergleichen Sie Wirkungsgrade, Abmaße und Preise auf einen Blick.
                  </p>
                </div>

                {/* Compared items list */}
                {compareList.map((prod) => {
                  const itemColSpan = Math.floor(9 / compareList.length);
                  return (
                    <div
                      key={prod.id}
                      className="relative p-3 bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl flex flex-col justify-between align-middle font-medium"
                      style={{ gridColumn: `span ${itemColSpan} / span ${itemColSpan}` }}
                    >
                      {/* Delete item */}
                      <button
                        onClick={() => onRemoveFromCompare(prod)}
                        className="absolute top-2 right-2 p-1 bg-white hover:bg-rose-50 text-[#6B705C] hover:text-red-500 rounded-lg border border-[#E5E2D9] cursor-pointer"
                        title="Vom Vergleich ausschließen"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex flex-col gap-2 flex-grow">
                        <img
                          src={prod.images[0]}
                          alt={prod.shortTitle}
                          referrerPolicy="no-referrer"
                          className="w-full h-20 object-contain mx-auto mb-1 p-1 bg-white border border-[#E5E2D9] rounded-xl"
                        />
                        <span className="text-[9px] bg-white border border-[#E5E2D9] text-[#6B705C] px-1.5 py-0.5 rounded-lg font-bold uppercase w-fit font-mono">
                          {CATEGORY_LABELS[prod.category]}
                        </span>
                        <h4 className="font-serif font-bold text-[#3D4035] tracking-tight leading-snug line-clamp-1">
                          {prod.title}
                        </h4>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E5E2D9] flex items-center justify-between gap-2">
                        <div className="flex flex-col">
                          <span className="font-mono font-bold text-[#4A5D4E] text-xs sm:text-sm">
                            {prod.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                          </span>
                          <span className="text-[8px] text-[#A5A58D]">0% MwSt.</span>
                        </div>
                        <button
                          onClick={() => onAddToCart(prod)}
                          disabled={prod.stock === 'out_of_stock'}
                          className="bg-[#D4A373] hover:bg-[#c59262] text-white p-2 rounded-xl transition text-[10px] font-bold flex items-center gap-1 active:scale-95 shrink-0 cursor-pointer shadow-xs border border-[#D4A373]"
                          title="In den Warenkorb"
                        >
                          <ShoppingCart className="w-3 h-3 text-white" />
                          <span>Kauf</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Side-by-Side rows */}
              <div className="space-y-6">
                
                {/* Basic data highlights */}
                <div className="border border-[#E5E2D9] rounded-2xl overflow-hidden shadow-xs bg-white">
                  <h3 className="bg-[#4A5D4E] text-white px-4 py-3 font-extrabold uppercase tracking-widest text-[9px]">
                    Basis-Kennwerte
                  </h3>
                  <div className="divide-y divide-[#E5E2D9]">
                    <div className="grid grid-cols-12 gap-4 px-4 py-2.5 bg-[#FAF9F6]/40 text-xs font-semibold">
                      <span className="col-span-3 font-bold text-[#6B705C]">Hersteller / Marke</span>
                      {compareList.map((prod) => {
                        const itemColSpan = Math.floor(9 / compareList.length);
                        return (
                          <span
                            key={prod.id}
                            className="font-bold text-[#3D4035] uppercase tracking-wider block font-mono"
                            style={{ gridColumn: `span ${itemColSpan} / span ${itemColSpan}` }}
                          >
                            {prod.brand}
                          </span>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-12 gap-4 px-4 py-2.5 bg-[#FAF9F6]/40 text-xs font-semibold">
                      <span className="col-span-3 font-bold text-[#6B705C]">Kundenbewertung</span>
                      {compareList.map((prod) => {
                        const itemColSpan = Math.floor(9 / compareList.length);
                        return (
                          <span
                            key={prod.id}
                            className="font-bold text-[#D4A373] flex items-center gap-1"
                            style={{ gridColumn: `span ${itemColSpan} / span ${itemColSpan}` }}
                          >
                            ★ {prod.rating.toFixed(1)} <span className="text-[#A5A58D] font-normal text-[9px]">({prod.reviewCount})</span>
                          </span>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-12 gap-4 px-4 py-2.5 bg-[#FAF9F6]/40 text-xs font-semibold">
                      <span className="col-span-3 font-bold text-[#6B705C]">Lieferzeit</span>
                      {compareList.map((prod) => {
                        const itemColSpan = Math.floor(9 / compareList.length);
                        return (
                          <span
                            key={prod.id}
                            className="text-[#4A5D4E] font-bold"
                            style={{ gridColumn: `span ${itemColSpan} / span ${itemColSpan}` }}
                          >
                            {prod.deliveryTime}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Detailed specs columns rows dynamically mapped */}
                {Object.entries(allSpecKeysMap).map(([sub, keysSet]) => (
                  <div key={sub} className="border border-[#E5E2D9] rounded-2xl overflow-hidden shadow-xs bg-white">
                    <h3 className="bg-[#4A5D4E] text-white px-4 py-3 font-extrabold uppercase tracking-widest text-[9px]">
                      {sub}
                    </h3>

                    <div className="divide-y divide-[#E5E2D9]">
                      {Array.from(keysSet).map((key) => (
                        <div key={key} className="grid grid-cols-12 gap-4 px-4 py-2.5 hover:bg-[#FAF9F6]/40 transition text-xs font-semibold">
                          <span className="col-span-3 font-bold text-[#6B705C] truncate" title={key}>{key}</span>
                          {compareList.map((prod) => {
                            const itemColSpan = Math.floor(9 / compareList.length);
                            const val = prod.specs[sub]?.[key] || '—';
                            return (
                              <span
                                key={prod.id}
                                className="font-mono text-[#3D4035] font-semibold"
                                style={{ gridColumn: `span ${itemColSpan} / span ${itemColSpan}` }}
                              >
                                {val}
                              </span>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          )}
        </div>

        {/* Clear buttons footer */}
        {compareList.length > 0 && (
          <div className="p-4 md:p-6 border-t border-[#E5E2D9] bg-[#FAF9F6] flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="bg-[#4A5D4E] hover:bg-[#3d4d41] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer uppercase tracking-wider"
            >
              Vergleich schließen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
