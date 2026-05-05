"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Package, Star, Clock } from "lucide-react";

const stats = [
  { icon: Users, label: "عميل سعيد", value: 1200, suffix: "+", color: "#00A8D6" },
  { icon: Package, label: "منتج متاح", value: 500, suffix: "+", color: "#0047FF" },
  { icon: Star, label: "سنوات خبرة", value: 5, suffix: "+", color: "#7DC400" },
  { icon: Clock, label: "دعم يومي", value: 7, suffix: "/٢٤", color: "#FF7A00" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function StatCard({ icon: Icon, label, value, suffix, color, delay }: { icon: typeof Users; label: string; value: number; suffix: string; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      style={{
        background: "#fff", border: "1px solid #DFF1FA", borderRadius: "1rem",
        padding: "1.5rem 1rem", textAlign: "center",
        boxShadow: "0 2px 16px rgba(0,120,180,0.07)",
        transition: "box-shadow 0.2s",
        cursor: "default",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: "0.75rem", margin: "0 auto 0.75rem",
        background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={22} color={color} />
      </div>
      <p style={{ fontSize: "1.8rem", fontWeight: 900, color, direction: "ltr" }}>
        {count.toLocaleString("ar")}{suffix}
      </p>
      <p style={{ color: "#4A6878", fontSize: "0.85rem", fontWeight: 600, marginTop: 4 }}>{label}</p>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section style={{ background: "#EBF6FD", padding: "3rem 0", width: "100%" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}
          className="stats-grid"
        >
          {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.1} />)}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
