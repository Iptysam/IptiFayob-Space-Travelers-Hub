import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketAPI } from '../../redux/rockets/rockets';
import RocketTable from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(getRocketAPI());
  }, []);

  return (
    <div>
      {rockets.map((rocket) => (
        <RocketTable
          key={rocket.id}
          rocket={rocket}
        />
      ))}
    </div>
  );
};

export default Rockets;
