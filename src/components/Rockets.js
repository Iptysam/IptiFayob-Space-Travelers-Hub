import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketItem from './Rocket';
import { fetchRocketApi } from '../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketApi());
    }
  }, [dispatch]);
  return (
    <div>
      {
      rockets.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))
    }
    </div>
  );
};

export default Rockets;
