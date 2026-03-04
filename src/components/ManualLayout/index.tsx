import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type QuickLink = {
  title: string;
  to: string;
  description: string;
  tag?: string;
};

type LinkItem = {
  label: string;
  to: string;
};

type ProcedureIntroProps = {
  whenUsed: string;
  goal: string;
};

type ChecklistSectionProps = {
  title: string;
  items: string[];
};

type RelatedLinksProps = {
  links: LinkItem[];
};

type QuickLinksProps = {
  items: QuickLink[];
};

export function ProcedureIntro({whenUsed, goal}: ProcedureIntroProps) {
  return (
    <section className={styles.summaryGrid}>
      <article className={styles.summaryCard}>
        <p className={styles.eyebrow}>Når brukes dette?</p>
        <p>{whenUsed}</p>
      </article>
      <article className={styles.summaryCard}>
        <p className={styles.eyebrow}>Mål</p>
        <p>{goal}</p>
      </article>
    </section>
  );
}

export function ChecklistSection({title, items}: ChecklistSectionProps) {
  return (
    <section className={styles.sectionCard}>
      <h2>{title}</h2>
      <ul className={styles.bulletList}>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function RelatedLinks({links}: RelatedLinksProps) {
  return (
    <section className={styles.sectionCard}>
      <h2>Relaterte sider</h2>
      <ul className={styles.linkList}>
        {links.map(link => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function QuickLinks({items}: QuickLinksProps) {
  return (
    <div className={styles.quickGrid}>
      {items.map(item => (
        <Link key={item.to} className={styles.quickCard} to={item.to}>
          {item.tag ? <span className={styles.quickTag}>{item.tag}</span> : null}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
