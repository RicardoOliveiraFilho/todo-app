import styles from './Header.module.css';

import logoImg from '../assets/rocket.png';

export function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.content}>
        <img className={styles.logo} src={logoImg} alt="Logo da ToDo App" />
        <h1 className={styles.title}>
          <span>to</span><span>do</span>
        </h1>
      </div>
    </header>
  );
}