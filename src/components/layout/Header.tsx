"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, MessageCircle, Globe, Phone } from "lucide-react";
import { WHATSAPP_URL, APK_URL, FACEBOOK_URL, PHONE_TEL } from "@/lib/constants";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  // { label: "المنتجات", href: "/#products" },
  // { label: "الخدمات", href: "/#services" },
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

  const socialIconStyle = {
    width: 36, height: 36, borderRadius: "50%",
    background: "#F0F8FC", border: "1px solid #DFF1FA",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "#00A8D6", transition: "all 0.2s", textDecoration: "none"
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", left: 0, right: 0, top: 0, zIndex: 50,
        width: "100%", transition: "all 0.3s ease",
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #C5E8F5" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,120,180,0.08)" : "none",
      }}
    >
      <style>{`
        /* Custom responsive classes to guarantee layout without relying on Tailwind */
        .desktop-nav { display: flex; gap: 0.25rem; }
        .desktop-btn { display: inline-flex; }
        .mobile-toggle { display: none; }
        .drawer-mobile { display: none; }
        
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .desktop-btn { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .drawer-mobile { display: block !important; }
        }
        @media (max-width: 640px) {
          .desktop-logo { display: none !important; }
        }
      `}</style>

      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo — rightmost in RTL */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, overflow: "hidden", flexShrink: 0 }}>
              <Image
                src="/images/شعار ويجو للتطبيق (1).png"
                alt="ويجو يمن"
                width={42}
                height={42}
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Hidden on small mobile, visible on sm and up */}
            <div className="desktop-logo" style={{ textAlign: "right" }}>
              <p style={{ color: "#0D2235", fontWeight: 900, fontSize: "1.05rem", lineHeight: 1.2 }}>ويقو  يمن</p>
              <p style={{ color: "#00A8D6", fontSize: "0.75rem", fontWeight: 600 }}>Wego Yemen</p>
            </div>
          </Link>

          {/* Desktop Nav — center (Hidden below lg) */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem 1rem",
                  borderRadius: "2rem",
                  color: "#4A6878",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = "#00A8D6";
                  (e.target as HTMLElement).style.background = "#E0F6FD";
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = "#4A6878";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTAs & Socials — leftmost in RTL */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>

            {/* Social Icons row (visible on all screens like SAM4G example) */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
                <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={17} height={17} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
                <Image src="/icons/facebook-boxed-svgrepo-com.svg" alt="Facebook" width={17} height={17} />
              </a>
              <a href={PHONE_TEL} style={socialIconStyle}>
                <Phone size={17} />
              </a>
            </div>

            {/* Desktop Download Button */}
            <Link
              href="/download"
              className="btn-primary desktop-btn"
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.9rem", borderRadius: "2rem", marginRight: "0.5rem", textDecoration: "none" }}
            >
              <Download size={16} style={{ marginLeft: "0.25rem" }} />
              تحميل التطبيق
            </Link>

            {/* Mobile Menu Toggle (Visible below lg) */}
            <button
              onClick={() => setOpen(!open)}
              className="mobile-toggle"
              style={{
                background: "#E0F6FD", border: "1px solid #C5E8F5",
                borderRadius: "0.6rem", padding: "0.5rem", cursor: "pointer",
                color: "#00A8D6", alignItems: "center", justifyContent: "center",
                marginRight: "0.25rem"
              }}
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
              className="drawer-mobile"
              style={{
                position: "fixed", inset: 0, top: 72,
                background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)",
                zIndex: 40,
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="drawer-mobile"
              style={{
                position: "absolute", top: 72, left: 0, right: 0,
                background: "#fff", borderBottom: "1px solid #C5E8F5",
                boxShadow: "0 10px 40px rgba(0,120,180,0.15)",
                zIndex: 50, borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem",
                overflow: "hidden"
              }}
            >
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      textAlign: "right", background: "#F8FCFF", border: "1px solid #E0F6FD",
                      padding: "1rem 1.25rem", borderRadius: "1rem",
                      color: "#0D2235", fontWeight: 800, fontSize: "1.05rem",
                      cursor: "pointer", width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    {link.label}
                    <span style={{ color: "#00A8D6", fontSize: "1.2rem" }}>‹</span>
                  </button>
                ))}

                <div style={{ display: "flex", gap: "0.75rem", paddingTop: "1rem", marginTop: "0.5rem", borderTop: "1px dashed #DFF1FA" }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="btn-secondary" style={{ flex: 1, padding: "0.85rem", borderRadius: "1rem", justifyContent: "center" }}>
                    <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={18} height={18} style={{ marginLeft: "0.25rem" }} /> واتساب
                  </a>
                  <a href={APK_URL} download className="btn-primary" style={{ flex: 1, padding: "0.85rem", borderRadius: "1rem", justifyContent: "center" }}>
                    <Download size={18} style={{ marginLeft: "0.25rem" }} /> تحميل APK
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
