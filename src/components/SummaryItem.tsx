import styles from './SummaryItem.module.css';

interface SummaryItemProps {
  color: 'blue' | 'purple';
  title: string;
  value: string;
}

export function SummaryItem({ color, title, value }: SummaryItemProps) {
  return (
    <div className={styles.container}>
      <h4 className={styles[`title-${color}`]}>{title}</h4>
      <span className={styles.value}>{value}</span>
    </div>
  );
}