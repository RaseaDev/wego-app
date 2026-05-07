"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  Smartphone,
  Monitor,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Settings,
  QrCode,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Props {
  device: "android" | "ios" | "desktop";
  apkUrl: string;
  version: string;
  size: string;
}

const installSteps = [
  { icon: Download, title: "حمّل الملف", desc: "اضغط زر التحميل أدناه" },
  { icon: Settings, title: "فعّل المصادر", desc: 'الإعدادات → الأمان → "مصادر غير معروفة"' },
  { icon: Smartphone, title: "ثبّت التطبيق", desc: "افتح ملف APK واضغط تثبيت" },
  { icon: CheckCircle, title: "ابدأ الاستخدام", desc: "افتح ويقو تكنولوجي واستمتع!" },
];

export default function DownloadClient({ device, apkUrl, version, size }: Props) {
  // Auto-trigger download for Android users
  useEffect(() => {
    if (device === "android") {
      const timer = setTimeout(() => {
        const a = document.createElement("a");
        a.href = apkUrl;
        a.download = "wego-settings.apk";
        a.click();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [device, apkUrl]);

  // Compute absolute URL for QR Code
  const [qrUrl, setQrUrl] = useState("");
  useEffect(() => {
    if (apkUrl.startsWith("/")) {
      setQrUrl(`${window.location.origin}${apkUrl}`);
    } else {
      setQrUrl(apkUrl);
    }
  }, [apkUrl]);

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", background: "#F8FCFF", paddingTop: "8rem", paddingBottom: "4rem", position: "relative", overflow: "hidden" }}>
        
        {/* Background Decoration */}
        <div style={{ position: "absolute", top: "-10%", right: "-10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(0,168,214,0.08) 0%, transparent 70%)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(0,71,255,0.05) 0%, transparent 70%)", zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", textDecoration: "none" }}>
              <Image
                src="/images/شعار تطبيق ويجو تكنلوجي.jpeg"
                alt="ويقو تكنولوجي"
                width={56}
                height={56}
                style={{ borderRadius: "1rem" }}
              />
              <div style={{ textAlign: "right" }}>
                <p style={{ color: "#0D2235", fontWeight: 900, fontSize: "1.2rem", lineHeight: 1.2 }}>ويقو تكنولوجي</p>
                <p style={{ color: "#00A8D6", fontSize: "0.85rem", fontWeight: 600 }}>Wego Technology</p>
              </div>
            </Link>
            <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: 900, color: "#0D2235", marginBottom: "0.75rem" }}>
              تحميل التطبيق
            </h1>
            <p style={{ color: "#4A6878", fontWeight: 500 }}>
              الإصدار {version} • حجم {size}
            </p>
          </motion.div>

          {/* Device-specific content */}
          {device === "android" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: "#fff", borderRadius: "1.5rem", padding: "2.5rem", marginBottom: "2rem", textAlign: "center", boxShadow: "0 10px 40px rgba(0,120,180,0.08)", border: "1px solid #DFF1FA" }}
            >
              <div style={{ width: 64, height: 64, background: "#E8FAF0", border: "1px solid #A8E6C0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <CheckCircle size={28} color="#1A8C45" />
              </div>
              <h2 style={{ color: "#0D2235", fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                🎉 يبدأ التحميل تلقائياً...
              </h2>
              <p style={{ color: "#4A6878", marginBottom: "1.5rem" }}>
                تم اكتشاف جهازك (أندرويد). يبدأ التحميل خلال ثوانٍ.
              </p>
              <motion.a
                href={apkUrl}
                download="wego-settings.apk"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
                style={{ display: "inline-flex", padding: "1rem 2.5rem", fontSize: "1rem" }}
              >
                <Download size={20} style={{ marginLeft: "0.5rem" }} />
                <span>تحميل APK مباشرة</span>
              </motion.a>
            </motion.div>
          )}

          {device === "ios" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: "#fff", borderRadius: "1.5rem", padding: "2.5rem", marginBottom: "2rem", textAlign: "center", boxShadow: "0 10px 40px rgba(0,120,180,0.08)", border: "1px solid #FFE8A1" }}
            >
              <div style={{ width: 64, height: 64, background: "#FFF4D4", border: "1px solid #FFE8A1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <AlertCircle size={28} color="#FF9900" />
              </div>
              <h2 style={{ color: "#0D2235", fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                iOS غير مدعوم حالياً
              </h2>
              <p style={{ color: "#4A6878", marginBottom: "1.5rem", maxWidth: 400, margin: "0 auto 1.5rem" }}>
                التطبيق متاح حالياً لأجهزة أندرويد فقط. تواصل معنا عبر واتساب لأي استفسار.
              </p>
              <motion.a
                href={`${WHATSAPP_URL}?text=مرحباً، أريد الاستفسار عن تطبيق ويقو تكنولوجي لنظام iOS`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "1rem 2rem", background: "#E8FAF0", border: "1px solid #A8E6C0", color: "#1A8C45", borderRadius: "1rem", fontWeight: 700, textDecoration: "none" }}
              >
                <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={20} height={20} />
                <span>تواصل عبر واتساب</span>
              </motion.a>
            </motion.div>
          )}

          {device === "desktop" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: "#fff", borderRadius: "1.5rem", padding: "2.5rem", marginBottom: "2rem", boxShadow: "0 10px 40px rgba(0,120,180,0.08)", border: "1px solid #DFF1FA" }}
            >
              <div className="desktop-layout" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                
                {/* QR Code */}
                <div style={{ flexShrink: 0, textAlign: "center" }}>
                  <div style={{ width: 140, height: 140, background: "#fff", border: "1px solid #C5E8F5", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem", overflow: "hidden" }}>
                    {qrUrl ? (
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrUrl)}&color=0D2235`} 
                        alt="QR Code لـ تحميل التطبيق" 
                        style={{ width: "100%", height: "100%", objectFit: "contain", padding: "0.5rem" }} 
                        loading="lazy"
                      />
                    ) : (
                      <div style={{ width: 60, height: 60, border: "3px solid #E0F6FD", borderTopColor: "#00A8D6", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                    )}
                  </div>
                  <p style={{ color: "#4A6878", fontSize: "0.85rem", fontWeight: 600 }}>
                    امسح بكاميرا هاتفك
                    <br />
                    الأندرويد للتحميل
                  </p>
                </div>

                {/* Divider */}
                <div className="desktop-divider" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: 1, height: 60, background: "#C5E8F5" }} />
                  <span style={{ color: "#8AA4B4", fontSize: "0.85rem", fontWeight: 600 }}>أو</span>
                  <div style={{ width: 1, height: 60, background: "#C5E8F5" }} />
                </div>

                {/* Download options */}
                <div style={{ flex: 1, textAlign: "right" }} className="desktop-text-center">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }} className="desktop-flex-center">
                    <Monitor size={20} color="#00A8D6" />
                    <p style={{ color: "#0D2235", fontWeight: 800, fontSize: "1.1rem" }}>
                      تحميل مباشر على الحاسوب
                    </p>
                  </div>
                  <p style={{ color: "#4A6878", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                    حمّل الملف ثم انقله إلى هاتفك عبر كابل USB أو واتساب أو البلوتوث
                  </p>
                  <motion.a
                    href={apkUrl}
                    download="wego-settings.apk"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary"
                    style={{ display: "inline-flex", padding: "0.9rem 2rem", fontSize: "0.95rem" }}
                  >
                    <Download size={18} style={{ marginLeft: "0.5rem" }} />
                    <span>تحميل APK ({size})</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Install Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ background: "#fff", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 10px 40px rgba(0,120,180,0.08)", border: "1px solid #DFF1FA" }}
          >
            <h3 style={{ color: "#0D2235", fontWeight: 900, fontSize: "1.2rem", marginBottom: "2rem", textAlign: "center" }}>
              خطوات التثبيت
            </h3>
            <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
              {installSteps.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "1rem", background: "#E0F6FD", border: "1px solid #C5E8F5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem", position: "relative" }}>
                    <Icon size={24} color="#00A8D6" />
                    <div style={{ position: "absolute", top: -8, right: -8, width: 24, height: 24, borderRadius: "50%", background: "#00A8D6", color: "#fff", fontSize: "0.75rem", fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #fff" }}>
                      {i + 1}
                    </div>
                  </div>
                  <p style={{ color: "#0D2235", fontSize: "0.95rem", fontWeight: 800, marginBottom: "0.25rem" }}>{title}</p>
                  <p style={{ color: "#4A6878", fontSize: "0.8rem", lineHeight: 1.5 }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Help */}
            <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px dashed #C5E8F5", textAlign: "center" }}>
              <p style={{ color: "#8AA4B4", fontSize: "0.85rem", marginBottom: "0.5rem" }}>تحتاج مساعدة؟</p>
              <a
                href={`${WHATSAPP_URL}?text=مرحباً، أحتاج مساعدة في تثبيت تطبيق ويجو`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#1A8C45", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}
              >
                <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={16} height={16} />
                <span>تواصل معنا عبر واتساب — نحن هنا للمساعدة</span>
              </a>
            </div>
          </motion.div>

          {/* Back to site */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ textAlign: "center", marginTop: "2rem" }}
          >
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#4A6878", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}
            >
              <ArrowRight size={16} />
              <span>العودة للرئيسية</span>
            </Link>
          </motion.div>
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .desktop-layout { flex-direction: column !important; text-align: center !important; }
          .desktop-divider { display: none !important; }
          .desktop-text-center { text-align: center !important; }
          .desktop-flex-center { justify-content: center !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Footer />
    </>
  );
}
