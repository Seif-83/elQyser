
export enum Category {
  SPICES = 'بهارات',
  HERBS = 'أعشاب طبيعية',
  OILS = 'زيوت طبيعية',
  HONEY = 'عسل سدر ونحل',
  NUTS = 'مكسرات وياميش',
  OFFERS = 'عروض خاصة',
  GNA_BUTTER = 'سمنة جنة الصفرة'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  image: string;
  description: string;
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
}
