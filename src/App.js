import { useState } from 'react';
import Todoheader from './components/Todoheader';
import Todoform from './components/Todoform';
import Todolist from './components/Todolist';
import Translate from './pages/Translate';
function App() {
  const[Input,setInput]=useState("");
  const [Todo, setTodo] = useState([]);

  return (

    <div className='container'>
      {/* <div className='todo-wrapper'>
        <div>
        <Todoheader/>
         </div>
         <div>
       <Todoform 
       Input={Input}
       setInput={setInput}
       Todo={Todo}
       setTodo={setTodo}
       />
       </div>
       <div>
        <Todolist Todo={Todo} setTodo={setTodo}/>
       </div>
      </div> */}
      <Translate/>
    </div>
  );
}

export default App;
