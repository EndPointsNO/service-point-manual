import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const projectName =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'service-point-manual';
const githubOwner = process.env.GITHUB_REPOSITORY_OWNER ?? 'your-github-user';
const isGithubPagesDeploy =
  process.env.GITHUB_ACTIONS === 'true' ||
  process.env.DOCUSAURUS_DEPLOY_TARGET === 'github-pages';

const config: Config = {
  title: 'PostNord Service Point',
  tagline: 'Praktisk håndbok for Mypack Collect og Service Point-rutiner',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url:
    process.env.DOCUSAURUS_URL ??
    process.env.GITHUB_PAGES_URL ??
    `https://${githubOwner}.github.io`,
  baseUrl:
    process.env.DOCUSAURUS_BASE_URL ??
    (isGithubPagesDeploy ? `/${projectName}/` : '/'),
  organizationName: githubOwner,
  projectName,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'nb',
    locales: ['nb'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          breadcrumbs: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Service Point-håndbok',
      logo: {
        alt: 'PostNord Service Point',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual',
        },
        {
          type: 'doc',
          docId: 'endringslogg',
          position: 'left',
          label: 'Endringslogg',
        },
        {
          type: 'doc',
          docId: 'hurtigkort',
          position: 'left',
          label: 'Hurtigkort',
        },
        {type: 'search', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Manual',
          items: [
            {
              label: 'Introduksjon',
              to: '/',
            },
            {label: 'Kontakt og support', to: '/kontakt'},
          ],
        },
        {
          title: 'Drift',
          items: [
            {
              label: 'Screenshots-guide',
              to: '/screenshots-guide',
            },
            {
              label: 'Screenshot backlog',
              to: '/screenshot-backlog',
            },
            {label: 'Hurtigkort', to: '/hurtigkort'},
            {label: 'Endringslogg', to: '/endringslogg'},
          ],
        },
        {
          title: 'Om løsningen',
          items: [
            {label: 'Bygget med Docusaurus', href: 'https://docusaurus.io/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PostNord Service Point.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
