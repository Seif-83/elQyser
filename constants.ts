import { Category, Product, SiteInfo } from './types';

export const SITE_INFO: SiteInfo = {
  name: 'القيصر للعطور',
  slogan: 'رائحة تليق بحضورك، وتبقى في الذاكرة.',
  phone: '01200775312',
  whatsapp: '+20 120 077 5312',
  address: 'الإسكندرية، العجمي'
};

const perfumeImage = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'عود ملكي فاخر',
    category: Category.MEN,
    price: 450,
    unit: '50 مل',
    description: 'تركيبة شرقية عميقة بلمسات العود والعنبر والمسك، لحضور لا يُنسى.',
    image: perfumeImage('photo-1615634260167-c8cdede054de'),
    isOffer: true,
    oldPrice: 520
  },
  {
    id: '2',
    name: 'إكسير المسك الأبيض',
    category: Category.UNISEX,
    price: 320,
    unit: '50 مل',
    description: 'مسك أبيض ناعم ونظيف مع نفحات زهرية هادئة للاستخدام اليومي.',
    image: perfumeImage('photo-1588405748880-12d1d2a59f75')
  },
  {
    id: '3',
    name: 'روز باريس',
    category: Category.WOMEN,
    price: 380,
    unit: '50 مل',
    description: 'ورد فرنسي أنيق ممزوج بالفانيليا وخشب الصندل بنهاية دافئة.',
    image: perfumeImage('photo-1541643600914-78b084683601')
  },
  {
    id: '4',
    name: 'هيبة الرجل',
    category: Category.MEN,
    price: 295,
    unit: '50 مل',
    description: 'مزيج منعش من الحمضيات والتوابل والأخشاب لشخصية واثقة.',
    image: perfumeImage('photo-1594035910387-fea47794261f')
  },
  {
    id: '5',
    name: 'فانيليا شرقية',
    category: Category.WOMEN,
    price: 275,
    unit: '50 مل',
    description: 'فانيليا كريمية مع لمسة عنبرية تمنحك دفئاً وأناقة طوال اليوم.',
    image: perfumeImage('photo-1592945403244-b3fbafd7f539')
  },
  {
    id: '6',
    name: 'عنبر القيصر',
    category: Category.UNISEX,
    price: 410,
    unit: '50 مل',
    description: 'عنبر غني مع زعفران وعود ناعم، مناسب للمناسبات والسهرات.',
    image: perfumeImage('photo-1523293182086-7651a899d37f'),
    isOffer: true,
    oldPrice: 480
  },
  {
    id: '7',
    name: 'زيت عود كمبودي',
    category: Category.OILS,
    price: 190,
    unit: '12 مل',
    description: 'زيت عطري مركز بنفحات عود كمبودي أصيل وثبات يدوم طويلاً.',
    image: perfumeImage('photo-1608571423902-eed4a5ad8108')
  },
  {
    id: '8',
    name: 'باقة العروس',
    category: Category.GIFTS,
    price: 650,
    unit: 'الباقة',
    description: 'باقة مختارة من عطر نسائي ومسك وزيت عطري في تغليف أنيق.',
    image: perfumeImage('photo-1547887538-e3a2f32cb1cc'),
    isOffer: true,
    oldPrice: 760
  },
  {
    id: '9',
    name: 'نسيم الصيف',
    category: Category.UNISEX,
    price: 260,
    unit: '50 مل',
    description: 'رائحة منعشة من البرغموت والزهور البيضاء تناسب الأيام المشمسة.',
    image: perfumeImage('photo-1595535373192-fc8935bacd89')
  },
  {
    id: '10',
    name: 'مسك الطهارة',
    category: Category.OILS,
    price: 140,
    unit: '12 مل',
    description: 'مسك ناعم مركز بنقاء مميز ولمسة بودرية رقيقة.',
    image: perfumeImage('photo-1610461888750-10bfc601b8a1')
  }
];
