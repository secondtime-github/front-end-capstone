import React, { useReducer } from 'react';
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

export const initializeTimes = () => { return fetchAPI(new Date()) };

export const updateTimes = (state, action) => {
    if (action.type === 'CHOOSE_DATE') {
        return fetchAPI(new Date(action.date));
    }
    return state;
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/booking/confirm');
        }
    };

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );
}

export default Main;