//import logo from './logo.svg';
import './App.css';
import Displays from './components/Displays'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavLink to="/" >Home</NavLink> |  
      <NavLink to="/transaction-history">Transaction History</NavLink> | 
      <NavLink to="/new" >Add Transaction</NavLink> 
        <Displays />
    </div>
  );
}

export default App;
