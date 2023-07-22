import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmedBooking from './booking/ConfirmedBooking';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="booking/*" element={<BookingPage />}>
          <Route path="confirm" element={<ConfirmedBooking />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
