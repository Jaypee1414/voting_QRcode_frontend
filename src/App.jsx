import './App.css';
import Pages from './Pages/Pages'
import Resgiser from "./Pages/Register"
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Pages/>
      </Router>
    </div>
  );
}

export default App;
