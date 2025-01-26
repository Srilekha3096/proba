
import './App.css';
import './components/styles/home.css'
//import Header from './components/pages/Header';
import Home from './components/pages/Home';
//import Footer from './components/pages/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
<BrowserRouter>
        <Routes>
          <Route path="/github.io/proba" element={<Home />} />
          {/* <Route element={<ProtectiveRouter />}>
            <Route path="/home" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
