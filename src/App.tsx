/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS, CATEGORY_LABELS } from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import ComparisonModal from './components/ComparisonModal';
import SolarPlanner from './components/SolarPlanner';
import LegalView, { LegalTab } from './components/LegalView';
import AdminView from './components/AdminView';
import BrandHomepage from './components/BrandHomepage';
import { Sun, SlidersHorizontal, ArrowUpDown, X, Star, Calendar, MessageSquare, Sparkles, Phone, ShieldCheck, ThumbsUp } from 'lucide-react';

// Import image assets to ensure they are bundled properly by Vite
import imgCategoryHeroBanner from './assets/images/category_hero_banner_1781679455734.jpg';
import imgBalkonSolar from './assets/images/balkon_solar_1781679645079.jpg';
import imgSolarModules from './assets/images/solar_modules_1781679661165.jpg';
import imgInverterSystem from './assets/images/inverter_system_1781679676822.jpg';
import imgBatteryStorage from './assets/images/battery_storage_1781679692289.jpg';
import imgHomepageHeroBanner from './assets/images/homepage_hero_banner_1781679438278.jpg';
import imgSolarAccessories from './assets/images/solar_accessories_1781679706700.jpg';

const categoryBanners: { [key: string]: { img: string; title: string; desc: string } } = {
  all: {
    img: imgCategoryHeroBanner,
    title: 'Die Energiewende smarter gestalten mit OnlineSolar',
    desc: 'Kombinieren Sie hocheffiziente PV-Systeme, erstklassige Mikrowechselrichter, langlebige Batteriespeicher und Zubehör von führenden Herstellern wie EcoFlow, Anker Solix und Zendure.'
  },
  balkonkraftwerke: {
    img: imgBalkonSolar,
    title: 'Plug & Play Balkonkraftwerke für Ihr Zuhause',
    desc: 'Sparen Sie bares Geld ab Tag eins. Unsere steckerfertigen Komplettsysteme von Anker Solix, EcoFlow und Zendure sind hocheffizient, in 5 Minuten montiert und absolut zukunftssicher.'
  },
  solarmodule: {
    img: imgSolarModules,
    title: 'Premium-Solarmodule für maximalen Solarertrag',
    desc: 'Ernten Sie Sonnenenergie mit höchster Zuverlässigkeit. Unsere doppelglasigen, bifazialen N-Type Solarmodule von Trina Solar bieten erstklassige Leistung auch bei schwachem Licht.'
  },
  wechselrichter: {
    img: imgInverterSystem,
    title: 'Hocheffiziente Wechselrichter & Smart Inverter',
    desc: 'Die intelligenten Schaltzentralen Ihres Heimkraftwerks. Entdecken Sie erstklassige Mikrowechselrichter von EcoFlow und Zendure oder dreiphasige Hybrid-Wechselrichter von FoxESS.'
  },
  speicher: {
    img: imgBatteryStorage,
    title: 'Smarte Heimspeicher & Mobile Powerstations',
    desc: 'Maximieren Sie Ihre Eigenverbrauchsquote. Entdecken Sie sichere, langlebige LiFePO4-Batteriespeichersysteme von Zendure, EcoFlow und Anker Solix mit intelligenter App-Steuerung.'
  },
  waermepumpen: {
    img: imgHomepageHeroBanner,
    title: 'Zukunftsfähiges Heizen mit natürlicher Energie',
    desc: 'Optimieren Sie Ihre Haustechnik. Nutzen Sie den eigenen Solarstrom hocheffizient, um mit einer Luft-Wasser-Wärmepumpe umweltfreundliche Wärme für das gesamte Haus zu erzeugen.'
  },
  zubehoer: {
    img: imgSolarAccessories,
    title: 'Smart-Home-Energiemessung & Montagezubehör',
    desc: 'Perfekte Abstimmung aller Komponenten. Mit hochpräzisen 3-Phasen Smart Metern, intelligenten Steckdosen mit Null-Einspeiseregelung oder sturmsicheren Alu-Balkonhalterungen.'
  }
};

