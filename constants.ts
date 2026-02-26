
import { Category, Product, SiteInfo } from './types';

export const SITE_INFO: SiteInfo = {
  name: "عطارة الأخوة",
  slogan: "أصالة الماضي وجودة الحاضر في كل حبة",
  phone: "+20 127 230 2817",
  whatsapp: "+20 127 230 2817",
  address: "الأسكندرية العجمي"
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'فلفل أسود برازيلي',
    category: Category.SPICES,
    price: 45,
    unit: '100 جرام',
    description: 'حبوب كاملة نقية برائحة نفاذة وطعم قوي.',
    image: 'https://picsum.photos/seed/pepper/400/400'
  },
  {
    id: '2',
    name: 'كمون بلدي منقي',
    category: Category.SPICES,
    price: 35,
    unit: '100 جرام',
    description: 'كمون مغسول ومنقى بعناية فائقة.',
    image: 'https://picsum.photos/seed/cumin/400/400'
  },
  {
    id: '3',
    name: 'عسل سدر جبلي أصلي',
    category: Category.HONEY,
    price: 450,
    unit: 'كيلو جرام',
    description: 'عسل طبيعي 100% من أجود مناحل السدر.',
    image: 'https://picsum.photos/seed/honey/400/400',
    isOffer: true,
    oldPrice: 550
  },
  {
    id: '4',
    name: 'زعتر فلسطيني بالسمسم',
    category: Category.HERBS,
    price: 25,
    unit: '150 جرام',
    description: 'خلطة الزعتر الأصلية مع السمسم البلدي وزيت الزيتون.',
    image: 'https://picsum.photos/seed/thyme/400/400'
  },
  {
    id: '5',
    name: 'زيت زيتون بكر ممتاز',
    category: Category.OILS,
    price: 280,
    unit: 'لتر',
    description: 'عصرة أولى باردة، حموضة أقل من 1%.',
    image: 'https://picsum.photos/seed/oliveoil/400/400'
  },
  {
    id: '6',
    name: 'لوز محمص أمريكي',
    category: Category.NUTS,
    price: 120,
    unit: '250 جرام',
    description: 'لوز محمص بالملح الخفيف، طازج ومقرمش.',
    image: 'https://picsum.photos/seed/almonds/400/400'
  },
  {
    id: '7',
    name: 'كركم هندي درجة أولى',
    category: Category.SPICES,
    price: 20,
    unit: '100 جرام',
    description: 'مطحون طازج، غني بمادة الكركمين.',
    image: 'https://picsum.photos/seed/turmeric/400/400'
  },
  {
    id: '8',
    name: 'كركديه أسواني فاخر',
    category: Category.HERBS,
    price: 30,
    unit: '200 جرام',
    description: 'أوراق كاملة داكنة، طبيعي ومفيد للضغط.',
    image: 'https://picsum.photos/seed/hibiscus/400/400',
    isOffer: true,
    oldPrice: 40
  },
  {
    id: '9',
    name: 'فستق حلبي محمص',
    category: Category.NUTS,
    price: 350,
    unit: '250 جرام',
    description: 'أجود أنواع الفستق الحلبي الكبير.',
    image: 'https://picsum.photos/seed/pistachio/400/400'
  },
  {
    id: '10',
    name: 'زيت حبة البركة خام',
    category: Category.OILS,
    price: 85,
    unit: '100 مل',
    description: 'عصر هيدروليكي بارد للحفاظ على الفوائد.',
    image: 'https://picsum.photos/seed/blackseed/400/400'
  },
  {
    id: '11',
    name: 'سمنة جنة الصفرة',
    category: Category.GNA_BUTTER,
    price: 85,
    unit: '700 جرام',
    description: 'سمنة جنة الصفرة طبيعية عالية الجودة.',
    image: 'smna gna.jpg'
  }
];
