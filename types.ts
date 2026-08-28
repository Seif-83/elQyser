
export enum Category {
  MEN = 'عطور رجالي',
  WOMEN = 'عطور حريمي',
  UNISEX = 'عطور للجنسين',
  OILS = 'زيوت عطرية',
  AIR_FRESHENERS = 'معطرات'
}

export enum ProductSection {
  WESTERN = 'الغربي',
  EASTERN = 'الشرقي',
  AIR_FRESHENERS = 'معطرات'
}

export interface Product {
  id: string;
  name: string;
  section: ProductSection;
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
