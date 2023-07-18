import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <div className='content'>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
