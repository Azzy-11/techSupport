import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("未着手");

  return (
    <div>
      <ul>
        <li>
          <span>{title}</span>
          <button>{status}</button>
          <button>編集</button>
          <button>削除</button>
        </li>
      </ul>      
    </div>
  );
}

export default App;
