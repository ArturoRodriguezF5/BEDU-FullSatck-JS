import Header from './Header';
import Form from './Form';
import Todo from './Todo';
import Todolist from './Todolist';
import '../styles/App.css'

const App = () => {

  return (
    <div className="wrapper">
      <div className="card-frame">
        <Header cant='10'/>
        <Form />
        <Todo />
        <Todolist />
      </div>
    </div>
  )
}

export default App
