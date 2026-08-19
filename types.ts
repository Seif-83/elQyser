
export enum Category {
  MEN = 'عطور رجالي',
  WOMEN = 'عطور حريمي',
  UNISEX = 'عطور للجنسين',
  OILS = 'زيوت عطرية',
  GIFTS = 'هدايا وباكدجات'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  image: string;
  description: string;
  details: string;
  isOffer?: boolean;
  oldPrice?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SiteInfo {
  name: string;
  slogan: string;
  phone: string;
  whatsapp: string;
  address: string;
  facebook: string;
  tiktok: string;
}
