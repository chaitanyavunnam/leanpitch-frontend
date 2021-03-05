import './App.css';
import {Route, BrowserRouter,Link,Switch} from 'react-router-dom';
import Adminpage from './Components/Adminpage';
import User from './Components/User';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    
     <Link to="/admin"><button>Admin</button></Link>
      <Link to="/user"><button>User</button></Link>
   
   
     
      <Switch>
        <Route exact path="/admin" component={Adminpage}></Route>
        <Route exact path="/user" component={User}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
