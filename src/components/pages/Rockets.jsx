import { useSelector } from 'react-redux/es/exports';
import Rocket from '../Rocket/Rocket';

import styles from '../../css/components/RocketsContainer.module.css';

const Rockets = () => {
  const state = useSelector((state) => state.rockets);

  const rocketComponents = state.map((rocket) => (
    <Rocket rocket={rocket} key={rocket.id} />
  ));

  return (
    <ul className={styles.rocketsContainer}>
      { rocketComponents }
    </ul>
  );
};

export default Rockets;
