"use client";

import { motion } from "framer-motion";
import { Wifi, Wrench, Smartphone, Package, ArrowLeft } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const services = [
  {
    icon: Wifi, title: "مودمات 4G ذكية",
    desc: "مودم ويقو  4G — الحل الأمثل للإنترنت في اليمن. تقنية USB plug-and-play، لا تعقيد ولا إعدادات.",
    features: ["تقنية 4G LTE", "USB plug-and-play", "تغطية واسعة", "متوافق مع جميع الشبكات"],
    badge: "الأكثر طلباً", color: "#00A8D6", bg: "#E0F6FD", border: "#B3E5F7",
  },
  {
    icon: Smartphone, title: "أحدث الهواتف الذكية",
    desc: "تشكيلة واسعة من أحدث الهواتف بمختلف الفئات والأسعار مع ضمان الشركة.",
    features: ["أحدث الموديلات", "ضمان الشركة", "أسعار تنافسية", "تنوع واسع"],
    badge: null, color: "#0047FF", bg: "#E8EEFF", border: "#C0CCFF",
  },
  {
    icon: Package, title: "إكسسوارات أصلية",
    desc: "كل ما تحتاجه لموبايلك — سماعات، كفرات، شواحن، كابلات. جودة أصلية 100٪.",
    features: ["جودة معتمدة", "توافق واسع", "ضمان الأصالة", "أسعار مناسبة"],
    badge: null, color: "#7DC400", bg: "#F0FAE0", border: "#C8EE88",
  },
  {
    icon: Wrench, title: "صيانة احترافية",
    desc: "تشخيص مجاني وصيانة متخصصة لجميع الموبايلات والأجهزة على يد خبراء معتمدين.",
    features: ["تشخيص مجاني", "قطع غيار أصلية", "خبراء معتمدون", "ضمان ما بعد الصيانة"],
    badge: "تشخيص مجاني", color: "#FF7A00", bg: "#FFF3E8", border: "#FFCFA0",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: "#fff", padding: "5rem 0", width: "100%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">خدماتنا</span>
          <h2 style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 900, color: "#0D2235", marginTop: 8 }}>
            كل شيء تحتاجه <span className="gradient-text">في مكان واحد</span>
          </h2>
          <p style={{ color: "#4A6878", marginTop: 8 }}>من المودمات الذكية إلى الصيانة الاحترافية — نحن هنا لخدمتك</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="services-grid">
          {services.map(({ icon: Icon, title, desc, features, badge, color, bg, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: `0 12px 35px ${color}18` }}
              style={{
                background: "#fff", border: `1px solid ${border}`,
                borderRadius: "1rem", padding: "1.75rem",
                boxShadow: "0 2px 16px rgba(0,100,160,0.06)", transition: "all 0.25s ease",
                position: "relative",
              }}
            >
              {badge && (
                <span style={{
                  position: "absolute", top: 16, left: 16,
                  background: color, color: "#fff",
                  fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "2rem",
                }}>
                  {badge}
                </span>
              )}

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 52, height: 52, borderRadius: "0.85rem", background: bg, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={24} color={color} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontWeight: 800, color: "#0D2235", fontSize: "1.05rem", marginBottom: 6 }}>{title}</h3>
                  <p style={{ color: "#4A6878", fontSize: "0.84rem", lineHeight: 1.7, marginBottom: "0.85rem" }}>{desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                    {features.map((f) => (
                      <span key={f} style={{ fontSize: "0.75rem", color, background: bg, padding: "0.2rem 0.6rem", borderRadius: "0.4rem", fontWeight: 600, border: `1px solid ${border}` }}>
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`${WHATSAPP_URL}?text=مرحباً، أريد الاستفسار عن: ${encodeURIComponent(title)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, color, fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}
                  >
                    استفسر الآن <ArrowLeft size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
