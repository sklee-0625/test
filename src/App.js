import React, { useState } from 'react';
import './index.css';
import Header from './component/Header/Header';
import TodoList from './component/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
//
//

const filters = ['all', 'active', 'completed'];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} filterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
