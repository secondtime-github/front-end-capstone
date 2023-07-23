import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './booking/BookingForm';
import { initializeTimes, updateTimes } from './booking/Main';

test('Renders the BookingForm heading', async () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const dispatch = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
  const headingElement = screen.getByText("Reservations");
  await act(() => { });
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

test('input has correct attributes', async () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const dispatch = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );

  await act(() => { });

  const dateElement = screen.getByLabelText('Choose date');
  expect(dateElement).toHaveAttribute('required');
  const timeElement = screen.getByLabelText('Choose time');
  expect(timeElement).toHaveAttribute('required');
  const guestsElement = screen.getByLabelText('Number of guests');
  expect(guestsElement).toHaveAttribute('required');
  const occasionElement = screen.getByLabelText('Occasion');
  expect(occasionElement).toHaveAttribute('required');
})

jest.useFakeTimers();

test('Form validation and submission', async () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );

  const dateElement = screen.getByLabelText('Choose date');
  const guestsElement = screen.getByLabelText('Number of guests');
  const submitButton = screen.getByText('Make Your reservation');

  await act(() => {
    fireEvent.blur(dateElement);
    fireEvent.change(guestsElement, { target: { value: '0' } });
    fireEvent.blur(guestsElement);
  });

  expect(screen.getByText('Required')).toBeInTheDocument();
  expect(screen.getByText('Guests must be between 1 and 10')).toBeInTheDocument();

  await act(async () => {
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(submitForm).not.toHaveBeenCalled();
    });
  });

  await act(() => {
    fireEvent.change(dateElement, { target: { value: '2023-07-23' } });
    fireEvent.change(guestsElement, { target: { value: '3' } });
  });

  await act(async () => {
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(submitForm).toHaveBeenCalled();
    });
  });
})