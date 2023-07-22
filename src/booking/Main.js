import React, { useReducer } from 'react';
import BookingForm from "./BookingForm";
import { fetchAPI } from '../api';

const Main = () => {

    const updateTimes = (state, action) => {
        if (action.type === 'CHOOSE_DATE') {
            return fetchAPI(new Date(action.date));
        }
        return state;
    };
    const initializeTimes = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <section className="booking-page">
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </section>
    );
}

export default Main;