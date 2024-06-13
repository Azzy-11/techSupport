import React from 'react';

interface CreateFormProps {
  title: string;
  handleCreateForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStoreTodo: () => void;
}

const CreateForm:React.FC<CreateFormProps> = ({ title, handleCreateForm, handleStoreTodo}) => {
  return (
    <React.Fragment>
      <input 
        type="text"
        value={title}
        onChange={handleCreateForm}
      />
      <button onClick={handleStoreTodo}>追加</button>
    </React.Fragment>
  )
}

export default CreateForm
