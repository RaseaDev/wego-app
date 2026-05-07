"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { APK_URL } from "@/lib/constants";

const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(145deg, #EBF6FD 0%, #F5FBFE 40%, #EEF5FF 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Subtle background circles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,168,214,0.12) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,71,255,0.07) 0%, transparent 70%)" }} />
        {/* Grid dots */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,168,214,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.5,
        }} />
      </div>

      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}
          className="flex-col-mobile"
        >

          {/* ── Text (RIGHT column in RTL — first in DOM) ── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            style={{ textAlign: "right" }}
          >
            <motion.div variants={item}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#E0F6FD", border: "1px solid #B3E5F7",
                borderRadius: "2rem", padding: "0.35rem 1rem",
                color: "#0082A8", fontWeight: 700, fontSize: "0.82rem",
                marginBottom: "1.25rem",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00A8D6", display: "inline-block", animation: "pulse 2s infinite" }} />
              🚀 أفضل تقنية في اليمن
            </motion.div>

            <motion.h1 variants={item}
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#0D2235", lineHeight: 1.2, marginBottom: "0.5rem" }}
            >
              التقنية{" "}
              <span className="gradient-text">بين يديك</span>
            </motion.h1>

            <motion.p variants={item}
              style={{ fontSize: "clamp(1.2rem, 3vw, 1.75rem)", fontWeight: 700, color: "#4A6878", marginBottom: "1rem" }}
            >
              مع <span style={{ color: "#00A8D6" }}>ويقو تكنولوجي</span>
            </motion.p>

            <motion.p variants={item}
              style={{ color: "#4A6878", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem", maxWidth: 460 }}
            >
              موبايلات متطورة • مودمات 4G ذكية • إكسسوارات أصلية • صيانة احترافية<br />
              <span style={{ color: "#8AA4B4", fontSize: "0.9rem" }}>كل ما تحتاجه في مكان واحد — صنعاء، اليمن</span>
            </motion.p>

            <motion.div variants={item} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", }}>
              <Link href="/download" className="btn-primary" style={{ fontSize: "1rem", padding: "0.9rem 1.75rem", textDecoration: "none" }} id="hero-download">
                <Download size={18} />
                تحميل التطبيق مجاناً
              </Link>
              {/* <button
                onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary"
                style={{ fontSize: "1rem", padding: "0.9rem 1.75rem" }}
              >
                <span>استعرض المنتجات</span>
                <ArrowLeft size={18} />
              </button> */}
            </motion.div>

            {/* <motion.div variants={item} style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1.25rem", justifyContent: "flex-end" }}>
              {[
                { label: "+1000 عميل", color: "#0082A8", bg: "#E0F6FD" },
                { label: "+5 سنوات خبرة", color: "#7DC400", bg: "#F0FAE0" },
                { label: "جودة مضمونة ✓", color: "#1A8C45", bg: "#E8FAF0" },
              ].map((b) => (
                <span key={b.label} style={{
                  background: b.bg, color: b.color, fontWeight: 700,
                  fontSize: "0.82rem", padding: "0.35rem 0.85rem",
                  borderRadius: "0.5rem", border: `1px solid ${b.color}30`,
                }}>
                  {b.label}
                </span>
              ))}
            </motion.div> */}
          </motion.div>

          {/* ── Visual (LEFT column in RTL — second in DOM) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <div style={{ position: "relative" }}>
              {/* Ring */}
              <div style={{
                position: "absolute", inset: "-1.5rem",
                borderRadius: "50%", border: "2px dashed rgba(0,168,214,0.25)",
                animation: "spin 18s linear infinite",
              }} />
              {/* Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "#fff",
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  boxShadow: "0 10px 50px rgba(0,120,180,0.18)",
                  border: "1px solid #C5E8F5",
                  textAlign: "center",
                }}
              >
                <div style={{ width: 160, height: 160, borderRadius: "1rem", overflow: "hidden", margin: "0 auto 1rem" }}>
                  <Image
                    src="/images/شعار تطبيق ويجو تكنلوجي.jpeg"
                    alt="تطبيق ويقو تكنولوجي"
                    width={160}
                    height={160}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    priority
                  />
                </div>
                <p style={{ fontWeight: 800, color: "#0D2235", fontSize: "1.05rem" }}>ويقو تكنولوجي</p>
                <p style={{ color: "#00A8D6", fontWeight: 600, fontSize: "0.85rem", marginTop: 4 }}>التطبيق الأول للتقنية في اليمن</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 12, fontSize: "0.78rem", color: "#8AA4B4" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF50", animation: "pulse 2s infinite" }} />
                  متاح للتحميل الآن
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", textAlign: "center" }}
      >
        <p style={{ fontSize: "0.75rem", color: "#8AA4B4", marginBottom: 6 }}>اسحب للأسفل</p>
        <div style={{ width: 22, height: 38, border: "2px solid rgba(0,168,214,0.3)", borderRadius: 12, margin: "0 auto", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: 4 }}>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
            style={{ width: 4, height: 8, borderRadius: 4, background: "#00A8D6" }} />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .flex-col-mobile {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto;
          }
        }
      `}</style>
    </section>
  );
}
