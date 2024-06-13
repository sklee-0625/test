import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList({ filter }) {
  //const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItem(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.state === filter);
}
