import logo from './logo.svg';
import './App.css';
import { Route,Routes,Link,NavLink } from 'react-router-dom';
import Home from './ChildComponents/Home';
import Booklist from './ChildComponents/Booklist';
import DynamicBook from './ChildComponents/DynamicBook';
import NotFound from './ChildComponents/NotFound';
import NewBook from './ChildComponents/NewBook';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
         <li>
          <NavLink to='/' replace reloadDocument state={{test:'Hello from landing page'}}> Home</NavLink>
          </li>
          <li>
          <NavLink end style={({isActive})=>{return isActive? {color:'red'}:{ color:'blue'}}} to='/books'> Booklist</NavLink>
          </li>
          <li>
       
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route> 
        {/* ****NESTED ROUTES******* */}
        {/* <Route path='/books'> */}
        <Route path='/books' element={<Booklist></Booklist>}>
           {/* <Route index element={<Booklist></Booklist>}></Route>  */}
          <Route path=':id' element={<DynamicBook></DynamicBook>}> </Route>
          <Route path='new' element={<NewBook></NewBook>}></Route>
        </Route>
       



        {/* <Route path='/books' element={<Booklist></Booklist>}></Route>
        {/* Dynamic Routing */}
        <Route path='/books/:id' element={<DynamicBook></DynamicBook>}></Route> 
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
