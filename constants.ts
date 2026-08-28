import { Category, Product, ProductSection, SiteInfo } from './types';

export const SITE_INFO: SiteInfo = {
  name: 'القيصر للعطور',
  slogan: 'رائحة تليق بحضورك، وتبقى في الذاكرة.',
  phone: '01200775312',
  whatsapp: '+20 120 077 5312',
  address: 'الإسكندرية، العجمي',
  facebook: 'https://www.facebook.com/share/1Bpr6zP9UZ/?mibextid=wwXIfr',
  tiktok: 'https://www.tiktok.com/@qaysar_parfum?_r=1&_t=ZS-990ubqAxNwa'
};

const perfumeImage = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

export const PRODUCTS: Product[] = [
  {
    id: '10',
    name: 'أسد Asad من لطافة',
    section: ProductSection.WESTERN,
    category: Category.MEN,
    price: 600,
    unit: '100 مل',
    description: 'عطر شرقي قوي من لطافة بنفحات التبغ والتوابل والقهوة، مناسب للحضور المميز.',
    details: '• الشركة المصنعة: لطافة Lattafa\n• النوتات العليا: فلفل أسود وأناناس وتبغ\n• قلب العطر: قهوة وباتشولي وسوسن\n• القاعدة: فانيليا وعنبر وأخشاب وبنزوين\n• الثبات: قوي، من 8 إلى 10 ساعات تقريبًا حسب البشرة والجو\n• الاستخدام: مناسب للمساء والشتاء والخروجات والمناسبات',
    image: 'أسد.jpeg'
  },
  {
    id: '11',
    name: 'مسك التفاح',
    section: ProductSection.EASTERN,
    category: Category.OILS,
    price: 20,
    unit: 'الجرام',
    description: 'مسك فاكهي منعش برائحة التفاح ولمسة ناعمة تناسب الاستخدام اليومي.',
    details: '• الرائحة: تفاح منعش بلمسة مسكية ناعمة\n• السعر: 20 جنيه للجرام\n• الاستخدام: مناسب للجنسين وللاستخدام اليومي',
    image: 'مسك التفاح.jpg'
  },
  {
    id: '12',
    name: 'مسك الطهارة',
    section: ProductSection.EASTERN,
    category: Category.OILS,
    price: 20,
    unit: 'الجرام',
    description: 'مسك نقي وناعم برائحة نظيفة وهادئة.',
    details: '• الرائحة: مسك أبيض نظيف وناعم\n• السعر: 20 جنيه للجرام\n• الاستخدام: مناسب للاستخدام اليومي وبعد الاستحمام',
    image: 'مسك الطهارة.jpg'
  },
  {
    id: '13',
    name: 'مسك أناناس',
    section: ProductSection.EASTERN,
    category: Category.OILS,
    price: 20,
    unit: 'الجرام',
    description: 'مسك فاكهي استوائي بنفحات الأناناس المنعشة.',
    details: '• الرائحة: أناناس فاكهي ومنعش\n• السعر: 20 جنيه للجرام\n• الاستخدام: مناسب للجنسين وللأجواء الصيفية',
    image: 'مسك اناناس.jpg'
  },
  {
    id: '14',
    name: 'مسك خوخ',
    section: ProductSection.EASTERN,
    category: Category.OILS,
    price: 20,
    unit: 'الجرام',
    description: 'مسك ناعم وحلو بنفحات الخوخ الفاكهية.',
    details: '• الرائحة: خوخ حلو وناعم\n• السعر: 20 جنيه للجرام\n• الاستخدام: مناسب للجنسين والاستخدام اليومي',
    image: 'مسك خوخ.jpg'
  },
  {
    id: '15',
    name: 'مسك رمان',
    section: ProductSection.EASTERN,
    category: Category.OILS,
    price: 20,
    unit: 'الجرام',
    description: 'مسك فاكهي حيوي بنفحات الرمان المنعشة.',
    details: '• الرائحة: رمان منعش بلمسة مسكية\n• السعر: 20 جنيه للجرام\n• الاستخدام: مناسب للجنسين وللاستخدام اليومي',
    image: 'مسك رمان.jpg'
  },
  {
    id: '16',
    name: 'مسك فانيليا',
    section: ProductSection.EASTERN,
    category: Category.OILS,
    price: 20,
    unit: 'الجرام',
    description: 'مسك دافئ وحلو بنفحات الفانيليا الناعمة.',
    details: '• الرائحة: فانيليا كريمية ولمسة مسكية\n• السعر: 20 جنيه للجرام\n• الاستخدام: مناسب للجنسين وللأجواء المسائية',
    image: 'مسك فانيليا.jpg'
  },
  {
    id: '17',
    name: 'مسك فراولة',
    section: ProductSection.EASTERN,
    category: Category.OILS,
    price: 20,
    unit: 'الجرام',
    description: 'مسك فاكهي حلو برائحة الفراولة المنعشة.',
    details: '• الرائحة: فراولة حلوة ومنعشة\n• السعر: 20 جنيه للجرام\n• الاستخدام: مناسب للجنسين وللاستخدام اليومي',
    image: 'مسك فراولة.jpg'
  },
  {
    id: '18',
    name: 'مسك مانجا',
    section: ProductSection.EASTERN,
    category: Category.OILS,
    price: 20,
    unit: 'الجرام',
    description: 'مسك استوائي غني بنفحات المانجا الحلوة.',
    details: '• الرائحة: مانجا استوائية وحلوة\n• السعر: 20 جنيه للجرام\n• الاستخدام: مناسب للجنسين وللأجواء الصيفية',
    image: 'مسك مانجا.jpg'
  },
  {
    id: '19',
    name: 'معطر ZAHRA جو',
    section: ProductSection.AIR_FRESHENERS,
    category: Category.AIR_FRESHENERS,
    price: 60,
    unit: 'العبوة',
    description: 'معطر جو من ZAHRA برائحة منعشة تضفي لمسة جميلة على المكان.',
    details: '• النوع: معطر جو\n• الشركة: ZAHRA\n• الاستخدام: مناسب للمنزل والسيارة',
    image: 'معطر ZAHRA جو.jpeg'
  },
  {
    id: '20',
    name: 'معطر ZAHRA أرضيات صغير',
    section: ProductSection.AIR_FRESHENERS,
    category: Category.AIR_FRESHENERS,
    price: 30,
    unit: 'العبوة',
    description: 'معطر أرضيات ZAHRA بحجم صغير لرائحة نظافة تدوم في المنزل.',
    details: '• النوع: معطر أرضيات\n• الشركة: ZAHRA\n• الحجم: صغير',
    image: 'معطر ZAHRA ارضيات صغير.jpeg'
  },
  {
    id: '21',
    name: 'معطر ZAHRA أرضيات وسط',
    section: ProductSection.AIR_FRESHENERS,
    category: Category.AIR_FRESHENERS,
    price: 40,
    unit: 'العبوة',
    description: 'معطر أرضيات ZAHRA بحجم متوسط لرائحة منعشة ونظافة مميزة.',
    details: '• النوع: معطر أرضيات\n• الشركة: ZAHRA\n• الحجم: وسط',
    image: 'معطر ZAHRA ارضيات وسط.jpeg'
  },
  {
    id: '22',
    name: 'معطر ZAHRA أرضيات كبير',
    section: ProductSection.AIR_FRESHENERS,
    category: Category.AIR_FRESHENERS,
    price: 60,
    unit: 'العبوة',
    description: 'معطر أرضيات ZAHRA بحجم كبير لرائحة تدوم وتنعش أجواء المنزل.',
    details: '• النوع: معطر أرضيات\n• الشركة: ZAHRA\n• الحجم: كبير',
    image: 'معطر ZAHRA ارضيات كبير.jpeg'
  }
];
