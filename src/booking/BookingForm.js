import React, { useEffect } from 'react';
import './BookingForm.css'
import { useFormik } from 'formik';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const formik = useFormik({
        initialValues: {
            date: '',
            time: availableTimes[0],
            guests: '',
            occasion: 'Birthday',
        },
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                console.log(values);
                submitForm(values);
                setSubmitting(false);
            }, 500);
        },
        validate: values => {
            const errors = {};
            if (!values.date) {
                errors.date = 'Required';
            }
            if (!values.time) {
                errors.time = 'Required';
            }
            if (!values.guests) {
                errors.guests = 'Required';
            } else if (values.guests < 1 || values.guests > 10) {
                errors.guests = 'Guests must be between 1 and 10';
            }
            if (!values.occasion) {
                errors.occasion = 'Required';
            }
            return errors;
        },
        validateOnMount: true,
    });

    useEffect(() => {
        if (formik.values.date.length > 0) {
            dispatch({ type: 'CHOOSE_DATE', date: formik.values.date });
        }
    }, [formik.values.date, dispatch]);

    useEffect(() => {
        if (availableTimes.length > 0) {
            formik.setFieldValue('time', availableTimes[0]);
        }
        // eslint-disable-next-line
    }, [availableTimes]);


    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Reservations</h1>

            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                {...formik.getFieldProps('date')}
            />
            {formik.touched.date && formik.errors.date ? (
                <div className='error'>{formik.errors.date}</div>
            ) : null}

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                {...formik.getFieldProps('time')}
            >
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>
            {formik.touched.time && formik.errors.time ? (
                <div className='error'>{formik.errors.time}</div>
            ) : null}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder='1'
                {...formik.getFieldProps('guests')}
            />
            {formik.touched.guests && formik.errors.guests ? (
                <div className='error'>{formik.errors.guests}</div>
            ) : null}

            <label htmlFor="occasion">Occasion</label>
            <select
                id='occasion'
                {...formik.getFieldProps('occasion')}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            {formik.touched.occasion && formik.errors.occasion ? (
                <div className='error'>{formik.errors.occasion}</div>
            ) : null}

            <input
                type="submit"
                value="Make Your reservation"
                disabled={!formik.isValid || formik.isSubmitting}
            />
        </form>
    );
}

export default BookingForm;
