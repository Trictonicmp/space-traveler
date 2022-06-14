import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getRockets } from '../../redux/rockets/Rockets';

import styles from '../../css/components/RocketsContainer.module.css';

const Rockets = () => {
  const state = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    console.log(state);
  }, [dispatch]);

  return (
    <ul className={styles.rocketsContainer}>
      1
    </ul>
  );
};

export default Rockets;
