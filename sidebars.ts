import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  manualSidebar: [
    {
      type: 'category',
      label: 'Start her',
      items: [
        'intro',
        'hurtigkort',
      ],
    },
    {
      type: 'category',
      label: 'Start arbeidsdagen',
      items: ['start-dagen'],
    },
    {
      type: 'category',
      label: 'Motta pakker',
      items: ['ankomst-sjafor'],
    },
    {
      type: 'category',
      label: 'Utlever pakker',
      items: ['utlevering-oversikt', 'utlevering-ordinaer', 'utlevering-id-kontroll'],
    },
    {
      type: 'category',
      label: 'Send pakker og returer',
      items: ['print-etikett', 'sende-pakke-innlevert-retur'],
    },
    {
      type: 'category',
      label: 'Returflyt',
      items: ['uavhentet-retur'],
    },
    {
      type: 'category',
      label: 'Feil og avvik',
      items: [
        'feil-og-avvik-oversikt',
        'mangler-ankomstregistrering',
        'pda-problemer',
        'printer-problemer',
      ],
    },
    {
      type: 'category',
      label: 'Utstyr',
      items: [
        'utstyr-oversikt',
        'handterminal',
        'etikettprinter',
        'hyllekoder-og-profilering',
      ],
    },
    {
      type: 'category',
      label: 'Kontakt og support',
      items: ['kontakt'],
    },
    {
      type: 'category',
      label: 'Endringslogg',
      items: ['endringslogg'],
    },
  ],
};

export default sidebars;
