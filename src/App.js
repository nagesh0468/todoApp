
import { useState } from 'react';
import './App.css';
import Todo from './component/Todo';


function App() {
  const [value, setValue] = useState("");
  const [todo,setTodo] = useState([{
    id : 1,
    name : "React"
  },
  {
     id : 2,
     name : "Javascript"
  }

]);

   
console.log(todo);
const updateList = () => {
  setTodo((prev) => ([
    ...prev,
    {
      name : value,
    }
    
  ]))
  setValue('')
}
const deleteList = (id) => {
  let deleteTodo = todo.filter((item,index) =>  index !== id)
  setTodo(deleteTodo)
}

  return (
    <div className="container">
      <h1 className='text-center'>Todo List </h1>
      <input className='form-control' type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='enter your course name' />
      <button className='btn btn-primary' onClick={updateList} >add List</button >
      <Todo list={todo} deleteClick={deleteList}/>
    
    </div>
  );
}

export default App;
