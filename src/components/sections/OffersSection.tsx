"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { offers } from "@/data/offers";
import { WHATSAPP_URL } from "@/lib/constants";

export default function OffersSection() {
  return (
    <section style={{ background: "#fff", padding: "5rem 0", width: "100%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-label">العروض</span>
          <h2 style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 900, color: "#0D2235", marginTop: 8 }}>
            أحدث العروض والتخفيضات
          </h2>
          <p style={{ color: "#4A6878", marginTop: 8 }}>عروض حصرية لعملاء ويقو  يمن — محدودة الوقت!</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="offers-grid">
          {offers.map(({ id, title, description, image, badge, cta }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 16px 50px rgba(0,120,180,0.15)" }}
              style={{
                position: "relative", borderRadius: "1.25rem", overflow: "hidden",
                height: 280, boxShadow: "0 4px 20px rgba(0,100,160,0.1)",
                transition: "all 0.3s ease", cursor: "pointer",
              }}
            >
              {/* Image */}
              <Image src={image} alt={title} fill style={{ objectFit: "cover", transition: "transform 0.4s" }} className="offer-img" sizes="(max-width: 768px) 100vw, 50vw" />
              {/* Gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />

              {/* Badge */}
              {badge && (
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity }}
                  style={{ position: "absolute", top: 16, right: 16, background: "#00A8D6", color: "#fff", fontWeight: 800, fontSize: "0.78rem", padding: "0.3rem 0.85rem", borderRadius: "2rem" }}
                >
                  {badge}
                </motion.div>
              )}

              {/* Content */}
              <div style={{ position: "absolute", bottom: 0, right: 0, left: 0, padding: "1.5rem", textAlign: "right" }}>
                <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", marginBottom: 6 }}>{title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", marginBottom: "0.85rem", lineHeight: 1.6 }}>{description}</p>
                <a
                  href={`${WHATSAPP_URL}?text=مرحباً، أريد الاستفسار عن عرض: ${encodeURIComponent(title)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontWeight: 700, fontSize: "0.85rem", padding: "0.5rem 1rem", borderRadius: "0.6rem", textDecoration: "none", transition: "all 0.2s" }}
                >
                  {cta || "اطلب الآن"} <ArrowLeft size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .offer-img:hover { transform: scale(1.04); }
        @media (max-width: 640px) { .offers-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
