"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  badge?: string;
  features: string[];
}

export default function ProductCard({ title, description, image, category, badge, features }: ProductCardProps) {
  const catColors: Record<string, { color: string; bg: string }> = {
    "مودمات 4G": { color: "#00A8D6", bg: "#E0F6FD" },
    "موبايلات":  { color: "#0047FF", bg: "#E8EEFF" },
    "إكسسوارات": { color: "#7DC400", bg: "#F0FAE0" },
    "صيانة":     { color: "#FF7A00", bg: "#FFF3E8" },
    "عروض":      { color: "#E91E8C", bg: "#FFE8F5" },
  };
  const style = catColors[category] ?? { color: "#00A8D6", bg: "#E0F6FD" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, boxShadow: `0 16px 40px ${style.color}22` }}
      style={{
        background: "#fff", border: "1px solid #DFF1FA", borderRadius: "1rem",
        overflow: "hidden", boxShadow: "0 2px 16px rgba(0,100,160,0.07)",
        transition: "all 0.25s ease", display: "flex", flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
          className="product-img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)" }} />
        {/* Category */}
        <span style={{
          position: "absolute", top: 10, left: 10,
          background: style.bg, color: style.color, fontWeight: 700,
          fontSize: "0.72rem", padding: "0.25rem 0.65rem", borderRadius: "2rem",
          border: `1px solid ${style.color}30`,
        }}>
          {category}
        </span>
        {/* Badge */}
        {badge && (
          <span style={{
            position: "absolute", top: 10, right: 10,
            background: "#FF7A00", color: "#fff",
            fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.65rem",
            borderRadius: "2rem",
          }}>
            {badge}
          </span>
        )}
        {/* Title overlay */}
        <p style={{ position: "absolute", bottom: 10, right: 10, left: 10, color: "#fff", fontWeight: 800, fontSize: "1rem" }}>{title}</p>
      </div>

      {/* Body */}
      <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <p style={{ color: "#4A6878", fontSize: "0.84rem", lineHeight: 1.7 }}>{description}</p>

        {/* Features */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {features.map((f) => (
            <span key={f} style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              fontSize: "0.75rem", color: style.color, background: style.bg,
              padding: "0.2rem 0.6rem", borderRadius: "0.4rem", fontWeight: 600,
            }}>
              <CheckCircle size={11} />
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`${WHATSAPP_URL}?text=مرحباً، أريد الاستفسار عن: ${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            background: "#E8FAF0", color: "#1A8C45", fontWeight: 700, fontSize: "0.88rem",
            padding: "0.65rem", borderRadius: "0.6rem", textDecoration: "none",
            border: "1px solid #A8E6C0", marginTop: "auto", transition: "all 0.2s",
          }}
        >
          <Image src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={16} height={16} />
          استفسر عبر واتساب
        </a>
      </div>
      <style>{`.product-img:hover { transform: scale(1.05); }`}</style>
    </motion.div>
  );
}
