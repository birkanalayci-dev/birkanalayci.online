# birkanalayci.online

Dr. Birkan Alaycı — kişisel akademik web sitesi (Koç Üniversitesi, Clinical Trials Unit).
[Astro](https://astro.build) ile statik, iki dilli (TR birincil `/`, EN `/en`), SEO-odaklı, hızlı bir site.

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ üretir
npm run preview  # build + wrangler dev (Cloudflare Workers önizleme)
```

## Mimari

```
src/
  data/site.ts          → isim/kurum satırı, linkler, açık kaynak projeler, navigasyon, UI metinleri (TEK kaynak)
  data/publications.ts  → yayın listesi (yalnızca doğrulanmış künyeler)
  layouts/Base.astro    → <head>, SEO, hreflang (tr/en), OG, schema.org Person JSON-LD
  components/           → Header (nav + TR|EN + mobil menü), Footer, PublicationList
  pages/                → TR sayfalar (/, /hakkimda, /arastirma, /iletisim, /kisisel)
  pages/en/             → EN karşılıkları (/en, /en/about, /en/research, /en/contact, /en/personal)
public/                 → robots.txt, favicon.svg, portre, _redirects (eski rotalar)
```

İçerik güncellemeleri çoğunlukla `src/data/*.ts` ve ilgili `src/pages/*.astro`
dosyalarından yapılır. Sayfa eklerken `src/data/site.ts` içindeki `NAV` dizisini
ve hem TR hem EN sayfada `trHref`/`enHref` proplarını güncelleyin (hreflang için kritik).

`/kisisel` (Velo) sayfası `noindex` ve sitemap dışıdır; footer'dan erişilir.

## Yayınlama

Site Cloudflare Workers üzerinde yayınlanır (`wrangler.jsonc`, `@astrojs/cloudflare`).
`main` dalına her push, GitHub'a bağlı Cloudflare Workers Builds ile otomatik build + deploy tetikler.
Elle deploy için: `npm run deploy` (wrangler ile giriş yapılmış olmalı).

Eski rotalar (`/yazilar`, `/ilgi-alanlari`, `/kvkk`, `/kilavuz-kartlari`, `/en/writing`,
`/en/focus-areas`, `/en/privacy` ve AR/RU/FA/DE/FR/ES iniş sayfaları) `public/_redirects`
ile 301 olarak yeni sayfalara yönlendirilir.

## Yayın notu (Eylül 2026)

Site klinik/hasta odaklı yapıdan araştırmacı odaklı yapıya çevrildi: randevu/iletişim
bilgileri, sağlık kartları, kılavuz destesi, ilgi & hizmet alanları, KVKK metni ve ek dil
iniş sayfaları kaldırıldı.
