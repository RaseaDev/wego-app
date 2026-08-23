import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "دعم تطبيق WeGo 4G",
  description:
    "صفحة الدعم الفني لتطبيق WeGo 4G — طريقة الاتصال بجهاز الواي فاي، حل مشكلات الشبكة وتسجيل الدخول. تواصل معنا عبر البريد الإلكتروني أو واتساب.",
  alternates: {
    canonical: "https://wegoyemen.com/support",
  },
  openGraph: {
    url: "https://wegoyemen.com/support",
    title: "دعم تطبيق WeGo 4G | ويقو تكنولوجي",
    description: "الدعم الفني لتطبيق WeGo 4G — حل مشكلات الشبكة والاتصال",
  },
};

const SUPPORT_EMAIL = "auxtechno65@gmail.com";

export default function SupportPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", background: "#F0F8FC", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>

          {/* Hero */}
          <div
            style={{
              background: "linear-gradient(135deg, #00A8D6, #0047FF)",
              borderRadius: "1.25rem",
              padding: "2.5rem 2rem",
              textAlign: "center",
              marginBottom: "2rem",
              color: "#fff",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <div style={{ width: 72, height: 72, borderRadius: 16, overflow: "hidden", border: "3px solid rgba(255,255,255,0.4)" }}>
                <Image
                  src="/images/شعار تطبيق ويجو تكنلوجي.jpeg"
                  alt="WeGo 4G"
                  width={72}
                  height={72}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <h1 style={{ fontSize: "clamp(1.5rem,5vw,2.2rem)", fontWeight: 900, marginBottom: "0.5rem" }}>
              دعم تطبيق WeGo 4G
            </h1>
            <p style={{ opacity: 0.88, fontSize: "1rem" }}>
              نحن هنا لمساعدتك — تواصل معنا أو اطّلع على الحلول الشائعة أدناه
            </p>
          </div>

          {/* Contact Card */}
          <Card title="📬 تواصل مع الدعم" color="#00A8D6">
            <InfoRow label="البريد الإلكتروني">
              <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "#0047FF", fontWeight: 700, direction: "ltr", unicodeBidi: "embed" } as React.CSSProperties}>
                {SUPPORT_EMAIL}
              </a>
            </InfoRow>
            <InfoRow label="واتساب">
              <a
                href="https://wa.me/967783313335"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                style={{ color: "#25D366", fontWeight: 700, unicodeBidi: "embed" } as React.CSSProperties}
              >
                +967 783 313 335
              </a>
            </InfoRow>
            <InfoRow label="ساعات الدعم">
              الأحد – الخميس والسبت، ٨ص – ١٠م (بتوقيت صنعاء)
            </InfoRow>
          </Card>

          {/* Connection Steps */}
          <Card title="📶 طريقة الاتصال بجهاز الواي فاي (WeGo 4G)" color="#0047FF">
            <ol style={{ paddingRight: "1.25rem", lineHeight: 2.2, color: "#0D2235", fontSize: "0.93rem" }}>
              <li>شغّل جهاز الواي فاي واضغط على زر التشغيل حتى يضيء المصباح.</li>
              <li>افتح إعدادات الواي فاي على هاتفك وابحث عن اسم شبكة <strong>WeGo_XXXX</strong>.</li>
              <li>أدخل كلمة المرور المطبوعة على ملصق الجهاز.</li>
              <li>بعد الاتصال، افتح تطبيق <strong>WeGo 4G</strong> — سيظهر مستوى الإشارة والبيانات المتبقية تلقائياً.</li>
              <li>إذا لم تتعرّف على الشبكة، أعد تشغيل الجهاز وانتظر ٣٠ ثانية ثم أعد المحاولة.</li>
            </ol>
          </Card>

          {/* Troubleshooting */}
          <Card title="🔧 حلول للمشكلات الشائعة" color="#7DC400">
            <Section heading="❌ مشكلة: لا تظهر الشبكة أو لا يمكن الاتصال">
              <ul style={listStyle}>
                <li>تأكد من أن جهاز الواي فاي مشحون وقيد التشغيل.</li>
                <li>أعد تشغيل الجهاز والهاتف معاً.</li>
                <li>تحقق من أنك ضمن نطاق تغطية شبكة WeGo 4G.</li>
                <li>إذا استمرت المشكلة، أعد ضبط الجهاز بالضغط على زر الإعادة لمدة ١٠ ثوانٍ.</li>
              </ul>
            </Section>

            {/* <Section heading="🔐 مشكلة: تسجيل الدخول إلى التطبيق">
              <ul style={listStyle}>
                <li>تأكد من إدخال رقم الهاتف الصحيح المرتبط بالحساب.</li>
                <li>تحقق من وصول رمز التحقق (OTP) على رسائلك القصيرة.</li>
                <li>إذا لم يصل الرمز، اضغط على «إعادة إرسال» بعد ٦٠ ثانية.</li>
                <li>امسح بيانات التطبيق من الإعدادات ثم أعد فتحه.</li>
                <li>تأكد من تحديث التطبيق إلى أحدث إصدار.</li>
              </ul>
            </Section> */}

            <Section heading="⚠️ مشكلة: صلاحية الشبكة المحلية (Local Network Access)">
              <ul style={listStyle}>
                <li>
                  على <strong>iOS</strong>: اذهب إلى <em>الإعدادات ← الخصوصية والأمان ← الشبكة المحلية</em> وفعّل الإذن لتطبيق <strong>WeGo 4G</strong>.
                </li>
                <li>
                  على <strong>Android</strong>: اذهب إلى <em>إعدادات التطبيقات ← WeGo 4G ← الأذونات</em> وتأكد من منح إذن الشبكة.
                </li>
                <li>إذا رفضت الإذن مسبقاً، احذف التطبيق وأعد تثبيته لتظهر رسالة الإذن من جديد.</li>
                <li>تأكد من اتصال هاتفك بشبكة واي فاي جهاز WeGo 4G وليس بشبكة أخرى.</li>
              </ul>
            </Section>
          </Card>

          {/* Privacy Link */}
          <div
            style={{
              background: "#fff",
              border: "1.5px solid #C5E8F5",
              borderRadius: "1rem",
              padding: "1.25rem 1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <p style={{ color: "#4A6878", fontSize: "0.95rem" }}>
              للاطّلاع على كيفية معالجة بياناتك الشخصية:
            </p>
            <Link
              href="/privacy"
              style={{
                background: "linear-gradient(135deg, #00A8D6, #0047FF)",
                color: "#fff",
                fontWeight: 700,
                padding: "0.6rem 1.5rem",
                borderRadius: "0.75rem",
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              سياسة الخصوصية ←
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

function Card({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: `1.5px solid ${color}22`, borderRadius: "1rem", marginBottom: "1.5rem", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,168,214,0.07)" }}>
      <div style={{ background: `${color}14`, borderBottom: `2px solid ${color}33`, padding: "0.9rem 1.5rem" }}>
        <h2 style={{ color, fontWeight: 800, fontSize: "1.05rem", margin: 0 }}>{title}</h2>
      </div>
      <div style={{ padding: "1.25rem 1.5rem" }}>{children}</div>
    </div>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.4rem", padding: "0.6rem 0", borderBottom: "1px solid #E0F6FD" }}>
      <span style={{ color: "#4A6878", fontSize: "0.9rem", fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: "0.95rem" }}>{children}</span>
    </div>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <h3 style={{ color: "#0D2235", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{heading}</h3>
      {children}
    </div>
  );
}

const listStyle: React.CSSProperties = {
  paddingRight: "1.25rem",
  lineHeight: 2.1,
  color: "#0D2235",
  fontSize: "0.92rem",
};