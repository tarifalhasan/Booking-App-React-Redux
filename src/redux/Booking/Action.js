import { ADD_BOOKING, DELETE_BOOKING } from './Type';

export const addBooking = booking => ({
  type: ADD_BOOKING,
  payload: booking,
});

export const deleteBooking = id => ({
  type: DELETE_BOOKING,
  payload: id,
});
