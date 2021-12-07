//import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import Displays from './components/Displays';

function App() {
  return (
    <div>
      <div className="nav-links">
        <NavLink to="/" >Home</NavLink> |  
        <NavLink to="/transaction-history">Transaction History</NavLink> | 
        <NavLink to="/transactions/new">Add Transaction</NavLink> 
        
      </div>
      <Displays />
    </div>
    
    
  );
}

export default App;
