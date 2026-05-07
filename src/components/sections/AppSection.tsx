"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Smartphone, ChevronDown, ChevronUp, Settings, CheckCircle, MessageCircle } from "lucide-react";
import { useState } from "react";
import { APK_URL, APK_VERSION, APK_SIZE, WHATSAPP_URL } from "@/lib/constants";

const steps = [
  { n: 1, icon: Download,      title: "تحميل الملف",           desc: 'اضغط على زر "تحميل التطبيق" أدناه' },
  { n: 2, icon: Settings,      title: "السماح بمصادر غير معروفة", desc: 'الإعدادات → الأمان → فعّل "مصادر غير معروفة"' },
  { n: 3, icon: Smartphone,    title: "تثبيت التطبيق",         desc: "افتح ملف APK من مدير الملفات واضغط تثبيت" },
  { n: 4, icon: CheckCircle,   title: "ابدأ الاستخدام",        desc: "افتح التطبيق واستمتع بكل مزايا ويقو تكنولوجي!" },
];

export default function AppSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="app" style={{ background: "#EBF6FD", padding: "5rem 0", width: "100%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">📱 التطبيق</span>
          <h2 style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 900, color: "#0D2235", marginTop: 8 }}>
            حمّل تطبيق <span className="gradient-text">ويقو تكنولوجي</span>
          </h2>
          <p style={{ color: "#4A6878", marginTop: 8 }}>تطبيق أندرويد مجاني — استعرض المنتجات، تواصل معنا، وأكثر</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }} className="app-grid">

          {/* Panel (RIGHT column in RTL — first in DOM) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Download card */}
            <div style={{ background: "#fff", border: "1px solid #C5E8F5", borderRadius: "1rem", padding: "1.5rem", boxShadow: "0 2px 16px rgba(0,120,180,0.07)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 46, height: 46, borderRadius: "0.75rem", background: "#E0F6FD", border: "1px solid #C5E8F5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Smartphone size={22} color="#00A8D6" />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#0D2235" }}>تطبيق أندرويد</p>
                  <p style={{ color: "#8AA4B4", fontSize: "0.8rem" }}>الإصدار {APK_VERSION} • {APK_SIZE}</p>
                </div>
                <span style={{ marginRight: "auto", background: "#E8FAF0", color: "#1A8C45", fontWeight: 700, fontSize: "0.75rem", padding: "0.25rem 0.65rem", borderRadius: "2rem", border: "1px solid #A8E6C0" }}>
                  مجاني
                </span>
              </div>

              <motion.a href={APK_URL} download="wego-settings.apk"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="btn-primary" style={{ width: "100%", marginBottom: "0.75rem", padding: "0.9rem" }}
                id="apk-download-btn"
              >
                <Download size={18} />
                تحميل APK مباشرة
              </motion.a>
            </div>

            {/* Install steps accordion */}
            <div style={{ background: "#fff", border: "1px solid #C5E8F5", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,120,180,0.06)" }}>
              <button onClick={() => setOpen(!open)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", background: "none", border: "none", cursor: "pointer", textAlign: "right" }}
              >
                <span style={{ fontWeight: 700, color: "#0D2235", fontSize: "0.9rem" }}>📋 كيفية التثبيت — خطوة بخطوة</span>
                {open ? <ChevronUp size={18} color="#00A8D6" /> : <ChevronDown size={18} color="#00A8D6" />}
              </button>
              {open && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} transition={{ duration: 0.3 }}
                  style={{ padding: "0 1.25rem 1.25rem", borderTop: "1px solid #DFF1FA" }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "1rem" }}>
                    {steps.map(({ n, icon: Icon, title, desc }) => (
                      <div key={n} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#E0F6FD", border: "1px solid #B3E5F7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ color: "#00A8D6", fontWeight: 800, fontSize: "0.8rem" }}>{n}</span>
                        </div>
                        <div>
                          <p style={{ fontWeight: 700, color: "#0D2235", fontSize: "0.88rem", display: "flex", alignItems: "center", gap: 5 }}>
                            <Icon size={13} color="#00A8D6" /> {title}
                          </p>
                          <p style={{ color: "#4A6878", fontSize: "0.8rem", lineHeight: 1.6, marginTop: 2 }}>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Help */}
            <div style={{ textAlign: "center" }}>
              <a href={`${WHATSAPP_URL}?text=مرحباً، أحتاج مساعدة في تثبيت تطبيق ويقو`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#1A8C45", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none" }}
              >
                <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={15} height={15} /> تحتاج مساعدة؟ تواصل معنا عبر واتساب
              </a>
            </div>
          </motion.div>

          {/* Visual (LEFT column in RTL — second in DOM) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-1.5rem", borderRadius: "50%", border: "2px dashed rgba(0,168,214,0.25)", animation: "spin 18s linear infinite" }} />
              <motion.div
                animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "#fff", borderRadius: "1.5rem", padding: "2rem", boxShadow: "0 10px 50px rgba(0,120,180,0.18)", border: "1px solid #C5E8F5", textAlign: "center" }}
              >
                <div style={{ width: 140, height: 140, borderRadius: "1rem", overflow: "hidden", margin: "0 auto 1rem" }}>
                  <Image src="/images/شعار تطبيق ويجو تكنلوجي.jpeg" alt="تطبيق ويقو تكنولوجي" width={140} height={140} style={{ objectFit: "cover" }} />
                </div>
                <p style={{ fontWeight: 800, color: "#0D2235" }}>تطبيق ويقو تكنولوجي</p>
                <p style={{ color: "#00A8D6", fontSize: "0.85rem", fontWeight: 600, marginTop: 4 }}>الإصدار {APK_VERSION}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 10, fontSize: "0.78rem", color: "#8AA4B4" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF50", animation: "pulse 2s infinite" }} />
                  متاح • {APK_SIZE}
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .app-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
