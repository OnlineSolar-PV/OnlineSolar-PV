/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Product } from '../types';
import { Star, ShoppingCart, Scale, ArrowRight } from 'lucide-react';
import { CATEGORY_LABELS } from '../data';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isComparing: boolean;
  key?: string | number;
}

export default function ProductCard({
  product,
  onViewDetails,
  onAddToCart,
  onToggleCompare,
  isComparing,
}: ProductCardProps) {
  // Let's calculate discount percent
  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div
      id={`product-card-${product.id}`}
      className="bg-white rounded-3xl border border-[#E5E2D9] shadow-xs hover:shadow-md hover:border-[#4A5D4E]/30 transition duration-300 flex flex-col justify-between overflow-hidden group h-full"
    >
      {/* Target Image & Badge Container */}
      <div className="relative overflow-hidden bg-[#FAF9F6] pt-[100%]">
        {/* Badges on top of product image */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.isBestSeller && (
            <span className="bg-[#4A5D4E] text-[#FAF9F6] font-[#FAF9F6] font-extrabold text-[9px] tracking-widest uppercase px-2 py-1.5 rounded-lg shadow-xs flex items-center gap-1">
              ★ Bestseller
            </span>
          )}
          {product.isOffer && (
            <span className="bg-[#D4A373] text-white font-extrabold text-[9px] tracking-widest uppercase px-2 py-1.5 rounded-lg shadow-xs">
              Angebot
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-[#7D8E7E] text-white font-extrabold text-[9px] tracking-widest px-2 py-1.5 rounded-lg shadow-xs">
              -{discountPercent}% sparen
            </span>
          )}
        </div>

        {/* Compare quick picker */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-xl border transition cursor-pointer ${
            isComparing
              ? 'bg-[#D4A373] text-white border-[#D4A373] font-bold'
              : 'bg-white/90 hover:bg-white text-[#4A5D4E] border-[#E5E2D9] hover:text-[#3D4035]'
          } shadow-xs`}
          title={isComparing ? 'Aus Vergleichsliste entfernen' : 'In die Vergleichsliste legen'}
        >
          <Scale className="w-3.5 h-3.5" />
        </button>

        {/* Main image with hover zoom effect */}
        <div
          onClick={() => onViewDetails(product)}
          className="absolute inset-0 cursor-pointer overflow-hidden flex items-center justify-center p-4 bg-[#FAF9F6]"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            referrerPolicy="no-referrer"
            className="object-contain w-full h-full max-h-[220px] rounded-2xl transform group-hover:scale-[1.03] transition duration-500 p-2"
          />
        </div>

        {/* Stock Banner Overlay */}
        <div className="absolute bottom-3 left-3 z-10">
          {product.stock === 'in_stock' ? (
            <span className="bg-white/95 text-[#4A5D4E] font-bold text-[9px] tracking-wider px-2.5 py-1.5 rounded-lg border border-[#E5E2D9] shadow-xs flex items-center gap-1 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 bg-[#7D8E7E] rounded-full animate-pulse" />
              <span>SOFORT LIEFERBAR</span>
            </span>
          ) : product.stock === 'low_stock' ? (
            <span className="bg-white/95 text-[#D4A373] font-bold text-[9px] tracking-wider px-2.5 py-1.5 rounded-lg border border-[#E5E2D9] shadow-xs flex items-center gap-1 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 bg-[#D4A373] rounded-full" />
              <span>WENIGE STÜCK AUF LAGER</span>
            </span>
          ) : (
            <span className="bg-white/95 text-[#6B705C] font-bold text-[9px] tracking-wider px-2.5 py-1.5 rounded-lg border border-[#E5E2D9] shadow-xs flex items-center gap-1 backdrop-blur-xs">
              <span>AUSVERKAUFT</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex flex-col flex-1">
        {/* Brand & Category */}
        <div className="flex justify-between items-center text-[10px] mb-2">
          <span className="text-[#6B705C] font-extrabold tracking-widest uppercase font-mono">
            {product.brand}
          </span>
          <span className="text-[#4A5D4E] bg-[#FAF9F6] border border-[#E5E2D9] font-bold rounded-lg px-2 py-0.5">
            {CATEGORY_LABELS[product.category]}
          </span>
        </div>

        {/* Main Title */}
        <h3
          onClick={() => onViewDetails(product)}
          className="text-sm font-serif font-bold text-[#3D4035] tracking-tight leading-snug mb-2 hover:text-[#4A5D4E] cursor-pointer line-clamp-2 min-h-[40px] duration-150"
        >
          {product.title}
        </h3>

        {/* Rating and review stats */}
        <div className="flex items-center gap-1 text-xs text-[#6B705C] mb-3 font-semibold">
          <div className="flex items-center text-[#D4A373]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-[#D4A373] text-[#D4A373]'
                    : 'text-[#E5E2D9]'
                }`}
              />
            ))}
          </div>
          <span className="font-bold text-[#3D4035] pl-1 font-mono">{product.rating.toFixed(1)}</span>
          <span className="text-[10px] text-[#A5A58D] font-normal">({product.reviewCount} Rezensionen)</span>
        </div>

        {/* Bullet Description */}
        <div className="border-t border-[#F0EFEA] py-3 mb-4">
          <ul className="space-y-1.5">
            {product.bulletPoints.slice(0, 2).map((pt, index) => (
              <li key={index} className="text-xs text-[#6B705C] flex items-start gap-1.5 font-medium line-clamp-2">
                <span className="text-[#D4A373] font-black text-sm shrink-0 leading-none">•</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Push to bottom layout */}
        <div className="mt-auto pt-3 border-t border-[#F0EFEA] flex flex-col gap-3">
          {/* Price Tag with 0% Tax Info */}
          <div className="flex items-baseline justify-between py-1">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-lg md:text-xl font-bold text-[#4A5D4E] font-mono tracking-tight">
                  {product.price.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-[#6B705C] line-through font-mono">
                    {product.oldPrice.toLocaleString('de-DE', {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                  </span>
                )}
              </div>
              <span className="text-[9px] text-[#A5A58D] font-medium -mt-0.5">
                Inkl. 0% MwSt. für PV-Technik
              </span>
            </div>
            <span className="text-[10px] text-[#6B705C] font-mono font-medium">{product.deliveryTime}</span>
          </div>

          {/* User Button actions */}
          <div className="grid grid-cols-5 gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="col-span-3 border border-[#E5E2D9] text-[#4A5D4E] hover:text-[#3D4035] text-xs font-bold py-2.5 px-1 rounded-xl bg-[#FAF9F6] hover:bg-[#F0EFEA] hover:border-[#E5E2D9] transition flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
              title="Produktseite aufrufen, Beschreibung & Specs anzeigen"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onAddToCart(product)}
              disabled={product.stock === 'out_of_stock'}
              className="col-span-2 bg-[#D4A373] border border-[#D4A373] hover:bg-[#c59262] hover:border-[#c59262] disabled:bg-[#F0EFEA] disabled:text-[#A5A58D] disabled:border-[#E5E2D9] text-white p-2.5 rounded-xl transition flex items-center justify-center gap-1 align-middle active:scale-95 shadow-xs cursor-pointer font-extrabold uppercase tracking-wider text-[11px]"
              title="In den Warenkorb legen"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-white" />
              <span>Kauf</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
