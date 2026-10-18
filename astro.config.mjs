// ============================================================
// PROJEKT-STRUKTUR (Astro, statisch, GitHub-Pages-ready)
//
// savary-site/
// ├── astro.config.mjs
// ├── package.json
// ├── public/
// │   └── favicon.svg
// ├── src/
// │   ├── layouts/Base.astro
// │   ├── components/Header.astro
// │   ├── components/Footer.astro
// │   ├── pages/index.astro
// │   ├── pages/impressum.astro
// │   └── pages/datenschutz.astro
// └── TODOs: Bilder nach public/images/, Links eintragen
// ============================================================


// ===== FILE: astro.config.mjs =====
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Bei GitHub Pages Projekt-Seite unter username.github.io/repo:
  // site: 'https://savary.one',
  // base: '/repo-name',
  site: 'https://savary.one',
  trailingSlash: 'never',
});


// ===== FILE: package.json =====
{
  "name": "savary-site",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.0.0"
  }
}


// ===== FILE: src/layouts/Base.astro =====
---
interface Props {
  title: string;
  description?: string;
}
const { title, description = 'Personal-Website von Pius Savary – Self-Hoster & Hobby-Entwickler' } = Astro.props;
---
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  :root {
    --bg: #0f1115;
    --surface: #171a21;
    --text: #e6e8ec;
    --muted: #9aa3b2;
    --accent: #4f9cf9;
    --border: #262b36;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.65;
  }
  .container { max-width: 880px; margin: 0 auto; padding: 0 1.25rem; }
  a { color: var(--accent); text-decoration: none; }
  a:hover { text-decoration: underline; }
  section { margin: 2.5rem 0; }
  h1 { font-size: 2.1rem; line-height: 1.2; }
  h2 { font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--accent); }
  p { color: var(--muted); margin-bottom: 1rem; }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.25rem;
  }
  .card img { width: 100%; border-radius: 8px; margin: 0.75rem 0; }
  .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0; }
  .tag {
    font-size: 0.75rem;
    background: var(--border);
    border-radius: 999px;
    padding: 0.15rem 0.7rem;
    color: var(--muted);
  }
  .status { font-size: 0.8rem; font-weight: 600; }
  .status.wip { color: #f0a04b; }
  .status.done { color: #3ec46d; }
  .links a { margin-right: 1rem; }
</style>


// ===== FILE: src/components/Header.astro =====
---
import '../layouts/Base.astro'; // nur zur Typ-Nähe, optional entfernbar
---
<header>
  <div class="container header-inner">
    <a href="/" class="brand">Pius Savary</a>
    <nav>
      <a href="/">Start</a>
      <a href="/#projekte">Projekte</a>
      <a href="/#kontakt">Kontakt</a>
    </nav>
  </div>
</header>

<style>
  header {
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .brand { font-weight: 700; font-size: 1.1rem; color: var(--text); }
  nav a { margin-left: 1.25rem; color: var(--muted); }
  nav a:hover { color: var(--text); }
</style>


// ===== FILE: src/components/Footer.astro =====
<footer>
  <div class="container">
    <p>
      <a href="/impressum">Impressum</a> ·
      <a href="/datenschutz">Datenschutz</a>
    </p>
    <p>© {new Date().getFullYear()} Pius Savary</p>
  </div>
</footer>

<style>
  footer {
    border-top: 1px solid var(--border);
    margin-top: 4rem;
    padding: 1.5rem 0 2.5rem;
  }
  p { font-size: 0.85rem; }
</style>


// ===== FILE: src/pages/index.astro =====
---
import Base from '../layouts/Base.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

// TODO: Trage hier deine echten Links ein:
const links = {
  github: 'https://github.com/DEIN-USER',          // TODO
  codeberg: 'https://codeberg.org/DEIN-USER',     // TODO
  linkedin: 'https://www.linkedin.com/in/DEIN-NAME', // TODO
  email: 'mailto:kontakt@savary.one',
  storePdf: 'https://apps.microsoft.com/detail/XXXX', // TODO: Microsoft Store PDF-Migrator
  repoPflege: 'https://github.com/DEIN-USER/pflegedokumentation', // TODO
  repoDashboard: 'https://github.com/DEIN-USER/homelab-dashboard', // TODO
};

const projekte = [
  {
    name: 'Pflegedokumentationssystem',
    status: 'In Entwicklung',
    statusClass: 'wip',
    beschreibung:
      'Webbasierte Pflegedokumentation für den Heimbetrieb – selbst gehostet, DSGVO-freundlich und ohne Cloud-Zwang. Verbindet meine Berufserfahrung aus dem Gesundheitswesen mit meiner Freude an Softwareentwicklung.',
    bild: '/images/pflegedoku.png', // TODO: Bild nach public/images/
    stack: ['Astro', 'Docker', 'SQLite'], // TODO: anpassen
    href: links.repoPflege,
    linkLabel: 'GitHub-Repository',
  },
  {
    name: 'Homelab-Dashboard',
    status: 'Aktiv',
    statusClass: 'done',
    beschreibung:
      'Zentrales Dashboard für meine selbst gehosteten Dienste (Nextcloud, Reverse Proxy u. v. m.) – Status, Übersicht und alles auf einen Blick.',
    bild: '/images/dashboard.png', // TODO: Bild nach public/images/
    stack: ['Docker', 'NGINX Proxy Manager', 'Self-Hosting'],
    href: links.repoDashboard,
    linkLabel: 'GitHub-Repository',
  },
  {
    name: 'PDF-Migrator',
    status: 'Im Microsoft Store',
    statusClass: 'done',
    beschreibung:
      'Desktop-Tool zum Umziehen und Aufräumen von PDF-Bibliotheken – verfügbar im Microsoft Store.',
    bild: '/images/pdf-migrator.png', // TODO: Store-Screenshot nach public/images/
    stack: ['Windows App'], // TODO: Tech-Stack ergänzen
    href: links.storePdf,
    linkLabel: 'Microsoft Store',
  },
];
---
<Base title="Pius Savary – Self-Hoster & Hobby-Entwickler">
  <Header />
  <main class="container">

    <section class="hero">
      <h1>Pius Savary</h1>
      <p class="subtitle"><strong>Self-Hoster &amp; Hobby-Entwickler</strong></p>
      <p>
        Ich komme aus dem Gesundheitswesen und beschäftige mich seit einiger
        Zeit intensiv mit IT – selbstständig und mit viel Neugier. In meinem
        Homelab hoste und betreibe ich eigene Dienste und entwickle Software,
        die genau dort ansetzt, wo ich aus dem Berufsalltag Lücken kenne.
      </p>
    </section>

    <section id="projekte">
      <h2>Projekte</h2>
      {projekte.map((p) => (
        <article class="card">
          <h3>{p.name}</h3>
          <span class={`status ${p.statusClass}`}>{p.status}</span>
          <p>{p.beschreibung}</p>
          <img src={p.bild} alt={`Screenshot: ${p.name}`} loading="lazy" />
          <div class="tags">
            {p.stack.map((s) => <span class="tag">{s}</span>)}
          </div>
          <p><a href={p.href} target="_blank" rel="noopener">{p.linkLabel} ↗</a></p>
        </article>
      ))}
    </section>

    <section id="kontakt">
      <h2>Kontakt</h2>
      <p>Du findest mich hier:</p>
      <div class="links">
        <a href={links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        <a href={links.github} target="_blank" rel="noopener">GitHub</a>
        <a href={links.codeberg} target="_blank" rel="noopener">Codeberg</a>
        <a href={links.email}>E-Mail</a>
      </div>
    </section>

  </main>
  <Footer />
</Base>

<style>
  .hero { padding-top: 3rem; }
  .subtitle { font-size: 1.05rem; margin-top: -1rem; }
  h3 { margin-bottom: 0.35rem; }
</style>


// ===== FILE: src/pages/impressum.astro =====
---
import Base from '../layouts/Base.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---
<Base title="Impressum – Pius Savary">
  <Header />
  <main class="container">
    <section>
      <h1>Impressum</h1>

      <div class="card">
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          <!-- TODO: Pflichtangaben ergänzen: -->
          Pius Savary<br />
          [Straße und Hausnummer]<br />
          [PLZ Ort]<br />
          Deutschland
        </p>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href="mailto:kontakt@savary.one">kontakt@savary.one</a></p>
        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Pius Savary, Anschrift wie oben.</p>
      </div>

      <p class="hinweis">
        Hinweis: Diese Seite ist ein privates, nicht-kommerzielles Projekt.
        <!-- TODO (optional): Anstelle der Privatadresse kann eine
             ladungsfähige Geschäftsadresse / c/o-Adresse angegeben werden. -->
      </p>
    </section>
  </main>
  <Footer />
</Base>

<style>
  h1 { margin-bottom: 1.5rem; }
  h2 { font-size: 1.05rem; margin-top: 1.25rem; }
  .card p { color: var(--text); margin-bottom: 0.5rem; }
  .hinweis { font-size: 0.85rem; }
</style>


// ===== FILE: src/pages/datenschutz.astro =====
---
import Base from '../layouts/Base.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---
<Base title="Datenschutzerklärung – Pius Savary">
  <Header />
  <main class="container">
    <section>
      <h1>Datenschutzerklärung</h1>

      <div class="card">
        <h2>1. Verantwortlicher</h2>
        <p>
          Pius Savary, [Anschrift wie im Impressum], E-Mail:
          <a href="mailto:kontakt@savary.one">kontakt@savary.one</a>
        </p>

        <h2>2. Kein Tracking, keine Cookies</h2>
        <p>
          Diese Website verwendet <strong>keine Cookies, kein Tracking und
          keine Analyse-Tools</strong>. Beim Besuch der Seite werden keine
          personenbezogenen Daten von mir erhoben, gespeichert oder ausgewertet.
          Es ist daher auch keine Cookie-Einwilligung erforderlich.
        </p>

        <h2>3. Server-Logfiles</h2>
        <p>
          Beim Aufruf der Website werden vom Hosting-Anbieter technisch
          bedingt automatisiert Informationen in Server-Logfiles gespeichert
          (z. B. aufgerufene Seite, Datum und Uhrzeit, übertragene
          Datenmenge, Browsertyp, IP-Adresse). Diese Daten sind nicht
          bestimmten Personen zuordenbar und werden nicht mit anderen
          Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen
          Betrieb der Website). Die Logfiles werden nach kurzer Zeit
          automatisch gelöscht.
        </p>

        <h2>4. Hosting</h2>
        <p>
          Diese Website wird statisch über <strong>GitHub Pages</strong>
          (GitHub, Inc. / Microsoft-Gruppe, USA) ausgeliefert.
          <!-- TODO: Falls doch eigenes Hosting bei IONOS:
               diesen Abschnitt entsprechend anpassen. -->
          Dabei kann es zu einer Übermittlung von Verbindungsdaten in die
          USA kommen. GitHub ist unter dem EU-US Data Privacy Framework
          (DPF) zertifiziert, wodurch ein angemessenes Datenschutzniveau
          für Datenübermittlungen in die USA sichergestellt wird.
          Es werden von mir keine Formulardaten erhoben; die Übermittlung
          beschränkt sich auf die unter Ziffer 3 genannten technischen
          Verbindungsdaten.
        </p>

        <h2>5. Externe Links</h2>
        <p>
          Diese Website verlinkt auf externe Angebote (z. B. GitHub,
          Codeberg, LinkedIn, Microsoft Store). Beim Klick auf einen Link
          verlassen Sie meine Website; für die dortige Datenverarbeitung
          gilt die Datenschutzerklärung des jeweiligen Anbieters.
          Es werden keine Plugins oder eingebettete Inhalte Dritter
          verwendet.
        </p>

        <h2>6. Kontakt per E-Mail</h2>
        <p>
          Wenn Sie mich per E-Mail kontaktieren, verarbeite ich Ihre
          Angaben zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b
          DSGVO). Die Daten werden gelöscht, sobald der Zweck entfällt
          und keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
          und Widerspruch sowie das Recht, sich bei einer
          Datenschutzaufsichtsbehörde zu beschweren.
        </p>
      </div>

      <p class="hinweis">
        Hinweis: Dies ist eine für diese statische private Website
        erstellteMustertext-Datenschutzerklärung. Bitte individuell
        prüfen (z. B. mit eRecht24-Generator) und an das tatsächliche
        Hosting anpassen.
      </p>
    </section>
  </main>
  <Footer />
</Base>

<style>
  h1 { margin-bottom: 1.5rem; }
  h2 { font-size: 1.05rem; margin-top: 1.25rem; }
  .card p { color: var(--text); margin-bottom: 0.75rem; }
  .hinweis { font-size: 0.85rem; }
</style>


// ===== FILE: public/favicon.svg =====
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#4f9cf9"/>
  <text x="32" y="43" font-family="sans-serif" font-size="32"
        font-weight="700" fill="#0f1115" text-anchor="middle">PS</text>
</svg>


// ============================================================
// LOSGEHT'S (lokal):
//   npm install
//   npm run dev        → http://localhost:4321
//   npm run build      → dist/ (statisch)
//
// DEPLOY AUF GITHUB PAGES (GitHub Action):
//   .github/workflows/deploy.yml anlegen (siehe Doku:
//   "Deploy your Astro site to GitHub Pages"). Danach im Repo
//   Settings → Pages → Source: GitHub Actions.
//
// DNS BEI IONOS:
//   A-Records @ → 185.199.108.153 / 109.153 / 110.153 / 111.153
//   CNAME www → DEIN-USER.github.io
//   Custom Domain in den Repo-Pages-Einstellungen: savary.one
//
// TODO-LISTE:
//   [ ] Links (GitHub, Codeberg, LinkedIn, Store) eintragen
//   [ ] Screenshots nach public/images/ (pflegedoku.png,
//       dashboard.png, pdf-migrator.png)
//   [ ] Tech-Stacks anpassen
//   [ ] Impressum: Anschrift ergänzen (oder c/o-Adresse)
//   [ ] Datenschutzerklärung final prüfen
// ============================================================
