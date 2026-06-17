/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductSpecs {
  [category: string]: {
    [key: string]: string;
  };
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface ProductManual {
  name: string;
  type: 'pdf' | 'zip' | 'manual';
  size: string;
}

export interface Product {
  id: string;
  title: string;
  shortTitle: string;
  category: 'balkonkraftwerke' | 'solarmodule' | 'wechselrichter' | 'speicher' | 'waermepumpen' | 'zubehoer';
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  stock: 'in_stock' | 'low_stock' | 'out_of_stock';
  deliveryTime: string;
  images: string[];
  bulletPoints: string[];
  detailedDescription: string;
  specs: ProductSpecs;
  includedItems: string[];
  manuals: ProductManual[];
  colors?: string[];
  options?: {
    name: string;
    values: string[];
  }[];
  isBestSeller?: boolean;
  isOffer?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: { [key: string]: string };
}

export interface SolarSystemConfiguration {
  roofType: string;
  roofArea: number; // in qm
  annualConsumption: number; // in kWh
  roofOrientation: string; // S, SW, SE, W, O
}

export interface SolarPlannerResult {
  recommendedPanels: number;
  estimatedPowerKWp: number;
  estimatedSavingPerYear: number;
  recommendedProducts: Product[];
  paybackYears: number;
}
