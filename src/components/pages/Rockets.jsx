import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from '../Rocket/Rocket';

import styles from '../../css/components/RocketsContainer.module.css';

const Rockets = () => {
  const state = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketComponents = state.map((rocket) => (
    <Rocket
      id={rocket.id}
      key={rocket.id}
      rocketName={rocket.rocketName}
      description={rocket.description}
      imageURL={rocket.imageURL}
    />
  ));
  return (
    <ul className={styles.rocketsContainer}>
      { rocketComponents }
    </ul>
  );
};

export default Rockets;
