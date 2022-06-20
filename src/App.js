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
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import AboutMe from './components/AboutMe/AboutMe';
import FooterNew from './Pages/FooterNew/FooterNew';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './themes.js';
import Footer from './components/Footer/Footer';
// import { themeContext } from './Context';
// import { useContext } from "react";

// const StyledApp = styled.div``;

function App() {

  // const [theme, setTheme] = useState('light');

  // const themeToggle = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <div className="">
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles></GlobalStyles>
        <StyledApp>Hello world</StyledApp> */}
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/aboutMe">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/projects/:projectId">
              <Projects></Projects>
            </Route>
            <Route path="/contactForm">
              <ContactForm></ContactForm>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer></Footer>
      {/* <FooterNew>-</FooterNew> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
