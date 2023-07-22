import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
