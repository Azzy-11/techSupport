import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("未着手");
  const [list, setList] = useState<any[]>([]);


  const handleCreateForm = (e:any) => {
    setTitle(e.target.value);
  };

  const handleStoreTodo = () => {
    setList([
      ...list,
    {id: id, title: title, status: status}])
    setId(id + 1);
    setTitle("");
  };

  const handleDeleteTodo = (targetTodo:any) => {
    setList(list.filter((todo) => todo !== targetTodo));
  };

  return (
    <React.Fragment>
      <div>
        <input 
        type="text"
        value={title}
        onChange={handleCreateForm}
        />
        <button onClick={handleStoreTodo}>追加</button>
      </div>
      <ul>
        {list.map((todo) => {
          return(
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button>{todo.status}</button>
              <button>編集</button>
              <button onClick={() => handleDeleteTodo(todo)}>削除</button>
            </li>
          )
        })}
      </ul>      
    </React.Fragment>
  );
}

export default App;
