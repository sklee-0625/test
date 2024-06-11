import React, { useState } from 'react';
import './index.css';
import Header from './component/Header/Header';
import TodoList from './component/TodoList/TodoList';
//
//

const filters = ['all', 'active', 'completed'];
export default function App() {
  return (
    <>
      <Header filters={filters} />
      <TodoList />
    </>
  );
}
