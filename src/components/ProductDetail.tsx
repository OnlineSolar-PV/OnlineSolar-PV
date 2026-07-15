/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Product, ProductReview } from '../types';
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Scale,
  CheckCircle,
  FileText,
  Download,
  ShieldCheck,
  MessageSquare,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import { MOCK_REVIEWS } from '../data';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number, options: { [key: string]: string }) => void;
  onToggleCompare: (product: Product) => void;
  isComparing: boolean;
}

export default function ProductDetail({
  product,
  onBack,
  onAddToCart,
  onToggleCompare,
  isComparing,
}: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  React.useEffect(() => {
    setSelectedImage(product.images[0]);
  }, [product.id, product.images]);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>(() => {
    const initial: { [key: string]: string } = {};
    product.options?.forEach((opt) => {
      initial[opt.name] = opt.values[0];
    });
    return initial;
  });

  // User review simulation state
  const [reviews, setReviews] = useState<ProductReview[]>(() => {
    return MOCK_REVIEWS[product.id] || [];
  });
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);

  // References for scrolling
  const specsRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: value }));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedOptions);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const newRev: ProductReview = {
      id: `rev-custom-${Date.now()}`,
      userName: newReviewName,
      rating: newReviewRating,
      date: new Date().toLocaleDateString('de-DE'),
      comment: newReviewComment,
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setNewReviewName('');
    setNewReviewComment('');
    setShowReviewSuccess(true);
    setTimeout(() => {
      setShowReviewSuccess(false);
    }, 4000);
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
      {/* Back Button Navigation & Breadcrumbs */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[#4A5D4E] hover:text-[#3D4035] text-sm font-bold py-2 px-4 rounded-xl border border-[#E5E2D9] bg-white hover:bg-[#FAF9F6] transition shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Übersicht</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-[#6B705C] font-semibold">
          <span className="cursor-pointer hover:text-[#4A5D4E]" onClick={onBack}>Startseite</span>
          <ChevronRight className="w-3 h-3 text-[#E5E2D9]" />
          <span className="cursor-pointer hover:text-[#4A5D4E]" onClick={onBack}>{product.category.toUpperCase()}</span>
          <ChevronRight className="w-3 h-3 text-[#E5E2D9]" />
          <span className="text-[#3D4035] font-bold truncate max-w-[185px] sm:max-w-full">{product.shortTitle}</span>
        </div>
      </div>

      {/* Primary Section upper columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-[2rem] border border-[#E5E2D9] p-6 md:p-8 shadow-xs">
        
        {/* Left column (5/12): Gallery */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Main Display Image */}
          <div className="relative aspect-square rounded-[1.5rem] bg-[#FAF9F6] border border-[#E5E2D9] overflow-hidden flex items-center justify-center p-6 group">
            <img
              src={selectedImage}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="object-contain w-full h-full max-h-[360px] rounded-xl transition duration-300"
            />
            {product.isBestSeller && (
              <span className="absolute top-4 left-4 bg-[#4A5D4E] text-[#FAF9F6] font-extrabold text-[9px] tracking-widest px-3 py-1.5 rounded-lg shadow-xs">
                ★ BESTSELLER
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`relative aspect-square w-16 md:w-20 rounded-xl bg-[#FAF9F6] border transition overflow-hidden p-1 shrink-0 cursor-pointer ${
                    selectedImage === img
                      ? 'border-[#D4A373] ring-2 ring-[#D4A373]/20'
                      : 'border-[#E5E2D9] hover:border-[#6B705C]'
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`${product.shortTitle} Ansicht ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="object-contain w-full h-full rounded-lg"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Quick Support trust details */}
          <div className="mt-4 p-4.5 bg-[#FAF9F6] rounded-2xl border border-[#E5E2D9] text-xs text-[#6B705C] space-y-2.5">
            <div className="flex items-center gap-2 text-[#4A5D4E] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#7D8E7E]" />
              <span>Sicherheit & Originalware garantiert</span>
            </div>
            <p className="leading-relaxed font-medium">
              Dieses Produkt wird originalverpackt aus unserem zentralen deutschen Solarlager geliefert. Alle Komponenten sind für den deutschen Markt und das hiesige Netz zertifiziert.
            </p>
          </div>
        </div>

        {/* Right column (7/12) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Top Brand Tag & Star ratings */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#4A5D4E] bg-[#FAF9F6] border border-[#E5E2D9] px-2.5 py-1 rounded-lg">
                {product.brand}
              </span>

              <div className="flex items-center gap-1.5 text-sm cursor-pointer hover:underline" onClick={() => scrollToSection(reviewsRef)}>
                <div className="flex items-center text-[#D4A373]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-[#D4A373] text-[#D4A373]' : 'text-[#E5E2D9]'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-[#3D4035] pl-1 font-mono">{product.rating.toFixed(1)}</span>
                <span className="text-[#A5A58D] text-xs">({reviews.length} Bewertungen)</span>
              </div>
            </div>

            {/* Product Big Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-black text-[#3D4035] italic tracking-tight leading-tight mb-4 dropdown-shadow-xs">
              {product.title}
            </h1>

            {/* Price section with MwSt Highlight */}
            <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl p-4 md:p-5 mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[10px] text-[#6B705C] font-extrabold uppercase tracking-widest block mb-1">
                  Abhol- / Speditionspreis
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#4A5D4E] tracking-tight font-mono">
                    {product.price.toLocaleString('de-DE', {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-[#6B705C] line-through font-mono">
                      {product.oldPrice.toLocaleString('de-DE', {
                        style: 'currency',
                        currency: 'EUR',
                      })}
                    </span>
                  )}
                </div>
                {/* VAT incentive */}
                <span className="text-[10px] text-[#4A5D4E] font-bold flex items-center gap-1 mt-1.5 bg-[#4A5D4E]/10 px-2.5 py-1.5 rounded-xl border border-[#4A5D4E]/20 w-fit">
                  ✓ Befreit von MwSt. (0% UStG §12 Abs. 3) für Endverbraucher
                </span>
              </div>

              {/* Delivery info */}
              <div className="sm:text-right text-xs">
                <span className="text-[#6B705C] block font-semibold mb-0.5">Lieferstatus</span>
                <div className="mt-1 font-bold">
                  {product.stock === 'in_stock' ? (
                    <span className="text-[#4A5D4E] flex items-center sm:justify-end gap-1.5">
                      <span className="w-2 h-2 bg-[#7D8E7E] rounded-full animate-pulse shrink-0" />
                      <span>Sofort lieferbar (Lieferzeit: {product.deliveryTime})</span>
                    </span>
                  ) : product.stock === 'low_stock' ? (
                    <span className="text-[#D4A373] flex items-center sm:justify-end gap-1.5">
                      <span className="w-2 h-2 bg-[#D4A373] rounded-full shrink-0" />
                      <span>Geringer Bestand ({product.deliveryTime})</span>
                    </span>
                  ) : (
                    <span className="text-red-650 flex items-center sm:justify-end gap-1.5">
                      <span className="w-2 h-2 bg-rose-500 rounded-full shrink-0" />
                      <span>Ausverkauft</span>
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-[#A5A58D] block mt-1 hover:underline cursor-pointer">
                  Kostenfreie Selbstabholung im Lager Kassel möglich
                </span>
              </div>
            </div>

            {/* Micro Bullet Highlights */}
            <div className="border border-[#E5E2D9] rounded-2xl p-5 mb-5 bg-[#FAF9F6]">
              <h3 className="text-[11px] font-bold text-[#4A5D4E] border-b border-[#E5E2D9]/80 pb-2 mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                <div className="w-2 h-2 bg-[#D4A373] rounded-full" />
                <span>Kurzbeschreibung (Highlights)</span>
              </h3>
              <ul className="space-y-2">
                {product.bulletPoints.map((point, index) => (
                  <li key={index} className="text-xs text-[#3D4035] flex items-start gap-2 font-medium">
                    <span className="text-[#D4A373] font-black text-base leading-none select-none">•</span>
                    <span className="leading-normal">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Options selectors */}
            {product.options && product.options.length > 0 && (
              <div className="space-y-4 mb-6">
                {product.options.map((opt) => (
                  <div key={opt.name} className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-[#3D4035]">{opt.name}:</span>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.map((val) => {
                        const isSelected = selectedOptions[opt.name] === val;
                        return (
                          <button
                            key={val}
                            onClick={() => handleOptionChange(opt.name, val)}
                            className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition cursor-pointer ${
                              isSelected
                                ? 'bg-[#4A5D4E] text-[#FAF9F6] border-[#4A5D4E] shadow-xs'
                                : 'bg-white text-[#6B705C] border-[#E5E2D9] hover:bg-[#FAF9F6] hover:border-[#6B705C]'
                            }`}
                          >
                            {val}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions grid */}
          <div className="pt-4 border-t border-[#F0EFEA] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Quantity Selector */}
            <div className="flex items-center justify-between border border-[#E5E2D9] rounded-xl px-2 py-1.5 bg-[#FAF9F6] shrink-0">
              <span className="text-xs font-bold text-[#6B705C] px-2 sm:hidden lg:inline">Menge:</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-[#6B705C] hover:bg-[#E5E2D9] rounded-lg transition"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-sm font-bold font-mono text-[#3D4035]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-[#6B705C] hover:bg-[#E5E2D9] rounded-lg transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Buy trigger */}
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 'out_of_stock'}
              className="flex-1 bg-[#D4A373] hover:bg-[#c59262] text-white px-6 py-3.5 rounded-xl font-extrabold disabled:bg-[#F0EFEA] disabled:text-[#A5A58D] transition duration-300 flex items-center justify-center gap-2 shadow-xs active:scale-95 cursor-pointer text-xs uppercase tracking-wider"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>In den Warenkorb legen</span>
            </button>

            {/* Compare trigger */}
            <button
              onClick={() => onToggleCompare(product)}
              className={`p-3.5 rounded-xl border flex items-center justify-center transition cursor-pointer ${
                isComparing
                  ? 'bg-[#D4A373] border-[#D4A373] text-white font-bold'
                  : 'bg-white text-[#6B705C] border-[#E5E2D9] hover:bg-[#FAF9F6]'
              }`}
              title={isComparing ? 'Aus dem Vergleich löschen' : 'In den Produktvergleich setzen'}
            >
              <Scale className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Scroll Menu for Sections */}
      <div className="mt-8 bg-[#4A5D4E] text-white rounded-2xl sticky top-28 sm:top-28 z-20 flex p-1.5 border border-[#4A5D4E] shadow-xs overflow-x-auto scrollbar-none">
        <button
          onClick={() => scrollToSection(descRef)}
          className="flex-1 py-2.5 px-4 text-xs md:text-sm font-bold hover:bg-white/10 rounded-xl transition text-center shrink-0 cursor-pointer"
        >
          Beschreibung
        </button>
        <button
          onClick={() => scrollToSection(specsRef)}
          className="flex-1 py-2.5 px-4 text-xs md:text-sm font-bold hover:bg-white/10 rounded-xl transition text-center shrink-0 cursor-pointer"
        >
          Spezifikationen & Tabelle
        </button>
        <button
          onClick={() => scrollToSection(reviewsRef)}
          className="flex-1 py-2.5 px-4 text-xs md:text-sm font-bold hover:bg-white/10 rounded-xl transition text-center shrink-0 cursor-pointer"
        >
          Kundenbewertungen
        </button>
      </div>

      {/* Sections Lists below */}
      <div className="mt-8 space-y-12">
        
        {/* Description Section */}
        <div ref={descRef} className="scroll-mt-44 bg-white rounded-[2rem] border border-[#E5E2D9] p-6 md:p-8 shadow-xs">
          <div className="max-w-4xl">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A5D4E] italic mb-4 border-b border-[#F0EFEA] pb-3">
              Ausführliche Produktbeschreibung
            </h2>
            <div className="text-sm text-[#3D4035] leading-relaxed space-y-4 font-medium font-sans">
              <p className="whitespace-pre-line">{product.detailedDescription}</p>
            </div>

            {/* Checklist Box */}
            <div className="mt-8">
              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-widest mb-4">
                Lieferumfang dieses Sets:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {product.includedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 bg-[#FAF9F6] border border-[#E5E2D9] p-3.5 rounded-2xl hover:bg-[#F0EFEA] transition"
                  >
                    <CheckCircle className="w-4 h-4 text-[#7D8E7E] shrink-0" />
                    <span className="text-xs font-bold text-[#3D4035]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specs Details and Table */}
        <div ref={specsRef} className="scroll-mt-44 bg-white rounded-[2rem] border border-[#E5E2D9] p-6 md:p-8 shadow-xs">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A5D4E] italic mb-6 border-b border-[#F0EFEA] pb-3">
            Technische Spezifikationen & Datenblatt-Werte
          </h2>
          <p className="text-xs text-[#6B705C] font-semibold mb-6 -mt-3">
            Geprüfte Kennwerte nach europäischen Richtlinien und Herstellergarantien.
          </p>

          <div className="space-y-8">
            {Object.entries(product.specs).map(([subCategory, specsList]) => (
              <div key={subCategory} className="border border-[#E5E2D9] rounded-2xl overflow-hidden shadow-xs divide-[#E5E2D9]">
                {/* Header Subclassification */}
                <h3 className="bg-[#4A5D4E] text-[#FAF9F6] px-4 py-3.5 text-xs md:text-sm font-extrabold uppercase tracking-widest">
                  {subCategory}
                </h3>
                <div className="divide-y divide-[#E5E2D9]">
                  {Object.entries(specsList).map(([key, value]) => (
                    <div
                      key={key}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3 bg-white hover:bg-[#FAF9F6]/40 transition text-xs font-medium"
                    >
                      <span className="font-bold text-[#6B705C] sm:col-span-1">{key}</span>
                      <span className="text-[#3D4035] font-mono sm:col-span-2">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Downloads */}
          {product.manuals && product.manuals.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[#F0EFEA]">
              <h3 className="text-xs font-bold text-[#4A5D4E] uppercase tracking-widest mb-4">
                Dokumente & Zertifikate (Downloads):
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {product.manuals.map((man) => (
                  <div
                    key={man.name}
                    className="p-3 bg-[#FAF9F6] hover:bg-[#F0EFEA] border border-[#E5E2D9] rounded-xl flex items-center justify-between gap-4 cursor-pointer transition select-none group"
                    title={`Herunterladen: ${man.name}`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText className="w-5 h-5 text-[#D4A373] shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#3D4035] truncate">{man.name}</p>
                        <p className="text-[10px] text-[#6B705C] font-mono font-medium">{man.size} • {man.type.toUpperCase()}</p>
                      </div>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-[#E5E2D9] group-hover:border-[#6B705C] shrink-0 shadow-xs">
                      <Download className="w-3.5 h-3.5 text-[#4A5D4E]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Customer Reviews Section */}
        <div ref={reviewsRef} className="scroll-mt-44 bg-white rounded-[2rem] border border-[#E5E2D9] p-6 md:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Reviews display Left */}
            <div className="lg:col-span-7">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#4A5D4E] italic mb-6 border-b border-[#F0EFEA] pb-3 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#D4A373]" />
                <span>Kundenrezensionen ({reviews.length})</span>
              </h2>

              <div className="space-y-6">
                {reviews.length === 0 ? (
                  <p className="text-xs text-[#6B705C] italic font-medium">Noch keine Rezensionen vorhanden. Schreiben Sie die erste!</p>
                ) : (
                  reviews.map((rev) => (
                    <div key={rev.id} className="border-b border-[#F0EFEA] pb-6 last:border-none last:pb-0 text-xs">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[#4A5D4E] bg-[#FAF9F6] border border-[#E5E2D9] px-2.5 py-0.5 rounded-md">
                            {rev.userName}
                          </span>
                          {rev.verified && (
                            <span className="text-[9px] text-[#7D8E7E] bg-white px-1.5 py-0.5 rounded-md font-bold border border-[#E5E2D9]">
                              ✓ Verifizierter Kauf
                            </span>
                          )}
                        </div>
                        <span className="text-[#A5A58D] font-mono text-[10px] font-medium">{rev.date}</span>
                      </div>

                      <div className="flex items-center text-[#D4A373] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rev.rating ? 'fill-[#D4A373] text-[#D4A373]' : 'text-[#E5E2D9]'
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-[#3D4035] leading-relaxed font-sans font-medium">{rev.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Reviews form addition Right */}
            <div className="lg:col-span-5 bg-[#FAF9F6] border border-[#E5E2D9] rounded-[1.5rem] p-6">
              <h3 className="text-xs font-bold text-[#4A5D4E] mb-3 uppercase tracking-widest font-sans">
                Bewertung schreiben
              </h3>

              {showReviewSuccess && (
                <div className="bg-[#FAF9F6] text-[#4A5D4E] p-3 rounded-xl border border-[#7D8E7E]/30 flex items-start gap-2 mb-4 text-xs">
                  <CheckCircle className="w-4 h-4 text-[#7D8E7E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Rezension übermittelt!</p>
                    <p className="text-[10px] text-[#6B705C]">Vielen Dank für Ihre Bewertung. Diese wird nach redaktioneller Prüfung freigeschaltet.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#3D4035] mb-1.5">Ihr Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Z.B. Max M."
                    value={newReviewName}
                    onChange={(e) => setNewReviewName(e.target.value)}
                    className="w-full bg-white text-[#3D4035] placeholder-[#A5A58D] border border-[#E5E2D9] rounded-xl py-2 px-3 focus:outline-none focus:border-[#4A5D4E] font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#3D4035] mb-1.5">Sterne-Bewertung:</label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setNewReviewRating(val)}
                        className="text-[#D4A373] hover:scale-110 transform transition duration-150 cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            val <= newReviewRating ? 'fill-[#D4A373] text-[#D4A373]' : 'text-[#E5E2D9]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#3D4035] mb-1.5">Ihr Kommentar:</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Wie bewerten Sie Effizienz, Leistung und Verarbeitung dieses Artikels?"
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    className="w-full bg-white text-[#3D4035] placeholder-[#A5A58D] border border-[#E5E2D9] rounded-xl py-2.5 px-3 focus:outline-none focus:border-[#4A5D4E] resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4A5D4E] text-white hover:bg-[#3d4d41] font-extrabold py-3 rounded-xl transition cursor-pointer uppercase tracking-wider text-[11px]"
                >
                  Rezension abschicken
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
