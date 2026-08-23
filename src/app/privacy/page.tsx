import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "سياسة الخصوصية — WeGo 4G",
  description:
    "سياسة الخصوصية لتطبيق WeGo 4G من ويقو تكنولوجي. تعرّف على كيفية جمع بياناتك واستخدامها وحمايتها.",
  alternates: {
    canonical: "https://wegoyemen.com/privacy",
  },
  openGraph: {
    url: "https://wegoyemen.com/privacy",
    title: "سياسة الخصوصية — WeGo 4G | ويقو تكنولوجي",
    description: "سياسة الخصوصية لتطبيق WeGo 4G من ويقو تكنولوجي",
  },
};

const LAST_UPDATED = "23 أغسطس 2026";
const SUPPORT_EMAIL = "auxtechno65@gmail.com";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", background: "#F0F8FC", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Hero */}
          <div
            style={{
              background: "linear-gradient(135deg, #0D2235, #0047FF)",
              borderRadius: "1.25rem",
              padding: "2.5rem 2rem",
              textAlign: "center",
              marginBottom: "2rem",
              color: "#fff",
            }}
          >
            <h1 style={{ fontSize: "clamp(1.5rem,5vw,2rem)", fontWeight: 900, marginBottom: "0.5rem" }}>
              سياسة الخصوصية
            </h1>
            <p style={{ opacity: 0.85, fontSize: "0.95rem" }}>
              تطبيق <strong>WeGo 4G</strong> — ويقو تكنولوجي (Wego Technology)
            </p>
            <p style={{ opacity: 0.6, fontSize: "0.85rem", marginTop: "0.4rem" }}>
              آخر تحديث: {LAST_UPDATED}
            </p>
          </div>

          {/* Content */}
          <div
            style={{
              background: "#fff",
              borderRadius: "1rem",
              padding: "2rem 2rem",
              boxShadow: "0 2px 16px rgba(0,168,214,0.07)",
              lineHeight: 2,
              color: "#0D2235",
              fontSize: "0.93rem",
            }}
          >
            <div style={{ marginBottom: "1.75rem", padding: "1rem 1.25rem", background: "#F0F9FD", borderRadius: "0.75rem", borderRight: "4px solid #0047FF" }}>
              <p style={{ margin: 0, fontWeight: 500 }}>
                نحن في <strong>ويقو تكنولوجي (Wego Technology)</strong> نولي خصوصية المستخدمين أهمية قصوى، ونلتزم بحماية بياناتك وضمان استخدامها بطريقة آمنة وشفافة. توضح هذه السياسة كيفية التعامل مع المعلومات عند استخدامك لتطبيق <strong>WeGo 4G</strong> لإدارة جهاز المودم والواي فاي.
              </p>
            </div>

            <PolicySection title="١. المعلومات التي نقوم بجمعها">
              <p>
                تطبيق <strong>WeGo 4G لا يقوم بجمع أو تخزين أي بيانات شخصية حساسة</strong> مثل:
              </p>
              <ul style={ulStyle}>
                <li>الاسم الكامل</li>
                <li>رقم الهوية</li>
                <li>رقم الهاتف</li>
                <li>الموقع الجغرافي الدقيق</li>
                <li>الصور أو جهات الاتصال أو الملفات الشخصية</li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                قد يتم الوصول فقط إلى بعض <strong>المعلومات التقنية الضرورية</strong> لتشغيل التطبيق والاتصال بالجهاز، مثل:
              </p>
              <ul style={ulStyle}>
                <li><strong>عنوان الـ IP</strong> الخاص بالمودم / جهاز الواي فاي.</li>
                <li><strong>معلومات الشبكة المحلية (Wi-Fi):</strong> مثل قوة الإشارة، اسم الشبكة، وحالة الاتصال.</li>
              </ul>
              <p style={{ marginTop: "0.5rem", color: "#4A6878", fontSize: "0.88rem" }}>
                وذلك لغرض إدارة المودم وتحسين أداء واستقرار الاتصال فقط.
              </p>
            </PolicySection>

            <PolicySection title="٢. كيفية استخدام المعلومات">
              <p>تُستخدم المعلومات التقنية التي يتم الوصول إليها للأغراض التالية فقط:</p>
              <ul style={ulStyle}>
                <li>تمكين التحكم في إعدادات المودم وجهاز WeGo 4G.</li>
                <li>إدارة الشبكة والأجهزة المتصلة وعرض استهلاك البيانات.</li>
                <li>تحسين مستوى الأمان ومنع الوصول غير المصرح به للمودم.</li>
                <li>تحسين أداء الإنترنت واستقراره ومتابعة جودة الإشارة.</li>
                <li>تحسين تجربة وسلاسة الاستخدام داخل التطبيق.</li>
              </ul>
            </PolicySection>

            <PolicySection title="٣. الأذونات المطلوبة">
              <p>قد يطلب التطبيق بعض الأذونات الضرورية مثل:</p>
              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#E0F6FD" }}>
                    <th style={thStyle}>الإذن</th>
                    <th style={thStyle}>الغرض والاستخدام</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["الوصول إلى الشبكة المحلية (Local Network)", "للتواصل المباشر مع جهاز المودم WeGo 4G وإدارته محلياً"],
                    ["معلومات الواي فاي (Wi-Fi State)", "لقراءة حالة الاتصال وعرض بيانات الشبكة ومستوى الإشارة"],
                    ["الإشعارات (Notifications)", "تنبيهات حالة الجهاز أو انتهاء الباقة (اختياري)"],
                  ].map(([perm, reason]) => (
                    <tr key={perm} style={{ borderBottom: "1px solid #E0F6FD" }}>
                      <td style={tdStyle}><strong>{perm}</strong></td>
                      <td style={tdStyle}>{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ marginTop: "0.75rem", fontSize: "0.88rem", color: "#4A6878" }}>
                يتم استخدام هذه الأذونات حصرياً لتنفيذ وظائف التطبيق الأساسية محلياً، ولا تُستخدم لأي أغراض أخرى.
              </p>
            </PolicySection>

            <PolicySection title="٤. مشاركة المعلومات">
              <p>تطبيق <strong>WeGo 4G</strong>:</p>
              <ul style={ulStyle}>
                <li>❌ <strong>لا يشارك</strong> بياناتك مع أي طرف ثالث.</li>
                <li>❌ <strong>لا يبيع أو يؤجر</strong> أي معلومات على الإطلاق.</li>
                <li>❌ <strong>لا يعرض إعلانات</strong> تعتمد على بيانات أو تتبع المستخدم.</li>
              </ul>
              <p style={{ marginTop: "0.75rem", fontWeight: 700, color: "#0047FF" }}>
                🔒 جميع البيانات تُستخدم محلياً بين التطبيق والمودم فقط، ولا يتم إرسال أي بيانات إلى خوادم خارجية.
              </p>
            </PolicySection>

            <PolicySection title="٥. أمان المعلومات">
              <p>
                نلتزم باتخاذ الإجراءات التقنية المناسبة لحماية المعلومات من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف، ويتم ذلك عبر:
              </p>
              <ul style={ulStyle}>
                <li>الاتصال المباشر والآمن بالمودم.</li>
                <li>عدم تخزين أي بيانات حساسة على أي خوادم خارجية.</li>
              </ul>
            </PolicySection>

            <PolicySection title="٦. خصوصية الأطفال">
              <p>
                تطبيق WeGo 4G غير موجه للأطفال دون سن ١٣ عاماً، ولا نقوم بجمع أي معلومات شخصية خاصة بالأطفال عن قصد.
              </p>
            </PolicySection>

            <PolicySection title="٧. التغييرات على سياسة الخصوصية">
              <p>
                قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تعديل داخل التطبيق أو في هذه الصفحة، ويُعد استمرارك في استخدام التطبيق موافقة على التعديلات.
              </p>
            </PolicySection>

            <PolicySection title="٨. التواصل معنا">
              <p>في حال وجود أي استفسار أو ملاحظة بخصوص سياسة الخصوصية، يسعدنا تواصلكم معنا عبر:</p>
              <ul style={ulStyle}>
                <li>
                  <strong>البريد الإلكتروني:</strong>{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "#0047FF", fontWeight: 700 }}>
                    {SUPPORT_EMAIL}
                  </a>
                </li>
                <li><strong>الشركة:</strong> ويقو تكنولوجي (Wego Technology)</li>
                <li><strong>العنوان:</strong> صنعاء، الجمهورية اليمنية</li>
              </ul>
            </PolicySection>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #E0F6FD", textAlign: "center" }}>
              <Link
                href="/support"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #00A8D6, #0047FF)",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "0.65rem 1.75rem",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                ← صفحة الدعم الفني
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "1.75rem" }}>
      <h2 style={{ color: "#0047FF", fontWeight: 800, fontSize: "1rem", marginBottom: "0.65rem", paddingBottom: "0.35rem", borderBottom: "2px solid #E0F6FD" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

const ulStyle: React.CSSProperties = { paddingRight: "1.25rem", lineHeight: 2.1 };
const tableStyle: React.CSSProperties = { width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" };
const thStyle: React.CSSProperties = { padding: "0.6rem 1rem", textAlign: "right", fontWeight: 700, color: "#0047FF", borderBottom: "2px solid #00A8D6" };
const tdStyle: React.CSSProperties = { padding: "0.55rem 1rem", verticalAlign: "top" };