import './App.css';
import  Welcome from "./components/Welcome";
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './components/Register';
import Stories from './components/Stories';
import Contact from './components/Contact';

function App() {
  return (
    <>
  <Header/>
  <Welcome/>
  <Register/>
  <Stories/>
  <Contact/>
  <Footer/>
  
  </>
  );
}

export default App;
