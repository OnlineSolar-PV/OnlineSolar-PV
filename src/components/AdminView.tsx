import React, { useState } from 'react';
import { Product, ProductSpecs, ProductManual } from '../types';
import { CATEGORY_LABELS } from '../data';
import { 
  Plus, Trash2, Edit2, Save, Upload, X, ArrowLeft, Image as ImageIcon, 
  Settings, AlertCircle, Database, Eye, CheckCircle, RefreshCw,
  Lock, Unlock, EyeOff, Key, ShieldAlert, Download
} from 'lucide-react';

interface AdminViewProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
  onResetProducts: () => void;
  onImportProducts: (products: Product[]) => void;
  onBack: () => void;
}

export default function AdminView({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onResetProducts,
  onImportProducts,
  onBack
}: AdminViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<'list' | 'add' | 'edit' | 'settings'>('list');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('onlinesolar_admin_authenticated') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [adminPassword, setAdminPassword] = useState<string>(() => {
    return localStorage.getItem('onlinesolar_admin_password') || 'onlinesolar';
  });

  // Password Changing Form States
  const [oldPasswordInput, setOldPasswordInput] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Form states
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [shortTitle, setShortTitle] = useState('');
  const [category, setCategory] = useState<Product['category']>('balkonkraftwerke');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [oldPrice, setOldPrice] = useState<number | undefined>(undefined);
  const [stock, setStock] = useState<Product['stock']>('in_stock');
  const [deliveryTime, setDeliveryTime] = useState('2-4 Werktage');
  const [images, setImages] = useState<string[]>([]);
  const [imageInput, setImageInput] = useState('');
  const [bulletPointInput, setBulletPointInput] = useState('');
  const [bulletPoints, setBulletPoints] = useState<string[]>([]);
  const [detailedDescription, setDetailedDescription] = useState('');
  const [includedItemInput, setIncludedItemInput] = useState('');
  const [includedItems, setIncludedItems] = useState<string[]>([]);
  
  // Custom Specs State
  const [specGroup, setSpecGroup] = useState('');
  const [specKey, setSpecKey] = useState('');
  const [specVal, setSpecVal] = useState('');
  const [specs, setSpecs] = useState<ProductSpecs>({});

  const showSuccess = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 4000);
  };

  const handleExportJSON = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `onlinesolar-katalog-export-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showSuccess('Katalog erfolgreich als JSON heruntergeladen!');
    } catch (err) {
      alert('Fehler beim Exportieren des Katalogs.');
    }
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const file = e.target.files?.[0];
    if (!file) return;

    fileReader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].id) {
          onImportProducts(parsed);
          showSuccess(`Katalog erfolgreich importiert! ${parsed.length} Produkte aktiv.`);
        } else {
          alert('Fehler: Die Datei hat kein gültiges Onlinesolar-Katalog-Format.');
        }
      } catch (err) {
        alert('Fehler beim Parsen der JSON-Datei. Stellen Sie sicher, dass es sich um eine valide JSON-Datei handelt.');
      }
    };
    fileReader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  const resetForm = () => {
    setId('');
    setTitle('');
    setShortTitle('');
    setCategory('balkonkraftwerke');
    setBrand('');
    setPrice(0);
    setOldPrice(undefined);
    setStock('in_stock');
    setDeliveryTime('2-4 Werktage');
    setImages([]);
    setImageInput('');
    setBulletPoints([]);
    setBulletPointInput('');
    setDetailedDescription('');
    setIncludedItems([]);
    setIncludedItemInput('');
    setSpecs({});
    setSpecGroup('');
    setSpecKey('');
    setSpecVal('');
    setEditingProduct(null);
  };

  const handleEditInit = (product: Product) => {
    setEditingProduct(product);
    setId(product.id);
    setTitle(product.title);
    setShortTitle(product.shortTitle);
    setCategory(product.category);
    setBrand(product.brand);
    setPrice(product.price);
    setOldPrice(product.oldPrice);
    setStock(product.stock);
    setDeliveryTime(product.deliveryTime);
    setImages(product.images || []);
    setBulletPoints(product.bulletPoints || []);
    setDetailedDescription(product.detailedDescription || '');
    setIncludedItems(product.includedItems || []);
    setSpecs(product.specs || {});
    setActiveSubTab('edit');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result !== 'string') return;
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Max dimensions
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const compressed = canvas.toDataURL('image/jpeg', 0.75);
            setImages(prev => [...prev, compressed]);
          } else {
            setImages(prev => [...prev, event.target?.result as string]);
          }
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
    
    // Reset file input
    e.target.value = '';
    showSuccess('Bild hochgeladen, für Web optimiert & komprimiert!');
  };

  const addImageFromUrl = () => {
    if (!imageInput.trim()) return;
    setImages(prev => [...prev, imageInput.trim()]);
    setImageInput('');
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const addBulletPoint = () => {
    if (!bulletPointInput.trim()) return;
    setBulletPoints(prev => [...prev, bulletPointInput.trim()]);
    setBulletPointInput('');
  };

  const removeBulletPoint = (index: number) => {
    setBulletPoints(prev => prev.filter((_, i) => i !== index));
  };

  const addIncludedItem = () => {
    if (!includedItemInput.trim()) return;
    setIncludedItems(prev => [...prev, includedItemInput.trim()]);
    setIncludedItemInput('');
  };

  const removeIncludedItem = (index: number) => {
    setIncludedItems(prev => prev.filter((_, i) => i !== index));
  };

  const addSpecification = () => {
    if (!specGroup.trim() || !specKey.trim() || !specVal.trim()) return;
    
    setSpecs(prev => {
      const copy = { ...prev };
      if (!copy[specGroup]) {
        copy[specGroup] = {};
      }
      copy[specGroup][specKey] = specVal;
      return copy;
    });

    setSpecKey('');
    setSpecVal('');
  };

  const removeSpecification = (groupName: string, keyName: string) => {
    setSpecs(prev => {
      const copy = { ...prev };
      if (copy[groupName]) {
        delete copy[groupName][keyName];
        if (Object.keys(copy[groupName]).length === 0) {
          delete copy[groupName];
        }
      }
      return copy;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !shortTitle.trim() || !brand.trim()) {
      alert('Bitte füllen Sie alle erforderlichen Felder aus (Titel, Kurzbezeichnung, Marke).');
      return;
    }

    const finalId = editingProduct ? editingProduct.id : (id.trim() || 'prod-' + Date.now());

    const productData: Product = {
      id: finalId,
      title: title.trim(),
      shortTitle: shortTitle.trim(),
      category,
      brand: brand.trim(),
      price: Number(price),
      oldPrice: oldPrice ? Number(oldPrice) : undefined,
      rating: editingProduct ? editingProduct.rating : 5.0,
      reviewCount: editingProduct ? editingProduct.reviewCount : 1,
      stock,
      deliveryTime: deliveryTime.trim() || '2-4 Werktage',
      images: images.length > 0 ? images : ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'],
      bulletPoints: bulletPoints.length > 0 ? bulletPoints : ['Premium PV Produkt'],
      detailedDescription: detailedDescription.trim() || title,
      specs,
      includedItems: includedItems.length > 0 ? includedItems : [],
      manuals: editingProduct?.manuals || []
    };

    if (activeSubTab === 'edit') {
      onUpdateProduct(productData);
      showSuccess(`Produkt "${productData.shortTitle}" erfolgreich aktualisiert!`);
    } else {
      onAddProduct(productData);
      showSuccess(`Produkt "${productData.shortTitle}" erfolgreich hinzugefügt!`);
    }

    resetForm();
    setActiveSubTab('list');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('onlinesolar_admin_authenticated', 'true');
      setLoginError(false);
      setPasswordInput('');
      showSuccess('Erfolgreich als Administrator angemeldet!');
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('onlinesolar_admin_authenticated');
    showSuccess('Erfolgreich abgemeldet.');
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);

    if (oldPasswordInput !== adminPassword) {
      setPasswordError('Das aktuelle Passwort ist nicht korrekt.');
      return;
    }

    if (newPasswordInput.length < 4) {
      setPasswordError('Das neue Passwort muss mindestens 4 Zeichen lang sein.');
      return;
    }

    if (newPasswordInput !== confirmPasswordInput) {
      setPasswordError('Die neuen Passwörter stimmen nicht überein.');
      return;
    }

    // Save
    localStorage.setItem('onlinesolar_admin_password', newPasswordInput);
    setAdminPassword(newPasswordInput);
    
    // Reset fields
    setOldPasswordInput('');
    setNewPasswordInput('');
    setConfirmPasswordInput('');
    
    showSuccess('Das Administrator-Passwort wurde erfolgreich geändert!');
    setActiveSubTab('list');
  };

  const isCustomProduct = (productId: string) => {
    // Basic heuristic: check if it's not pre-seeded
    return !['bkw-800-premium', 'bat-anker-solarbank-e1600', 'mod-trina-vertex-440', 'inv-hoymiles-hm800', 'spei-ecoflow-delta2', 'wp-lg-thermav-9kw', 'zub-shelly-3em', 'zub-anker-bkt-bracket'].includes(productId);
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-12 px-4 font-sans">
        <div className="bg-white border border-[#E5E2D9] rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 bg-amber-50 text-[#D4A373] rounded-2xl flex items-center justify-center mb-4 border border-amber-100 shadow-3xs">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-xl font-serif font-black text-[#4A5D4E]">
              Administrator Login
            </h1>
            <p className="text-xs text-[#6B705C] mt-1.5 leading-relaxed">
              Dieser Bereich ist passwortgeschützt, um unbefugten Zugriff auf die Katalog-Einstellungen zu verhindern.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5 relative">
              <label className="block text-xs font-bold text-slate-600">Admin-Passwort:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Passwort eingeben"
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl pl-10 pr-10 py-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
                <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="p-3 bg-rose-50 border border-rose-150 rounded-xl text-rose-700 text-xs font-bold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Ungültiges Passwort. Bitte versuchen Sie es erneut.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-extrabold py-3.5 px-6 rounded-xl transition shadow-xs cursor-pointer"
            >
              <Unlock className="w-4 h-4" /> Entsperren
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="text-xs font-bold text-[#4A5D4E] hover:text-[#7D8E7E] flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Zurück zum OnlineSolar-Shop
            </button>
            <span className="text-[10px] text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 mt-1 font-mono">
              Hinweis: Standardpasswort ist <strong className="text-[#D4A373]">onlinesolar</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 font-sans">
      {/* Admin header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-5 border-b border-slate-200">
        <div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-[#4A5D4E] hover:text-[#7D8E7E] mb-2 cursor-pointer bg-white border border-[#E5E2D9] px-3.5 py-1.5 rounded-xl transition shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Zurück zum Shop
          </button>
          <div className="flex items-center gap-3">
            <Settings className="w-7 h-7 text-[#D4A373] animate-spin-slow" />
            <h1 className="text-2xl md:text-3xl font-serif font-black text-[#4A5D4E] italic">
              Lokaler Admin-Bereich
            </h1>
          </div>
          <p className="text-xs text-[#6B705C] mt-1 font-medium">
            Verwalten Sie Ihren lokalen Produktkatalog. Alle Änderungen werden sicher im <strong className="text-[#4A5D4E]">LocalStorage</strong> Ihres Browsers gespeichert.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (confirm('Möchten Sie wirklich alle selbst angelegten Produkte löschen und den Katalog auf die Werkseinstellungen zurücksetzen?')) {
                onResetProducts();
                showSuccess('Katalog erfolgreich zurückgesetzt!');
                resetForm();
                setActiveSubTab('list');
              }
            }}
            className="flex items-center gap-2 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 text-xs font-extrabold py-2.5 px-4 rounded-xl transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Katalog zurücksetzen
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 text-xs font-extrabold py-2.5 px-4 rounded-xl transition cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-slate-500" /> Abmelden
          </button>

          {activeSubTab === 'list' && (
            <button
              onClick={() => {
                resetForm();
                setActiveSubTab('add');
              }}
              className="flex items-center gap-2 bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-extrabold py-2.5 px-4 rounded-xl transition shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Neues Produkt anlegen
            </button>
          )}
        </div>
      </div>

      {/* Toast notifications inside admin view */}
      {successMessage && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-xs font-bold animate-slide-in">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Sub tabs navigation */}
      <div className="flex border-b border-slate-200 mb-6">
        <button
          onClick={() => {
            setActiveSubTab('list');
            resetForm();
          }}
          className={`px-5 py-3 text-xs font-bold border-b-2 transition duration-200 cursor-pointer ${
            activeSubTab === 'list'
              ? 'border-[#4A5D4E] text-[#4A5D4E]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Produktübersicht ({products.length})
        </button>
        {activeSubTab === 'add' && (
          <button
            className="px-5 py-3 text-xs font-bold border-b-2 border-[#4A5D4E] text-[#4A5D4E]"
          >
            Neues Produkt anlegen
          </button>
        )}
        {activeSubTab === 'edit' && (
          <button
            className="px-5 py-3 text-xs font-bold border-b-2 border-[#4A5D4E] text-[#4A5D4E]"
          >
            Produkt bearbeiten: {editingProduct?.shortTitle}
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setActiveSubTab('settings');
            resetForm();
          }}
          className={`px-5 py-3 text-xs font-bold border-b-2 transition duration-200 cursor-pointer ${
            activeSubTab === 'settings'
              ? 'border-[#4A5D4E] text-[#4A5D4E]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Sicherheit &amp; Passwort
        </button>
      </div>

      {/* ======================= TAB 1: PRODUCT LIST ======================= */}
      {activeSubTab === 'list' && (
        <div className="bg-white border border-[#E5E2D9] rounded-3xl overflow-hidden shadow-2xs">
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <span className="text-xs font-bold text-[#4A5D4E] flex items-center gap-2">
              <Database className="w-4 h-4 text-[#D4A373]" />
              Aktueller Live-Katalog ({products.length} Einträge)
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Admin-Schnittstelle v1.1
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 text-slate-500 border-b border-slate-100 font-bold">
                  <th className="p-4">Vorschau</th>
                  <th className="p-4">ID</th>
                  <th className="p-4">Name / Titel</th>
                  <th className="p-4">Hersteller</th>
                  <th className="p-4">Kategorie</th>
                  <th className="p-4">Preis</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Aktionen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((prod) => {
                  const isCustom = isCustomProduct(prod.id);
                  return (
                    <tr key={prod.id} className="hover:bg-slate-50/50 transition">
                      <td className="p-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                          <img
                            src={prod.images?.[0] || 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=100&auto=format&fit=crop&q=80'}
                            alt={prod.shortTitle}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="p-4 font-mono font-bold text-slate-400 select-all">
                        {prod.id}
                      </td>
                      <td className="p-4 max-w-xs">
                        <div className="font-extrabold text-[#3D4035] truncate">{prod.shortTitle}</div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">{prod.title}</div>
                      </td>
                      <td className="p-4 font-semibold text-slate-600">
                        {prod.brand}
                      </td>
                      <td className="p-4 font-semibold text-slate-600 capitalize">
                        {CATEGORY_LABELS[prod.category] || prod.category}
                      </td>
                      <td className="p-4 font-mono font-extrabold text-[#4A5D4E]">
                        {prod.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
                      </td>
                      <td className="p-4">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          prod.stock === 'in_stock' 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                            : prod.stock === 'low_stock'
                            ? 'bg-amber-50 text-amber-700 border border-amber-100'
                            : 'bg-rose-50 text-rose-700 border border-rose-100'
                        }`}>
                          {prod.stock === 'in_stock' ? 'Auf Lager' : prod.stock === 'low_stock' ? 'Gering' : 'Ausverkauft'}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-1.5">
                          <button
                            onClick={() => handleEditInit(prod)}
                            className="p-2 text-slate-600 hover:text-[#4A5D4E] hover:bg-[#4A5D4E]/10 rounded-lg transition cursor-pointer"
                            title="Produkt bearbeiten"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          
                          {isCustom ? (
                            <button
                              onClick={() => {
                                if (confirm(`Möchten Sie das Produkt "${prod.shortTitle}" wirklich dauerhaft löschen?`)) {
                                  onDeleteProduct(prod.id);
                                  showSuccess(`Produkt "${prod.shortTitle}" gelöscht.`);
                                }
                              }}
                              className="p-2 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                              title="Produkt löschen"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          ) : (
                            <span 
                              className="p-2 text-slate-300 cursor-not-allowed" 
                              title="Standardprodukt kann nicht gelöscht werden"
                            >
                              <Trash2 className="w-4 h-4 opacity-40" />
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {products.length === 0 && (
            <div className="p-12 text-center text-slate-400">
              Keine Produkte im Katalog vorhanden. Bitte fügen Sie ein Produkt hinzu oder setzen Sie den Katalog zurück.
            </div>
          )}
        </div>
      )}

      {/* ======================= TAB 2: ADD / EDIT FORM ======================= */}
      {(activeSubTab === 'add' || activeSubTab === 'edit') && (
        <form onSubmit={handleSubmit} className="bg-white border border-[#E5E2D9] rounded-3xl p-6 md:p-8 shadow-2xs space-y-8">
          
          {/* Section: Basic info */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#A5A58D] border-b border-slate-100 pb-2">
              1. Basis-Informationen
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {activeSubTab === 'add' && (
                <div className="md:col-span-4 space-y-1.5">
                  <label className="block text-xs font-bold text-slate-600">Produkt-ID (optional):</label>
                  <input
                    type="text"
                    placeholder="z.B. bkw-custom-01"
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-mono"
                    value={id}
                    onChange={(e) => setId(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ''))}
                  />
                  <p className="text-[10px] text-slate-400">
                    Freilassen für automatische ID Generierung. Nur Buchstaben, Zahlen, Bindestrich.
                  </p>
                </div>
              )}

              <div className={activeSubTab === 'add' ? 'md:col-span-4 space-y-1.5' : 'md:col-span-6 space-y-1.5'}>
                <label className="block text-xs font-bold text-slate-600">Hersteller / Marke <span className="text-rose-500">*</span>:</label>
                <input
                  type="text"
                  required
                  placeholder="z.B. OnlineSolar, Anker Solix"
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>

              <div className={activeSubTab === 'add' ? 'md:col-span-4 space-y-1.5' : 'md:col-span-6 space-y-1.5'}>
                <label className="block text-xs font-bold text-slate-600">Kategorie <span className="text-rose-500">*</span>:</label>
                <select
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Product['category'])}
                >
                  {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-8 space-y-1.5">
                <label className="block text-xs font-bold text-slate-600">Ausführlicher Produkt-Titel <span className="text-rose-500">*</span>:</label>
                <input
                  type="text"
                  required
                  placeholder="z.B. OnlineSolar 1200W Bifaziales Glas-Glas Balkonkraftwerk Komplettset"
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="md:col-span-4 space-y-1.5">
                <label className="block text-xs font-bold text-slate-600">Kurzbezeichnung (Shopansicht) <span className="text-rose-500">*</span>:</label>
                <input
                  type="text"
                  required
                  placeholder="z.B. OnlineSolar 1200W Set"
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                  value={shortTitle}
                  onChange={(e) => setShortTitle(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Section: Pricing & Stock */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#A5A58D] border-b border-slate-100 pb-2">
              2. Preise &amp; Verfügbarkeit
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-600">Verkaufspreis (€) <span className="text-rose-500">*</span>:</label>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0"
                  placeholder="349.00"
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-mono font-bold"
                  value={price || ''}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-600">Alter Preis (Streichpreis € - optional):</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="449.00"
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-mono"
                  value={oldPrice || ''}
                  onChange={(e) => setOldPrice(e.target.value ? Number(e.target.value) : undefined)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-600">Lagerbestand-Status:</label>
                <select
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                  value={stock}
                  onChange={(e) => setStock(e.target.value as Product['stock'])}
                >
                  <option value="in_stock">Sofort lieferbar (Auf Lager)</option>
                  <option value="low_stock">Nur noch wenige verfügbar</option>
                  <option value="out_of_stock">Vorübergehend ausverkauft</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-600">Lieferzeitangabe:</label>
                <input
                  type="text"
                  placeholder="z.B. 2-4 Werktage"
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Section: Images with Upload */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#A5A58D] border-b border-slate-100 pb-2">
              3. Produktbilder (Lokal hochladen oder URLs eintragen)
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Method A: Upload File */}
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-[#4A5D4E] transition bg-slate-50/30 flex flex-col items-center justify-center gap-3">
                  <Upload className="w-8 h-8 text-[#D4A373]" />
                  <div>
                    <span className="text-xs font-extrabold text-[#3D4035] block">Bild vom Computer hochladen</span>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Unterstützt PNG, JPG, WEBP. Wird als Base64 lokal codiert.
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="file-upload-input"
                  />
                  <label
                    htmlFor="file-upload-input"
                    className="mt-2 bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-bold py-2 px-4 rounded-xl transition cursor-pointer inline-block"
                  >
                    Datei auswählen
                  </label>
                </div>

                {/* Method B: URL Input */}
                <div className="border border-slate-200 rounded-2xl p-6 bg-[#FAF9F6] flex flex-col justify-center gap-3">
                  <span className="text-xs font-extrabold text-[#3D4035] flex items-center gap-1">
                    <ImageIcon className="w-4 h-4 text-[#D4A373]" /> Bild per Internet-URL hinzufügen:
                  </span>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/photo-..."
                      className="flex-1 bg-white border border-[#E5E2D9] rounded-xl p-2.5 text-xs focus:outline-none focus:border-[#4A5D4E]"
                      value={imageInput}
                      onChange={(e) => setImageInput(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={addImageFromUrl}
                      className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-xl transition cursor-pointer"
                    >
                      Hinzufügen
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 leading-relaxed">
                    Tipp: Sie können z.B. freie Unsplash-Fotos für Solarmodule, Wechselrichter oder Speicher verwenden.
                  </span>
                </div>
              </div>

              {/* Gallery List */}
              {images.length > 0 ? (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-600">Eingepflegte Bilder ({images.length}):</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {images.map((img, idx) => (
                      <div key={idx} className="relative group aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                        <img
                          src={img}
                          alt={`Vorschau ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute top-1.5 right-1.5 bg-rose-600 text-white p-1.5 rounded-full hover:bg-rose-700 transition opacity-0 group-hover:opacity-100 shadow-sm cursor-pointer"
                          title="Bild entfernen"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <span className="absolute bottom-1.5 left-1.5 bg-black/60 text-white text-[8px] font-mono px-1.5 py-0.5 rounded">
                          {idx === 0 ? 'Hauptbild' : `Bild ${idx + 1}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-amber-50 text-amber-800 border border-amber-200 rounded-xl text-xs flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Keine Bilder hinzugefügt. Es wird automatisch ein Platzhalter-Solarbild verwendet.</span>
                </div>
              )}
            </div>
          </div>

          {/* Section: Descriptions & Bulletpoints */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#A5A58D] border-b border-slate-100 pb-2">
              4. Beschreibungen &amp; Bullet-Points
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Detailed Description */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-600">Detaillierte Beschreibung:</label>
                <textarea
                  placeholder="Geben Sie hier eine detaillierte Beschreibung des Produkts, seiner Vorzüge und Einsatzbereiche ein..."
                  rows={8}
                  className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] leading-relaxed"
                  value={detailedDescription}
                  onChange={(e) => setDetailedDescription(e.target.value)}
                />
              </div>

              {/* Right: Bulletpoints */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-600">Wichtigste Vorteile / Bullet-Points:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="z.B. Langlebige LiFePO4 Batteriezellen mit über 6000 Ladezyklen"
                    className="flex-1 bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-2.5 text-xs focus:outline-none focus:border-[#4A5D4E]"
                    value={bulletPointInput}
                    onChange={(e) => setBulletPointInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addBulletPoint();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={addBulletPoint}
                    className="bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-bold py-2 px-4 rounded-xl transition cursor-pointer shrink-0"
                  >
                    Hinzufügen
                  </button>
                </div>

                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-2">
                  {bulletPoints.map((bp, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 border border-slate-150 rounded-xl text-xs">
                      <span className="font-semibold text-slate-700 truncate pr-3">{bp}</span>
                      <button
                        type="button"
                        onClick={() => removeBulletPoint(idx)}
                        className="text-rose-600 hover:text-rose-800 font-bold px-1 cursor-pointer"
                      >
                        Entfernen
                      </button>
                    </div>
                  ))}
                  {bulletPoints.length === 0 && (
                    <p className="text-[10px] text-slate-400 italic">Noch keine Bulletpoints eingetragen.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Scope of delivery & Specs */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#A5A58D] border-b border-slate-100 pb-2">
              5. Lieferumfang &amp; Technische Daten
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Included items */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-600">Lieferumfang (Was ist im Karton?):</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="z.B. 1x Premium Mikrowechselrichter 800W"
                    className="flex-1 bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-2.5 text-xs focus:outline-none focus:border-[#4A5D4E]"
                    value={includedItemInput}
                    onChange={(e) => setIncludedItemInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addIncludedItem();
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={addIncludedItem}
                    className="bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-bold py-2 px-4 rounded-xl transition cursor-pointer shrink-0"
                  >
                    Hinzufügen
                  </button>
                </div>

                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-2">
                  {includedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 border border-slate-150 rounded-xl text-xs">
                      <span className="font-semibold text-slate-700 truncate pr-3">{item}</span>
                      <button
                        type="button"
                        onClick={() => removeIncludedItem(idx)}
                        className="text-rose-600 hover:text-rose-800 font-bold px-1 cursor-pointer"
                      >
                        Entfernen
                      </button>
                    </div>
                  ))}
                  {includedItems.length === 0 && (
                    <p className="text-[10px] text-slate-400 italic">Keine Lieferumfang-Einträge vorhanden.</p>
                  )}
                </div>
              </div>

              {/* Right: Technical specs generator */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-600">Technische Daten (Spezifikationen):</label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Gruppe (z.B. Leistung)"
                    className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-2.5 text-xs focus:outline-none focus:border-[#4A5D4E]"
                    value={specGroup}
                    onChange={(e) => setSpecGroup(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Eigenschaft (z.B. Nennleistung)"
                    className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-2.5 text-xs focus:outline-none focus:border-[#4A5D4E]"
                    value={specKey}
                    onChange={(e) => setSpecKey(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Wert (z.B. 800W)"
                    className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-2.5 text-xs focus:outline-none focus:border-[#4A5D4E]"
                    value={specVal}
                    onChange={(e) => setSpecVal(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={addSpecification}
                  className="w-full bg-[#D4A373] hover:bg-[#c59262] text-white text-xs font-extrabold py-2 px-4 rounded-xl transition cursor-pointer"
                >
                  Spezifikation hinzufügen
                </button>

                {/* Display added specs list */}
                <div className="space-y-3 max-h-48 overflow-y-auto pr-2 border border-slate-100 rounded-xl p-3 bg-slate-50/50">
                  {Object.entries(specs).map(([group, groupSpecs]) => (
                    <div key={group} className="space-y-1">
                      <div className="text-[10px] font-extrabold text-[#4A5D4E] uppercase tracking-wider">{group}</div>
                      {Object.entries(groupSpecs).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between pl-2 text-xs text-slate-600">
                          <span>{key}: <strong>{value}</strong></span>
                          <button
                            type="button"
                            onClick={() => removeSpecification(group, key)}
                            className="text-rose-500 hover:text-rose-700 font-bold px-1 cursor-pointer text-[10px]"
                          >
                            Entfernen
                          </button>
                        </div>
                      ))}
                    </div>
                  ))}
                  {Object.keys(specs).length === 0 && (
                    <p className="text-[10px] text-slate-400 italic">Keine Spezifikationen hinzugefügt.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                resetForm();
                setActiveSubTab('list');
              }}
              className="bg-slate-100 hover:bg-slate-250 text-slate-600 text-xs font-bold py-3 px-6 rounded-xl transition cursor-pointer"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-extrabold py-3 px-6 rounded-xl transition shadow-xs cursor-pointer"
            >
              <Save className="w-4 h-4" /> 
              {activeSubTab === 'edit' ? 'Änderungen speichern' : 'Produkt erstellen'}
            </button>
          </div>

        </form>
      )}

      {/* ======================= TAB 4: SETTINGS / SECURITY ======================= */}
      {activeSubTab === 'settings' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Card 1: Security/Password */}
          <div className="bg-white border border-[#E5E2D9] rounded-3xl p-6 md:p-8 shadow-2xs">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
              <Lock className="w-5 h-5 text-[#D4A373]" />
              <h3 className="text-base font-serif font-black text-[#4A5D4E]">
                Admin-Sicherheitseinstellungen
              </h3>
            </div>

            <p className="text-xs text-[#6B705C] mb-6 leading-relaxed">
              Hier können Sie das Passwort für diesen lokalen Admin-Bereich ändern. 
              Das geänderte Passwort wird sicher im <strong className="text-[#4A5D4E]">LocalStorage</strong> Ihres Browsers gespeichert.
            </p>

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-600">Aktuelles Admin-Passwort <span className="text-rose-500">*</span>:</label>
                  <input
                    type="password"
                    required
                    placeholder="Aktuelles Passwort"
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                    value={oldPasswordInput}
                    onChange={(e) => setOldPasswordInput(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-600">Neues Admin-Passwort <span className="text-rose-500">*</span>:</label>
                  <input
                    type="password"
                    required
                    placeholder="Mindestens 4 Zeichen"
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                    value={newPasswordInput}
                    onChange={(e) => setNewPasswordInput(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-600">Neues Passwort bestätigen <span className="text-rose-500">*</span>:</label>
                  <input
                    type="password"
                    required
                    placeholder="Gleiches Passwort erneut eingeben"
                    className="w-full bg-[#FAF9F6] border border-[#E5E2D9] rounded-xl p-3 text-xs focus:outline-none focus:border-[#4A5D4E] font-semibold"
                    value={confirmPasswordInput}
                    onChange={(e) => setConfirmPasswordInput(e.target.value)}
                  />
                </div>
              </div>

              {passwordError && (
                <div className="p-3 bg-rose-50 border border-rose-150 rounded-xl text-rose-700 text-xs font-bold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{passwordError}</span>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setOldPasswordInput('');
                    setNewPasswordInput('');
                    setConfirmPasswordInput('');
                    setPasswordError(null);
                    setActiveSubTab('list');
                  }}
                  className="bg-slate-100 hover:bg-slate-250 text-slate-600 text-xs font-bold py-3 px-6 rounded-xl transition cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-extrabold py-3 px-6 rounded-xl transition shadow-xs cursor-pointer"
                >
                  <Save className="w-4 h-4" /> Passwort aktualisieren
                </button>
              </div>
            </form>
          </div>

          {/* Card 2: Backup & Sync */}
          <div className="bg-white border border-[#E5E2D9] rounded-3xl p-6 md:p-8 shadow-2xs">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
              <Database className="w-5 h-5 text-[#D4A373]" />
              <h3 className="text-base font-serif font-black text-[#4A5D4E]">
                Katalog-Sicherung & Übertragung
              </h3>
            </div>

            <p className="text-xs text-[#6B705C] mb-4 leading-relaxed">
              Ihre vorgenommenen Änderungen werden aktuell <strong>nur lokal in diesem Browser</strong> gespeichert.
            </p>

            <div className="bg-[#FAF9F6] border border-[#E5E2D9] rounded-2xl p-4 mb-6 space-y-3 text-xs">
              <div>
                <p className="font-semibold text-[#4A5D4E] flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#7D8E7E] rounded-full" />
                  Szenario A: Übertragung auf andere Geräte
                </p>
                <p className="text-[11px] text-[#6B705C] pl-3.5 leading-relaxed mt-1">
                  Exportieren Sie Ihren Katalog hier als JSON-Datei und importieren Sie ihn auf einem anderen Gerät oder Browser.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#4A5D4E] flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#D4A373] rounded-full" />
                  Szenario B: Dauerhaft im Code festschreiben (Empfohlen)
                </p>
                <p className="text-[11px] text-[#6B705C] pl-3.5 leading-relaxed mt-1">
                  Herunterladen Sie den Katalog und senden Sie uns die JSON-Datei direkt im Chat. Wir schreiben Ihre Produkte dann permanent in den Code der Seite, sodass sie für <strong>jeden Besucher standardmäßig</strong> geladen werden.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleExportJSON}
                className="w-full flex items-center justify-center gap-2 bg-[#4A5D4E] hover:bg-[#3d4d41] text-white text-xs font-extrabold py-3.5 px-4 rounded-xl transition shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4" /> Katalog exportieren (JSON)
              </button>

              <div className="relative">
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportJSON}
                  id="import-catalog-input"
                  className="hidden"
                />
                <label
                  htmlFor="import-catalog-input"
                  className="w-full flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#F0EFEA] border border-[#E5E2D9] text-[#4A5D4E] text-xs font-extrabold py-3.5 px-4 rounded-xl transition cursor-pointer"
                >
                  <Upload className="w-4 h-4" /> Katalog importieren (JSON)
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[11px] font-bold text-slate-500">Werkszustand:</span>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Möchten Sie wirklich alle benutzerdefinierten Änderungen löschen und den Katalog auf den Originalzustand zurücksetzen?')) {
                      onResetProducts();
                      showSuccess('Der Produktkatalog wurde auf den Werkszustand zurückgesetzt.');
                    }
                  }}
                  className="text-[11px] font-bold text-rose-600 hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3 animate-spin-slow" /> Alle Änderungen verwerfen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
