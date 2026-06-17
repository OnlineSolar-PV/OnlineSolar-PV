/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, ProductReview } from './types';

export const PRODUCTS: Product[] = [
  // --- ANKER SOLIX BRAND ---
  {
    id: 'bkw-800-premium',
    title: 'Anker Solix RS40 800W Premium-Balkonkraftwerk Komplettset',
    shortTitle: 'Anker Solix RS40 Set',
    category: 'balkonkraftwerke',
    brand: 'Anker Solix',
    price: 349.00,
    oldPrice: 449.00,
    rating: 4.8,
    reviewCount: 168,
    stock: 'in_stock',
    deliveryTime: '2-4 Werktage',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Steckerfertiges Komplettset für einfachsten Plug & Play Anschluss',
      '800W Ausgangsleistung (per App flexibel drossel- und einstellbar)',
      '2x Premium Anker RS40 445Wp Solarmodule in elegantem Full-Black Design',
      'Anker Solix MI80 Mikrowechselrichter mit integriertem Bluetooth und WLAN',
      'Smarte Überwachung aller Erträge direkt in der Anker App',
      'Exzellenter Produktschutz mit 12 Jahren Garantie auf den Inverter'
    ],
    detailedDescription: 'Das Anker Solix RS40 Komplettset ist der unbestrittene Marktführer für anspruchsvolle Solareinsteiger. Dank erstklassiger Full-Black Solarmodule mit erstklassigem Wirkungsgrad ist dieses Set nicht nur ein optisches Highlight auf jedem Balkon oder Dach, sondern liefert auch bei bewölktem Himmel maximale Stromerträge. Der clevere Bluetooth/WLAN-Inverter lässt sich in Sekundenschnelle per App einrichten. Einfach einstecken und sofort bares Geld bei den Stromkosten einsparen.',
    specs: {
      'Wechselrichter & Einspeisung': {
        'Nennleistung AC': '800 VA (App-regulierbar)',
        'Eingebaute Schnittstellen': 'WLAN & Bluetooth (nativ)',
        'Wechselrichter-Modell': 'Anker Solix MI80',
        'Zertifizierung': 'VDE-AR-N 4105 zertifiziert'
      },
      'Solarmodule': {
        'Modul-Typ': 'Anker Solix N-Type Monokristallin',
        'Nennleistung je Modul': '445 Wp',
        'Modulanzahl': '2 Stück (Gesamt 890 Wp)',
        'Design-Aesthetic': 'Deep Full-Black'
      },
      'Abmessungen & Gewicht': {
        'Maße pro Modul': '1722 × 1134 × 30 mm',
        'Gewicht pro Modul': '20.5 kg'
      }
    },
    includedItems: [
      '2x Anker Solix 445Wp High-Yield Module (Full Black)',
      '1x Anker Solix MI80 Smart-Mikrowechselrichter',
      '1x Premium Schukokabel (5m Länge)',
      '2x MC4 Verlängerungskabel (2m)',
      '1x Ausführliche deutsche Dokumentationsanleitung'
    ],
    manuals: [
      { name: 'Anker Solix RS40 Produkthandbuch (DE)', type: 'pdf', size: '1.8 MB' },
      { name: 'MI80 Wechselrichter VDE Konformitätszertifikat', type: 'pdf', size: '0.9 MB' }
    ],
    options: [
      { name: 'Halterungstyp', values: ['Ohne Halterung', 'Premium Balkongitter-Halterung (+49,00 €)', 'Flachdach-Aufständerung neigbar (+59,00 €)'] }
    ],
    isBestSeller: true
  },
  {
    id: 'bat-anker-solarbank-e1600',
    title: 'Anker Solix Solarbank E1600 Balkonkraftwerk LFP-Speicher 1.6kWh',
    shortTitle: 'Anker Solarbank E1600',
    category: 'speicher',
    brand: 'Anker Solix',
    price: 699.00,
    oldPrice: 899.00,
    rating: 4.7,
    reviewCount: 124,
    stock: 'in_stock',
    deliveryTime: '2-3 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Intelligenter Akkuspeicher mit 1.600 Wh (1.6 kWh) Kapazität',
      'Universell kompatibel mit 99% aller gängigen Mikrowechselrichter',
      'Langlebige Lithium-Eisenphosphat-Zellen (LiFePO4) für über 6.000 Zyklen',
      'Einfache Plug & Play Integration per MC4-Steckverbinder in 5 Minuten',
      'Stufenlose Einspeiseregelung wattgenau per Anker App steuerbar',
      'Robuster IP65-Witterungsschutz für sorgenlose Balkon- und Außennutzung'
    ],
    detailedDescription: 'Schluss mit ungenutztem Solarstrom! Die preisgekrönte Anker Solix Solarbank E1600 speichert Ihren tagsüber ungenutzten Solarertrag und gibt ihn am Abend und in der Nacht wattgenau dosiert an Ihr Hausnetz ab. So steigern Sie Ihre Balkonkraftwerk-Autarkie von ca. 30% auf bis zu 90%. Durch das integrierte Heizschutzsystem bleibt die LFP-Batterie selbst im tiefsten Winter voll funktionsfähig.',
    specs: {
      'Lagerungs-Zellen': {
        'Nennkapazität': '1600 Wh (1.6 kWh)',
        'Zellchemie': 'LiFePO4 (Lithium-Eisenphosphat)',
        'Zyklenstabilität': '> 6.000 Ladezyklen (bei 80% Restkapazität)'
      },
      'Schnittstellen': {
        'Konstruktionsleistung': 'Eingang max. 800W / Ausgang max. 800W',
        'Eingänge / Ausgänge': 'Universal MC4 Anschlüsse',
        'App-Steuerung': 'Bluetooth & WLAN 2.4 GHz'
      }
    },
    includedItems: [
      '1x Anker Solix Solarbank E1600 Speichereinheit',
      '2x MC4 Spezialbatteriekabel (3m)',
      '1x MC4 Entriegelungsschlüssel',
      '1x Benutzerhandbuch'
    ],
    manuals: [
      { name: 'Anker Solarbank E1600 Installationshandbuch', type: 'pdf', size: '2.5 MB' },
      { name: 'Zertifizierung der elektromagnetischen Verträglichkeit', type: 'pdf', size: '1.1 MB' }
    ],
    isBestSeller: true
  },

  // --- ECOFLOW BRAND (STREAM SERIE) ---
  {
    id: 'bkw-1600-speicher',
    title: 'EcoFlow PowerStream 800W Balkonkraftwerk mit Delta Pro 3.6kWh Speicher',
    shortTitle: 'EcoFlow Delta Pro Set 3.6kWh',
    category: 'balkonkraftwerke',
    brand: 'EcoFlow',
    price: 1599.00,
    oldPrice: 1999.00,
    rating: 4.8,
    reviewCount: 94,
    stock: 'in_stock',
    deliveryTime: '3-5 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Hochmodernes Hybrid-Set aus Balkonkraftwerk und intelligenter 3.6kWh Speicherlösung',
      'EcoFlow PowerStream 800W Smart-Inverter zur gezielten Überschusseinspeisung',
      'Hocheffektive mobile EcoFlow Delta Pro LiFePO4 Station mit 3600W AC-Dauerleistung',
      'Inklusive 4x Trina Solar Vertex S+ Bifazial 440W Module (Gesamt 1760Wp)',
      'Volle Notstrom-Autarkie bei Netzausfall dank echter Powerstation-Ausgänge',
      'Smart-Plug-gesteuerte Steuerung: Echtzeit-Anpassung an Ihre Haushaltsgeräte'
    ],
    detailedDescription: 'Das absolute Premium-Balkonkraftwerk für maximale Unabhängigkeit aus der EcoFlow Stream-Reihe. Gekoppelt an die hocheffiziente EcoFlow Delta Pro Powerstation versorgt der bahnbrechende PowerStream Wechselrichter Ihr Hausnetz stets mit dem exakten Strombedarf. Haben Sie Smart Plugs an Waschmaschine oder Kühlschrank, weiß das System in Echtzeit, wohin der Strom fließen muss – und lädt den massiven 3.6kWh Speicher völlig eigenständig auf. Bei Netzausfall dient die Delta Pro als vollwertiges Backup-Aggregat.',
    specs: {
      'Hybrid-Wechselrichter': {
        'Nennleistung': '800 W AC',
        'MPPT DC Eingänge': '2 Tracker (je max. 400W)',
        'Wirkungsgrad': '97.2%'
      },
      'Energiespeicher Delta Pro': {
        'Kapazität': '3600 Wh (3.6 kWh)',
        'Zellchemie': 'LFP Lithium-Eisenphosphat',
        'Notstromfunktion': 'Liefert bis zu 3600W Dauerlast über Schuko-Steckdosen'
      },
      'Solar-PV-Generator': {
        'Module': '4x Trina Solar Vertex S+ Bifazial 440W (1760Wp)',
        'Garantiezeit': '25 Jahre Produktgarantie'
      }
    },
    includedItems: [
      '4x Trina Solar Vertex S+ 440Wp Doppelglas-Module',
      '1x EcoFlow PowerStream 800W Smart-Inverter',
      '1x EcoFlow Delta Pro 3.6kWh LiFePO4 Powerstation',
      '1x EcoFlow PowerStream Spezial-Batteriekabel',
      '2x EcoFlow Smart Plugs (Intelligente Steckdosen)',
      'Sämtliche Verbindungskabel & Netzkabel (5m)'
    ],
    manuals: [
      { name: 'EcoFlow PowerStream Handbuch (DE)', type: 'pdf', size: '3.2 MB' },
      { name: 'Delta Pro Datenblatt deutsch', type: 'pdf', size: '2.1 MB' }
    ],
    options: [
      { name: 'Halterset', values: ['Ohne Halterung', '4x Ziegeldach Schrägmontage (+229,00 €)', '4x Flachdach-Aufständerung (+189,00 €)'] }
    ],
    isBestSeller: true,
    isOffer: true
  },
  {
    id: 'bkw-ef-stream-d2max',
    title: 'EcoFlow PowerStream 800W Balkonkraftwerk mit Delta 2 Max 2.0kWh Speicher',
    shortTitle: 'EcoFlow Delta 2 Max Set',
    category: 'balkonkraftwerke',
    brand: 'EcoFlow',
    price: 1099.00,
    oldPrice: 1399.00,
    rating: 4.7,
    reviewCount: 48,
    stock: 'in_stock',
    deliveryTime: '2-4 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Smarte Solarlösung mit kompaktem 2048Wh (2 kWh) Premium-Speicher',
      'Nahtlose Steuerung über den EcoFlow PowerStream 800W Mikrowechselrichter',
      'Enthält 2x hocheffiziente 440Wp Trina Solar N-Type Bifazial Module',
      'LiFePO4-Zelltechnologie mit bis zu 10 Jahren konstanter Alltags-Lebensdauer',
      'Inklusive 2x EcoFlow Smart Plugs für vollautomatische Null-Einspeisung',
      'Tragbarer Akku mit integrierten USB & 230V Steckdosen für unterwegs'
    ],
    detailedDescription: 'Die perfekte Kombination aus stationärem Balkonkraftwerk-Speicher und tragbarer Premium-Powerstation für Outdoor, Camping und Notstrom. Die Delta 2 Max speichert tagsüber allen Überschuss Ihres Balkonkraftwerks. Über die EcoFlow App stellen Sie spielend leicht ein, wie viel Watt nachts abgegeben werden sollen. Und am Wochenende nehmen Sie den Speicher einfach mit zum See.',
    specs: {
      'Speichereinheit': {
        'Modell': 'EcoFlow Delta 2 Max',
        'Batterietyp': 'LiFePO4 (Lithium-Eisenphosphat)',
        'Kapazität': '2048 Wh (2.04 kWh)',
        'Zyklenlebensdauer': '3.000 Zyklen bis 80% Kapazität'
      },
      'Wechselrichter': {
        'Modell': 'EcoFlow PowerStream 800W',
        'Ausgangsleistung': '800 Watt (auf 600W drosselbar)'
      }
    },
    includedItems: [
      '1x EcoFlow Delta 2 Max Powerstation',
      '1x EcoFlow PowerStream 800W Wechselrichter',
      '2x Trina Solar 440Wp Bifaziale Solarmodule',
      '2x EcoFlow Smart Plug Stecker',
      '1x PowerStream-Akkukabel',
      '1x Schutzkontakt-Anschlusskabel (5m)'
    ],
    manuals: [
      { name: 'Bedienungsanleitung Delta 2 Max (DE)', type: 'pdf', size: '2.8 MB' },
      { name: 'EcoFlow Smart Plug Schnellstart-Anleitung', type: 'pdf', size: '0.8 MB' }
    ]
  },
  {
    id: 'wr-hoymiles-800',
    title: 'EcoFlow PowerStream 800W Mikrowechselrichter mit WLAN',
    shortTitle: 'EcoFlow PowerStream Inverter',
    category: 'wechselrichter',
    brand: 'EcoFlow',
    price: 159.00,
    oldPrice: 199.00,
    rating: 4.8,
    reviewCount: 112,
    stock: 'in_stock',
    deliveryTime: '1-3 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Der weltweit erste intelligente Mikrowechselrichter für Balkon-Speicher',
      'Nahtlos integriertes WLAN und Bluetooth für umfassende Echtzeit-App-Analyse',
      'Zwei separate MPPT-Solarregler (je 400W Eingangskraft)',
      'Ermöglicht drosselbare Nennleistungen von 600W bis zu 800W',
      'Kompaktes, lüfterloses Alugehäuse mit sehr hohem IP67 Wasserschutz'
    ],
    detailedDescription: 'EcoFlow PowerStream ist das gehirnähnliche Herzstück Ihres Stecker-Solar-Heimnetzwerks. Als vollwertiger Grid-Tie-Inverter regelt er den Stromfluss zwischen Solarmodulen, Powerstation und Hauptstromzähler. Durch die smarte Integration der EcoFlow Gateway Plugs füttert der Inverter nur die Menge an Energie ein, die Ihre Verbraucher tatsächlich im selben Moment benötigen. Perfekte Vermeidung von kostenlosen Geschenken an nationale Netzbetreiber.',
    specs: {
      'Ausgang AC': {
        'Nennleistung': '800 VA (600W drosselbar)',
        'Einspeisungsphase': 'Einphasig (Schuko)',
        'Netzkonformität': 'VDE 4105 & CE zertifiziert'
      },
      'Eingang DC (Solar & Akku)': {
        'Max. MPPT Eingangsspannung': '55V',
        'Max. Eingangsstrom': '2 x 13A',
        'Batterie-Ladespannung': '30V - 58V DC'
      }
    },
    includedItems: [
      '1x EcoFlow PowerStream 800W Wechselrichter',
      '1x EcoFlow Netzkabel (5m)',
      '1x Solar-Anschlusskabel-Paar',
      'Deutsche Konfigurationsanleitung'
    ],
    manuals: [
      { name: 'EcoFlow PowerStream Inverter Specs Deutsch', type: 'pdf', size: '1.2 MB' }
    ],
    isBestSeller: true
  },
  {
    id: 'zub-ef-smart-plug',
    title: 'EcoFlow Smart Plug (Intelligente Steckdose für Null-Einspeisung)',
    shortTitle: 'EcoFlow Smart Plug',
    category: 'zubehoer',
    brand: 'EcoFlow',
    price: 29.00,
    oldPrice: 39.00,
    rating: 4.6,
    reviewCount: 74,
    stock: 'in_stock',
    deliveryTime: '1-3 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Erfasst den exakten Stromverbrauch angeschlossener Geräte live',
      'Automatische Echtzeitübermittlung der Energiewerte an den PowerStream Inverter',
      'Ermöglicht eine absolut bedarfsgerechte Null-Einspeisung im Hausnetz',
      'Komfortable Steuerung, Zeitschaltpläne & Sprachbefehle via Alexa/Google Home',
      'Integrierter Überlastschutz schützt Haushaltsgeräte zuverlässig'
    ],
    detailedDescription: 'Der EcoFlow Smart Plug misst den momentanen Verbrauch eines Großabnehmers (z. B. Kühlschrank oder Waschmaschine) und übermittelt diesen an den PowerStream-Wechselrichter. Dieser passt die eingespeiste Leistung sekundenschnell an. So wird keine wertvolle Batterieladung ins öffentliche Stromnetz verschenkt. Ein unschlagbares Must-Have für die smarte Autarkie.',
    specs: {
      'Betriebskenndaten': {
        'Max. Schaltleistung': '230V / 16A (max. 3680W)',
        'Konnektivität': 'WLAN 2.4 GHz & Bluetooth',
        'Standby-Verbrauch': '< 0.5 Watt'
      }
    },
    includedItems: [
      '1x EcoFlow Smart Plug Steckdosenzwischenstecker',
      'Bedienungsanleitung'
    ],
    manuals: [
      { name: 'EcoFlow Smart Plug Handbuch (DE)', type: 'pdf', size: '0.8 MB' }
    ]
  },
  {
    id: 'bat-byd-77',
    title: 'EcoFlow PowerOcean Drei-Phasen LFP Heimspeicher Modul 5.1kWh',
    shortTitle: 'EcoFlow PowerOcean 5.1kWh',
    category: 'speicher',
    brand: 'EcoFlow',
    price: 2999.00,
    oldPrice: 3599.00,
    rating: 4.9,
    reviewCount: 46,
    stock: 'in_stock',
    deliveryTime: '4-8 Werktage (Spedition)',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Erweiterbares Hocholt-Lithium-Eisenphosphat (LFP) Speichermodul',
      '5.1 kWh Nutzkapazität für autarke dreiphasige Ganzhaus-Versorgungen',
      'Eigensichere Batteriezellen (Aerosol-Brandschutzlöschtechnik integriert)',
      'Ultradünner Formfaktor: Nur 18 cm Tiefe für platzsparende Wandmontage',
      'Zukunftssicher modular: Auf bis zu 15.3 kWh pro Turm direkt koppelbar',
      'Herausragende Herstellergarantie von vollen 15 Jahren'
    ],
    detailedDescription: 'Das EcoFlow PowerOcean Heimspeichersystem hebt Ihre Energietechnologie auf ein völlig neues Design- und Sicherheitsniveau. Durch die Verwendung fortschrittlichster prismatischer CATL-Batteriezellen auf LiFePO4-Basis ist dieser Heimspeicher extrem flach und besticht durch Langlebigkeit. Ein absolut sicheres, integriertes Brandlöschanodensystem sorgt für höchsten Schutz in Innenräumen.',
    specs: {
      'Schnittstellenspezifikationen': {
        'Nutzbare Kapazität': '5.12 kWh',
        'Nennspannung': '400V bis 800V (Hochvolt)',
        'Arbeitsspannungsbereich': '350V - 900V',
        'Sicherheitsklasse': 'IP65 Staub- und Strahlwasserschutz'
      },
      'Abmessungen & Konstruktion': {
        'Maße (B × H × T)': '680 × 510 × 180 mm',
        'Gewicht': '59.0 kg'
      }
    },
    includedItems: [
      '1x EcoFlow PowerOcean 5.1kWh Akkumodul',
      'Vormontiertes Wandbefestigungsgerüst',
      'Integrierter Batterie-Management-Controller (BMS)'
    ],
    manuals: [
      { name: 'EcoFlow PowerOcean Broschüre & Specs (DE)', type: 'pdf', size: '2.5 MB' },
      { name: 'Garantie- und Einbaurichtlinien EcoFlow', type: 'pdf', size: '1.4 MB' }
    ]
  },

  // --- ZENDURE BRAND (NEW!) ---
  {
    id: 'bkw-zendure-solarflow-hyper',
    title: 'Zendure SolarFlow Hyper 2000 smartes Balkonkraftwerk mit AB2000S Speicher (1.92kWh)',
    shortTitle: 'Zendure Hyper 2000 Set',
    category: 'balkonkraftwerke',
    brand: 'Zendure',
    price: 999.00,
    oldPrice: 1299.00,
    rating: 4.8,
    reviewCount: 104,
    stock: 'in_stock',
    deliveryTime: '2-5 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Weltweit erster AC-gekoppelter Plug & Play Hybrid-Wechselrichter & Speicher-Hub',
      'Smarte Solarlösung mit 1.920 Wh (1.92 kWh) Zendure AB2000S LiFePO4-Speicher',
      'Zellinterne Heizfolien sorgen für uneingeschränktes Laden selbst bei klirrenden -20°C',
      'Inklusive 2x Trina Solar Vertex S+ 440Wp N-Type Bifaziale Module im Komplettset',
      'Drahtlose Steuerung über Shelly Pro 3EM oder Zendure Smart Plugs zur Nulleinspeisung',
      'Maximale Sicherheit dank flammhemmendem Aluminium-Druckgussgehäuse und IP65'
    ],
    detailedDescription: 'Die absolute Spitzenklasse im Segment der intelligenten Stecker-Solarspeicher. Das Zendure SolarFlow Hyper 2000 System vereint Inverter und Batteriespeicher-Hub in einem eleganten Gehäuse. Im Lieferumfang ist der bahnbrechende AB2000S Akkumulator enthalten, welcher dank integrierter Heizfolien auch im tiefsten Winter unbeschadet geladen und entladen werden kann. Gekoppelt an die Zendure App maximieren Sie Ihre Unabhängigkeit vom Netzbetreiber auf über 85%.',
    specs: {
      'Smarte Regeleinheit': {
        'Hub-Modell': 'Zendure AIO Hyper 2000',
        'MPPT-Eingangsleistung': 'Bis zu 1200W Solar-Direktanschluss',
        'AC-Ausgangsleistung': '800 Watt (App-regulierbar)'
      },
      'Akkuleistung AB2000S': {
        'Kapazität': '1920 Wh (1.92 kWh)',
        'Zellchemie': 'LiFePO4 Lithium-Eisenphosphat',
        'Heizfunktion': 'Auto-Heizung bei Minusgraden (bis -20°C)'
      }
    },
    includedItems: [
      '2x Trina Solar Vertex S+ 440Wp Bifazialmodule',
      '1x Zendure Hyper 2000 PVHub / Hybrid-Inverter',
      '1x Zendure AB2000S LFP-Batteriespeicher (1.92 kWh)',
      '1x Netzanschluss-Schukokabel (5m)',
      '1x Komplettes MC4-Anschlusskabelsatz',
      'Installations-Zertifikat für VDE-AR-N 4105'
    ],
    manuals: [
      { name: 'Zendure Hyper 2000 Handbuch (DE)', type: 'pdf', size: '3.1 MB' },
      { name: 'AB2000S Speicher Sicherheitsdatenblatt', type: 'pdf', size: '1.7 MB' }
    ],
    isBestSeller: true
  },
  {
    id: 'bat-zendure-ab2000s',
    title: 'Zendure SolarFlow AB2000S Zusatzakku 1.92kWh (LiFePO4 mit Heizfunktion)',
    shortTitle: 'Zendure AB2000S Speicher',
    category: 'speicher',
    brand: 'Zendure',
    price: 549.00,
    oldPrice: 699.00,
    rating: 4.9,
    reviewCount: 52,
    stock: 'in_stock',
    deliveryTime: '2-4 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Fortschrittliche Zusatzbatterie mit massiven 1.920 Wh (1.92 kWh) Energiedichte',
      'Integrierte Selbsterwärmungs-Heizfolie für volle Ladefunktion bei bis zu -20°C',
      'Ultra-langlebige LiFePO4-Prismenzellen für über 6.000 vollständige Ladezyklen',
      'Modular stapelbar: Bis zu 4 Einheiten für kolossale 7.68 kWh Gesamtkapazität',
      'Extrem robustes und schlagfestes Aluminiumgehäuse mit IP65-Witterungsschutz',
      'Herausragende Zuverlässigkeit mit vollen 10 Jahren Leistungsgarantie'
    ],
    detailedDescription: 'Schluss mit Solarverlusten an eisigen Wintertagen. Der Zendure AB2000S LFP-Speicher wurde speziell entwickelt, um rauen Witterungen standzuhalten. Wenn herkömmliche Akkus ab 0°C das Laden verweigern, heizt sich die AB2000S eigenständig mit überschüssigem Solarstrom auf und arbeitet ungestört weiter. Eine absolute Wunderwaffe auf deutschen Balkonen und Gärten für den Ganzjahreseinsatz.',
    specs: {
      'Technische Leistungsdaten': {
        'Nennkapazität': '1920 Wh (1.92 kWh)',
        'Arbeitsspannung': '48 V DC',
        'Max. Ladestrom': '30 A',
        'Zellchemie': 'LiFePO4 Premium'
      },
      'Physikalische Daten': {
        'Maße (B × H × T)': '350 × 200 × 260 mm',
        'Gewicht': '21.6 kg',
        'Zyklenstabilität': '> 6.000 Zyklen'
      }
    },
    includedItems: [
      '1x Zendure AB2000S Speichereinheit',
      '1x Hochstrom-Batterieverbindungskabel',
      'Montageschrauben & Halterungs-Sicherheitsriemen'
    ],
    manuals: [
      { name: 'Zendure SolarFlow Batterie Serie Datenblatt', type: 'pdf', size: '1.9 MB' }
    ]
  },
  {
    id: 'bat-zendure-pvhub1200',
    title: 'Zendure SolarFlow PVHub 1200 Smart-Steuergerät für Balkonspeicher',
    shortTitle: 'Zendure PVHub 1200',
    category: 'wechselrichter',
    brand: 'Zendure',
    price: 199.00,
    oldPrice: 249.00,
    rating: 4.7,
    reviewCount: 61,
    stock: 'in_stock',
    deliveryTime: '1-3 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Der bewährte Solarenergie-Manager für bestehende Balkonkraftwerke',
      'Verteilt Solarüberschüsse intelligent zwischen Akku und Mikrowechselrichter',
      'Zwei separate Eingänge für MPP-Solar-Regelung (je max. 400W)',
      'Kompatibel mit den Batterien AB1000 & AB2000 / AB2000S',
      'Umfassende Smart-Home Koppelbarkeit mit Shelly, Ecowitt & Co.'
    ],
    detailedDescription: 'Haben Sie bereits ein funktionierendes Balkonkraftwerk und möchten einen Akku nachrüsten? Der Zendure SolarFlow PVHub 1200 ist das Bindeglied, das Sie brauchen. Er wird einfach zwischen Ihre Solarmodule, den vorhandenen Mikrowechselrichter (z. B. Hoymiles, Deye, Tschibo) und den Akku gesteckt. Sofort regelt er die intelligente Einspeisung und Batterieladung vollautomatisch.',
    specs: {
      'System-Parameter': {
        'Max. Bucheingang': '800 Watt',
        'MPPT Solarregler': '2 Tracker (16V - 60V DC)',
        'Schutzklasse': 'IP65 spritzwassergeschützt'
      }
    },
    includedItems: [
      '1x Zendure SolarFlow PVHub 1200',
      'Y-Verbindungskabelset',
      'Benutzerhandbuch Deutsch'
    ],
    manuals: [
      { name: 'Zendure PVHub 1200 Benutzerhandbuch (DE)', type: 'pdf', size: '2.5 MB' }
    ]
  },

  // --- TRINA SOLAR BRAND (KEEP IN PV MODULES SECTION FOR CATALOG SELECTIONS) ---
  {
    id: 'mod-trina-440',
    title: 'Trina Solar Vertex S+ 440Wp Glas-Glas Bifazial Photovoltaikmodul',
    shortTitle: 'Trina Vertex S+ 440W',
    category: 'solarmodule',
    brand: 'Trina Solar',
    price: 65.00,
    oldPrice: 89.00,
    rating: 4.9,
    reviewCount: 310,
    stock: 'in_stock',
    deliveryTime: '3-6 Werktage (Spedition)',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Bifaziale Doppelglas-Technologie: Bis zu 25% Mehrertrag durch Umgebungsrückstrahlung',
      'Hocheffiziente N-Type i-TOPCon Zellen für herausragendes Schwachlichtverhalten',
      'Ultrarobustes Doppelglas (1.6mm pro Seite) schützt vor Hagel und mechanischer Last',
      'Elegantes Design mit schwarzem, eloxiertem Aluminiumrahmen (Black Frame)',
      'Geringste Degradation: Sensationelle 30 Jahre Leistungsgarantie des Herstellers'
    ],
    detailedDescription: 'Das Trina Vertex S+ (NEG9RC.27) setzt den Maßstab für moderne Photovoltaik-Dachpaneele. Durch das beidseitig wirkende, gehärtete Sicherheitsglas ist dieses Modul extrem widerstandsfähig gegen starke Stürme, Ammoniak und Feuchtigkeit. Dank hochentwickelter N-Type Zellen erreicht es an Regentagen oder in den Abendstunden bis zu 15% stabilere Ertragsleistungen im Verbund als traditionelle Paneele.',
    specs: {
      'Elektrische Richtdaten (STC)': {
        'Maximale Nennleistung': '440 Wp',
        'Nennspannung Umpp': '44.0 V',
        'Modulwirkungsgrad': '22.0 %'
      },
      'Mechanische Werte': {
        'Zellarchitektur': 'Mono N-Type (144 Halbzellen)',
        'Abmessungen (L × B × H)': '1762 × 1134 × 30 mm',
        'Gewicht': '21.0 kg'
      }
    },
    includedItems: [
      '1x Trina Solar Vertex S+ 440Wp N-Type Modul',
      'MC4 original Anschlüsse vorintegriert'
    ],
    manuals: [
      { name: 'Trina Vertex S+ 440W Technische Spezifikationen', type: 'pdf', size: '1.8 MB' }
    ],
    isBestSeller: true
  },

  // --- FOXESS BRAND ---
  {
    id: 'wr-fox-h3',
    title: 'FoxESS H3-10.0-E Drei-Phasen Hybrid-Wechselrichter 10.0kW Gen2',
    shortTitle: 'FoxESS H3 10kW Hybrid-WR',
    category: 'wechselrichter',
    brand: 'FoxESS',
    price: 1499.00,
    oldPrice: 1989.00,
    rating: 4.9,
    reviewCount: 52,
    stock: 'in_stock',
    deliveryTime: '2-5 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Dreiphasiger PV-Hybridwechselrichter der Spitzenklasse für Eigenheimsysteme',
      'Volle dreiphasige Ersatzstromfähigkeit (Notstrom) mit weniger als 20ms Schaltzeit',
      'Inklusive FoxESS Smart-Meter für präzises Hausenergiemanagement im Set',
      'Optimiert für FoxESS ESC2900 / ECS4100 Hochvolt-Batterieracks',
      'Smarte Überwachung per WiFi/LAN direkt über die kostenlose Fox Cloud App',
      'Extrem kompakter Aluminiumkörper mit leiser Passivkühlung'
    ],
    detailedDescription: 'Der FoxESS H3-10.0-E Gen2 ist die Crème de la Crème im Segment der dreiphasigen PV-Hybrid-Wechselrichter für das anspruchsvolle Eigenheim. Gekoppelt mit einem Akkuspeicher schaltet das System bei einem totalen Stromausfall in unter 20 Millisekunden auf dreiphasigen Notstromersatzbetrieb um. So laufen Wärmepumpen, Wallboxen und Haushaltsgeräte völlig ungestört weiter.',
    specs: {
      'Eingangsdaten DC (Pv-Kraft)': {
        'Max. Eingangsleistung': '15.0 kWp',
        'Eingangsspannungsbereich': '160 V - 950 V',
        'MPP-Tracker': '2 Tracker'
      },
      'Ausgang AC (Hausstrom)': {
        'Nennleistung': '10.000 W (10 kW)',
        'Netzanschluss': '3-Phasen 400V / 230V',
        'Notstromschaltzeit': '< 20 ms (Automatische Umschaltung)'
      }
    },
    includedItems: [
      '1x FoxESS H3-10.0-E Hybrid-Wechselrichter',
      '1x FoxESS Smart Meter (Chint DTSU666)',
      '1x FoxESS WiFi-Datalogger-Stick',
      'Wandmontageplatte und Installationsstecker'
    ],
    manuals: [
      { name: 'FoxESS H3 10kW Datenblatt PDF', type: 'pdf', size: '2.4 MB' },
      { name: 'FoxESS Systemplanungs-Guide', type: 'pdf', size: '3.6 MB' }
    ]
  },
  {
    id: 'wr-fronius-10', // Mapped to the old ID for SolarPlanner compatibility!
    title: 'FoxESS H3-10.0-E Drei-Phasen Hybrid-Wechselrichter 10.0kW Gen2',
    shortTitle: 'FoxESS H3 10kW Hybrid-WR',
    category: 'wechselrichter',
    brand: 'FoxESS',
    price: 1499.00,
    oldPrice: 1989.00,
    rating: 4.9,
    reviewCount: 52,
    stock: 'in_stock',
    deliveryTime: '2-5 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Dreiphasiger PV-Hybridwechselrichter der Spitzenklasse für Eigenheimsysteme',
      'Volle dreiphasige Ersatzstromfähigkeit (Notstrom) mit weniger als 20ms Schaltzeit',
      'Inklusive FoxESS Smart-Meter für präzises Hausenergiemanagement im Set',
      'Optimiert für FoxESS ESC2900 / ECS4100 Hochvolt-Batterieracks',
      'Smarte Überwachung per WiFi/LAN direkt über die kostenlose Fox Cloud App',
      'Extrem kompakter Aluminiumkörper mit leiser Passivkühlung'
    ],
    detailedDescription: 'Der FoxESS H3-10.0-E Gen2 ist die Crème de la Crème im Segment der dreiphasigen PV-Hybrid-Wechselrichter für das anspruchsvolle Eigenheim. Gekoppelt mit einem Akkuspeicher schaltet das System bei einem totalen Stromausfall in unter 20 Millisekunden auf dreiphasigen Notstromersatzbetrieb um. So laufen Wärmepumpen, Wallboxen und Haushaltsgeräte völlig ungestört weiter. Die einfache Installation per schraublose Plug & Connect Anschlüsse verkürzt die Arbeitszeit des Elektrikers erheblich.',
    specs: {
      'Eingangsdaten DC (Pv-Kraft)': {
        'Max. Eingangsleistung': '15.0 kWp',
        'Eingangsspannungsbereich': '160 V - 950 V',
        'MPP-Tracker': '2 Tracker'
      },
      'Ausgang AC (Hausstrom)': {
        'Nennleistung': '10.000 W (10 kW)',
        'Netzanschluss': '3-Phasen 400V / 230V',
        'Notstromschaltzeit': '< 20 ms (Automatische Umschaltung)'
      }
    },
    includedItems: [
      '1x FoxESS H3-10.0-E Hybrid-Wechselrichter',
      '1x FoxESS Smart Meter (Chint DTSU666)',
      '1x FoxESS WiFi-Datalogger-Stick',
      'Wandmontageplatte und Installationsstecker'
    ],
    manuals: [
      { name: 'FoxESS H3 10kW Datenblatt PDF', type: 'pdf', size: '2.4 MB' },
      { name: 'FoxESS Systemplanungs-Guide', type: 'pdf', size: '3.6 MB' }
    ]
  },
  {
    id: 'bat-fox-ecs2900',
    title: 'FoxESS Energy Cube ECS2900 Hochvolt-Akkuspeicher 8.64kWh Set',
    shortTitle: 'FoxESS Energy Cube 8.64kWh',
    category: 'speicher',
    brand: 'FoxESS',
    price: 3699.00,
    oldPrice: 4299.00,
    rating: 4.8,
    reviewCount: 38,
    stock: 'in_stock',
    deliveryTime: '4-7 Werktage (Spedition)',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Modulares, stapelbares Hochvolt-Speicher-Set aus BMS und 3x ECS2900 Batteriemodulen',
      '8.64 kWh Gesamtkapazität für gehobene Autarkieansprüche des Haushalts',
      'Prismatische kobaltfreie Premium Lithium-Eisenphosphat-Zellen (LiFePO4)',
      'Einfaches schraubloses Stecksystem für sekundenschnellen Aufbau',
      'Skalierbar: Einfache Erweiterung auf bis zu 7 Module (20.16 kWh) pro Batterieturm',
      'Extrem hohe Entladetiefe von 90% (DoD) und bis zu 10 Jahre Systemgarantie'
    ],
    detailedDescription: 'Der FoxESS Energy Cube ECS2900 ist ein hochmodernes, modulares Hochvolt-Akkusystem. Dank des patentierten "Stack"-Designs können die einzelnen Module ohne lästige Verkabelung einfach übereinandergestapelt werden – die elektrische Verbindung erfolgt sicher über inside-stehende Passkontakte. Perfekt abgestimmt auf die FoxESS H1/H3-Wechselrichterserie für ungebremste solare Speicherung.',
    specs: {
      'System-Parameter': {
        'Nennkapazität': '8640 Wh (8.64 kWh)',
        'Betriebsspannung Set': '172.8 V DC',
        'Zellchemie': 'LiFePO4 Lithium-Eisenphosphat'
      },
      'Physikalische Daten': {
        'Modulanzahl': '3 Module (je 2.88 kWh) + 1x BMS-Hutschnittstelle',
        'Maße (B × H × T)': '570 × 640 × 380 mm',
        'Gewicht Gesamt': '111.0 kg'
      }
    },
    includedItems: [
      '3x FoxESS ECS2900 Batteriemodule',
      '1x FoxESS CM-BMS Steuereinheit (Base & Top)',
      'Sämtliches Montagematerial',
      'Originale Installations- und Konfigurationsleitfäden'
    ],
    manuals: [
      { name: 'FoxESS Energy Cube Serie Datenblatt PDF', type: 'pdf', size: '1.6 MB' },
      { name: 'ECS2900 Schnellinstallationsanleitung', type: 'pdf', size: '2.1 MB' }
    ]
  },

  // --- ACCESSORIES / GENERAL PARTS (BRANDED ANKER) ---
  {
    id: 'zub-shelly-pro3em',
    title: 'Anker Solix Smart Meter 3-Phasen Energiemessgerät Wifi/LAN',
    shortTitle: 'Anker Solix Smart Meter',
    category: 'zubehoer',
    brand: 'Anker Solix',
    price: 89.00,
    oldPrice: 119.00,
    rating: 4.9,
    reviewCount: 228,
    stock: 'in_stock',
    deliveryTime: '1-3 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Präzises dreiphasiges Smart Meter für die DIN-Hutschiene im Zählerkasten',
      'Misst den genauen Verbrauch und die solare Rückspeisung in Echtzeit',
      'Inklusive 3x Wandlerklemmen für eine berührungslose Montage ohne Eingriff',
      'Steuert die Anker Solarbank E1600 vollkommen automatisch nach Strombedarf',
      'Einfache WLAN-Einbindung über die Anker Solix App'
    ],
    detailedDescription: 'Der Anker Solix Smart Meter erfasst im Hauptverteilerkasten die Ströme aller 3 Wicklungsphasen im gesamten Hausnetz. Durch diese lückenlose Echtzeitdatenübertragung weiß Ihre Solarbank E1600 zu jeder Sekunde des Tages exakt, wie hoch Ihr wahrer Hausverbrauch ist, und schickt nur die benötigte Energie ins Netz. Die perfekte Null-Einspeiseregelung ohne Verschwendung.',
    specs: {
      'Betriebswerte': {
        'Spannung': '110 - 240V AC',
        'Messwandler': '3 Stück à max. 120A',
        'Konnektivität': 'WLAN 2.4GHz & Bluetooth'
      }
    },
    includedItems: [
      '1x Anker Solix Smart Meter Messeinheit',
      '3x Klappwandlerklemmen',
      'Montageanleitung für Elektrikermeister'
    ],
    manuals: [
      { name: 'Anker Smart Meter Technische Spezifikationen', type: 'pdf', size: '1.1 MB' }
    ],
    isBestSeller: true
  },
  {
    id: 'zub-mount-balcony',
    title: 'Anker Solix Premium Alu-Balkonhalterung neigbar (15-30 Grad)',
    shortTitle: 'Anker Solix Balkonhalterung',
    category: 'zubehoer',
    brand: 'Anker Solix',
    price: 59.50,
    oldPrice: 89.00,
    rating: 4.8,
    reviewCount: 154,
    stock: 'in_stock',
    deliveryTime: '2-4 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Maximale Ertragsförderung durch stufenlos einstellbaren Anstellwinkel',
      'Konstruiert aus korrosionsfestem, gehärtetem T6005 Luftfahrt-Aluminium',
      'Bombenfeste Edelstahl-Klemmen inklusive massiver V2A Sicherungshaken',
      'Inklusive Gummischutz-Streifen zur kratzerfreien Anbringung am Gitter',
      'Optimal geeignet für Anker RS40 Solarmodule und Fremdpaneele'
    ],
    detailedDescription: 'Schluss mit ertragsarmen Steilhängungen am Balkon. Durch unsere extrem flexible Aluminium-Halterung von Anker Solix verstellen Sie den optimalen solaren Neigungswinkel stufenlos zwischen 15 und 30 Grad. Die Konstruktion ist sturmsicher, absolut wetterfest und lässt sich von Hobby-Handwerkern in unter 30 Minuten vollständig anbringen.',
    specs: {
      'Werkstoffdaten': {
        'Material': 'Flugzeugaluminium Al6005-T5',
        'Verschraubung': 'Premium Edelstahl V2A',
        'Zertifizierter Windschutz': 'Bis zu Windstärke 12'
      }
    },
    includedItems: [
      '2x Teleskopierbare Neigungsstreben',
      '4x Edelstahl Balkongittergurt-Verschraubungen',
      '1x Set Gummiunterlagen & Montage-Kleinteile'
    ],
    manuals: [
      { name: 'Anker Solix Halterung TÜV Prüfzertifikat', type: 'pdf', size: '1.6 MB' }
    ]
  }
];

