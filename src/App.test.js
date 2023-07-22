import { render, screen } from '@testing-library/react';
import BookingForm from './booking/BookingForm';

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