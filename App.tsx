
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Category, Product, ProductSection, CartItem } from './types';
import { SITE_INFO, PRODUCTS } from './constants';

// --- Sub-components ---

const Header: React.FC<{ cartCount: number; onOpenCart: () => void }> = ({ cartCount, onOpenCart }) => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={`${import.meta.env.BASE_URL}logo.webp`}
          alt="شعار القيصر للعطور"
          className="w-10 h-10 object-contain shrink-0 "
        />
        <h1 className="text-2xl font-bold text-amber-900 font-serif-ar">{SITE_INFO.name}</h1>
      </div>
      <div className="hidden md:flex gap-6 text-amber-800 font-medium">
        <a href="#menu" className="hover:text-amber-600 transition-colors">القائمة</a>
        <a href="#offers" className="hover:text-amber-600 transition-colors">العروض</a>
        <a href="#contact" className="hover:text-amber-600 transition-colors">اتصل بنا</a>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenCart}
          className="relative p-2 text-amber-800 hover:bg-amber-100 rounded-full transition-colors"
          aria-label="Shopping Cart"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
              {cartCount}
            </span>
          )}
        </button>
        <a
          href={`https://wa.me/${SITE_INFO.whatsapp.replace(/\s+/g, '')}?text=مرحباً، أود الاستفسار عن عطور القيصر.`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold items-center gap-2 transition-all hover:scale-105"
        >
          <span>اطلب الآن</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.459 3.419 1.261 4.864L2 22l5.306-1.394c1.402.766 2.997 1.201 4.706 1.201 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.281c-1.574 0-3.051-.418-4.329-1.149l-.31-.178-3.21.843.858-3.132-.196-.312c-.799-1.278-1.221-2.759-1.221-4.347 0-4.571 3.72-8.291 8.291-8.291s8.291 3.72 8.291 8.291-3.72 8.291-8.291 8.291zm4.545-6.205c-.249-.125-1.472-.725-1.7-.808-.228-.083-.393-.125-.558.125-.165.249-.64.808-.784.974-.145.165-.29.186-.538.061s-1.049-.387-1.998-1.234c-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.384.109-.508.113-.111.249-.29.373-.435.125-.145.165-.249.249-.415.083-.165.041-.31-.021-.435s-.558-1.346-.764-1.843c-.2-.486-.403-.419-.558-.427-.144-.007-.31-.009-.476-.009s-.435.062-.662.31-.868.849-.868 2.071c0 1.221.889 2.402.993 2.547.104.145 1.75 2.673 4.239 3.745.592.255 1.054.408 1.414.523.595.189 1.137.162 1.565.098.477-.072 1.472-.601 1.679-1.181.206-.579.206-1.076.145-1.181-.062-.104-.228-.166-.476-.291z" /></svg>
        </a>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <picture className="block w-full h-full">
        <source
          media="(max-width: 767px)"
          srcSet={`${import.meta.env.BASE_URL}mobile-view.jpeg`}
        />
        <img
          src={`${import.meta.env.BASE_URL}laptob-view.jpeg`}
          alt="زجاجات عطور القيصر"
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-4xl px-4 text-center md:text-right hero-fade-in">
      <span className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-bounce">
        أهلاً بكم في عالم القيصر
      </span>
      <h2 className="text-4xl md:text-6xl font-bold text-white font-serif-ar mb-6 leading-tight">
        عطور تترك أثراً لا يُنسى <br className="hidden md:block" />
        بين يديك في <span className="text-amber-400">القيصر</span>
      </h2>
      <p className="text-xl text-amber-50 font-light mb-8 max-w-2xl">
        {SITE_INFO.slogan}
      </p>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <a href="#menu" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:-translate-y-1">
          تصفح القائمة
        </a>
        <a href="#offers" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-lg font-bold transition-all">
          العروض الحالية
        </a>
      </div>
    </div>
  </section>
);

