# PostNord Service Point / Mypack Collect-håndbok

Dette repoet inneholder en docs-as-code-manual bygget med Docusaurus. Siden er satt opp som en ren dokumentasjonsside med norsk innhold, task-basert sidebar og lokalt søk.

## Local dev

```bash
npm install
npm start
```

Utviklingsserveren åpner manualen lokalt. Hurtigvalg/cards på startsiden redigeres i [docs/intro.mdx](/Users/philip/Desktop/PN/Håndbok/Webhandbok/docs/intro.mdx).

## Bygg og kvalitetssjekk

```bash
npm run build
```

Bruk `npm run build` som standard sjekk for å fange brutte lenker, manglende bilder og andre innholdsfeil.

## Deploy til GitHub Pages

Workflowen ligger i [.github/workflows/deploy-github-pages.yml](/Users/philip/Desktop/PN/Håndbok/Webhandbok/.github/workflows/deploy-github-pages.yml) og deployer automatisk ved push til `main`.

### Første gangs oppsett i GitHub

1. Push repoet til GitHub.
2. Gå til `Settings -> Pages`.
3. Velg `GitHub Actions` som source.
4. Push til `main` for å trigge bygg og deploy.

### URL og base path

- Lokalt bruker prosjektet `baseUrl: '/'`.
- I GitHub Actions bygger prosjektet automatisk med `baseUrl: '/service-point-manual/'` basert på repo-navnet.
- Standard GitHub Pages-URL blir `https://<github-bruker>.github.io/service-point-manual/`.

### Eget domene senere

Hvis dere vil bruke eget domene senere, kan dere:

1. sette `DOCUSAURUS_URL` til hele domenet, for eksempel `https://manual.dittdomene.no`
2. sette `DOCUSAURUS_BASE_URL` til `'/'` hvis manualen skal ligge på rotdomenet
3. eventuelt oppdatere DNS og GitHub Pages-innstillingene

## Domenestrategi og sikker drift

- Offentlig manual: `postnord.webhandbok.net`
- Redaktørflate: `redaktor.postnord.webhandbok.net` (Cloudflare Access + OTP)
- Redaktørflaten skal ikke indekseres (robots + `X-Robots-Tag`).
- Redaktør og publisert manual holdes separert på ulike hostnames.
- Reputasjonssjekk bør kjøres ukentlig i Google Search Console og Microsoft SmartScreen.

## Content workflow

Redaktørguider og arbeidsflyt er flyttet til editoren:
- `/help/redaktorguide.html`
- `/help/arbeidsflyt-innhold.html`
- `/help/screenshots-guide.html`
- `/help/screenshot-backlog.html`

Kortversjon:

1. Start dev-server med `npm start`.
2. Oppdater eller legg til docs i `docs/`.
3. Oppdater `sidebars.ts` hvis navigasjonen endres.
4. Oppdater [docs/hurtigkort.mdx](/Users/philip/Desktop/PN/Håndbok/Webhandbok/docs/hurtigkort.mdx) hvis prosedyren er driftkritisk.
5. Kjør `npm run build`.
6. Commit og push til `main` for automatisk deploy.

## Legg til eller endre sider

1. Opprett en ny `.mdx`- eller `.md`-fil i `docs/`.
2. Legg siden inn i `sidebars.ts`.
3. Bruk samme struktur som i eksisterende prosedyresider:
   `Når brukes dette?`, `Mål`, nummererte steg, `Kontrollpunkt` og `Vanlige feil`.

## Screenshot workflow

1. Lagre bildet i `static/img/pda/`.
2. Bruk navnekonvensjonen `<side>-<steg>-kortnavn.png`.
3. Bytt ut TODO-plassholderen i riktig docs-side med faktisk screenshot.
4. Kryss av i editorens backlog-side (`/help/screenshot-backlog.html`) når bildet er på plass.
5. Følg editorens screenshots-guide (`/help/screenshots-guide.html`) for detaljer.
6. Kjør `npm run build` for å sjekke at alle bildelenker er gyldige.

## Hvordan sjekke at lenker er ok

Kjør:

```bash
npm run build
```

Bygget stopper hvis det finnes broken links eller manglende lokale bilder.

## Prosjektstruktur

- `docs/` inneholder selve håndboken
- `src/components/ProcedureStep/` inneholder stegmalen for prosedyresider
- `src/components/ManualLayout/` inneholder kortgrid, relaterte lenker og toppseksjoner for docs-malene
- `static/img/pda/` inneholder PDA-screenshots
- `docusaurus.config.ts` styrer docs-first-oppsett, navbar, søk og deploy-relatert URL/baseUrl
