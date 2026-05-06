# ويقو  يمن | Wego Yemen Website

موقع ويقو  يمن الرسمي — بُني بـ Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

## 🚀 بدء التطوير المحلي

```bash
npm install
npm run dev
```

الموقع يعمل على: http://localhost:3000

## 📱 تحميل التطبيق

ملف APK موجود في: `public/wego-settings.apk`

صفحة التحميل: http://localhost:3000/download

## 🏗️ هيكل المشروع

```
src/
├── app/
│   ├── layout.tsx       # Layout رئيسي + SEO
│   ├── page.tsx         # الصفحة الرئيسية
│   └── download/        # صفحة تحميل التطبيق
├── components/
│   ├── layout/          # Header + Footer
│   ├── sections/        # أقسام الصفحة
│   └── ui/              # مكونات قابلة للإعادة
├── data/                # بيانات المنتجات والعروض
└── lib/                 # ثوابت وإعدادات
```

## 🌐 النشر على Vercel

```bash
npm run build    # تحقق من البناء
vercel --prod    # نشر على Vercel
```

## 📦 APK على GitHub Releases

1. اذهب إلى Releases في هذا الريبو
2. أنشئ Release جديد بـ tag: `v8.9`
3. أرفق ملف `wego-settings.apk`
4. رابط التحميل المباشر:
   ```
   https://github.com/RaseaDev/wego-website/releases/latest/download/wego-settings.apk
   ```

## 📞 معلومات الشركة

- **الموقع**: صنعاء، اليمن
- **الهاتف**: +967 783 313 335
- **واتساب**: https://wa.me/967783313335

---
