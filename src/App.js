import './App.css';
import  NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import  AboutPage from './Pages/AboutPage'
import  PortfolioPage from './Pages/PortfolioPage'
import  Contact from './Pages/Contact'
import {Switch, Route} from 'react-router-dom'
import {useState} from 'react'
function App() {
  const [NavToggle, setNavToogle] =  useState(false);
  
   const navClick  = () => {
    setNavToogle(!NavToggle);
  }
  return (
    <div className="App">
      <div className={`sidebar ${NavToggle ? 'nav-toggle' :  ''} `}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div> 
      </div>
    </div>
  );
}

export default App;
