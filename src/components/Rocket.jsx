import PropTypes from 'prop-types';
import styles from '../css/components/Rocket.module.css';

const Rocket = (props) => {
  const {
    id,
    rocketName,
    description,
    imageURL,
  } = props;

  return (
    <li className={styles.rocket} key={id}>
      <img
        src={imageURL}
        alt={rocketName}
      />
      <div>
        <h2>{rocketName}</h2>
        <p>
          {description}
        </p>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number,
  rocketName: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string,
};

Rocket.defaultProps = {
  id: 0,
  rocketName: '',
  description: '',
  imageURL: '',
};

export default Rocket;