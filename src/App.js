import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
// import Appbar from './components/Appbar/Appbar';
import NotFound from './components/NotFound/NotFound';
// import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          {/* <Appbar></Appbar> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contactMe">
              <ContactForm></ContactForm>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </div>
    </div>
  );
}

export default App;
