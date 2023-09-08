import React from 'react';
import './Rocket.css';
import { useSelector, useDispatch } from 'react-redux';
import { reserveBooking, cancelBooking } from '../../redux/rockets/rocketSlice';

const RocketDisplay = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const toggleStatus = (id, reserved) => {
    if (!reserved) {
      dispatch(reserveBooking({ id }));
    } else {
      dispatch(cancelBooking({ id }));
    }
  };
  return (
    <div>
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rockets-holder">
          <article className="img-tag">
            <img className="rocket-img" src={rocket.flickr_images[0]} alt="rocket-img" />
          </article>
          <article className="img-info">
            <p className="rocket-name">{rocket.name}</p>

            <p className="reserve-descp">
              {rocket.reserved ? <span className="reserve-popup">Reserved</span> : null}

              {rocket.description}
            </p>
            <button
              type="button"
              className={rocket.reserved ? 'cancel-booking' : 'reserve-booking'}
              onClick={() => { toggleStatus(rocket.id, rocket.reserved); }}
            >
              {rocket.reserved ? 'Cancel Booking' : 'Reserve Booking'}
            </button>
          </article>
        </div>
      ))}
    </div>
  );
};

export default RocketDisplay;
