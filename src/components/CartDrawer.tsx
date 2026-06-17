/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle, Clock, Percent, ShieldCheck, Plus, Minus } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number, selectedOptions?: { [key: string]: string }) => void;
  onRemoveItem: (productId: string, selectedOptions?: { [key: string]: string }) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [zipCity, setZipCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('klarna');
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  if (!isOpen) return null;

  // Check spedition
  const hasSpeditionItem = cartItems.some(item =>
    item.product.category === 'solarmodule' ||
    item.product.category === 'waermepumpen' ||
    item.product.category === 'speicher'
  );

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const vatSaving = subtotal * 0.19;

  let shippingCost = 0;
  if (subtotal > 0) {
    if (subtotal >= 150) {
      shippingCost = 0; 
    } else {
      shippingCost = hasSpeditionItem ? 49.00 : 4.90;
    }
  }

  const grandTotal = subtotal + shippingCost;

  const handleSubmitCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !street.trim() || !zipCity.trim()) return;

    const randomId = 'OS-' + Math.floor(100000 + Math.random() * 900000);
    setGeneratedOrderId(randomId);
    setOrderCompleted(true);
    setIsCheckingOut(false);
  };

  const handleReset = () => {
    onClearCart();
    setOrderCompleted(false);
    setIsCheckingOut(false);
    setFullName('');
    setEmail('');
    setStreet('');
    setZipCity('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" aria-modal="true" role="dialog">
      {/* Dark overlay backdrop */}
      <div
        className="absolute inset-0 bg-[#3D4035]/60 backdrop-blur-xs transition"
        onClick={onClose}
      />

      {/* Main Drawer Container */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-slide-in overflow-hidden border-l border-[#E5E2D9]">
        
        {/* Header line */}
        <div className="p-4 md:p-6 border-b border-[#E5E2D9] flex items-center justify-between bg-[#4A5D4E] text-white shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4A373]" />
            <h2 className="text-base md:text-lg font-serif font-bold italic tracking-tight">Ihr Solareinkauf</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-[#FAF9F6] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic content panel scrollable */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white">
          {orderCompleted ? (
            /* ORDER SUCCESS */
            <div className="py-8 text-center flex flex-col items-center gap-4 text-xs">
              <div className="bg-[#4A5D4E]/10 text-[#4A5D4E] p-4 rounded-full border border-[#7D8E7E]/30 mb-2 animate-bounce">
                <CheckCircle className="w-12 h-12 text-[#4A5D4E]" />
              </div>
              <h3 className="text-lg font-serif font-bold italic text-[#3D4035]">Vielen Dank für Ihren Auftrag!</h3>
              <p className="text-[#6B705C] max-w-sm leading-relaxed -mt-2 font-medium">
                Ihre Bestellung wurde erfolgreich übermittelt und wird bereits in unserem Lager Kassel kommissioniert. Eine Bestätigungs-E-Mail wurde an <span className="font-bold text-[#4A5D4E]">{email}</span> versandt.
              </p>

              <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl p-4.5 w-full text-left space-y-3 font-medium">
                <div className="flex justify-between border-b border-[#E5E2D9] pb-2">
                  <span className="text-[#6B705C]">Bestellnummer:</span>
                  <span className="font-mono font-bold text-[#3D4035]">{generatedOrderId}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E2D9] pb-2">
                  <span className="text-[#6B705C]">Lieferadresse:</span>
                  <span className="text-[#3D4035] font-bold text-right">{fullName}<br />{street}<br />{zipCity}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E2D9] pb-2">
                  <span className="text-[#6B705C]">Bezahlmethode:</span>
                  <span className="text-[#3D4035] font-bold uppercase">{paymentMethod}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#4A5D4E] pt-1">
                  <span>Gesamtsumme (0% MwSt):</span>
                  <span className="font-mono">{grandTotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[#3D4035] bg-[#FAF9F6] p-3.5 rounded-xl border border-[#E5E2D9]">
                <Clock className="w-4 h-4 text-[#D4A373] shrink-0" />
                <span className="font-bold">Zustellung per Spedition: 2-5 Werktage.</span>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-[#4A5D4E] hover:bg-[#3d4d41] text-white font-extrabold py-3.5 rounded-xl transition cursor-pointer mt-4 uppercase tracking-wider text-[11px]"
              >
                Einkauf beenden & Warenkorb leeren
              </button>
            </div>
          ) : isCheckingOut ? (
            /* CHECKOUT FORM */
            <form onSubmit={handleSubmitCheckout} className="space-y-4 text-xs font-medium">
              <div className="flex items-center gap-2 border-b border-[#E5E2D9] pb-3">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="text-[#6B705C] hover:text-[#3D4035] font-bold bg-[#FAF9F6] border border-[#E5E2D9] rounded-lg px-2.5 py-1 cursor-pointer"
                >
                  ← Zurück
                </button>
                <h3 className="text-xs font-extrabold text-[#4A5D4E] uppercase tracking-widest pl-1">Lieferung & Bezahlung</h3>
              </div>

              <div className="space-y-3 font-medium">
                <div>
                  <label className="block text-[#3D4035] font-bold mb-1">Vollständiger Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Z.B. Max Mustermann"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#FAF9F6] text-[#3D4035] placeholder-[#A5A58D] border border-[#E5E2D9] rounded-xl py-2 px-3 focus:outline-none focus:border-[#4A5D4E]"
                  />
                </div>

                <div>
                  <label className="block text-[#3D4035] font-bold mb-1">E-Mail-Adresse:</label>
                  <input
                    type="email"
                    required
                    placeholder="Z.B. max@mustermann.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FAF9F6] text-[#3D4035] placeholder-[#A5A58D] border border-[#E5E2D9] rounded-xl py-2 px-3 focus:outline-none focus:border-[#4A5D4E]"
                  />
                </div>

                <div>
                  <label className="block text-[#3D4035] font-bold mb-1">Straße & Hausnummer:</label>
                  <input
                    type="text"
                    required
                    placeholder="Z.B. Sonnenallee 12"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="w-full bg-[#FAF9F6] text-[#3D4035] placeholder-[#A5A58D] border border-[#E5E2D9] rounded-xl py-2 px-3 focus:outline-none focus:border-[#4A5D4E]"
                  />
                </div>

                <div>
                  <label className="block text-[#3D4035] font-bold mb-1">PLZ & Ort:</label>
                  <input
                    type="text"
                    required
                    placeholder="Z.B. 10115 Berlin"
                    value={zipCity}
                    onChange={(e) => setZipCity(e.target.value)}
                    className="w-full bg-[#FAF9F6] text-[#3D4035] placeholder-[#A5A58D] border border-[#E5E2D9] rounded-xl py-2 px-3 focus:outline-none focus:border-[#4A5D4E]"
                  />
                </div>

                <div>
                  <label className="block text-[#3D4035] font-bold mb-1.5">Zahlungsdienstleister:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('klarna')}
                      className={`py-2 px-3 border rounded-xl text-center font-bold transition cursor-pointer ${
                        paymentMethod === 'klarna'
                          ? 'bg-[#4A5D4E] border-[#4A5D4E] text-white shadow-xs'
                          : 'bg-white border-[#E5E2D9] text-[#6B705C] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      Klarna
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`py-2 px-3 border rounded-xl text-center font-bold transition cursor-pointer ${
                        paymentMethod === 'paypal'
                          ? 'bg-[#4A5D4E] border-[#4A5D4E] text-white shadow-xs'
                          : 'bg-white border-[#E5E2D9] text-[#6B705C] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      PayPal
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('vorkasse')}
                      className={`py-2 px-3 border rounded-xl text-center font-bold transition cursor-pointer ${
                        paymentMethod === 'vorkasse'
                          ? 'bg-[#4A5D4E] border-[#4A5D4E] text-white shadow-xs'
                          : 'bg-white border-[#E5E2D9] text-[#6B705C] hover:bg-[#FAF9F6]'
                      }`}
                    >
                      Vorkasse (-3%)
                    </button>
                  </div>
                  {paymentMethod === 'vorkasse' && (
                    <p className="text-[10px] text-[#7D8E7E] mt-1.5 font-bold">
                      ✓ Sparen Sie zusätzlich: Vorkasse-Skonto von 3% wird nach dem Absenden verrechnet!
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t border-[#E5E2D9] pt-4 mt-6">
                <button
                  type="submit"
                  className="w-full bg-[#D4A373] hover:bg-[#c59262] text-white font-extrabold py-3.5 rounded-xl transition shadow-xs cursor-pointer uppercase tracking-wider text-xs"
                >
                  Kostenpflichtig bestellen ({grandTotal.toFixed(2)} €)
                </button>
              </div>
            </form>
          ) : cartItems.length === 0 ? (
            /* EMPTY WARENKORB */
            <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
              <div className="bg-[#FAF9F6] border border-[#E5E2D9] p-4 rounded-full text-[#6B705C] mb-2 shadow-xs">
                <ShoppingBag className="w-10 h-10 text-[#4A5D4E]" />
              </div>
              <p className="font-serif font-bold italic text-[#3D4035] text-sm">Ihr Warenkorb ist noch leer.</p>
              <p className="text-xs text-[#6B705C] max-w-xs -mt-1 leading-relaxed font-semibold">
                Fügen Sie Solar-Komponenten oder vorgefertigte Balkonkraftwerke direkt aus den Kategorien hinzu.
              </p>
              <button
                onClick={onClose}
                className="bg-[#4A5D4E] hover:bg-[#3d4d41] text-white px-5 py-2.5 text-xs font-bold rounded-xl mt-3 cursor-pointer transition uppercase tracking-wider"
              >
                Produkte durchstöbern
              </button>
            </div>
          ) : (
            /* CART CONTENT LIST ITEMS */
            <div className="space-y-4">
              <h3 className="text-[10px] font-extrabold text-[#4A5D4E] uppercase tracking-widest mb-2 pb-1.5 border-b border-[#F0EFEA]">Ausgewählte Komponenten</h3>
              <div className="divide-y divide-[#E5E2D9] space-y-4">
                {cartItems.map((item, index) => {
                  return (
                    <div
                      key={`${item.product.id}-${index}`}
                      className="flex gap-4 pt-4 first:pt-0 align-middle text-xs font-medium"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.shortTitle}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-contain bg-[#FAF9F6] rounded-xl border border-[#E5E2D9] p-1.5 shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h4 className="font-serif font-bold text-[#3D4035] line-clamp-1 hover:text-[#4A5D4E] cursor-pointer" onClick={onClose}>
                              {item.product.title}
                            </h4>
                            <span className="text-[10px] text-[#6B705C] block font-semibold">
                              Marke: {item.product.brand}
                            </span>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.product.id, item.selectedOption)}
                            className="text-[#6B705C] hover:text-[#3D4035] p-1 rounded-lg hover:bg-[#FAF9F6] transition cursor-pointer"
                            title="Löschen"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Selected custom option list if available */}
                        {item.selectedOption && Object.keys(item.selectedOption).length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {Object.entries(item.selectedOption).map(([k, v]) => (
                              <span key={k} className="bg-[#FAF9F6] border border-[#E5E2D9] text-[10px] text-[#4A5D4E] px-1.5 py-0.5 rounded-lg font-bold">
                                {k}: {v}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Quantity edits */}
                        <div className="flex items-center justify-between gap-4 mt-2">
                          <div className="flex items-center gap-1 border border-[#E5E2D9] rounded-lg px-1.5 py-0.5 bg-[#FAF9F6]">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1, item.selectedOption)}
                              className="text-[#6B705C] hover:text-[#3D4035] p-0.5 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center font-bold font-mono text-[#4A5D4E] text-xs">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1, item.selectedOption)}
                              className="text-[#6B705C] hover:text-[#3D4035] p-0.5 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-bold text-[#4A5D4E] font-mono tracking-tight text-xs">
                            {(item.product.price * item.quantity).toFixed(2)} €
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 0% Tax incentive box inside drawer */}
              <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl p-4 mt-6">
                <div className="flex items-start gap-2.5 text-xs text-[#4A5D4E] font-medium">
                  <Percent className="w-4.5 h-4.5 text-[#D4A373] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase tracking-wider text-[10px]">0% Mehrwertsteuer-Ersparnis</p>
                    <p className="text-[10px] text-[#6B705C] font-semibold mt-0.5 leading-relaxed">
                      Sie sparen in Ihrem aktuellen Korb satte <span className="font-bold font-mono text-[#D4A373]">{vatSaving.toFixed(2)} € (19% Ersparnis)</span>, da Solarkomponenten nach Gesetz gesetzlich befreit sind!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions and total calculations */}
        {!orderCompleted && cartItems.length > 0 && (
          <div className="p-4 md:p-6 border-t border-[#E5E2D9] bg-[#FAF9F6] shrink-0 text-xs font-semibold">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-[#6B705C]">
                <span>Zwischensumme:</span>
                <span className="font-mono text-[#3D4035]">{subtotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
              </div>
              <div className="flex justify-between text-[#6B705C] whitespace-nowrap">
                <span className="flex items-center gap-1.5">
                  Verpackung & Versand:
                  {hasSpeditionItem && <span className="bg-[#E5E2D9] text-[#4A5D4E] text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-[#4A5D4E]/10">Spedition</span>}
                </span>
                <span className="font-mono text-[#3D4035]">
                  {shippingCost === 0 ? 'KOSTENLOS' : shippingCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                </span>
              </div>
              {shippingCost > 0 && (
                <div className="text-[10px] text-right text-[#A5A58D] -mt-1 font-medium">
                  (Muster versandkostenfrei ab 150 €)
                </div>
              )}
              <div className="flex justify-between text-[#4A5D4E] border-t border-[#E5E2D9] pt-2.5">
                <span className="font-serif font-bold text-sm">Gesamtsumme (0% MwSt):</span>
                <span className="font-mono font-bold text-sm text-[#4A5D4E]">
                  {grandTotal.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                </span>
              </div>
            </div>

            {/* Checkouts toggling triggers */}
            {!isCheckingOut ? (
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full bg-[#D4A373] hover:bg-[#c59262] text-white font-extrabold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-xs active:scale-95 cursor-pointer uppercase tracking-wider text-xs"
              >
                <span>Sicher zur Kasse gehen</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            ) : (
              <button
                onClick={() => setIsCheckingOut(false)}
                className="w-full bg-white text-[#6B705C] border border-[#E5E2D9] hover:bg-[#FAF9F6] font-bold py-3.5 rounded-xl transition cursor-pointer"
              >
                Zurück zum Warenkorb
              </button>
            )}

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#A5A58D] mt-3 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#7D8E7E]" />
              <span>Garantierter Käuferschutz & Datenverschlüsselung</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