// Realistic database for review generation or seeding
export const MOCK_REVIEWS: { [productId: string]: ProductReview[] } = {
  'bkw-800-premium': [
    {
      id: 'rev-1',
      userName: 'Stefan K.',
      rating: 5,
      date: '10.05.2026',
      comment: 'Super Paket von Anker Solix! Das Paket war binnen 3 Tagen da. Die Module machen einen extrem robusten Eindruck. Der Einbau war absolut problemlos und die App liefert super Echtzeitwerte.',
      verified: true
    },
    {
      id: 'rev-2',
      userName: 'Monika B.',
      rating: 5,
      date: '28.04.2026',
      comment: 'Sehr gut verpackt und die Einrichtung per Bluetooth/WLAN App dauerte gerade einmal 3 Minuten. Die Full-Black Optik sieht bei uns am Balkongitter fantastisch aus.',
      verified: true
    }
  ],
  'bkw-1600-speicher': [
    {
      id: 'rev-10',
      userName: 'Timo R.',
      rating: 5,
      date: '02.06.2026',
      comment: 'Das EcoFlow PowerStream Set mit der Delta Pro ist der Hammer! Endlich echter Notstrom bei Netzausfall und dazu die perfekte Steuerung über die Plugs. Perfekt.',
      verified: true
    }
  ],
  'bkw-zendure-solarflow-hyper': [
    {
      id: 'rev-20',
      userName: 'Felix M.',
      rating: 5,
      date: '12.06.2026',
      comment: 'Der Hyper 2000 ist ein echter Meilenstein. Absolut geräuschloser, unaufgeregter Betrieb. Dass der Akku eine Heizfolie hat, beruhigt mich unendlich für den Winter. Einfach Top.',
      verified: true
    }
  ]
};

// Help helper for category formatting
export const CATEGORY_LABELS = {
  balkonkraftwerke: 'Balkonkraftwerke',
  solarmodule: 'Solarmodule',
  wechselrichter: 'Wechselrichter',
  speicher: 'Speicher',
  waermepumpen: 'Wärmepumpen',
  zubehoer: 'Zubehör'
};
