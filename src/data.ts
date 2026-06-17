/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, ProductReview } from './types';

// Let's define the products for each category
export const PRODUCTS: Product[] = [
  // --- BALKONKRAFTWERKE ---
  {
    id: 'bkw-800-premium',
    title: 'OnlineSolar Balkonkraftwerk 800W Premium Komplettset',
    shortTitle: 'BKW 800W Premium-Set',
    category: 'balkonkraftwerke',
    brand: 'OnlineSolar',
    price: 329.00,
    oldPrice: 429.00,
    rating: 4.8,
    reviewCount: 142,
    stock: 'in_stock',
    deliveryTime: '2-4 Werktage',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Steckerfertiges Komplettset für den einfachen Hausanschluss (Plug & Play)',
      '800 Watt AC-Ausgangsleistung – konform mit aktuellem Solarpaket I',
      'Zwei bifaziale Trina Solar Vertex S+ Glas-Glas Module mit je 440Wp (Insgesamt 880Wp)',
      'Hoymiles HMS-800-2T Mikrowechselrichter mit integriertem WLAN-Modul',
      'Ertragsüberwachung direkt per Smartphone-App (S-Miles Cloud)',
      '25 Jahre lineare Leistungsgarantie auf die Solarmodule'
    ],
    detailedDescription: 'Unser meistverkauftes Balkonkraftwerk bietet Ihnen den perfekten Einstieg in die eigene Stromerzeugung. Durch die modernen doppelseitig aktiven (bifazialen) Glas-Glas-Module von Trina Solar nutzt diese Anlage nicht nur das direkte Sonnenlicht auf der Vorderseite, sondern fängt auch reflektiertes Licht auf der Rückseite ein. Das sorgt für bis zu 25% zusätzliche Leistung an bewölkten Tagen. Der hocheffiziente Hoymiles HMS-800-2T Mikrowechselrichter drosselt die Anlage sicher auf 800W und überträgt alle Leistungsdaten direkt per WLAN an Ihre App, ganz ohne zusätzliches Gateway.',
    specs: {
      'Wechselrichter & Netzeinspeisung': {
        'Nennleistung': '800 VA (AC)',
        'Hersteller / Modell': 'Hoymiles HMS-800W-2T',
        'MPPT-Eingänge': '2 unabhängige Tracker',
        'Schutzart': 'IP67 (Staub- und Wasserdicht)',
        'Netzanschluss': 'Schukostecker / Betteri (BC01)'
      },
      'Solarmodule': {
        'Modul-Typ': 'Trina Solar Vertex S+ N-Type Dual-Glass',
        'Nennleistung je Modul': '440 Wp',
        'Gesamtleistung': '880 Wp',
        'Zelltechnologie': 'N-Type i-TOPCon',
        'Rahmenfarbe': 'Eloxiertes Schwarz (Black Frame)'
      },
      'Abmessungen & Gewicht': {
        'Maße pro Modul': '1762 × 1134 × 30 mm',
        'Gewicht pro Modul': '21.0 kg',
        'Wechselrichter Maße': '250 × 170 × 35 mm'
      },
      'Garantie': {
        'Produktgarantie Module': '25 Jahre',
        'Leistungsgarantie Module': '30 Jahre (87.4% Mindestleistung)',
        'Wechselrichter-Garantie': '12 Jahre'
      }
    },
    includedItems: [
      '2x Trina Solar Vertex S+ 440W bifaziale Glas-Glas-Module',
      '1x Hoymiles HMS-800-2T Mikrowechselrichter mit WLAN',
      '1x Netzkabel (Schuko auf BC01), Länge nach Wahl (5m standardmäßig)',
      '2x MC4-Verlängerungskabel (2m) zum Anschluss der Module',
      '1x Verschlossene Endkappe für den Wechselrichter',
      '1x Bebilderte deutsche Anleitung'
    ],
    manuals: [
      { name: 'Technisches Datenblatt Trina Vertex S+ (DE)', type: 'pdf', size: '1.2 MB' },
      { name: 'Hoymiles HMS-800W Handbuch (DE)', type: 'pdf', size: '2.4 MB' },
      { name: 'Schritt-für-Schritt Montageanleitung OnlineSolar', type: 'pdf', size: '4.1 MB' }
    ],
    options: [
      { name: 'Netzkabellänge', values: ['5 Meter (Inklusive)', '10 Meter (+15,00 €)', '15 Meter (+29,00 €)'] },
      { name: 'Halterungstyp', values: ['Ohne Halterung', 'Flachdach/Boden Aufständerung (+59,00 €)', 'Balkongitter Halterung (+49,00 €)', 'Ziegeldach Solarmontage (+79,00 €)'] }
    ],
    isBestSeller: true
  },
  {
    id: 'bkw-1600-speicher',
    title: 'OnlineSolar Balkonkraftwerk 1600W mit 1.6kWh LFP Speicher',
    shortTitle: 'BKW 1600W mit Speicher Set',
    category: 'balkonkraftwerke',
    brand: 'OnlineSolar',
    price: 1099.00,
    oldPrice: 1499.00,
    rating: 4.7,
    reviewCount: 58,
    stock: 'in_stock',
    deliveryTime: '3-5 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Premium Set bestehend aus 4 Solarmodulen, Speicher und Smart-Inverter',
      'Anker Solix Solarbank E1600 Lithium-Eisenphosphat (LFP) Speicher inklusive',
      '1.600Wp Solarmodul-Gesamtleistung für optimale Ausbeute auch bei Schwachlicht',
      'Echtzeit-Steuerung der Einspeisung mittels intelligenter App-Konfiguration',
      'Über 6.000 Ladezyklen Garantie auf den Akkuspeicher (LiFePO4)',
      'Sparen Sie bis zu 450 € Stromkosten pro Jahr durch Nacht-Einspeisung'
    ],
    detailedDescription: 'Bringen Sie Ihr Balkonkraftwerk auf die nächste Stufe. Mit diesem Komplettset erzeugen Sie nicht nur tagsüber sauberen Strom, sondern speichern ungenutzte Energie einfach für die Abend- und Nachtstunden ab. Das Herzstück des Systems bildet der Anker Solix Speicher E1600 mit einer Kapazität von 1,6 Kilowattstunden (kWh). Die extrem langlebige LiFePO4-Batterietechnologie liefert über Jahrzehnte hinweg konstante Speicherleistung. Über die integrierte App-Steuerung können Sie grammgenau einstellen, wie viel Watt zu welcher Urzeit in Ihr Hausnetz fließen sollen.',
    specs: {
      'Speicher-Einheit': {
        'Kapazität': '1.600 Wh (1,6 kWh)',
        'Zellchemie': 'LiFePO4 (Lithium-Eisenphosphat)',
        'Zyklenlebenszeit': '> 6.000 Ladezyklen (bei 80% Restkapazität)',
        'Max. Ladeleistung': '800 W (Input)',
        'Betriebstemperatur': '-20 °C bis +55 °C'
      },
      'Wechselrichter': {
        'Modell': 'Hoymiles HMS-1600D (gedrosselt auf 800W)',
        'MPPTs': '4 unabhängige MPPT Tracker',
        'Schnittstellen': 'Bluetooth, WLAN'
      },
      'Solarmodule': {
        'Anzahl & Typ': '4x JinkoSolar Tiger Neo Full Black je 430W',
        'Nennleistung Gesamt': '1720 Wp',
        'Wirkungsgrad': '21.5%'
      },
      'Schutzklassen & Zertifikate': {
        'Schutzklasse Speicher': 'IP65 (Wasservollschutz)',
        'Netzkonformität': 'VDE-AR-N 4105 zertifiziert'
      }
    },
    includedItems: [
      '4x JinkoSolar Tiger Neo Full Black 430W N-Type Paneele',
      '1x Anker Solix Solarbank E1600 (1.6kWh Batteriespeicher)',
      '1x Hoymiles HMS-1600-4T Mikrowechselrichter (auf 800W einstellbar)',
      '1x MC4 Y-Abzweigverbinder Set',
      '1x Netzkabel (Schuko, 5m)',
      '4x MC4 DC-Spezialkabel für Speichereinbindung',
      'Bedienungsanleitung und App-Einrichtungsassistent'
    ],
    manuals: [
      { name: 'Anker Solix Solarbank E1600 Datenblatt', type: 'pdf', size: '3.1 MB' },
      { name: 'Spezifikationen Jinko Tiger 430W (DE)', type: 'pdf', size: '1.4 MB' }
    ],
    options: [
      { name: 'Speicherkapazität', values: ['1.6 kWh (1x Solarbank)', '3.2 kWh (2x Solarbank im Verbund) (+799,00 €)'] },
      { name: 'Halterungstyp', values: ['Ohne Halterung', 'Flachdach-Kufen Set für 4 Module (+99,00 €)', 'Schrägdach Ziegel Set für 4 Module (+139,00 €)'] }
    ],
    isOffer: true
  },

  // --- SOLARMODULE ---
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
      'Bifaziale Doppelglas-Technologie: Bis zu 25% Mehrertrag durch Einstrahlung auf der Rückseite',
      'Hocheffiziente N-Type i-TOPCon Zellen für herausragendes Schwachlichtverhalten',
      'Ultraflaches Design mit edlem, schwarz eloxierten Alurahmen',
      'Extrem robust: Zertifiziert für hohe Windlast (2400 Pa) und Schneelast (5400 Pa)',
      'Geringere Degradation: Nur 1% im ersten Jahr, danach 0,4% jährlich'
    ],
    detailedDescription: 'Das Trina Solar Vertex S+ NEG9RC.27 ist das absolute Vorzeigemodul der neuesten Generation. Durch die Vereinigung von glasfaserverstärktem Doppelglas und N-Type monokristallinen Zellen wird eine extreme Langlebigkeit garantiert. Durch die Bifazialität ernten Sie reflektiertes Umgebungslicht vom Boden, Wänden oder Nachbardächern ab. Das Modul behält selbst bei extrem hohen Sommertemperaturen einen exzellent niedrigen Temperaturkoeffizienten und generiert dadurch im Schnitt bis zu 8.5% mehr Solarstrom pro Jahr als herkömmliche P-Type Solarmodule.',
    specs: {
      'Elektrische Nenndaten (STC)': {
        'Maximale Leistung (Pmax)': '440 Wp',
        'Nennspannung (Umpp)': '44.0 V',
        'Nennstrom (Impp)': '10.01 A',
        'Leerlaufspannung (Uoc)': '52.2 V',
        'Kurzschlussstrom (Isc)': '10.67 A',
        'Modulwirkungsgrad': '22.0 %'
      },
      'Mechanische Eigenschaften': {
        'Zellen-Technologie': 'Mono N-Type i-TOPCon (144 Halbzellen)',
        'Glasdicke': '1.6 mm gehärtetes Glas oben & unten',
        'Rahmen': '30mm schwarzer Aluminiumrahmen (Black Frame)',
        'Anschlussdose / Stecker': 'IP68 klassifiziert / MC4-EVO2 kompatibel'
      },
      'Abmaße & Logistik': {
        'Maße (L × B × H)': '1762 × 1134 × 30 mm',
        'Gewicht': '21.0 kg',
        'Palettenkapazität': '36 Module pro Speditions-Karton'
      }
    },
    includedItems: [
      '1x Trina Solar Vertex S+ 440Wp N-Type Modul',
      'Integrierte Kabelpeitschen (ca. 1,1m lang)',
      'Vormontierte MC4 original EVO2 Anschlüsse'
    ],
    manuals: [
      { name: 'Trina Vertex S+ 440W Datenblatt PDF', type: 'pdf', size: '1.8 MB' },
      { name: 'Installations- & Garantiebestimmungen Trina', type: 'pdf', size: '0.9 MB' }
    ],
    options: [
      { name: 'Abnahmemenge', values: ['Einzelmodul', 'Halbe Palette (18 Module, Rabatt 3%)', 'Volle Palette (36 Module, Rabatt 7%)'] }
    ],
    isBestSeller: true
  },
  {
    id: 'mod-jinko-430',
    title: 'JinkoSolar Tiger Neo N-Type 430W Full Black Photovoltaikmodul',
    shortTitle: 'Jinko Tiger Neo 430W',
    category: 'solarmodule',
    brand: 'JinkoSolar',
    price: 59.50,
    oldPrice: 79.90,
    rating: 4.8,
    reviewCount: 189,
    stock: 'in_stock',
    deliveryTime: '4-7 Werktage (Spedition)',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Elegantes Full Black Design für anspruchsvolle Premium-Dachästhetik (vollständig schwarz)',
      'N-Type SMBB-Zelltechnologie reduziert interne Verschattungsverluste drastisch',
      'Hervorragendes Verhalten bei bewölktem Himmel & ungünstigem Lichteinfallwinkel',
      'Exzellente PID-Resistenz durch hochreine Fertigungsprozesse',
      'Hot-Spot-Schutz sorgt für minimalstes Risiko von punktuellen Erhitzungen'
    ],
    detailedDescription: 'Für alle, die großen Wert auf die perfekte Dachoptik legen: Das JinkoSolar Tiger Neo Full Black vereint edles, komplett schwarzes Design (Schwarze Rückseitenfolie, schwarze Verbinder, tiefschwarze Zellen und schwarzer Rahmen) mit der bahnbrechenden N-Type Multi-Busbar (SMBB) Technologie. Selbst ganz feine Details und Leiterbahnen verschwinden optisch. Mit einem Modulwirkungsgrad von 21.51% und einer 15-jährigen Hersteller-Produktgarantie sichern Sie sich ein Spitzenmodul vom weltgrößten Solarmodul-Produzenten.',
    specs: {
      'Elektrische Werte (STC)': {
        'Maximale Leistung (Pmax)': '430 Wp',
        'Nennspannung (Umpp)': '32.18 V',
        'Nennstrom (Impp)': '13.36 A',
        'Leerlaufspannung (Uoc)': '39.16 V',
        'Kurzschlussstrom (Isc)': '13.80 A',
        'Wirkungsgrad': '21.51 %'
      },
      'Werkstoffe & Aufbau': {
        'Zellentyp': 'Monokristallin N-Type Tiger Neo',
        'Frontseite': '3.2mm Solarglas mit Antireflexbeschichtung',
        'Rückseite': 'Composite-Folie in Tiefschwarz',
        'Anschlüsse': 'MC4-EVO2 kompatibel'
      },
      'Garantieansprüche': {
        'Hersteller-Produktgarantie': '15 Jahre',
        'Leistungsgarantie': '30 Jahre (linear, 87.4% nach 30 Jahren)'
      }
    },
    includedItems: [
      '1x JinkoSolar Tiger Neo 430W Full Black Modul',
      'Vormontiertes Kabel (1.2m)',
      'Original Steckeranschlüsse'
    ],
    manuals: [
      { name: 'Jinko Tiger Neo 430W FullBlack Datenblatt', type: 'pdf', size: '1.4 MB' },
      { name: 'Jinko Montage- & Pflegeleitfaden (DE)', type: 'pdf', size: '2.1 MB' }
    ]
  },

  // --- WECHSELRICHTER ---
  {
    id: 'wr-hoymiles-800',
    title: 'Hoymiles HMS-800W-2T Mikrowechselrichter mit integriertem WLAN',
    shortTitle: 'Hoymiles HMS-800W-2T',
    category: 'wechselrichter',
    brand: 'Hoymiles',
    price: 115.00,
    oldPrice: 159.00,
    rating: 4.8,
    reviewCount: 224,
    stock: 'in_stock',
    deliveryTime: '1-3 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Direkt integriertes WLAN: Kein DTU-Stick oder Gateway mehr notwendig!',
      'Einfache Einrichtung über die Hoymiles S-Miles Installer App',
      '2 MPPT-Tracker für optimalen Ertrag im Fall von Teilverschattungen',
      'Sicherer Betrieb durch automatische Netztrennung (Relais integriert)',
      'Sehr robustes Gehäuse mit IP67-Rundumschutz, ideal zur Außenmontage'
    ],
    detailedDescription: 'Der Hoymiles HMS-800W-2T ist der beliebteste Mikrowechselrichter auf dem europäischen Markt für Stecker-Solaranlagen. Dank des jetzt nativ im Gehäuse verbauten WLANs verbindet sich der Wechselrichter direkt mit Ihrem Heimnetzwerk – eine teure, externe Datenübertragungseinheit (DTU) entfällt komplett! Mit zwei vollkommen getrennten Maximum Power Point Trackern (MPPT) wird jedes angeschlossene Solarmodul völlig unabhängig geregelt. Das bedeutet: Wenn ein Modul im Schatten liegt, liefert das andere trotzdem fleißig volle Energie aus.',
    specs: {
      'Ausgangsdaten (AC)': {
        'Nennleistung': '800 VA',
        'Nennausgangsstrom': '3.48 A',
        'Nennspannung': '230 V (Wechselstrom)',
        'Netzfrequenz': '50 Hz / VDE-AR-N 4105 konform'
      },
      'Eingangsdaten (DC)': {
        'Empfohlene Modulleistung': '320 Wp bis 540 Wp+',
        'Max. Eingangsspannung': '60 V',
        'MPPT Spannungsbereich': '16 V - 60 V',
        'Max. DC Eingangsstrom': '2 x 14 A'
      },
      'Allgemeine Systemwerte': {
        'Eigenverbrauch nachts': '< 50 mW',
        'Spitzenwirkungsgrad': '96.7 %',
        'Kühlung': 'Konvektionskühlung (Lüfterlos)',
        'Betriebsumgebungstemp.': '-40 °C bis +65 °C'
      }
    },
    includedItems: [
      '1x Hoymiles HMS-800W-2T Mikrowechselrichter',
      '1x Internes WLAN-Modul (bereits verbaut)',
      '1x Montage-Schrauben Set',
      'Ausführliche deutsche Verbindungs- & Montageanleitung'
    ],
    manuals: [
      { name: 'Hoymiles HMS-800W-2T Datenblatt (DE)', type: 'pdf', size: '1.2 MB' },
      { name: 'Bedienungsanleitung Hoymiles S-Miles App', type: 'pdf', size: '3.6 MB' }
    ],
    options: [
      { name: 'Anschlusskabel', values: ['Ohne Kabel', 'Betteri BC01 auf Schukostecker 5m (+19,00 €)', 'Betteri BC01 auf Schukostecker 10m (+29,00 €)', 'Betteri BC01 auf Wielandstecker 5m (+39,00 €)'] }
    ],
    isBestSeller: true
  },
  {
    id: 'wr-fronius-10',
    title: 'Fronius Symo Gen24 10.0 Plus Dreiphasiger Hybrid-Wechselrichter',
    shortTitle: 'Fronius Symo Gen24 10.0',
    category: 'wechselrichter',
    brand: 'Fronius',
    price: 1549.00,
    oldPrice: 1989.00,
    rating: 4.9,
    reviewCount: 45,
    stock: 'in_stock',
    deliveryTime: '2-5 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Dreiphasiger High-End Hybridwechselrichter der Spitzenklasse - Made in Austria',
      'Integrierter "PV Point": Notstromfunktion auch ohne teuren Batteriespeicher',
      'Nahtlose Anbindung an Batteriespeicher (z.B. BYD Battery-Box Premium HVS/HVM)',
      'Integrierte Datenkommunikation mit LAN, WLAN, Modbus und Webeinspeisung',
      'Aktive Lüfterkühlung sorgt für maximale Lebensdauer & Volllast im Hochsommer'
    ],
    detailedDescription: 'Der Fronius Symo Gen24 segmentiert die Crème de la Crème im Segment der dreiphasigen PV-Hybrid-Wechselrichter. Durch den integrierten PV Point steht Ihnen im Falle eines Netzausfalls eine dedizierte, einphasige Notstromsteckdose mit bis zu 3kW Leistung zur Verfügung – und das im Basiszustand, komplett ohne installierten Speicher! Gekoppelt mit einem Hochvolt-Batteriespeicher ermöglicht die Multi-Flow-Technology sogar zeitgleiche Verbraucherflüsse und Ladezyklen aus dem PV-Generator bei Netzausfall. Ein bahnbrechendes Gerät für absolut autarken Lebensstil.',
    specs: {
      'Eingangsdaten (DC PV)': {
        'Max. Eingangsleistung': '15.0 kWp',
        'Max. Eingangsstrom (Idc1/Idc2)': '25.0 A / 12.5 A',
        'Eingangsspannungsbereich': '80 V - 1000 V',
        'Anzahl MPP-Tracker': '2 Tracker'
      },
      'Wechselstrom-Ausgang (AC)': {
        'Nennleistung': '10.000 W (10 kW)',
        'Netzanschluss': '3-NPE 400 V / 230 V',
        'Klirrfaktor / Wirkstrom': '< 3 % / Cos Phi = 0.8 - 1'
      },
      'Schnittstellen / Smart Integration': {
        'Konnektivität': 'WLAN, LAN, Smart Grid Ready (SGRdy), Modbus TCP',
        'Energiemanagement': 'Integrierte Laststeuerung für z.B. Heizstäbe, Wärmepumpen'
      }
    },
    includedItems: [
      '1x Fronius Symo Gen24 10.0 Plus Hybrid-Wechselrichter',
      '1x Wandhalterungskonsole',
      '1x Fronius Pilot (Steuerungseinheit, integriert)',
      'Spezialdichtungen und Schraubklemmen'
    ],
    manuals: [
      { name: 'Fronius Symo Gen24 Datenblatt PDF (DE)', type: 'pdf', size: '2.4 MB' },
      { name: 'Fronius Gen24 Systemplanungs-Guide', type: 'pdf', size: '4.8 MB' }
    ]
  },

  // --- SPEICHER ---
  {
    id: 'bat-byd-77',
    title: 'BYD Battery-Box Premium HVS 7.7 Hochvolt-Batteriespeicher Komplettset',
    shortTitle: 'BYD Premium HVS 7.7',
    category: 'speicher',
    brand: 'BYD',
    price: 3699.00,
    oldPrice: 4499.00,
    rating: 4.9,
    reviewCount: 92,
    stock: 'in_stock',
    deliveryTime: '4-8 Werktage (Spedition)',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Skalierbares modulares Hochvolt-System mit 3 Batteriemodulen (je 2.56 kWh)',
      'Effektiver Nutzkapazitätswert von 7.68 kWh für hohe Ansprüche',
      'Prismatische Kobaltfreie Lithium-Eisenphosphat-Zellen (LiFePO4) für extreme Sicherheit',
      'Kompatibel mit führenden Hybrid-Wechselrichtern (Fronius, SMA, Kostal, Plenticore)',
      'Ausgezeichneter System-Wirkungsgrad im Test der HTW Berlin erzielt'
    ],
    detailedDescription: 'Die BYD Battery-Box Premium HVS 7.7 besteht aus drei HVS-Batteriemodulen, die in Reihe geschaltet werden, um eine hohe Systemspannung zur Reduzierung von Übertragungsverlusten aufzubauen. Das patentierte, kabellose Stecksystem ermöglicht eine kinderleichte Erweiterung oder Installation – die Module werden einfach übereinandergestapelt. Durch die Verwendung von Lithium-Eisenphosphat ist die Batterie eigensicher vor thermischen Instabilitäten flammgeschützt und bietet maximale Betriebssicherheit bei exzellenten Lade- und Entladeraten.',
    specs: {
      'Schnittstellenspezifikationen': {
        'Nutzbare Kapazität': '7.68 kWh',
        'Nennspannung': '307 V',
        'Max. Ausgangsstrom': '25 A',
        'Spitzen-Ausgangsstrom': '50 A (für 3 Sekunden)',
        'Arbeitsspannungsbereich': '240 V - 360 V'
      },
      'Sicherheit & Konstruktion': {
        'Akkukonfiguration': '3x BYD HVS Module (je 2.56 kWh)',
        'Schutzart Gehäuse': 'IP55',
        'Abmessungen (H × B × T)': '990 × 585 × 298 mm',
        'Gewicht Gesamt': '129.0 kg'
      },
      'Zertifizierung': {
        'Sicherheitszertifikate': 'VDE 2510-50, IEC62619, CE',
        'Transportprüfung': 'UN38.3 gefahrgutzertifiziert'
      }
    },
    includedItems: [
      '3x BYD Premium HVS 2.56kWh Batteriemodule',
      '1x BYD Hochvolt-BMS (Base + Top-Steuereinheit)',
      '1x Standfuß und Wandhalterung',
      'Installationsanleitung und Konfigurations-Pin'
    ],
    manuals: [
      { name: 'Datenblatt BYD Battery-Box HVS', type: 'pdf', size: '1.6 MB' },
      { name: 'Kompatibilitätsliste Wechselrichter (BYD)', type: 'pdf', size: '0.8 MB' },
      { name: 'BYD Be-Connect App Anleitung', type: 'pdf', size: '2.2 MB' }
    ],
    options: [
      { name: 'Ausführungskapazität', values: ['7.7 kWh (3 Module)', '10.2 kWh (4 Module) (+1.100,00 €)', '12.8 kWh (5 Module) (+2.150,00 €)'] }
    ],
    isBestSeller: true
  },
  {
    id: 'bat-pylon-48',
    title: 'Pylontech US5000 4.8kWh LiFePO4 Niedervolt-Batteriespeicher 48V',
    shortTitle: 'Pylontech US5000 4.8kWh',
    category: 'speicher',
    brand: 'Pylontech',
    price: 1199.00,
    oldPrice: 1599.00,
    rating: 4.8,
    reviewCount: 104,
    stock: 'in_stock',
    deliveryTime: '3-6 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Preis-Leistungs-Sieger für 48V Niedervoltsysteme (z.B. Victron MultiPlus oder Solis)',
      'Große Kapazität von 4.8 kWh in einem kompakten 19-Zoll Rack-Gehäuse',
      'Über 6.000 Ladezyklen bei bis zu 95% Entladetiefe (DoD)',
      'Integrierte automatische Ladestromausgleichsfunktion (aktives BMS)',
      'Einfachste Verbindung im Parallelbetrieb: Bis zu 16 Batterien im Stack koppelbar'
    ],
    detailedDescription: 'Pylontech US5000 ist die neueste Generation des bewährten Niedervolt-Speichersystems. Mit einer Nennspannung von 48 Volt ist dieser Speicher unschlagbar flexibel und universell einsetzbar – optimal für klassische Inselanlagen auf Booten, Jagdhütten, Tiny Houses oder als stationärer Hausspeicher gekoppelt mit Victron-Wechselrichtern. Durch das extrem langlebige Lithium-Eisenphosphat-BMS wird jedes einzelne Zellenpaket permanent überwacht, balanciert und vor Überspannung sowie Extremtemperaturen geschützt.',
    specs: {
      'Schnittstellenspezifikationen': {
        'Nennkapazität': '4800 Wh (4.8 kWh)',
        'Nutzbare Kapazität': '4560 Wh (4.56 kWh)',
        'Nennspannung': '48 V',
        'Lade- / Entladestrom optimal': '50 A',
        'Lade- / Entladestrom maximal': '100 A (Peak 200A für 15s)'
      },
      'Physikalische Daten': {
        'Abmessungen': '442 × 420 × 161 mm (Standard 19" Rack-Format bei 3.6 HE)',
        'Gewicht': '39.7 kg',
        'Schnittstellen': 'CAN, RS485, RS232'
      },
      'Garantie & Zyklen': {
        'Zyklenanzahl': 'mind. 6000 Zyklen bei 95% Entladetiefe',
        'Garantiezeitraum': '10 Jahre nach Onlineregistrierung beim Hersteller'
      }
    },
    includedItems: [
      '1x Pylontech US5000 4.8kWh Batteriespeicher',
      '1x Kabelset (Verbindungskabel rot/schwarz zur Batteriekopplung)',
      '1x Erdungskabel',
      '1x RJ45 Datenkommunikationskabel'
    ],
    manuals: [
      { name: 'Pylontech US5000 Bedienungsanleitung PDF', type: 'pdf', size: '2.1 MB' },
      { name: 'Garantieschein & Registrierungshilfe Pylontech', type: 'pdf', size: '0.4 MB' }
    ]
  },

  // --- WÄRMEPUMPEN ---
  {
    id: 'wp-vaillant-75',
    title: 'Vaillant aroTHERM plus VWL 75/6 A Luft-Wasser-Wärmepumpe Monoblock',
    shortTitle: 'Vaillant aroTHERM plus 75/6',
    category: 'waermepumpen',
    brand: 'Vaillant',
    price: 6999.00,
    oldPrice: 8499.00,
    rating: 4.8,
    reviewCount: 31,
    stock: 'low_stock',
    deliveryTime: '5-10 Werktage (Spedition)',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Hocheffektive Luft-Wasser-Wärmepumpe für Altbau- & Neubausanierungen',
      'Nutzt das hochanständige natürliche Kältemittel R290 (Propan, GWP = nur 3!)',
      'Hohe Vorlauftemperaturen bis 75 °C für den Betrieb mit klassischen Heizkörpern',
      'Extrem leiser Betrieb: Nur 28 dB(A) im flüsterleisen Nachtbetrieb bei 3m Abstand',
      'Förderfähig nach BEG (Bundesförderung für effiziente Gebäude) mit bis zu 70% Zuschuss!'
    ],
    detailedDescription: 'Die Vaillant aroTHERM plus VWL 75/6 A ist die herausragende Referenz unter den modernen Wärmepumpen. Im Gegensatz zu älteren Modellen läuft dieses System mit dem umweltfreundlichen, zukunftssicheren Naturgas Propan (R290). Dadurch erreicht die Wärmepumpe sensationelle Heizleistungen und Vorlauftemperaturen von bis zu 75°C. Dadurch können Sie auch Altbauten mit klassischen Rippenheizkörpern spielend leicht auf fossilfreie Beheizung umrüsten – aufwendiges Verlegen von Fußbodenheizungen entfällt meist gänzlich.',
    specs: {
      'Energieleistungsdaten': {
        'Heizleistung (A2/W35)': '5.3 kW (COP: 4.1)',
        'Heizleistung (A7/W35)': '7.4 kW (COP: 4.8)',
        'Energieeffizienzklasse': 'A+++ (Wirkungsgradklasse bei 35 °C Vorlauf)'
      },
      'Kältekreislauf & Technik': {
        'Kältemittel': 'R290 (Propan, Füllmenge: 0.9 kg)',
        'Kompression': 'Inverter-gesteuerter Rollkolbenverdichter',
        'Max. Vorlauftemperatur HC': '75.0 °C'
      },
      'Physische Daten': {
        'Außeneinheit Maße (H × B × T)': '965 × 1100 × 450 mm',
        'Außeneinheit Gewicht': '114.0 kg',
        'Schallleistungspegel außen': '53 dB(A) (Zertifizierter Wert bei Volllast)'
      }
    },
    includedItems: [
      '1x Vaillant aroTHERM plus VWL 75/6 A Monoblock Außengerät',
      '1x Entleerungs- & Befüllungsventil',
      '1x Kondensatablauf-Siphon',
      '1x Ausführliche Projektierungsunterlagen'
    ],
    manuals: [
      { name: 'Vaillant aroTHERM plus Datenblatt', type: 'pdf', size: '2.5 MB' },
      { name: 'Installations- und Wartungshandbuch VWL', type: 'pdf', size: '5.2 MB' },
      { name: 'Bauamtlicher Lärmschutzrechner Nachweis', type: 'pdf', size: '1.1 MB' }
    ],
    isBestSeller: false,
    isOffer: true
  },
  {
    id: 'wp-panasonic-9',
    title: 'Panasonic Aquarea LT Generation J Monoblock 9kW Luft-Wasser-Wärmepumpe',
    shortTitle: 'Panasonic Aquarea LT 9kW',
    category: 'waermepumpen',
    brand: 'Panasonic',
    price: 4599.00,
    oldPrice: 5399.00,
    rating: 4.7,
    reviewCount: 22,
    stock: 'in_stock',
    deliveryTime: '6-9 Werktage (Spedition)',
    images: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Ausgezeichneter Preis-Leistungs-König unter den Monoblock-Wärmepumpen',
      'Heizleistung von satten 9 kW, ideal für Ein- und Zweifamilienhäuser',
      'WLAN optional nachrüstbar für direkte Smartphone-Steuerung & Cloudportal',
      'Zuverlässiger Betrieb selbst in extremen Wintern bis zu -20 °C Außenkälte',
      'Hervorragend dokumentiert im Internet, große Community für Do-It-Yourselfler'
    ],
    detailedDescription: 'Die Panasonic Aquarea MDC09J3E5 Monoblock-Wärmepumpe ist in ganz Europa berühmt für ihre hohe Effizienz zu unschlagbaren Konditionen. Als voll integriertes Kompaktgerät (Monoblock) befinden sich alle Komponenten des Kältekreislaufs im Außengerät. Von dort aus wird einfach direkt das Heizungswasser über isolierte Rohre ins Haus geleitet. Dadurch entfällt die Notwendigkeit für einen Kälteschein bei der Montage, weswegen diese Anlage insbesondere bei Selbermachern und freien Installateuren extrem beliebt ist.',
    specs: {
      'Leistungsdaten': {
        'Nennleistung (A7/W35)': '9.0 kW (Heizen, COP: 4.41)',
        'Heizleistung (A2/W35)': '7.3 kW (Heizen, COP: 3.44)',
        'COP bei Kühlbetrieb': '3.2 (A35/W7)'
      },
      'Kältetechnische Daten': {
        'Kältemittel': 'R32',
        'Nennspannung': '230 V (Einphasig, Standardmontage)',
        'Zusatzheizstab Backup': '3.0 kW integriert im Gehäuse'
      },
      'Abmessungen': {
        'Maße (H × B × T)': '865 × 1283 × 320 mm',
        'Gewicht': '104.0 kg',
        'Anschlüsse Vorlauf/Rücklauf': 'R 1 1/4" Außengewinde'
      }
    },
    includedItems: [
      '1x Panasonic Aquarea Monoblock 9kW Außeneinheit',
      '1x Panasonic Kabel-Bedieneinheit (auch als Raumthermostat nutzbar)',
      '1x Magnet-Schmutzfänger-Sieb',
      'Installations- & Elektroanschlussplan'
    ],
    manuals: [
      { name: 'Panasonic Aquarea Mono Generation J 9kW Handbuch', type: 'pdf', size: '4.6 MB' },
      { name: 'Schaltungs- & Verdrahtungspläne Panasonic', type: 'pdf', size: '2.8 MB' }
    ]
  },

  // --- ZUBEHÖR ---
  {
    id: 'zub-shelly-pro3em',
    title: 'Shelly Pro 3EM Dreiphasen WLAN Hutschienen Energiemessgerät 120A',
    shortTitle: 'Shelly Pro 3EM Smart Meter',
    category: 'zubehoer',
    brand: 'Shelly',
    price: 89.00,
    oldPrice: 119.00,
    rating: 4.9,
    reviewCount: 312,
    stock: 'in_stock',
    deliveryTime: '1-3 Werktage',
    images: [
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Präzises dreiphasiges Smart Meter zur direkten Hutschienenmontage (DIN-Schiene)',
      'Inklusive 3x 120A Klappstromwandler zur einfachen berührungslosen Messung',
      'Konnektivität mit WLAN, Bluetooth und integriertem LAN-Ethernet-Port',
      'Echtzeit-Analyse des Stromverbrauchs und der PV-Einspeisung im Hausnetz',
      'Lückenlose Datenaufzeichnung mit Exportfunktion (CSV) in der Shelly-Cloud'
    ],
    detailedDescription: 'Das Shelly Pro 3EM ist die perfekte Ergänzung für jedes Solarsystem. In der Unterverteilung am Hauptzuleitungsstrang montiert, misst es berührungslos über Stromwandlerklemmen die exakten Ströme aller 3 Wicklungsphasen in Echtzeit. Es berechnet saldierend gleichzeitig Verbräuche und Rückspeisemengen ins öffentliche Netz. Mit dieser intelligenten Messung gelingt es erst, den genauen Ertragsnutzen Ihrer Photovoltaikanlage zu quantifizieren und Smart-Home Verbraucher zentimetergenau bei Solarüberschuss einzuschalten.',
    specs: {
      'Elektrische Nenndaten': {
        'Betriebsspannung': '110 V - 240 V AC',
        'Phasenmessungen': '3 Phasen zeitgleich',
        'Stromwandler inklusive': '3 Module mit je max. 120 A',
        'Messgenauigkeit': 'Klasse B (IEC 62053-21)'
      },
      'Verbindungstechnologien': {
        'Funkprotokolles': 'WLAN 802.11 b/g/n & Bluetooth 4.2',
        'Physisches LAN': 'RJ45 Buchse',
        'Datenübertragung': 'HTTP, MQTT, WebSockets, Modbus TCP'
      },
      'Installationsform': {
        'Gehäusebreite': 'DIN-Hutschiene (Breite: 1 Teilungseinheit = 18 mm)',
        'Gewicht': '50 g (ohne Wandler)'
      }
    },
    includedItems: [
      '1x Shelly Pro 3EM Smart Meter',
      '3x Klappstromwandler 120A',
      'Bedienungsanleitung und Cloud-Installationsguide'
    ],
    manuals: [
      { name: 'Shelly Pro 3EM Technisches Handbuch (DE)', type: 'pdf', size: '1.4 MB' },
      { name: 'Smart Home Einbindungsbeispiele EVCC', type: 'pdf', size: '0.8 MB' }
    ],
    isBestSeller: true
  },
  {
    id: 'zub-cable-set',
    title: 'Solar-Verlängerungskabel Set 6mm² mit vorkonfektionierten MC4 Steckern',
    shortTitle: 'Solar-Verlängerungskabel Set 10m',
    category: 'zubehoer',
    brand: 'OnlineSolar',
    price: 24.90,
    oldPrice: 34.90,
    rating: 4.8,
    reviewCount: 420,
    stock: 'in_stock',
    deliveryTime: '1-3 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1620067954992-1e967b57fa0d?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Zweiadriges Verlängerungskabel (Rot [+] & Schwarz [-]) für Solarmodule',
      'Großzügig dimensionierter 6mm² Querschnitt reduziert Spannungsverluste auf Minimum',
      'Komplett professionell vorkonfektioniert mit originalen MC4-Steckern',
      'UV-lichtbeständig, ozonbeständig, säurefest und ammoniakresistent',
      'Zugelassen für die feste Außenmontage im Erdreich und auf Dächern'
    ],
    detailedDescription: 'Qualität schützt Ihre Erträge. Billige Anschlusskabel degradieren schnell an der Sonne und führen durch geringen Querschnitt zu spürbaren Leitungsverlusten. Unser 6mm² starkes Reinkupferkabel garantiert selbst bei Kabellängen über 15 Meter absolut minimale Ertragsschmälerung. Die an den Maschinen industriell aufgekrimpten MC4 Stecker- und Buchsensysteme bieten eine absolut dichte IP68 Isolation, sodass kein Kriechwasser eintreten kann und somit unerwartete Fehlerströme des Inverters im Keim erstickt werden.',
    specs: {
      'Elektrische Werte': {
        'Leitungsquerschnitt': '6.0 mm²',
        'Nennspannung DC': 'Max. 1500 V DC',
        'Prüfwechselspannung': '6.500 V AC'
      },
      'Werkstoffe': {
        'Kupferkern': 'Feindrähtig verzinnt, Klasse 5 IEC 60228',
        'Kabelmantel': 'Spezial-Vernetztes Copolymer, Halogenfrei',
        'Spannungsschutzklasse': 'Doppelt isoliert Klasse II'
      },
      'Zonenschutz & Zulassungen': {
        'Normklasse': 'EN 50618 (H1Z2Z2-K)',
        'Temperaturbeständigkeit': '-40 °C bis +90 °C'
      }
    },
    includedItems: [
      '1x 10m Solarkabel Schwarz (z.B. für Minuspol montagefertig)',
      '1x 10m Solarkabel Rot (z.B. für Pluspol montagefertig)',
      'Vormontierte MC4 Stecker & Buchsen'
    ],
    manuals: [
      { name: 'Kabel-Zertifikate EN 50618 Prüfblatt', type: 'pdf', size: '0.6 MB' }
    ],
    options: [
      { name: 'Länge des Kabelsets', values: ['5 Meter Set (14,90 €)', '10 Meter Set (Standard) (24,90 €)', '15 Meter Set (34,90 €)', '20 Meter Set (42,90 €)'] }
    ]
  },
  {
    id: 'zub-mount-balcony',
    title: 'Premium Aluminium Balkonhalterung für zwei Solarmodule (neigbar)',
    shortTitle: 'Balkonhalterung verstellbar 15-30°',
    category: 'zubehoer',
    brand: 'OnlineSolar',
    price: 59.00,
    oldPrice: 89.00,
    rating: 4.7,
    reviewCount: 96,
    stock: 'in_stock',
    deliveryTime: '2-4 Werktage',
    images: [
      'https://images.unsplash.com/photo-1548613053-2206762390ec?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&auto=format&fit=crop&q=80'
    ],
    bulletPoints: [
      'Ertragssteigerung von über 30% dank verstellbarem Neigungswinkel (15 bis 30 Grad)',
      'Gefertigt aus korrosionsfreiem, extrem leichten T6005 Luftfahrt-Aluminium',
      'Schwere Edelstahlklammern zur bombenfesten Verschraubung am Handlauf',
      'Inklusive Gummischutzstreifen zur Vermeidung von Kratzern an Balkonschnittstellen',
      'Universell passend für alle gängigen Solarmodule mit 30mm und 35mm Rahmenstärke'
    ],
    detailedDescription: 'Schluss mit unergiebigen 90° Flachaufhängungen am Balkon. Durch unsere verstellbare Premium-Halterung stellen Sie den optimalen solaren Anstellwinkel von 15 bis 30 Grad perfekt ein. Durch den Schrägwinkel fangen die Module die tiefstehende Sonne im Herbst, Frühling und Winter deutlich effektiver ein. Das gesamte Trägersystem ist aus rostfreiem Eloxierten Aluminium Al6005-T5 konstruiert und hält nachgewiesen übelsten Orkanen und Winterstürmen stand.',
    specs: {
      'Belastungsdaten & Material': {
        'Material Schienen / Streben': 'Aluminium Al6005-T5 (Anodisiert)',
        'Schrauben & Muttern': 'Edelstahl V2A (A2-70)',
        'Windlastzertifizierung': 'Zugelassen bis Windzone 4 (130 km/h)'
      },
      'Einstellbarkeit': {
        'Möglicher Neigungswinkel': '15° bis 30° stufenlos schwenkbar',
        'Montageausrichtung': 'Hochkant- oder Querformat-Montage'
      },
      'Abmaße & Eignung': {
        'Erhältliche Modulklemmung': '30mm & 35mm Rahmenhöhe universal',
        'Gewicht Trägergerüst': 'ca. 5.8 kg'
      }
    },
    includedItems: [
      '2x Neigbare A-Rahmen Teleskopbeine',
      '4x massive Balkongitter Edelstahl-Haken',
      '4x Modul-Endklemmen',
      '8x Neopren Schutzpolster-Streifen',
      'Komplettes Schraubenset V2A'
    ],
    manuals: [
      { name: 'Statiknachweise & TÜV-Prüfbericht Halterung', type: 'pdf', size: '1.9 MB' },
      { name: 'Aufbau-Video Montagehilfe Link', type: 'manual', size: 'Online' }
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
      comment: 'Super Paket! Das Paket war binnen 3 Tagen per DPD da. Die Module machen einen extrem robusten Eindruck. Der Einbau war absolut problemlos und die App liefert super Echtzeitwerte. Gestern 4.8 kWh erzeugt.',
      verified: true
    },
    {
      id: 'rev-2',
      userName: 'Monika B.',
      rating: 5,
      date: '28.04.2026',
      comment: 'Sehr gut verpackt und die deutsche Anleitung war hervorragend geschrieben. Das Biegemodul sieht am Balkon richtig edel aus. 100% Kaufempfehlung.',
      verified: true
    },
    {
      id: 'rev-3',
      userName: 'Dieter H.',
      rating: 4,
      date: '03.04.2026',
      comment: 'Top Qualität, der Hoymiles Wecheslrichter verbindet sich super schnell mit dem WLAN. Einziger Kritikpunkt: Die Lieferung wurde von DPD ohne Avisierung einfach vor die Tür gelegt. Ansonsten super.',
      verified: true
    }
  ],
  'mod-trina-440': [
    {
      id: 'rev-4',
      userName: 'Herbert W.',
      rating: 5,
      date: '14.05.2026',
      comment: 'Trina ist und bleibt die Nummer Eins. Habe 18 Stück für mein Ostdach über OnlineSolar bestellt. Alle 18 absolut perfekt unversehrt geliefert per Palettenspedition. Hervorragender Kundenservice, der am Telefon kompetent beraten kann.',
      verified: true
    },
    {
      id: 'rev-5',
      userName: 'Christian L.',
      rating: 5,
      date: '02.05.2026',
      comment: 'Bifazial lohnt sich wirklich. Ich fange hinten locker 40-50W zusätzlich ein, da wir hellen Kies unter dem Carport liegen haben.',
      verified: true
    }
  ],
  'wr-hoymiles-800': [
    {
      id: 'rev-6',
      userName: 'Oliver P.',
      rating: 5,
      date: '12.05.2026',
      comment: 'Endlich ein Hoymiles ohne externen DTU USB Stick! Das Einrichten hat per App knapp 4 Minuten gedauert. Er speichert zuverlässig und schickt Updates. Super Service, danke.',
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
