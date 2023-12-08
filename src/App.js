import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import Main02 from './components/Main02/Main02';
import FindGym from './Pages/FindGym';
import Training from './Pages/Training'
import Blog from './Pages/Blog'
import WhyGym from './Pages/WhyGym'
import OwnAGym from './Pages/OwnAGym'


export default function App() {

  return(
    <>
      <Header />
      <MainContent />
      <Main02 />
      <Footer />
    </>
  );
}