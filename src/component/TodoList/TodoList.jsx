import React, { useState } from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: '일어나기',
      state: 'active',
    },
    {
      id: '2',
      text: '밥먹기',
      state: 'active',
    },
  ]);

  const handleAdd = (todo) => {
    if (todo.text.trim().length === 0) {
      return;
    }

    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (del) => {
    setTodos(todos.filter((t) => t.id !== del.id));
  };

  const filtered = getFilteredItem(todos, filter);
  //
  return (
    <section className={styles.contain}>
      <ul className={styles.box}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            todoUpdate={handleUpdate}
            todoDelete={handleDelete}
          />
        ))}
      </ul>

      <AddTodo todoAdd={handleAdd} />
    </section>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.state === filter);
}
