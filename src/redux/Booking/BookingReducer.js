import { ADD_BOOKING, DELETE_BOOKING } from './Type';
const initialState = {
  bookings: [],
  isMaxBookingsReached: false,
};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      if (state.bookings.length < 3) {
        return {
          ...state,
          bookings: [...state.bookings, action.payload],
          isMaxBookingsReached: state.bookings.length + 1 === 3,
        };
      }
      return state;
    case DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          booking => booking.id !== action.payload
        ),
        isMaxBookingsReached: false,
      };
    default:
      return state;
  }
};
export default bookingsReducer;
