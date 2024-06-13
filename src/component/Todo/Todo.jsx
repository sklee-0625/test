import React, { useState } from 'react';
import styles from './Todo.module.css';
import { FaTrashCan } from 'react-icons/fa6';

export default function Todo({ todo, todoUpdate, todoDelete }) {
  const todoChecked = (e) => {
    const state = e.target.checked ? 'completed' : 'active';
    todoUpdate({ ...todo, state });
  };

  {
    /* todo의 상태가 'completed'이면 checked는 true가 되고, 그렇지 않으면 false. */
  }
  return (
    <li className={styles.todoItem}>
      <label>
        <input
          type='checkbox'
          checked={todo.state === 'completed'}
          onChange={todoChecked}
        />
        {todo.text}
      </label>
      <button onClick={() => todoDelete(todo)}>
        <FaTrashCan />
      </button>
    </li>
  );
}

//
