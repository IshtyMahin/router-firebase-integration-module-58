
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/login' element={<LogIn/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/products' element={<RequireAuth>
              <Products/>
            </RequireAuth>}></Route>
         <Route path='/orders' element={
            <RequireAuth>
              <Orders/>
            </RequireAuth>
         }></Route>
       </Routes>
    </div>
  );
}

export default App;
