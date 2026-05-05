"use client";

import { useEffect } from "react";
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
  { icon: CheckCircle, title: "ابدأ الاستخدام", desc: "افتح ويجو يمن واستمتع!" },
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

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0F1E] pt-24 pb-16">
        {/* Background */}
        <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none" />
        <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/شعار ويجو للتطبيق (1).png"
                alt="ويجو يمن"
                width={56}
                height={56}
                className="rounded-xl"
              />
              <div className="text-right">
                <p className="text-white font-bold text-xl">ويجو يمن</p>
                <p className="text-brand-cyan text-sm">Wego Yemen</p>
              </div>
            </Link>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
              تحميل التطبيق
            </h1>
            <p className="text-slate-400">
              الإصدار {version} • حجم {size}
            </p>
          </motion.div>

          {/* Device-specific content */}
          {device === "android" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 mb-8 text-center border-brand-cyan/30"
            >
              <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={28} className="text-green-400" />
              </div>
              <h2 className="text-white font-bold text-xl mb-2">
                🎉 يبدأ التحميل تلقائياً...
              </h2>
              <p className="text-slate-400 mb-6">
                تم اكتشاف جهازك (أندرويد). يبدأ التحميل خلال ثوانٍ.
              </p>
              <motion.a
                href={apkUrl}
                download="wego-settings.apk"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base py-4 px-10 inline-flex mx-auto"
                id="android-download-btn"
              >
                <Download size={20} />
                <span>تحميل APK مباشرة</span>
              </motion.a>
            </motion.div>
          )}

          {device === "ios" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 mb-8 text-center border-amber-500/30"
            >
              <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={28} className="text-amber-400" />
              </div>
              <h2 className="text-white font-bold text-xl mb-2">
                iOS غير مدعوم حالياً
              </h2>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">
                التطبيق متاح حالياً لأجهزة أندرويد فقط. تواصل معنا عبر واتساب
                لأي استفسار.
              </p>
              <motion.a
                href={`${WHATSAPP_URL}?text=مرحباً، أريد الاستفسار عن تطبيق ويجو يمن لنظام iOS`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500/20 border border-green-500/30 text-green-400 rounded-xl font-bold hover:bg-green-500/30 transition-all"
              >
                <MessageCircle size={20} />
                <span>تواصل عبر واتساب</span>
              </motion.a>
            </motion.div>
          )}

          {device === "desktop" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* QR Placeholder */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <QrCode size={96} className="text-[#0A0F1E]" />
                  </div>
                  <p className="text-slate-400 text-sm">
                    امسح بكاميرا هاتفك
                    <br />
                    الأندرويد للتحميل
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:flex flex-col items-center gap-2">
                  <div className="w-px h-20 bg-brand-cyan/20" />
                  <span className="text-slate-500 text-sm">أو</span>
                  <div className="w-px h-20 bg-brand-cyan/20" />
                </div>

                {/* Download options */}
                <div className="flex-1 text-center md:text-right">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Monitor size={18} className="text-brand-cyan" />
                    <p className="text-white font-bold">
                      تحميل مباشر على الحاسوب
                    </p>
                  </div>
                  <p className="text-slate-400 text-sm mb-5">
                    حمّل الملف ثم انقله إلى هاتفك عبر كابل USB أو واتساب أو
                    البلوتوث
                  </p>
                  <motion.a
                    href={apkUrl}
                    download="wego-settings.apk"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,191,255,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary inline-flex text-base py-4 px-8 mb-3"
                    id="desktop-download-btn"
                  >
                    <Download size={20} />
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
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-white font-bold text-lg mb-6 text-center">
              خطوات التثبيت
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {installSteps.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-brand-cyan" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-brand-cyan text-[#0A0F1E] text-xs font-black flex items-center justify-center mx-auto mb-2">
                    {i + 1}
                  </div>
                  <p className="text-white text-sm font-semibold mb-1">{title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Help */}
            <div className="mt-6 pt-5 border-t border-white/5 text-center">
              <p className="text-slate-500 text-sm mb-2">
                تحتاج مساعدة؟
              </p>
              <a
                href={`${WHATSAPP_URL}?text=مرحباً، أحتاج مساعدة في تثبيت تطبيق ويجو`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 text-sm font-semibold hover:underline"
              >
                <MessageCircle size={14} />
                <span>تواصل معنا عبر واتساب — نحن هنا للمساعدة</span>
              </a>
            </div>
          </motion.div>

          {/* Back to site */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-cyan transition-colors text-sm"
            >
              <ArrowRight size={16} />
              <span>العودة للرئيسية</span>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
