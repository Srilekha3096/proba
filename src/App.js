
import './App.css';
import './components/styles/home.css'
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
//import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
<Header/>
<Home/>
      <Footer/>
    
   
    </div>
  );
}

export default App;
