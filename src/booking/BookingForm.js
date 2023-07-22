import React, { useState, useEffect } from 'react';
import './BookingForm.css'

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    useEffect(() => {
        if (date.length > 0) {
            dispatch({ type: 'CHOOSE_DATE', date: date });
        }
    }, [date, dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingDetails = { date, time, guests, occasion };
        console.log(bookingDetails);
        submitForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Reservations</h1>

            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={e => setTime(e.target.value)}
            >
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder='1'
                min={1}
                max={10}
                value={guests}
                onChange={e => setGuests(e.target.value)}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id='occasion'
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation"></input>
        </form>
    );
}

export default BookingForm;
