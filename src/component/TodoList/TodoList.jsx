import React, { useState } from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todo, setTodo] = useState([
    {
      id: '1',
      content: '일어나기',
      state: 'active',
    },
    {
      id: '2',
      content: '밥먹기',
      state: 'active',
    },
  ]);
  //
  return (
    <sesction className={styles.contain}>
      <ul className={styles.box}>
        <Todo todo={todo} />
      </ul>

      <div className={styles.footer}>
        <div className={styles.footerIn}>
          <input type='text' />
          <button>Add</button>
        </div>
      </div>
    </sesction>
  );
}
