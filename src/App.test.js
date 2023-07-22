import { render, screen } from '@testing-library/react';
import BookingForm from './booking/BookingForm';
import { initializeTimes, updateTimes } from './booking/Main';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const dispatch = () => { };

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
  const headingElement = screen.getByText("Reservations");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes will return a non-empty array of available booking times', () => {
  const times = initializeTimes();
  expect(times).toBeInstanceOf(Array);
  expect(times).not.toHaveLength(0);
})

test('updateTimes', () => {
  const expectedData = ['20:00', '21:00', '22:00'];

  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'CHOOSE_DATE', date: '2023-07-23' };

  const newState = updateTimes(state, action);
  expect(newState).toEqual(expectedData);
})