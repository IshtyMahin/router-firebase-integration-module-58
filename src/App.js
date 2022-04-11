
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';

function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/login' element={<LogIn/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
