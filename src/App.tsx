import React, { useState } from 'react';
import './App.css';
import CreateForm from './CreateForm';

function App(): JSX.Element {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [list, setList] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");


  const handleCreateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleStoreTodo = () => {
    setList([
      ...list,
    { id: id, title: title, status: "未着手" }
    ]);
    setId(id + 1);
    setTitle("");
  };

  const handleChangeForm = (todo: any) => {
    setIsEditing(todo.id);
    setEditTitle(todo.title);
  };

  const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleUpdateTodo = (id: number) => {
    setList(list.map((todo) => (
      todo.id === id ? { ...todo, title: editTitle } : todo
    )));
    setIsEditing(null);
    setEditTitle("");
  };

  const handleChangeStatus = (targetTodo: any) => {
    setList(list.map((todo) => (
      todo.id === targetTodo.id ? { ...todo, status: getNextStatus(todo.status) } : todo
    )));
  };

  const getNextStatus = (currentStatus: string) => {
    switch (currentStatus) {
      case "未着手":
        return "進行中";
      case "進行中":
        return "完了";
      case "完了":
        return "未着手";
      default:
        return currentStatus;
    }
  };

  const handleDeleteTodo = (targetTodo: any) => {
    setList(list.filter((todo) => todo !== targetTodo));
  };

  return (
    <React.Fragment>
      <CreateForm
        title = {title}
        handleCreateForm = {handleCreateForm}
        handleStoreTodo = {handleStoreTodo}
      />
      <ul>
        {list.map((todo) => {
          const isCurrentEditing = isEditing === todo.id;
          return (
            <li key={todo.id}>
              <span>
                {isCurrentEditing ? (
                  <input 
                    type="text"
                    value={editTitle}
                    onChange={handleUpdateForm}
                  />
                ) : (
                  todo.title
                )}
              </span>
              <button onClick={() => handleChangeStatus(todo)}>{todo.status}</button>
              {isCurrentEditing ? (
                <button onClick={() => handleUpdateTodo(todo.id)}>保存</button>
              ) : (
                <button onClick={() => handleChangeForm(todo)}>編集</button>
              )}
              <button onClick={() => handleDeleteTodo(todo)}>削除</button>
            </li>
          )
        })}
      </ul>      
    </React.Fragment>
  );
}

export default App;
