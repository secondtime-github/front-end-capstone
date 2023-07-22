import Main from "../booking/Main";
import ConfirmedBooking from '../booking/ConfirmedBooking';
import { Routes, Route } from "react-router-dom";

const BookingPage = () => {
    return (
        <main className="booking-page">
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="confirm" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    );
}

export default BookingPage;