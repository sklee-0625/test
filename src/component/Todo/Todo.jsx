import React, { useState } from 'react';
import styles from './Todo.module.css';
import { FaTrashCan } from 'react-icons/fa6';

export default function Todo({ todo }) {
  return (
    <>
      {todo.map((todo) => (
        <li className={styles.todoItem}>
          <label>
            <input type='checkbox' />
            {todo.content}
          </label>
          <button>
            <FaTrashCan />
          </button>
        </li>
      ))}
    </>
  );
}
