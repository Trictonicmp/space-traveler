import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserveRocket } from '../../redux/rockets/rockets';
import styles from '../../css/components/ProfileContainer.module.css';
import buttonStyle from '../../css/components/RocketsButton.module.css';

const RocketsList = (props) => {
  const { rockets } = props;
  const dispatch = useDispatch();

  const reservedRocketsJSX = rockets.map((rocket) => (
    <li key={rocket.id} className={styles.profileListItem}>
      { rocket.rocketName }
      <button
        type="button"
        className={`
          ${buttonStyle.button}
          ${buttonStyle.outline}
        `}
        onClick={() => dispatch(toggleReserveRocket(rocket.id))}
      >
        Cancel Reservation
      </button>
    </li>
  ));

  if (rockets.length === 0) {
    reservedRocketsJSX.push(
      <li key={0} className={styles.profileListNoItems}>
        No Rockets Reserved
      </li>,
    );
  }

  return (
    <>
      { reservedRocketsJSX }
    </>
  );
};

RocketsList.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    rocketName: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
  })).isRequired,
};

export default RocketsList;
