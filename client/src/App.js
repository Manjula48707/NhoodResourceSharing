import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import ItemDetails from './pages/ItemDetails';
import AddItem from './pages/AddItem';
// import 'antd/dist/reset.css';
 //import 'antd/dist/antd.css' from antD;
function App() {
  return (
   <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>            
      <Route path="/ItemDetails/:id" element={<ItemDetails />} />      
      <Route path="/AddItem" element={<AddItem />} />
      </Routes>
      </BrowserRouter>

   </div>
  );
}

export default App;
