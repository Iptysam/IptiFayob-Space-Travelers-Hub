import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelRocket, reserveRocket } from '../../redux/rockets/rockets';

const RocketTable = ({ rocket }) => {
  const dispatch = useDispatch();

  // Destructure rocket keys
  const {
    rocketId, rocketName, rocketdesc, rocketimage, rocketreserved,
  } = rocket;

  // Reserve rocket handler
  const Reservehandle = (e) => {
    const data = e.target.id;
    dispatch(reserveRocket(data));
  };

  // Cancel rocket reserve
  const CancelReservehandle = (e) => {
    const data = e.target.id;
    dispatch(cancelRocket(data));
  };

  return (
    <div className="rocket-table">
      <img className="image" src={rocketimage} alt="rocket" />
      <div className="rocket-desc">
        <h1 className="title-desc">{rocketName}</h1>
        <p className="info">
          {rocketreserved === true && (<span className="rocket-reserve">Reserved</span>)}
          {rocketdesc}
        </p>
        { rocketreserved === true
          ? (
            <button className="cancel-btn" type="button" id={rocketId} onClick={CancelReservehandle}>Cancel Reservation </button>
          )
          : (<button className="reserve-btn" type="button" id={rocketId} onClick={Reservehandle}>Reserve Rocket</button>)}
      </div>
    </div>
  );
};

RocketTable.propTypes = {
  rocket: PropTypes.shape({
    rocketId: PropTypes.string,
    rocketName: PropTypes.string,
    rocketdesc: PropTypes.string,
    rocketimage: PropTypes.string,
    rocketreserved: PropTypes.bool,
  }).isRequired,
};

export default RocketTable;
