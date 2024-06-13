import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { HiMoon } from 'react-icons/hi';
import { HiSun } from 'react-icons/hi';

export default function Header({ filters, filter, filterChange }) {
  //
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li
            key={index}
            className={`${styles.filter} ${filter === value && styles.on}`}
            onClick={() => filterChange(value)}
          >
            <button type='button'>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
