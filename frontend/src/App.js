import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import{Routes,Route,Link} from "react-router-dom";
import Nabbar from './components/Nabbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
function App() {
  return (
    <div>
<Nabbar/>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/create' element={<Create/>} />
  <Route path='/edit' element={<Edit/>} />


</Routes>
    </div>
  );
}

export default App;
