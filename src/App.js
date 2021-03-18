import './App.css';
import  NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import  AboutPage from './Pages/AboutPage'
import  Blogs from './Pages/Blogs'
import  Contact from './Pages/Contact'
import  PortfolioPage from './Pages/PortfolioPage'
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/blogs" exact>
              <Blogs />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
          </Switch>
        </div> 
      </div>
    </div>
  );
}

export default App;
