"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Headphones, Tag } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "ضمان الجودة", desc: "جميع منتجاتنا أصلية 100٪ مع ضمان الشركة", color: "#00A8D6", bg: "#E0F6FD" },
  { icon: Truck, title: "توصيل سريع", desc: "توصيل داخل صنعاء وجميع محافظات اليمن", color: "#0047FF", bg: "#E8EEFF" },
  { icon: Headphones, title: "دعم فني متواصل", desc: "فريق متخصص لدعمك على مدار الساعة", color: "#7DC400", bg: "#F0FAE0" },
  { icon: Tag, title: "أسعار تنافسية", desc: "أفضل الأسعار في السوق اليمني مع عروض مستمرة", color: "#FF7A00", bg: "#FFF3E8" },
];

export default function FeaturesStrip() {
  return (
    <section style={{ background: "#fff", padding: "4rem 0", width: "100%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-label">لماذا ويقو ؟</span>
          <h2 style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 900, color: "#0D2235", marginTop: 8 }}>
            ميزاتنا التي <span className="gradient-text">تميزنا</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.25rem" }} className="features-grid">
          {features.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: `0 8px 30px ${color}20` }}
              style={{
                background: "#fff", border: "1px solid #DFF1FA", borderRadius: "1rem",
                padding: "1.75rem 1.25rem", textAlign: "center",
                boxShadow: "0 2px 12px rgba(0,120,180,0.06)", transition: "all 0.25s ease",
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: "1rem", background: bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1rem", border: `1px solid ${color}25`,
              }}>
                <Icon size={26} color={color} />
              </div>
              <h3 style={{ fontWeight: 800, color: "#0D2235", fontSize: "1rem", marginBottom: 8 }}>{title}</h3>
              <p style={{ color: "#4A6878", fontSize: "0.85rem", lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
