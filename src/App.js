
import './App.css';
import './components/styles/home.css'
//import Header from './components/pages/Header';
import Home from './components/pages/Home';
//import Footer from './components/pages/Footer';
import {  HashRouter } from 'react-router-dom';
//import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
//import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import About from './components/pages/About';

function App() {

  return (
    <div className="App">

<HashRouter base="/"><Home /></HashRouter>
<HashRouter base="/about"><About /></HashRouter>
    
 {/* <BrowserRouter>
        <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
          
         </Routes> 
       </BrowserRouter> */}
      
    </div>
  );
}

export default App;
