import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveBooking, cancelBooking } from '../../redux/rockets/rocketSlice';

const RocketData = ({
  name, descp, img, id, reserved,
}) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRockets());
  // });

  const toggleStatus = () => {
    if (reserved) {
      dispatch(cancelBooking(id));
    } else {
      dispatch(reserveBooking(id));
    }
  };
  return (
    <div className="rockets-holder">
      <article>
        <img className="rocket-img" src={img[0]} alt="rocket-img" />
      </article>
      <article>
        <p>{name}</p>
        <p>
          {reserved ? <span className="reserved-tag">Reserved</span> : null}
          {descp}
        </p>
        <button
          type="button"
          className={reserved ? 'cancel-booking' : 'reserve-booking'}
          onClick={toggleStatus}
        >
          {reserved ? 'Cancel Booking' : 'Reserve Booking'}
        </button>
      </article>
    </div>

  );
};

export default RocketData;

RocketData.propTypes = {
  name: PropTypes.string.isRequired,
  descp: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

RocketData.defaultProps = {
  reserved: false,
};
