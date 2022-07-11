import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
  name: 'jakeee',
  hobbies: ['watching movie', 'playing video game'],
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onClickFetchData = () => {
    axios
      .get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data));
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>Fetch data</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
