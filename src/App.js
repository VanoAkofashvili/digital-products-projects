import {  Route,   Routes } from 'react-router-dom';
import './App.css';
import ProductPhone from './components/categroiesFilter/ProductPhone';
import ProductLaptop from './components/categroiesFilter/ProductLaptop';
import Main from './pages/home/Main';
import CardProducts from './components/cardProducts/CardProducts';


function App() {
  return <div className="App">
    <Routes>
      <Route  path='/' element={<Main/>}>
       <Route index element={<CardProducts/>} />
       <Route path='/category/1' element={<ProductPhone/>} />   
       <Route path='/category/2' element={<ProductLaptop/>} />
      </Route>
      
   
      <Route path='*' element={<div>page not found</div>}/>
    </Routes>
    </div>
 
}

export default App;
