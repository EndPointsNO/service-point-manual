import type {ReactNode} from 'react';
import styles from './styles.module.css';

type ProcedureStepProps = {
  number: number;
  title: string;
  image: string;
  alt: string;
  children: ReactNode;
};

export default function ProcedureStep({
  number,
  title,
  image,
  alt,
  children,
}: ProcedureStepProps) {
  return (
    <section className={styles.stepCard}>
      <div className={styles.header}>
        <span className={styles.number}>Steg {number}</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.body}>{children}</div>
      <div className={styles.placeholder}>
        <p className={styles.placeholderLabel}>Screenshot TODO</p>
        <p className={styles.placeholderText}>{alt}</p>
        <code>{image}</code>
        <img className={styles.image} src={image} alt={alt} />
      </div>
    </section>
  );
}
