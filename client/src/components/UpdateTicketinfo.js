import React, { useState } from 'react';
import axios from 'axios';

function TrainTicketReservation() {
  const [reservation, setReservation] = useState({
    passengerName: '',
    trainNumber: '',
    departureDate: '',
    departureTime: '',
    destination: '',
    contactNumber: '',
  });

  const onChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      passengerName: reservation.passengerName,
      trainNumber: reservation.trainNumber,
      departureDate: reservation.departureDate,
      departureTime: reservation.departureTime,
      destination: reservation.destination,
      contactNumber: reservation.contactNumber,
    };

    axios
      .post('/api/train-reservations', data)
      .then((res) => {
        alert('Reservation Successful!');
        setReservation({
          passengerName: '',
          trainNumber: '',
          departureDate: '',
          departureTime: '',
          destination: '',
          contactNumber: '',
        });
      })
      .catch((err) => {
        console.error('Error in Train Ticket Reservation POST request:', err);
      });
  };

  return (
    <div className='TrainTicketReservation'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Train Ticket Reservation</h1>
            <p className='lead text-center'>Book your train ticket here</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='passengerName'>Passenger Name</label>
              <input
                type='text'
                placeholder='Passenger Name'
                name='passengerName'
                className='form-control'
                value={reservation.passengerName}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='trainNumber'>Train Number</label>
              <input
                type='text'
                placeholder='Train Number'
                name='trainNumber'
                className='form-control'
                value={reservation.trainNumber}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='departureDate'>Departure Date</label>
              <input
                type='date'
                name='departureDate'
                className='form-control'
                value={reservation.departureDate}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='departureTime'>Departure Time</label>
              <input
                type='time'
                name='departureTime'
                className='form-control'
                value={reservation.departureTime}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='destination'>Destination</label>
              <input
                type='text'
                placeholder='Destination'
                name='destination'
                className='form-control'
                value={reservation.destination}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='contactNumber'>Contact Number</label>
              <input
                type='text'
                placeholder='Contact Number'
                name='contactNumber'
                className='form-control'
                value={reservation.contactNumber}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Reserve Ticket
            </button>
            <br /> <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default TrainTicketReservation;
