# ROLAB Engineers’ Cup 2026

Үш тілдегі (KZ/RU/EN) Next.js сайты. Тіркелу батырмалары Google Forms-қа апарады. Барлық логотип пен постер `public/images/` ішінде.

## Жергілікті іске қосу
1. Node.js 20.9 немесе жаңасын орнатыңыз.
2. Терминалда: `npm install`
3. `npm run dev`
4. `http://localhost:3000` ашыңыз.

## Vercel-ге жариялау
1. ZIP архивін ашыңыз.
2. Жобаны GitHub репозиторийіне жүктеңіз.
3. vercel.com → Add New → Project → GitHub репозиторийін таңдаңыз.
4. Framework: Next.js (автоматты анықталады), Deploy басыңыз.
5. Vercel берген сілтемені пайдаланыңыз.

## Өзгерту
- Мәтіндер мен үш тіл: `app/page.tsx` → `data`
- Google Form URL: `app/page.tsx` → `FORM`
- Стильдер: `app/globals.css`
- Суреттер: `public/images/`

Ескерту: Google Form тіркелімдері осы сайтта емес, Google Forms ішінде сақталады.


## Жаңартулар
- Жарыс бағыттарындағы бес карточкаға тиісті фотолар қосылды (public/images/*.webp).
- Серіктестер қатарына Auezov University логотипі қосылды (public/images/extra.png).
- Басқа беттер, үш тіл және Google Forms тіркелуі өзгертілмеді.
