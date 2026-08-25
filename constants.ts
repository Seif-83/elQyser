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
    id: '1',
    name: 'عود ملكي فاخر',
    section: ProductSection.WESTERN,
    category: Category.MEN,
    price: 450,
    unit: '50 مل',
    description: 'تركيبة شرقية عميقة بلمسات العود والعنبر والمسك، لحضور لا يُنسى.',
    details: '• النوتات: عود دافئ مع عنبر ولمسة مسك ناعمة\n• الثبات: قوي ومناسب للسهرات والمناسبات\n• الاستخدام: اختيار مثالي لمن يحب الروائح الشرقية الفاخرة',
    image: perfumeImage('photo-1615634260167-c8cdede054de'),
    isOffer: true,
    oldPrice: 520
  },
  {
    id: '2',
    name: 'إكسير المسك الأبيض',
    section: ProductSection.WESTERN,
    category: Category.UNISEX,
    price: 320,
    unit: '50 مل',
    description: 'مسك أبيض ناعم ونظيف مع نفحات زهرية هادئة للاستخدام اليومي.',
    details: '• النوتات: مسك أبيض نظيف مع نفحات زهرية وبودرة ناعمة\n• الثبات: متوسط وهادئ للاستخدام اليومي\n• الاستخدام: مناسب للعمل وبعد الاستحمام وللجنسين',
    image: perfumeImage('photo-1588405748880-12d1d2a59f75')
  },
  {
    id: '3',
    name: 'روز باريس',
    section: ProductSection.WESTERN,
    category: Category.WOMEN,
    price: 380,
    unit: '50 مل',
    description: 'ورد فرنسي أنيق ممزوج بالفانيليا وخشب الصندل بنهاية دافئة.',
    details: '• النوتات: ورد ناعم وفانيليا مع قاعدة من خشب الصندل\n• الثبات: متوسط إلى جيد مع أثر أنيق\n• الاستخدام: مناسب للنهار والمناسبات الهادئة',
    image: perfumeImage('photo-1541643600914-78b084683601')
  },
  {
    id: '4',
    name: 'هيبة الرجل',
    section: ProductSection.WESTERN,
    category: Category.MEN,
    price: 295,
    unit: '50 مل',
    description: 'مزيج منعش من الحمضيات والتوابل والأخشاب لشخصية واثقة.',
    details: '• النوتات: حمضيات منعشة مع توابل دافئة وأخشاب\n• الثبات: جيد وانتشاره واضح في البداية\n• الاستخدام: مناسب للعمل والخروجات اليومية',
    image: perfumeImage('photo-1594035910387-fea47794261f')
  },
  {
    id: '5',
    name: 'فانيليا شرقية',
    section: ProductSection.WESTERN,
    category: Category.WOMEN,
    price: 275,
    unit: '50 مل',
    description: 'فانيليا كريمية مع لمسة عنبرية تمنحك دفئاً وأناقة طوال اليوم.',
    details: '• النوتات: فانيليا كريمية وعنبر دافئ ولمسة حلوة\n• الثبات: جيد ويميل إلى الهدوء بعد مرور الوقت\n• الاستخدام: رائع للأجواء المسائية والشتوية',
    image: perfumeImage('photo-1592945403244-b3fbafd7f539')
  },
  {
    id: '6',
    name: 'عنبر القيصر',
    section: ProductSection.WESTERN,
    category: Category.UNISEX,
    price: 410,
    unit: '50 مل',
    description: 'عنبر غني مع زعفران وعود ناعم، مناسب للمناسبات والسهرات.',
    details: '• النوتات: عنبر غني وزعفران مع عود شرقي ناعم\n• الثبات: قوي ومميز على الملابس\n• الاستخدام: للمناسبات والسهرات ولمحبي الطابع الفاخر',
    image: perfumeImage('photo-1523293182086-7651a899d37f'),
    isOffer: true,
    oldPrice: 480
  },
  {
    id: '8',
    name: 'باقة العروس',
    section: ProductSection.WESTERN,
    category: Category.GIFTS,
    price: 650,
    unit: 'الباقة',
    description: 'باقة مختارة من عطر نسائي ومسك وزيت عطري في تغليف أنيق.',
    details: '• المحتوى: عطر نسائي مع مسك وزيت عطري بتغليف هدية\n• الطابع: مزيج ناعم وأنيق يناسب الذوق الهادئ\n• الاستخدام: هدية جاهزة للخطوبة أو الزفاف أو المناسبات',
    image: perfumeImage('photo-1547887538-e3a2f32cb1cc'),
    isOffer: true,
    oldPrice: 760
  },
  {
    id: '9',
    name: 'نسيم الصيف',
    section: ProductSection.WESTERN,
    category: Category.UNISEX,
    price: 260,
    unit: '50 مل',
    description: 'رائحة منعشة من البرغموت والزهور البيضاء تناسب الأيام المشمسة.',
    details: '• النوتات: برغموت منعش وزهور بيضاء بلمسة خفيفة\n• الثبات: متوسط ومنعش بدون ثقل\n• الاستخدام: مثالي للصيف والنهار والخروجات السريعة',
    image: perfumeImage('photo-1595535373192-fc8935bacd89')
  },
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
  }
];
