import React from 'react';
import './App.css';
import { useFetch } from './customHooks/useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default function App() {
  const { data, fetchUrl } = useFetch(baseUrl, 'users');

  return (
    <div>
      <h3>useFetch</h3>
      <button onClick={() => fetchUrl('users')}>Users</button>
      <button onClick={() => fetchUrl('posts')}>Posts</button>
      <button onClick={() => fetchUrl('todos')}>Todos</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );

  // const { data: userData } = useFetch(baseUrl, 'users');
  // const { data: postData } = useFetch(baseUrl, 'posts');

  // return (
  //   <div>
  //     <h3>User</h3>
  //     {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
  //     <h3>Post</h3>
  //     {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
  //   </div>
  // );
}
