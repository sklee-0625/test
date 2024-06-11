import React from 'react';
import styles from './Header.module.css';

export default function Header({ filters }) {
  return (
    <header className={styles.header}>
      <div></div>
      <ul className={styles.filters}>
        {filters.map((filter) => (
          <li className={styles.filter}>{filter}</li>
        ))}
      </ul>
    </header>
  );
}