const ProductModal: React.FC<{
  product: Product;
  onClose: () => void;
  cartQuantity: number;
  onUpdateCart: (amount: number) => void;
}> = ({ product, onClose, cartQuantity, onUpdateCart }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-64">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full text-amber-900 shadow-md"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-amber-600 text-sm font-bold uppercase tracking-wider">{product.category}</span>
              <h3 className="text-3xl font-bold text-amber-900 font-serif-ar mt-1">{product.name}</h3>
            </div>
            <div className="text-left">
              <span className="block text-2xl font-bold text-amber-700">{product.price} ج.م</span>
              <span className="text-sm text-gray-500">لكل {product.unit}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
          <div className="rounded-xl bg-amber-50 border border-amber-100 p-4 text-sm text-amber-900 whitespace-pre-line min-h-16">
            {product.details}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            {cartQuantity > 0 ? (
              <div className="flex items-center gap-4 bg-amber-50 p-2 rounded-xl flex-1 justify-center border border-amber-200">
                <button onClick={(e) => { e.stopPropagation(); onUpdateCart(-1) }} className="w-10 h-10 bg-white rounded-lg shadow text-amber-900 font-bold hover:bg-amber-100 flex items-center justify-center">-</button>
                <span className="w-8 text-center font-bold text-xl">{cartQuantity}</span>
                <button onClick={(e) => { e.stopPropagation(); onUpdateCart(1) }} className="w-10 h-10 bg-amber-600 rounded-lg shadow text-white font-bold hover:bg-amber-700 flex items-center justify-center">+</button>
              </div>
            ) : (
              <button
                onClick={(e) => { e.stopPropagation(); onUpdateCart(1); }}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-4 rounded-xl font-bold text-lg transition-all"
              >
                أضف إلى السلة
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{
  product: Product;
  onClick: () => void;
  cartQuantity: number;
  onUpdateCart: (amount: number) => void;
}> = ({ product, onClick, cartQuantity, onUpdateCart }) => (
  <div
    className="group bg-white rounded-2xl overflow-hidden border border-amber-50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 card-fade-in flex flex-col h-full"
    onClick={onClick}
  >
    <div className="relative h-48 overflow-hidden shrink-0">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {product.isOffer && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          عرض خاص
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <span className="bg-white text-amber-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">تفاصيل العطر</span>
      </div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <span className="text-amber-600 text-[10px] font-bold uppercase">{product.category}</span>
      <h3 className="text-lg font-bold text-amber-900 mb-1 group-hover:text-amber-700 transition-colors duration-300 line-clamp-1">{product.name}</h3>
      <div className="flex-grow"></div>
      <div className="flex items-end justify-between mt-4">
        <div>
          {product.oldPrice && (
            <span className="block text-xs text-gray-400 line-through mb-1">{product.oldPrice} ج.م</span>
          )}
          <span className="text-xl font-bold text-amber-800">{product.price} ج.م</span>
          <span className="text-[10px] text-gray-400 mr-1">/ {product.unit}</span>
        </div>
        <div className="flex items-center gap-2">
          {cartQuantity > 0 ? (
            <div className="flex items-center gap-1 bg-amber-100 rounded-lg p-1" onClick={e => e.stopPropagation()}>
              <button onClick={() => onUpdateCart(-1)} className="w-6 h-6 bg-white rounded text-amber-900 font-bold hover:bg-amber-50 flex items-center justify-center">-</button>
              <span className="w-4 text-center text-sm font-bold">{cartQuantity}</span>
              <button onClick={() => onUpdateCart(1)} className="w-6 h-6 bg-amber-600 rounded text-white font-bold hover:bg-amber-700 flex items-center justify-center">+</button>
            </div>
          ) : (
            <button
              onClick={(e) => { e.stopPropagation(); onUpdateCart(1); }}
              className="bg-amber-100 text-amber-900 p-2 rounded-lg hover:bg-amber-800 hover:text-white transition-colors duration-300"
              aria-label="Add to cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

const CartCheckoutView: React.FC<{
  cart: Record<string, number>;
  onClose: () => void;
  onUpdateCart: (productId: string, amount: number) => void;
}> = ({ cart, onClose, onUpdateCart }) => {
  const cartItems: CartItem[] = useMemo(() => {
    return Object.entries(cart)
      .map(([id, quantity]) => ({
        product: PRODUCTS.find((product: Product) => product.id === id)!,
        quantity
      }))
      .filter(item => item.product && item.quantity > 0);
  }, [cart]);

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "مرحباً، أريد طلب:\n";
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.product.name} (${item.product.price} ج.م)\n`;
    });
    message += `\nالإجمالي: *${total} ج.م*`;

    const url = `https://wa.me/${SITE_INFO.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-amber-100 flex items-center justify-between bg-amber-50 shrink-0">
          <h2 className="text-2xl font-bold text-amber-900 font-serif-ar">سلة المشتريات</h2>
          <button onClick={onClose} className="p-2 text-amber-900 hover:bg-white rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900">السلة فارغة</h3>
              <p className="text-gray-500 mt-2">تسوق الآن وأضف منتجات إلى السلة</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-amber-100 p-4 rounded-xl shadow-sm">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                  <div className="flex-1 text-center sm:text-right">
                    <h4 className="font-bold text-amber-900 line-clamp-1">{item.product.name}</h4>
                    <span className="text-amber-600 text-sm">{item.product.price} ج.م</span>
                  </div>
                  <div className="flex items-center gap-2 bg-amber-50 p-1.5 rounded-lg shrink-0">
                    <button onClick={() => onUpdateCart(item.product.id, -1)} className="w-8 h-8 bg-white rounded shadow text-amber-900 font-bold hover:bg-amber-100 flex items-center justify-center">-</button>
                    <span className="w-6 text-center font-bold">{item.quantity}</span>
                    <button onClick={() => onUpdateCart(item.product.id, 1)} className="w-8 h-8 bg-amber-600 rounded shadow text-white font-bold hover:bg-amber-700 flex items-center justify-center">+</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-amber-100 bg-white shrink-0">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg text-gray-600">الإجمالي:</span>
              <span className="text-3xl font-bold text-amber-900">{total} ج.م</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <span>إتمام الطلب عبر واتساب</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.459 3.419 1.261 4.864L2 22l5.306-1.394c1.402.766 2.997 1.201 4.706 1.201 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.281c-1.574 0-3.051-.418-4.329-1.149l-.31-.178-3.21.843.858-3.132-.196-.312c-.799-1.278-1.221-2.759-1.221-4.347 0-4.571 3.72-8.291 8.291-8.291s8.291 3.72 8.291 8.291-3.72 8.291-8.291 8.291zm4.545-6.205c-.249-.125-1.472-.725-1.7-.808-.228-.083-.393-.125-.558.125-.165.249-.64.808-.784.974-.145.165-.29.186-.538.061s-1.049-.387-1.998-1.234c-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.384.109-.508.113-.111.249-.29.373-.435.125-.145.165-.249.249-.415.083-.165.041-.31-.021-.435s-.558-1.346-.764-1.843c-.2-.486-.403-.419-.558-.427-.144-.007-.31-.009-.476-.009s-.435.062-.662.31-.868.849-.868 2.071c0 1.221.889 2.402.993 2.547.104.145 1.75 2.673 4.239 3.745.592.255 1.054.408 1.414.523.595.189 1.137.162 1.565.098.477-.072 1.472-.601 1.679-1.181.206-.579.206-1.076.145-1.181-.062-.104-.228-.166-.476-.291z" /></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [activeSection, setActiveSection] = useState<ProductSection | 'الكل'>('الكل');
  const [activeCategory, setActiveCategory] = useState<Category | 'الكل'>('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const isModalOpen = Boolean(selectedProduct || isCartOpen);
    document.body.style.overflow = isModalOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct, isCartOpen]);

  const handleUpdateCart = (productId: string, amount: number) => {
    setCart(prev => {
      const current = prev[productId] || 0;
      const next = Math.max(0, current + amount);
      if (next === 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: next };
    });
  };

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeSection, activeCategory, searchQuery]);

  const offersRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [offersVisible, setOffersVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Setup intersection observers for sections
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observerCallback = (setter: (value: boolean) => void) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setter(true);
        }
      });
    };

    const offersObserver = new IntersectionObserver(observerCallback(setOffersVisible), observerOptions);
    const menuObserver = new IntersectionObserver(observerCallback(setMenuVisible), observerOptions);
    const footerObserver = new IntersectionObserver(observerCallback(setFooterVisible), observerOptions);

    if (offersRef.current) offersObserver.observe(offersRef.current);
    if (menuRef.current) menuObserver.observe(menuRef.current);
    if (footerRef.current) footerObserver.observe(footerRef.current);

    return () => {
      if (offersRef.current) offersObserver.unobserve(offersRef.current);
      if (menuRef.current) menuObserver.unobserve(menuRef.current);
      if (footerRef.current) footerObserver.unobserve(footerRef.current);
    };
  }, []);

  const westernCategories: Category[] = [
    Category.MEN,
    Category.WOMEN,
    Category.UNISEX
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product: Product) => {
      const matchesSection = activeSection === 'الكل' || product.section === activeSection;
      const matchesCategory = activeCategory === 'الكل' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSection && matchesCategory && matchesSearch;
    });
  }, [activeSection, activeCategory, searchQuery]);

  const offers = useMemo(() => PRODUCTS.filter((product: Product) => product.isOffer), []);

  return (
    <div className="min-h-screen bg-[#fdfaf6] selection:bg-amber-200 selection:text-amber-900">
      <Header cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      <Hero />

      {/* Featured Offers */}
      {offers.length > 0 && (
        <section
          ref={offersRef}
          id="offers"
          className={`py-16 bg-amber-900 overflow-hidden relative transition-all duration-1000 ${offersVisible ? 'section-fade-in' : 'opacity-0'}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-800/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-white font-serif-ar">عروض التوفير الكبرى</h2>
                <p className="text-amber-200 mt-2">عروض حصرية لفترة محدودة</p>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-1 bg-amber-500"></div>
                <div className="w-6 h-1 bg-amber-700"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.slice(0, 3).map((offer: Product, index: number) => (
                <div
                  key={offer.id}
                  style={{
                    animation: offersVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                    animationDelay: offersVisible ? `${index * 0.15}s` : '0s',
                  }}
                  className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex gap-6 items-center group cursor-pointer transition-all duration-300 hover:bg-white/20 ${offersVisible ? '' : 'opacity-0'}`}
                  onClick={() => setSelectedProduct(offer)}
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                    <img src={offer.image} alt={offer.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{offer.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-amber-400">{offer.price} ج.م</span>
                      <span className="text-sm text-white/50 line-through">{offer.oldPrice} ج.م</span>
                    </div>
                    <button className="mt-4 text-amber-200 text-sm font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                      احصل على العرض
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Menu Section */}
      <section
        ref={menuRef}
        id="menu"
        className={`py-20 max-w-7xl mx-auto px-4 transition-all duration-1000 ${menuVisible ? 'section-fade-in' : 'opacity-0'}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 font-serif-ar mb-4">قائمة منتجاتنا</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 bg-white p-4 rounded-2xl shadow-sm border border-amber-50">
          <div className="relative w-full md:max-w-md">
            <input
              type="text"
              placeholder="ابحث عن عطر، مسك، زيت عطري..."
              className="w-full bg-amber-50 border-none rounded-xl py-3 px-12 focus:ring-2 focus:ring-amber-500 transition-all text-amber-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="w-6 h-6 text-amber-400 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto md:items-end">
            <div className="flex gap-2 overflow-x-auto pb-1 w-full md:w-auto scrollbar-hide">
              {(['الكل', ProductSection.WESTERN, ProductSection.EASTERN, ProductSection.AIR_FRESHENERS] as Array<ProductSection | 'الكل'>).map(section => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setActiveCategory('الكل');
                  }}
                  className={`whitespace-nowrap px-6 py-2 rounded-xl font-bold transition-all ${activeSection === section
                    ? 'bg-amber-800 text-white shadow-md'
                    : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {activeSection === ProductSection.WESTERN && (
              <div className="flex gap-2 overflow-x-auto pb-1 w-full md:w-auto scrollbar-hide">
                <button
                  onClick={() => setActiveCategory('الكل')}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeCategory === 'الكل'
                    ? 'bg-amber-200 text-amber-900'
                    : 'bg-gray-100 text-gray-600 hover:bg-amber-50'
                    }`}
                >
                  كل الغربي
                </button>
                {westernCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveSection(ProductSection.WESTERN);
                      setActiveCategory(category);
                    }}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${activeCategory === category
                      ? 'bg-amber-200 text-amber-900'
                      : 'bg-gray-100 text-gray-600 hover:bg-amber-50'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleCount).map((product: Product, index: number) => (
            <div
              key={product.id}
              style={{
                animation: menuVisible ? `fadeInUp 0.6s ease-out forwards` : 'none',
                animationDelay: menuVisible ? `${index * 0.1}s` : '0s',
              }}
              className={menuVisible ? '' : 'opacity-0'}
            >
              <ProductCard
                product={product}
                onClick={() => setSelectedProduct(product)}
                cartQuantity={cart[product.id] || 0}
                onUpdateCart={(amount) => handleUpdateCart(product.id, amount)}
              />
            </div>
          ))}
        </div>

        {filteredProducts.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-8 py-3 rounded-xl font-bold transition-colors"
            >
              عرض المزيد
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-amber-900">عذراً، لم نجد ما تبحث عنه</h3>
            <p className="text-gray-500 mt-2">جرب البحث بكلمة أخرى أو تغيير الفئة</p>
          </div>
        )}
      </section>

      {/* Footer / Contact */}
      <footer
        ref={footerRef}
        id="contact"
        className={`bg-amber-950 text-white py-16 transition-all duration-1000 ${footerVisible ? 'section-fade-in' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold font-serif-ar mb-6">{SITE_INFO.name}</h3>
              <p className="text-amber-200/70 mb-6 leading-relaxed">
                وجهتكم لاختيار عطور مميزة بروائح أصلية وثبات يدوم. نختار كل تركيبة بعناية لتناسب ذوقكم وتكمل حضوركم.
              </p>
              <div className="flex gap-4">
                <a href={SITE_INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href={SITE_INFO.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="sr-only">TikTok</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" /></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-amber-600 rounded-full"></span>
                تواصل معنا
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <span className="block text-sm text-amber-200/50">العنوان</span>
                    <span className="text-amber-50">{SITE_INFO.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <span className="block text-sm text-amber-200/50">الهاتف</span>
                    <span className="text-amber-50" dir="ltr">{SITE_INFO.phone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.459 3.419 1.261 4.864L2 22l5.306-1.394c1.402.766 2.997 1.201 4.706 1.201 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.281c-1.574 0-3.051-.418-4.329-1.149l-.31-.178-3.21.843.858-3.132-.196-.312c-.799-1.278-1.221-2.759-1.221-4.347 0-4.571 3.72-8.291 8.291-8.291s8.291 3.72 8.291 8.291-3.72 8.291-8.291 8.291zm4.545-6.205c-.249-.125-1.472-.725-1.7-.808-.228-.083-.393-.125-.558.125-.165.249-.64.808-.784.974-.145.165-.29.186-.538.061s-1.049-.387-1.998-1.234c-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.384.109-.508.113-.111.249-.29.373-.435.125-.145.165-.249.249-.415.083-.165.041-.31-.021-.435s-.558-1.346-.764-1.843c-.2-.486-.403-.419-.558-.427-.144-.007-.31-.009-.476-.009s-.435.062-.662.31-.868.849-.868 2.071c0 1.221.889 2.402.993 2.547.104.145 1.75 2.673 4.239 3.745.592.255 1.054.408 1.414.523.595.189 1.137.162 1.565.098.477-.072 1.472-.601 1.679-1.181.206-.579.206-1.076.145-1.181-.062-.104-.228-.166-.476-.291z" /></svg>
                  </div>
                  <div>
                    <span className="block text-sm text-amber-200/50">واتساب</span>
                    <span className="text-amber-50" dir="ltr">{SITE_INFO.whatsapp}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-amber-600 rounded-full"></span>
                روابط سريعة
              </h4>
              <ul className="space-y-4 text-amber-200/70">
                <li><a href="#menu" className="hover:text-amber-400 transition-colors">كل العطور</a></li>
                <li><a href="#offers" className="hover:text-amber-400 transition-colors">العروض الحالية</a></li>
                <li><a href="#menu" className="hover:text-amber-400 transition-colors">الزيوت العطرية</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-amber-200/30">
            &copy; {new Date().getFullYear()} القيصر للعطور. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp / Cart Action Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        {cartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-amber-600 text-white p-4 rounded-full shadow-2xl animate-bounce relative"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-amber-600">
              {cartCount}
            </span>
          </button>
        )}
        <a
          href={`https://wa.me/${SITE_INFO.whatsapp.replace(/\s+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-4 rounded-full shadow-2xl animate-pulse"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.987 0 1.763.459 3.419 1.261 4.864L2 22l5.306-1.394c1.402.766 2.997 1.201 4.706 1.201 5.508 0 9.987-4.479 9.987-9.987 0-5.508-4.479-9.987-9.987-9.987zm0 18.281c-1.574 0-3.051-.418-4.329-1.149l-.31-.178-3.21.843.858-3.132-.196-.312c-.799-1.278-1.221-2.759-1.221-4.347 0-4.571 3.72-8.291 8.291-8.291s8.291 3.72 8.291 8.291-3.72 8.291-8.291 8.291zm4.545-6.205c-.249-.125-1.472-.725-1.7-.808-.228-.083-.393-.125-.558.125-.165.249-.64.808-.784.974-.145.165-.29.186-.538.061s-1.049-.387-1.998-1.234c-.738-.658-1.236-1.471-1.381-1.72-.145-.249-.015-.384.109-.508.113-.111.249-.29.373-.435.125-.145.165-.249.249-.415.083-.165.041-.31-.021-.435s-.558-1.346-.764-1.843c-.2-.486-.403-.419-.558-.427-.144-.007-.31-.009-.476-.009s-.435.062-.662.31-.868.849-.868 2.071c0 1.221.889 2.402.993 2.547.104.145 1.75 2.673 4.239 3.745.592.255 1.054.408 1.414.523.595.189 1.137.162 1.565.098.477-.072 1.472-.601 1.679-1.181.206-.579.206-1.076.145-1.181-.062-.104-.228-.166-.476-.291z" /></svg>
        </a>
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          cartQuantity={cart[selectedProduct.id] || 0}
          onUpdateCart={(amount) => handleUpdateCart(selectedProduct.id, amount)}
        />
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <CartCheckoutView
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onUpdateCart={handleUpdateCart}
        />
      )}
    </div>
  );
}
