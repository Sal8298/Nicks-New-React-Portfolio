
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NavTabs from "./components/pages/NavTabs";
import Resume from "./components/pages/Resume";
import Work from "./components/pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./components/pages/styles/globals.css"

function App() {
  return (
    <div>
      <NavTabs />
      <Home />
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

// import Header from './components/header';
//import PortfolioContainer from './components/PortfolioContainer';

// function App() {
//   return (
//     <div className="App">
//         {/* <Header/> */}
// <PortfolioContainer/>
//     </div>
//   );
// }

export default App;
