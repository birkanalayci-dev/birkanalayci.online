# birkanalayci.online

Uzm. Dr. Birkan Alaycı — İç Hastalıkları Uzmanı kişisel/klinik web sitesi.
[Astro](https://astro.build) ile statik, iki dilli (TR birincil `/`, EN ikincil `/en`),
SEO-odaklı, hızlı bir site.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ üretir
npm run preview  # build önizleme
```

## Mimari

```
src/
  data/site.ts      → linkler, navigasyon, TR↔EN sayfa eşlemesi, sameAs (TEK kaynak)
  data/focus.ts     → ilgi/hizmet alanları içeriği
  layouts/Base.astro→ <head>, SEO, hreflang, OG, schema.org Physician JSON-LD
  components/        → Header (nav+dil+CTA+mobil menü), Footer, AppointmentBanner
  pages/            → TR sayfalar (/, /hakkimda, /ilgi-alanlari, /arastirma, /iletisim, /yazilar)
  pages/en/         → EN karşılıkları (/en, /en/about, /en/focus-areas, ...)
public/             → robots.txt, CNAME, favicon.svg, Yandex doğrulama
```

İçerik güncellemeleri çoğunlukla `src/data/*.ts` ve ilgili `src/pages/*.astro`
dosyalarından yapılır. Sayfa eklerken `src/data/site.ts` içindeki `NAV` dizisini
ve hem TR hem EN sayfada `trHref`/`enHref` proplarını güncelleyin (hreflang için kritik).

## Yayınlama (GitHub Pages — ÖNEMLİ tek seferlik ayar)

Site artık bir build adımı içerdiği için Pages kaynağı **"Deploy from a branch"**
yerine **"GitHub Actions"** olmalı:

1. Repo → **Settings → Pages → Build and deployment → Source = GitHub Actions**.
2. `main` dalına her push'ta `.github/workflows/deploy.yml` otomatik build + deploy eder.
3. Custom domain `birkanalayci.online` `public/CNAME` ile korunur (DNS değişmez).

> Not: Bu repo'da geliştirme `claude/exciting-mccarthy-g47eho` dalında yapıldı.
> `main`'e merge edilince yayın tetiklenir.

## Doldurulması gereken alanlar (placeholder)

Kod içinde `[BİRKAN DOLDURACAK]` / `[ONAY BEKLİYOR]` olarak işaretlidir. Hiçbiri
uydurulmamıştır. Detaylı liste için proje teslim notuna bakın; özet:

- `public/portrait.jpg` — profesyonel portre (alt metin hazır)
- `src/data/site.ts → PLACEHOLDER_LINKS` — LinkedIn, PubMed, doktorsitesi, Liv randevu URL'si, KVKK, harita
- `src/data/focus.ts` — ilgi alanı başlıkları onayı
- Eğitim/kariyer, dernek üyelikleri, yayın listesi (ilgili sayfalarda)
- Liv çağrı merkezi numarası (onay sonrası)
- `SHOW_PERSONAL_LINKS` — kişisel (Instagram/SoundCloud) footer linkleri, varsayılan kapalı
