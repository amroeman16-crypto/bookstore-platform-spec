import { Link } from "wouter";
import { BookOpen, Heart, ShoppingBag, UserRound } from "lucide-react";
import type { ReactNode } from "react";

export function StoreShell({ children, cartCount = 0 }: { children: ReactNode; cartCount?: number }) {
  return <div dir="rtl" className="min-h-screen bg-[#fbfaf7] text-[#162033]">
    <div className="border-b border-[#eeeae4] bg-[#fbfaf7] py-2 text-center text-[10px] font-semibold text-[#7e8794]">شحن مجاني للطلبات فوق 150 ر.س <span className="mx-2 text-[#d4884d]">•</span> كتبك الجديدة تصلك قبل أن تتوقع</div>
    <header className="sticky top-0 z-40 border-b border-[#ece8e1]/80 bg-[#fbfaf7]/90 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center gap-5">
        <Link href="/" className="flex shrink-0 items-center gap-2.5"><span className="grid size-10 place-items-center rounded-[13px] bg-[#6d3b9f] text-white shadow-[0_7px_16px_rgba(109,59,159,.23)]"><BookOpen size={21} /></span><span className="leading-none"><b className="block text-[21px] font-extrabold tracking-[-.06em] text-[#182237]">رفوف</b><small className="mt-1 block text-[9px] font-bold tracking-[.18em] text-[#a17dbb]">BOOKS & BEYOND</small></span></Link>
        <nav className="hidden items-center gap-5 md:flex"><Link href="/" className="text-[12px] font-bold text-[#6d3b9f]">الرئيسية</Link><Link href="/books" className="text-[12px] font-bold text-[#596276] hover:text-[#6d3b9f]">الكتب</Link><a href="/#categories" className="text-[12px] font-bold text-[#596276] hover:text-[#6d3b9f]">التصنيفات</a><a href="/#bestsellers" className="text-[12px] font-bold text-[#596276] hover:text-[#6d3b9f]">الأكثر مبيعًا</a><Link href="/blog" className="text-[12px] font-bold text-[#596276] hover:text-[#6d3b9f]">المدونة</Link></nav>
        <div className="mr-auto flex items-center gap-2"><button className="hidden size-10 place-items-center rounded-xl text-[#596276] hover:bg-[#f0ece8] sm:grid" aria-label="المفضلة"><Heart size={18} /></button><Link href="/cart" className="relative grid size-10 place-items-center rounded-xl bg-[#182237] text-white"><ShoppingBag size={18} />{cartCount > 0 && <span className="absolute -right-1.5 -top-1.5 grid min-w-5 place-items-center rounded-full bg-[#f4a261] px-1 py-0.5 text-[9px] font-black text-[#182237]">{cartCount}</span>}</Link><button className="hidden items-center gap-2 rounded-xl border border-[#e7e2db] px-3 py-2.5 text-[11px] font-bold text-[#596276] md:flex"><UserRound size={16} /> دخول</button></div>
      </div>
    </header>
    {children}
    <footer className="mt-20 bg-[#182237] py-10 text-white"><div className="container flex flex-col gap-4 text-[10px] text-[#aeb5c5] sm:flex-row sm:items-center sm:justify-between"><Link href="/" className="flex items-center gap-2 text-[17px] font-extrabold text-white"><BookOpen size={18} className="text-[#f4a261]" /> رفوف</Link><span>© 2025 رفوف · مساحة أجمل لكل قارئ</span></div></footer>
  </div>;
}

export const pageBooks = [
  { id: 1, title: "عقلية الإنجاز", author: "كارول دويك", category: "تطوير الذات", price: 42, oldPrice: 58, rating: 4.9, reviews: 284, format: "رقمي + ورقي", cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=700&q=85", tone: "#eccb9f" },
  { id: 2, title: "فكّر كفنان", author: "أوستن كليون", category: "الإبداع", price: 36, oldPrice: 49, rating: 4.8, reviews: 152, format: "رقمي", cover: "https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=700&q=85", tone: "#d7b6de" },
  { id: 3, title: "مستقبل أبعد", author: "إياد الموجي", category: "التكنولوجيا", price: 55, rating: 4.7, reviews: 98, format: "رقمي + ورقي", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=700&q=85", tone: "#a8d4cf" },
  { id: 4, title: "على مهل", author: "سارة العيسى", category: "الروايات", price: 31, oldPrice: 39, rating: 4.6, reviews: 210, format: "ورقي", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=700&q=85", tone: "#e7b68a" },
  { id: 5, title: "مدن تقرأ", author: "ليان غانم", category: "التاريخ", price: 48, rating: 4.8, reviews: 73, format: "رقمي", cover: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=85", tone: "#bdd3a8" },
  { id: 6, title: "مساحة بيضاء", author: "مها الصالح", category: "الإدارة", price: 44, rating: 4.5, reviews: 121, format: "رقمي + ورقي", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85", tone: "#c3c9df" },
];
export type PageBook = typeof pageBooks[number];
