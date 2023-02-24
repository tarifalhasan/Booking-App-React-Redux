import React, { useState } from 'react';
import { addBooking } from '../../redux/Booking/Action';
import { useSelector, useDispatch } from 'react-redux';
import icon from '../../assets/img/icons/Frame.svg';
import vector1 from '../../assets/img/icons/Vector (1).svg';
import vector2 from '../../assets/img/icons/Vector (2).svg';
import vector3 from '../../assets/img/icons/Vector (3).svg';
const CreateBook = () => {
  const [DestinationFrom, setDestinationFrom] = useState('');
  const [DestinationTo, setDestinationTo] = useState('');
  const [selectDate, setSelectDate] = useState('');
  const [guests, setGuests] = useState('');
  const [Class, setClass] = useState('');

  const dispatch = useDispatch();
  const isMaxBookingsReached = useSelector(state => state.isMaxBookingsReached);
  if (isMaxBookingsReached) {
    window.alert('You have reached the maximum bookings');
  }
  console.log(isMaxBookingsReached);
  // Handle Submitting from

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addBooking({
        id: Date.now(),
        DestinationFrom,
        DestinationTo,
        selectDate,
        guests,
        Class,
      })
    );
    setDestinationFrom('');
    setDestinationTo('');
    setSelectDate('');
    setGuests('');
    setClass('');
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
          {/* From */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={icon} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                onChange={e => setDestinationFrom(e.target.value)}
                required
              >
                <option value="" hidden="">
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>
          {/* To */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={icon} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
                onChange={e => setDestinationTo(e.target.value)}
              >
                <option value="" hidden="">
                  Please Select
                </option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>
          {/* Date */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
              onChange={e => setSelectDate(e.target.value)}
            />
          </div>
          {/* Guests */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={vector1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
                onChange={e => setGuests(e.target.value)}
              >
                <option value="" hidden="">
                  Please Select
                </option>
                <option value={1}>1 Person</option>
                <option value={2}>2 Persons</option>
                <option value={3}>3 Persons</option>
                <option value={4}>4 Persons</option>
              </select>
            </div>
          </div>
          {/* Class */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
                onChange={e => setClass(e.target.value)}
              >
                <option value="" hidden="">
                  Please Select
                </option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>
          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
