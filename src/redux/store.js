import { createStore } from 'redux';

import bookingsReducer from './Booking/BookingReducer';

const store = createStore(bookingsReducer);

export default store;
