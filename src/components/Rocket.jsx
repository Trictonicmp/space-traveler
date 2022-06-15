import PropTypes from 'prop-types';
import styles from '../css/components/Rocket.module.css';
import buttonStyle from '../css/components/RocketsButton.module.css';

const Rocket = (props) => {
  const { rocket } = props;

  return (
    <li className={styles.rocket} key={rocket.id}>
      <img
        className={styles.rocketImg}
        src={rocket.imageURL}
        alt={rocket.rocketName}
      />
      <div className={styles.rocketDetails}>
        <h2 className={styles.rocketTitle}>{rocket.rocketName}</h2>
        <p>
          {rocket.reserved && (
            <span className={styles.reservedBadge}>
              Reserved
            </span>
          )}
          {rocket.description}
        </p>
        <button
          type="button"
          className={`
            ${buttonStyle.button}
            ${buttonStyle.blue}
            ${styles.reserveButton}
          `}
        >
          Reserve Rocket
        </button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocketName: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    imageURL: PropTypes.string,
  }),
};

Rocket.defaultProps = {
  rocket: {},
};

export default Rocket;
