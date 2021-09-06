import './App.css';
import Navbar from './components/NavBar';
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  var scrollEventHandler = function()
  {
    window.scroll(0, window.pageYOffset)
  }
  
  window.addEventListener("scroll", scrollEventHandler, false);

  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
           <Route path="/home" exact component={Home} />
           <Route path="/menu" exact component={Menu} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
