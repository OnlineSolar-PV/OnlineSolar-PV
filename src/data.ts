import { Product, ProductReview } from './types';
import { PRODUCTS } from './productsData';

export { PRODUCTS };

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
