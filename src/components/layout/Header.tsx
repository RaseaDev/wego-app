"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, MessageCircle, Globe, Phone } from "lucide-react";
import { WHATSAPP_URL, APK_URL, FACEBOOK_URL, PHONE_TEL } from "@/lib/constants";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المنتجات", href: "/#products" },
  { label: "الخدمات", href: "/#services" },
  { label: "التطبيق", href: "/#app" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When clicking a hash link, manually close drawer and scroll
  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && window.location.pathname === "/") {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  const socialIconClass = "w-9 h-9 rounded-full bg-[#F0F8FC] border border-[#DFF1FA] flex items-center justify-center text-[#00A8D6] transition-all duration-200 hover:bg-[#E0F6FD]";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 border-b border-[#C5E8F5] shadow-[0_2px_20px_rgba(0,120,180,0.08)]' : 'bg-white/90 border-b border-transparent'}`}
      style={{ backdropFilter: "blur(16px)" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo — rightmost in RTL */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-[42px] h-[42px] rounded-lg overflow-hidden shrink-0">
              <Image
                src="/images/شعار ويجو للتطبيق (1).png"
                alt="ويجو يمن"
                width={42}
                height={42}
                className="object-cover"
              />
            </div>
            {/* Hidden on small mobile, visible on sm and up */}
            <div className="hidden sm:block text-right">
              <p className="text-[#0D2235] font-black text-[1.05rem] leading-[1.2]">ويجو يمن</p>
              <p className="text-[#00A8D6] text-[0.75rem] font-semibold">Wego Yemen</p>
            </div>
          </Link>

          {/* Desktop Nav — center (Hidden below lg) */}
          <nav className="hidden lg:flex gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="bg-transparent border-none cursor-pointer py-2 px-4 rounded-full text-[#4A6878] font-bold text-[0.95rem] transition-all duration-200 hover:text-[#00A8D6] hover:bg-[#E0F6FD]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTAs & Socials — leftmost in RTL */}
          <div className="flex items-center gap-2">
            
            {/* Social Icons row (visible on all screens like SAM4G example) */}
            <div className="flex items-center gap-[0.4rem]">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={socialIconClass}>
                <MessageCircle size={17} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={`${socialIconClass} hidden xs:flex`}>
                <Globe size={17} />
              </a>
              <a href={PHONE_TEL} className={socialIconClass}>
                <Phone size={17} />
              </a>
            </div>

            {/* Desktop Download Button */}
            <a
              href="/download"
              className="btn-primary hidden lg:inline-flex px-5 py-[0.55rem] text-[0.9rem] rounded-full mr-2"
            >
              <Download size={16} className="ml-1" />
              تحميل التطبيق
            </a>

            {/* Mobile Menu Toggle (Visible below lg) */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden bg-[#E0F6FD] border border-[#C5E8F5] rounded-[0.6rem] p-2 cursor-pointer text-[#00A8D6] flex items-center justify-center mr-1"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Styled Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[72px] bg-black/40 backdrop-blur-[4px] z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-[72px] left-0 right-0 bg-white border-b border-[#C5E8F5] shadow-[0_10px_40px_rgba(0,120,180,0.15)] z-50 rounded-b-3xl overflow-hidden lg:hidden"
            >
              <div className="p-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-right bg-[#F8FCFF] border border-[#E0F6FD] py-4 px-5 rounded-2xl text-[#0D2235] font-extrabold text-[1.05rem] cursor-pointer w-full flex items-center justify-between"
                  >
                    {link.label}
                    <span className="text-[#00A8D6] text-xl">‹</span>
                  </button>
                ))}
                
                <div className="flex gap-3 pt-4 mt-2 border-t border-dashed border-[#DFF1FA]">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="btn-secondary flex-1 py-[0.85rem] rounded-2xl justify-center">
                    <MessageCircle size={18} className="ml-1" /> واتساب
                  </a>
                  <a href={APK_URL} download className="btn-primary flex-1 py-[0.85rem] rounded-2xl justify-center">
                    <Download size={18} className="ml-1" /> تحميل APK
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 380px) {
          .xs\\:flex { display: flex; }
          .hidden.xs\\:flex { display: none; }
        }
      `}</style>
    </motion.header>
  );
}
