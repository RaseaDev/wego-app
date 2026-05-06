"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const cats = ["الكل", "مودمات 4G", "موبايلات", "إكسسوارات", "صيانة", "عروض"];

export default function ProductsGrid() {
  const [active, setActive] = useState("الكل");
  const filtered = active === "الكل" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" style={{ background: "#F0F8FC", padding: "5rem 0", width: "100%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="section-label">تشكيلتنا</span>
          <h2 style={{ fontSize: "clamp(1.5rem,4vw,2.2rem)", fontWeight: 900, color: "#0D2235", marginTop: 8 }}>
            منتجات وخدمات <span className="gradient-text">ويقو  يمن</span>
          </h2>
          <p style={{ color: "#4A6878", marginTop: 8 }}>اختر من بين أفضل المنتجات التقنية المتاحة في اليمن بأسعار تنافسية وجودة مضمونة</p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.5rem 1.1rem", borderRadius: "2rem", fontWeight: 700, fontSize: "0.88rem",
                border: "1.5px solid",
                cursor: "pointer", transition: "all 0.2s",
                background: active === cat ? "#00A8D6" : "#fff",
                color: active === cat ? "#fff" : "#4A6878",
                borderColor: active === cat ? "#00A8D6" : "#C5E8F5",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="products-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  title={product.name}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                  badge={product.badge ?? undefined}
                  features={product.features}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 900px) { .products-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 540px) { .products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
