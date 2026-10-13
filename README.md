# 🎓 IT Legend — Learn Web Development

منصة كورسات لتعلم تطوير الويب من الصفر وحتى الأطر الحديثة، مبنية بـ **Next.js 16 (App Router)** مع **React 19** و **TypeScript** و **Tailwind CSS v4** ومكونات **shadcn/ui**.

## ✨ المميزات

- **كشف الكورسات** (`/`): هيرو + شبكة كاركات للكورسات مع صورة مصغّرة وشريط تقدّم وشارة الفئة.
- **صفحة تفاصيل الكورس** (`/courses/[id]`):
  - فيديو الكورس (YouTube iframe).
  - معلومات الكورس والمدرّب وشارة النسبة.
  - شريط تقدّم المستخدم.
  - **أكورديون المنهج** (سكشنز/دروس) مع **أنيميشن سلس** عند الفتح والإغلاق (ارتفاع + fade) وتقليل الحركة مدعوم (`motion-reduce`).
  - **التعليقات** (من JSONPlaceholder) لودينج بـ Suspense skeleton.
- **الوضع الداكن/الفاتح 🌙**: مبدّل ثيم في الهيدر (next-themes) بيحفظ اختيارك.
- **خطأ/حالة فارغة**: مكونات معالجة لكل الحالات.
- **تصميم متجاوب** بالكامل.

## 🤖 التقنيات والمكتبات (Tech Stack)

| المكتبة | الاستخدام |
|---|---|
| **next** `16.4.0` | إطار العمل — App Router، API Routes، Rendering |
| **react** / **react-dom** `19.3.0` | أساس المكونات |
| **next-themes** `^0.4.6` | الثيم الداكن/الفاتح |
| **tailwindcss** `^4` (+ **@tailwindcss/turbopack**) | التنسيق |
| **@radix-ui/react-slot** | `asChild` في الـ Button |
| **@radix-ui/react-avatar** | مكوّن الصور الرمزية (Avatar) |
| **@radix-ui/react-collapsible** | أكورديون المنهج |
| **@radix-ui/react-progress** | شريط التقدّم |
| **@radix-ui/react-separator** | الخطوط الفاصلة |
| **class-variance-authority** | فاريانتات الـ Button |
| **lucide-react** | الأيقونات |
| **clsx** + **tailwind-merge** | دالة `cn()` لدمج الكلاسات |
| **typescript** `^5` + **@types/\*** | الأنواع |
| **eslint** `^9` + **eslint-config-next** | الـ Lint |

> تمت إزالة `tw-animate-css` لأنه لم يكن مستخدمًا (لا توجد أي `animate-*` utilities).

## 🎨 لوحة الألوان (Design System)

نظام صارم من **3 ألوان فقط** + الأبيض، بدون ألوان عشوائية (عدا الحالات الدلالية فقط):

| الدور | اللون |
|---|---|
| الخلفية `--background` | `#F5F5F5` |
| الأساسي `--primary` | `#303841` |
| الثانوي `--secondary` | `#2C2C2C` |
| الكروت `--surface` | `#FFFFFF` |

- كل الألوان معرفة كـ **CSS variables** + **shadcn tokens** في `src/app/globals.css`، وبتتكرر في تكوين Tailwind (`@theme inline`).
- **الوضع الداكن**: `.dark` يقلب نفس العائلة (سطح `#26282d`، خلفية `#1a1b1f`، نصوص فاتحة `#f5f5f5`).
- الحالات الدلالية فقط (أخضر للإكمال، أحمر للخطأ) لها ألوان مسموحة + فاريانت داكن.

## 📁 هيكل المشروع

```
src/
├── app/
│   ├── api/courses/route.ts        # API داخلية للكورسات
│   ├── courses/[id]/               # تفاصيل الكورس (page, loading, not-found)
│   ├── courses/page.tsx            # صفحة الكورسات
│   ├── layout.tsx                  # ThemeProvider + Header + fonts
│   ├── page.tsx                    # الصفحة الرئيسية (catalog)
│   └── globals.css                 # tokens + dark mode
├── components/
│   ├── ui/                         # مكونات shadcn (button, card, avatar, …)
│   ├── home/                       # مكونات الصفحة الرئيسية
│   ├── courses/                    # مكونات صفحة التفاصيل
│   └── (avatar, header, theme-*, error-state)  # مشتركة
├── lib/                            # courses, comments, format, utils
└── types/data.ts                   # الداتا والأنواع
```

> القاعدة: **مكوّن واحد في ملف واحد** (`one component per file`).

## 🚀 التشغيل

```bash
npm install      # تثبيت المكتبات
npm run dev      # تطوير على http://localhost:3000
npm run build    # بناء الإنتاج
npm start        # تشغيل البناء على http://localhost:3000
npm run lint     # فحص الكود
```

- التطبيق يعمل على المنفذ **3000** (مشروع آخر، cv-builder، على 3001).

## 🔌 البيانات

- الكورسات: أكواد ثابتة في `src/types/data.ts` + API داخلية `GET /api/courses` (تقدم نفس الداتا).
- الصفحات بتجيب داتا من الـ API بتاعها عبر `NEXT_PUBLIC_API_URL` (افتراضي `http://localhost:3000`) مع `export const dynamic = "force-dynamic"` لضمان بيانات حديثة.
- التعليقات: `JSONPlaceholder` (آخر 3 تعليقات).

## 📜 السكريبتات

| الأمر | الوظيفة |
|---|---|
| `npm run dev` | خادم التطوير |
| `npm run build` | بناء إنتاجي |
| `npm start` | تشغيل البناء |
| `npm run lint` | فحص ESLint |