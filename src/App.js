import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Header/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Component/Header/Home';
import Todo from './Component/Todo/Todo';
import Calendar from './Component/Calendar/Calendar';
import Addtask from './Component/Addtask/Addtask';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
        <Route path="/addtask" element={<Addtask/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
