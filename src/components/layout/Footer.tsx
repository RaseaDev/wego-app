"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Globe, Download } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL, FACEBOOK_URL, APK_URL } from "@/lib/constants";

const MAPS_URL = "https://maps.google.com/?q=Sanaa,+Yemen";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "المنتجات", href: "#products" },
  { label: "الخدمات", href: "#services" },
  { label: "تحميل التطبيق", href: "/download" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0D2235", color: "#E8F4FA", width: "100%" }}>
      {/* CTA Banner */}
      <div style={{ background: "linear-gradient(135deg, #00A8D6, #0047FF)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.3rem,4vw,2rem)", fontWeight: 900, marginBottom: "0.5rem" }}>
            جاهز للبدء مع ويقو  يمن؟
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.5rem", fontSize: "1rem" }}>
            حمّل التطبيق الآن واستمتع بأفضل عروض التقنية في اليمن
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            <a href={APK_URL} download className="btn-primary"
              style={{ background: "#fff", color: "#0047FF", padding: "0.8rem 1.75rem" }}>
              <Download size={18} />
              تحميل التطبيق
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", fontWeight: 700, padding: "0.8rem 1.75rem", borderRadius: "0.75rem", textDecoration: "none", fontSize: "1rem" }}>
              <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={18} height={18} />
              تواصل الآن
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "2.5rem" }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, overflow: "hidden" }}>
                <Image src="/images/شعار ويجو للتطبيق (1).png" alt="ويجو يمن" width={44} height={44} style={{ objectFit: "cover" }} />
              </div>
              <div>
                <p style={{ fontWeight: 800, color: "#fff", fontSize: "1rem" }}>ويقو  يمن</p>
                <p style={{ color: "#00A8D6", fontSize: "0.75rem" }}>Wego Yemen</p>
              </div>
            </div>
            <p style={{ color: "#8AA4B4", fontSize: "0.88rem", lineHeight: 1.8, marginBottom: "1.25rem", maxWidth: 300 }}>
              أفضل متجر للتقنيات والإلكترونيات في صنعاء، اليمن. موبايلات، مودمات 4G، إكسسوارات وصيانة احترافية.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href={PHONE_TEL} style={{ display: "flex", alignItems: "center", gap: 8, color: "#8AA4B4", textDecoration: "none", fontSize: "0.88rem" }}>
                <Phone size={15} color="#00A8D6" /> <span dir="ltr" style={{ unicodeBidi: "embed" }}>{PHONE_DISPLAY}</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "#8AA4B4", textDecoration: "none", fontSize: "0.88rem" }}>
                <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={15} height={15} /> واتساب مباشر
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, color: "#8AA4B4", textDecoration: "none", fontSize: "0.88rem" }}>
                <MapPin size={15} color="#FF7A00" /> صنعاء، اليمن
              </a>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1.25rem" }}>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
                style={{ width: 38, height: 38, borderRadius: "0.6rem", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#8AA4B4", textDecoration: "none", transition: "all 0.2s" }}>
                <Image src="/icons/facebook-boxed-svgrepo-com.svg" alt="Facebook" width={17} height={17} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                style={{ width: 38, height: 38, borderRadius: "0.6rem", background: "rgba(76,175,80,0.15)", border: "1px solid rgba(76,175,80,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#4CAF50", textDecoration: "none" }}>
                <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={17} height={17} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem" }}>روابط سريعة</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href}
                  style={{ color: "#8AA4B4", textDecoration: "none", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s" }}>
                  ‹ {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem" }}>موقعنا</h3>
            <div style={{ borderRadius: "0.75rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.0!2d44.2!3d15.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzAwLjAiTiA0NMKwMTInMDAuMCJF!5e0!3m2!1sar!2sye!4v1234567890"
                width="100%" height="150" style={{ border: 0, display: "block" }}
                loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                title="موقع ويقو  يمن — صنعاء"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "2rem", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ color: "#8AA4B4", fontSize: "0.8rem" }}>
            © 2025 ويقو  يمن — جميع الحقوق محفوظة
          </p>
          {/* <p style={{ color: "#8AA4B4", fontSize: "0.8rem" }}>
            صُنع بـ ❤️ في اليمن
          </p> */}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
