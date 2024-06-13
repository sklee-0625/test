import React, { useState } from 'react';
import styles from './AddTodo.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ todoAdd }) {
  const [text, setText] = useState('');

  const newTodo = {
    id: uuidv4(),
    text,
    state: 'active',
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      todoAdd(newTodo);

      setText('');
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerIn}>
        <input
          type='text'
          placeholder='Add Todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => {
            todoAdd(newTodo);
            setText('');
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