export default function App() {
  // Local admin & custom products state
  const [products, setProducts] = useState<Product[]>(() => {
    const savedV2 = localStorage.getItem('onlinesolar_catalog_products_v2');
    if (savedV2) {
      try {
        return JSON.parse(savedV2);
      } catch (e) {
        console.error('Failed to parse catalog products v2', e);
      }
    }
    
    // Migration: If they have V1 custom products saved, migrate them
    const savedV1 = localStorage.getItem('onlinesolar_custom_products');
    if (savedV1) {
      try {
        const customList = JSON.parse(savedV1);
        const merged = [...PRODUCTS, ...customList];
        localStorage.setItem('onlinesolar_catalog_products_v2', JSON.stringify(merged));
        return merged;
      } catch (e) {
        console.error('Failed to parse catalog products v1', e);
      }
    }
    
    return PRODUCTS;
  });

  const [isAdminActive, setIsAdminActive] = useState<boolean>(false);

  const handleAddProduct = (newProd: Product) => {
    setProducts((prev) => {
      const exists = prev.some(p => p.id === newProd.id);
      if (exists) return prev;
      
      const updated = [...prev, newProd];
      localStorage.setItem('onlinesolar_catalog_products_v2', JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdateProduct = (updatedProd: Product) => {
    setProducts((prev) => {
      const updated = prev.map(p => p.id === updatedProd.id ? updatedProd : p);
      localStorage.setItem('onlinesolar_catalog_products_v2', JSON.stringify(updated));
      return updated;
    });
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts((prev) => {
      const updated = prev.filter(p => p.id !== productId);
      localStorage.setItem('onlinesolar_catalog_products_v2', JSON.stringify(updated));
      return updated;
    });
  };

  const handleResetProducts = () => {
    localStorage.removeItem('onlinesolar_catalog_products_v2');
    localStorage.removeItem('onlinesolar_custom_products');
    setProducts(PRODUCTS);
  };

  // Navigation states
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeLegalTab, setActiveLegalTab] = useState<LegalTab | null>(null);
  const [viewMode, setViewMode] = useState<'brands' | 'catalog'>('brands');

  // Filter states
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(8500);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('featured');

  // Interactive core state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('onlinesolar_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);

  // Simulated notifications
  const [notification, setNotification] = useState<string | null>(null);

  // References
  const plannerSectionRef = useRef<HTMLDivElement>(null);
  const catalogSectionRef = useRef<HTMLDivElement>(null);

  // Dynamic banner lookup based on active category selection 
  const currentBanner = categoryBanners[activeCategory] || categoryBanners.all;

  // Persist cart items in localStorage
  useEffect(() => {
    localStorage.setItem('onlinesolar_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Synchronize browser URL hash back to React state (for back/forward buttons and deep-linking)
  useEffect(() => {
    const syncHashToState = () => {
      const hash = window.location.hash;
      const cleanHash = hash.replace(/^#/, '');

      if (!cleanHash || cleanHash === '/' || cleanHash === '') {
        setActiveLegalTab(null);
        setSelectedProduct(null);
        setViewMode('brands');
        setActiveCategory('all');
        setIsAdminActive(false);
        return;
      }

      if (cleanHash === '/admin') {
        setIsAdminActive(true);
        setActiveLegalTab(null);
        setSelectedProduct(null);
        return;
      } else {
        setIsAdminActive(false);
      }

      if (cleanHash === '/impressum') {
        setActiveLegalTab('imprint');
        setSelectedProduct(null);
        setViewMode('brands');
        return;
      }
      if (cleanHash === '/agb') {
        setActiveLegalTab('terms');
        setSelectedProduct(null);
        setViewMode('brands');
        return;
      }
      if (cleanHash === '/datenschutz') {
        setActiveLegalTab('privacy');
        setSelectedProduct(null);
        setViewMode('brands');
        return;
      }
      if (cleanHash === '/widerruf') {
        setActiveLegalTab('revocation');
        setSelectedProduct(null);
        setViewMode('brands');
        return;
      }

      if (cleanHash.startsWith('/produkt/')) {
        const prodId = cleanHash.split('/produkt/')[1];
        const foundProduct = products.find(p => p.id === prodId);
        if (foundProduct) {
          setActiveLegalTab(null);
          setSelectedProduct(foundProduct);
          setViewMode('catalog');
        }
        return;
      }

      if (cleanHash.startsWith('/kategorie/')) {
        const cat = cleanHash.split('/kategorie/')[1];
        setActiveLegalTab(null);
        setSelectedProduct(null);
        setViewMode('catalog');
        setActiveCategory(cat);
        return;
      }

      if (cleanHash === '/planer') {
        setActiveLegalTab(null);
        setSelectedProduct(null);
        setViewMode('brands');
        setTimeout(() => {
          plannerSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return;
      }
    };

    // Sync on initial mount
    syncHashToState();

    window.addEventListener('hashchange', syncHashToState);
    return () => window.removeEventListener('hashchange', syncHashToState);
  }, [products]);

  // Synchronize state changes back to the URL Hash
  useEffect(() => {
    let targetHash = '#/';
    if (activeLegalTab) {
      if (activeLegalTab === 'imprint') targetHash = '#/impressum';
      else if (activeLegalTab === 'terms') targetHash = '#/agb';
      else if (activeLegalTab === 'privacy') targetHash = '#/datenschutz';
      else if (activeLegalTab === 'revocation') targetHash = '#/widerruf';
    } else if (isAdminActive) {
      targetHash = '#/admin';
    } else if (selectedProduct) {
      targetHash = `#/produkt/${selectedProduct.id}`;
    } else if (viewMode === 'catalog') {
      targetHash = `#/kategorie/${activeCategory}`;
    }

    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
  }, [activeLegalTab, selectedProduct, viewMode, activeCategory, isAdminActive]);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1, options?: { [key: string]: string }) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          JSON.stringify(item.selectedOption) === JSON.stringify(options || {})
      );

      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      } else {
        return [...prev, { product, quantity, selectedOption: options || {} }];
      }
    });

    showNotification(`✓ ${quantity}x ${product.shortTitle} zum Warenkorb hinzugefügt!`);
    
    // Provide a neat visual trigger to open the cart immediately
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, newQuantity: number, options?: { [key: string]: string }) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId, options);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId &&
        JSON.stringify(item.selectedOption) === JSON.stringify(options || {})
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string, options?: { [key: string]: string }) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.product.id === productId &&
          JSON.stringify(item.selectedOption) === JSON.stringify(options || {}))
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Compare operation
  const handleToggleCompare = (product: Product) => {
    setCompareList((prev) => {
      const isAlreadyIncluded = prev.some((p) => p.id === product.id);
      if (isAlreadyIncluded) {
        showNotification(`Info: ${product.shortTitle} aus Vergleichsliste entfernt.`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          showNotification('Achtung: Es können maximal 4 Produkte gleichzeitig verglichen werden!');
          return prev;
        }
        showNotification(`✓ ${product.shortTitle} zur Vergleichsliste hinzugefügt!`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromCompare = (product: Product) => {
    setCompareList((prev) => prev.filter((p) => p.id !== product.id));
  };

  // Scroll to components helper
  const handleNavigateToPlanner = () => {
    setSelectedProduct(null); // Return to home if viewing details
    setActiveLegalTab(null);
    setViewMode('brands');
    setTimeout(() => {
      plannerSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
    setActiveLegalTab(null);
    setViewMode('brands');
    setActiveCategory('all');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart financial summaries
  const cartTotalVal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filtering list items logics
  const filteredProducts = products.filter((prod) => {
    // 1. Category matched
    if (activeCategory !== 'all' && prod.category !== activeCategory) return false;

    // 2. Search matches (title, category label, brand, specs or summary bullets)
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchesTitle = prod.title.toLowerCase().includes(query);
      const matchesBrand = prod.brand.toLowerCase().includes(query);
      const matchesCategory = CATEGORY_LABELS[prod.category].toLowerCase().includes(query);
      const matchesBullets = prod.bulletPoints.some(b => b.toLowerCase().includes(query));
      if (!matchesTitle && !matchesBrand && !matchesCategory && !matchesBullets) return false;
    }

    // 3. Price boundary max check
    if (prod.price > maxPriceFilter) return false;

    // 4. In stock filter check
    if (onlyInStock && prod.stock === 'out_of_stock') return false;

    // 5. Brand matched check
    if (selectedBrand !== 'all' && prod.brand !== selectedBrand) return false;

    return true;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        return 0; // retain original database seed sorting
    }
  });

  // Extract unique brands for dynamic filters matching
  const availableBrands = ['all', ...Array.from(new Set(products.map((p) => p.brand)))];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased">
      {/* Dynamic Toast Alerts */}
      {notification && (
        <div className="fixed bottom-6 left-6 z-50 bg-slate-900 border border-slate-800 text-white py-3 px-5 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in text-xs font-bold font-sans">
          <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping" />
          <span>{notification}</span>
        </div>
      )}

      {/* Embedded Header navigation layout */}
      <Header
        activeCategory={activeCategory}
        setActiveCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedProduct(null);
          setActiveLegalTab(null);
          setViewMode('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          if (q.trim() !== '') {
            setViewMode('catalog');
            setActiveLegalTab(null);
          }
        }}
        cartCount={cartItemCount}
        cartTotal={cartTotalVal}
        onOpenCart={() => setIsCartOpen(true)}
        compareCount={compareList.length}
        onOpenCompare={() => setIsCompareOpen(true)}
        onBackToHome={handleBackToHome}
        onNavigateToPlanner={handleNavigateToPlanner}
      />

      <main className="flex-1">
        {isAdminActive ? (
          <AdminView
            products={products}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            onResetProducts={handleResetProducts}
            onBack={() => setIsAdminActive(false)}
          />
        ) : activeLegalTab ? (
          <LegalView
            activeTab={activeLegalTab}
            onChangeTab={(tab) => setActiveLegalTab(tab)}
            onBack={() => setActiveLegalTab(null)}
          />
        ) : selectedProduct ? (
          /* ========================================================================= */
          /* DETAILED PRODUCT PAGE PANEL (PDP) */
          /* ========================================================================= */
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
            onAddToCart={(prod, qty, opts) => handleAddToCart(prod, qty, opts)}
            onToggleCompare={handleToggleCompare}
            isComparing={compareList.some((p) => p.id === selectedProduct.id)}
          />
        ) : viewMode === 'brands' ? (
          /* ========================================================================= */
          /* LANDING PAGE / BRAND SHOWCASE VIEW */
          /* ========================================================================= */
          <>
            <BrandHomepage
              products={products}
              onViewDetails={(prod) => {
                setSelectedProduct(prod);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onAddToCart={(prod) => handleAddToCart(prod, 1)}
              onToggleCompare={handleToggleCompare}
              compareList={compareList}
              onNavigateToPlanner={handleNavigateToPlanner}
              onSwitchToCatalog={() => setViewMode('catalog')}
            />

            {/* INTERACTIVE CALCULATION SYSTEM PLANER SECTION */}
            <div ref={plannerSectionRef} className="scroll-mt-28">
              <SolarPlanner
                onSelectProduct={(p) => {
                  setSelectedProduct(p);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onAddToCart={(p) => handleAddToCart(p, 1)}
              />
            </div>
          </>
        ) : (
          /* ========================================================================= */
          /* FULL SHOP CATALOG LIST VIEW (WITH SIDEBAR FILTERS) */
          /* ========================================================================= */
          <>
            {/* Breadcrumb back home bar */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
              <button
                id="btn-back-to-brands"
                onClick={handleBackToHome}
                className="text-xs font-extrabold text-[#4A5D4E] hover:text-[#7D8E7E] flex items-center gap-1.5 cursor-pointer bg-white border border-[#E5E2D9] py-1.5 px-4 rounded-xl transition shadow-2xs"
              >
                ← Zurück zur Marken-Startseite
              </button>
            </div>

            {/* Elegant Hero Banner Grid Slider (Desktop/Mobile) on default view first */}
            <div className="bg-slate-950 text-white rounded-[2rem] mx-4 md:mx-8 my-6 md:my-8 overflow-hidden py-12 md:py-16 px-6 md:px-12 relative border border-slate-800 shadow-xl">
              {/* Background Image Banner */}
              <img
                src={currentBanner.img}
                alt={currentBanner.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-35 select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient from-[#D4A373]/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                
                {/* Visual Slogan Info */}
                <div className="lg:col-span-7 flex flex-col gap-5 text-center lg:text-left">
                  <span className="bg-[#D4A373] text-white font-extrabold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full w-fit mx-auto lg:mx-0 shadow-xs">
                    ✓ Steuersenkung Gesichert: 0% UStG
                  </span>
                  
                  <h1 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-white leading-tight italic">
                    {currentBanner.title.split('mit')[0]}
                    {currentBanner.title.includes('mit') && (
                      <>
                        mit <span className="text-[#D4A373] not-italic font-sans font-bold">OnlineSolar</span>
                      </>
                    )}
                  </h1>
                  
                  <p className="text-xs md:text-sm text-white/85 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                    {currentBanner.desc}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold pt-2 text-white/90">
                    <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                      <ShieldCheck className="w-4 h-4 text-[#D4A373]" />
                      <span>Original Markenware</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                      <Phone className="w-4 h-4 text-[#D4A373]" />
                      <span>Kostenfreie Beratung</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                      <ThumbsUp className="w-4 h-4 text-[#D4A373]" />
                      <span>Versandkostenfrei ab 150 €</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-3">
                    <button
                      onClick={handleNavigateToPlanner}
                      className="bg-[#D4A373] hover:bg-[#c59262] text-white font-extrabold px-6 py-3.5 rounded-xl transition shadow-xs hover:scale-[1.02] transform text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Interaktiven Solarplaner starten
                    </button>
                    <button
                      onClick={() => {
                        catalogSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-white/10 hover:bg-white/15 text-white px-6 py-3.5 rounded-xl border border-white/20 transition text-xs font-bold cursor-pointer"
                    >
                      Zum Katalog scrollen ↓
                    </button>
                  </div>
                </div>

                {/* Left/Right Visual column - Load our generated hero banner! */}
                <div className="lg:col-span-5 relative self-center mx-auto max-w-sm lg:max-w-full">
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4A373]/30 to-[#7D8E7E]/30 rounded-3xl blur-md opacity-35" />
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border-8 border-white">
                    <img
                      src={currentBanner.img}
                      alt={currentBanner.title}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-[280px] sm:h-[340px] opacity-95 hover:scale-[1.03] duration-500"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#E5E2D9] text-[10px] sm:text-xs">
                      <p className="font-bold text-[#4A5D4E] flex items-center justify-between">
                        <span>Lagerbestand Kassel (Live)</span>
                        <span className="text-[#4A5D4E] font-medium flex items-center gap-1">
                          <span className="w-2 h-2 bg-[#7D8E7E] rounded-full animate-pulse" />
                          Bereit zur Spedition
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* QUICK SECTIONS POPULAR TOP SEARCHES */}
            <div className="py-4 px-6 md:px-8 hidden sm:block bg-transparent">
              <div className="max-w-7xl mx-auto flex items-center gap-2.5 text-xs text-[#6B705C]">
                <span className="font-extrabold tracking-wider uppercase text-[#A5A58D] text-[10px]">Beliebte Suchen:</span>
                {['Balkonkraftwerk', 'Wärmepumpe', 'Speicher', 'Vollschwarz', 'Hoymiles', 'Trina', 'BYD', 'Shelly'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term);
                      catalogSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white hover:bg-[#4A5D4E]/10 hover:text-[#4A5D4E] border border-[#E5E2D9] hover:border-[#4A5D4E]/30 py-1.5 px-3 rounded-xl transition font-semibold"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* MAIN CATALOG COMPONENT SECTION WITH FILTERS SIDEBAR */}
            <div ref={catalogSectionRef} className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 scroll-mt-28 select-none">
              
              {/* Grid with Filters Left (3 cols), Product List Right (9 cols) */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* Sidebar Filter Widget (1 Col) */}
                <div className="lg:col-span-1 bg-white border border-[#E5E2D9] rounded-3xl p-6 shadow-xs max-h-fit space-y-6 sticky top-48">
                  <div className="flex items-center justify-between border-b border-[#F0EFEA] pb-3 mb-2">
                    <div className="flex items-center gap-1.5 text-[#4A5D4E] font-extrabold text-xs tracking-wider uppercase font-sans">
                      <SlidersHorizontal className="w-4 h-4 text-[#D4A373] animate-pulse" />
                      <span>Suchfilter</span>
                    </div>
                    {(selectedBrand !== 'all' || searchQuery !== '' || onlyInStock || maxPriceFilter < 8500) && (
                      <button
                        onClick={() => {
                          setSelectedBrand('all');
                          setSearchQuery('');
                          setOnlyInStock(false);
                          setMaxPriceFilter(8500);
                        }}
                        className="text-[10px] font-bold text-rose-600 hover:underline flex items-center gap-0.5"
                      >
                        Zurücksetzen
                      </button>
                    )}
                  </div>

                  {/* Brand Selector filter */}
                  <div className="space-y-2 text-xs">
                    <label className="block text-[#3D4035] font-bold mb-1">Hersteller / Marke:</label>
                    <select
                      className="w-full bg-[#FAF9F6] text-[#3D4035] border border-[#E5E2D9] rounded-xl p-2.5 focus:outline-none focus:border-[#4A5D4E] hover:bg-[#F0EFEA] transition font-semibold"
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                      <option value="all">Alle Marken zeigen</option>
                      {availableBrands.filter(b => b !== 'all').map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Filter slider */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-[#3D4035]">Maximaler Budgetpreis:</span>
                      <span className="font-mono bg-[#FAF9F6] text-[#4A5D4E] border border-[#E5E2D9] px-2 py-0.5 rounded">
                        {maxPriceFilter.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 })}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="8500"
                      step="50"
                      className="w-full accent-[#4A5D4E] h-1.5 bg-[#FAF9F6] rounded-lg cursor-pointer"
                      value={maxPriceFilter}
                      onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
                    />
                    <div className="flex justify-between text-[10px] font-semibold text-[#A5A58D] font-mono">
                      <span>10 €</span>
                      <span>8.500 €</span>
                    </div>
                  </div>

                  {/* Stock Availability status check */}
                  <div className="flex items-center justify-between p-3 bg-[#FAF9F6] hover:bg-[#F0EFEA] rounded-xl cursor-pointer border border-[#E5E2D9] text-xs transition-colors">
                    <span className="text-[#3D4035] font-bold">Nur sofort lieferbar</span>
                    <input
                      type="checkbox"
                      checked={onlyInStock}
                      onChange={(e) => setOnlyInStock(e.target.checked)}
                      className="w-4.5 h-4.5 accent-[#4A5D4E] rounded cursor-pointer border-[#E5E2D9]"
                    />
                  </div>

                  <div className="border-t border-[#F0EFEA] pt-4 text-[11px] text-[#6B705C] flex flex-col gap-2">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#7D8E7E] rounded-full" />
                      <span>Versand per Spedition / DPD</span>
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 bg-[#7D8E7E] rounded-full" />
                      <span>0% MwSt Gesetz gültig</span>
                    </span>
                  </div>
                </div>

                {/* Dynamic Product Grid list (3 Cols) */}
                <div className="lg:col-span-3">
                  
                  {/* Tool bar selection */}
                  <div className="bg-white border border-[#E5E2D9] rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-6 shadow-xs text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[#4A5D4E] bg-[#FAF9F6] border border-[#E5E2D9] px-2.5 py-1 rounded-lg">
                        {sortedProducts.length}
                      </span>
                      <span className="text-[#6B705C] font-semibold">
                        {sortedProducts.length === 1 ? 'Produkt gefunden' : 'PV-Produkte anzeigegerecht gelistet'}
                      </span>
                    </div>

                    {/* Sorting criteria */}
                    <div className="flex items-center gap-2">
                      <span className="text-[#A5A58D] font-bold uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1">
                        <ArrowUpDown className="w-3.5 h-3.5" /> Sortieren:
                      </span>
                      <select
                        className="bg-[#FAF9F6] text-[#3D4035] border border-[#E5E2D9] hover:bg-[#F0EFEA] rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#4A5D4E] transition font-bold"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                      >
                        <option value="featured">Auswahl (Standard)</option>
                        <option value="price-asc">Preis: Aufsteigend</option>
                        <option value="price-desc">Preis: Absteigend</option>
                        <option value="rating">Top Kundenbewertungen</option>
                      </select>
                    </div>
                  </div>

                  {/* Empty search fallback */}
                  {sortedProducts.length === 0 ? (
                    <div className="bg-white border border-[#E5E2D9] rounded-3xl py-16 px-6 text-center shadow-xs flex flex-col items-center justify-center gap-3">
                      <Sun className="w-10 h-10 text-[#D4A373] animate-pulse" />
                      <p className="font-serif italic font-bold text-lg text-[#4A5D4E]">Keine PV-Produkte gefunden.</p>
                      <p className="text-xs text-[#6B705C] max-w-sm leading-relaxed -mt-1.5">
                        Passen Sie Ihre Suchfilter oder die Preisschranke im linken Bereich an, um weitere Treffer zu generieren.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedBrand('all');
                          setSearchQuery('');
                          setOnlyInStock(false);
                          setMaxPriceFilter(8500);
                        }}
                        className="bg-[#4A5D4E] text-white px-5 py-2.5 text-xs font-bold rounded-xl mt-2 cursor-pointer transition uppercase tracking-wider hover:bg-[#3d4d41] shadow-xs"
                      >
                        Alle Suchfilter zurücksetzen
                      </button>
                    </div>
                  ) : (
                    /* The Product Grid list */
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {sortedProducts.map((prod) => (
                        <ProductCard
                          key={prod.id}
                          product={prod}
                          onViewDetails={(p) => {
                            setSelectedProduct(p);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          onAddToCart={(p) => handleAddToCart(p, 1)}
                          onToggleCompare={handleToggleCompare}
                          isComparing={compareList.some((p) => p.id === prod.id)}
                        />
                      ))}
                    </div>
                  )}

                </div>

              </div>

            </div>

            {/* INTERACTIVE CALCULATION SYSTEM PLANER SECTION */}
            <div ref={plannerSectionRef} className="scroll-mt-28">
              <SolarPlanner
                onSelectProduct={(p) => {
                  setSelectedProduct(p);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onAddToCart={(p) => handleAddToCart(p, 1)}
              />
            </div>
          </>
        )}
      </main>

      {/* FOOTER BADGES */}
      <Footer 
        onNavigateLegal={(tab) => {
          setActiveLegalTab(tab);
          setIsAdminActive(false);
        }} 
        onNavigateAdmin={() => {
          setIsAdminActive(true);
          setActiveLegalTab(null);
          setSelectedProduct(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* PERSISTENT SLIDING WIDGET CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* PERSISTENT SPEC COMPARISONS PANEL */}
      <ComparisonModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        compareList={compareList}
        onRemoveFromCompare={handleRemoveFromCompare}
        onAddToCart={(p) => handleAddToCart(p, 1)}
      />
    </div>
  );
}
