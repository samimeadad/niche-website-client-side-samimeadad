import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Watches from './Pages/Watches/Watches/Watches';
import MenWatches from './Pages/Home/Gender/MenWatches';
import WomenWatches from './Pages/Home/Gender/WomenWatches';

function App () {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/watches">
          <Watches></Watches>
        </Route>
        <Route path="/menWatches">
          <MenWatches></MenWatches>
        </Route>
        <Route path="/womenWatches">
          <WomenWatches></WomenWatches>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
