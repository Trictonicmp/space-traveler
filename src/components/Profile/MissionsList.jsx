import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JOIN } from '../../redux/missions/missions';
import styles from '../../css/components/ProfileContainer.module.css';
import buttonStyle from '../../css/components/RocketsButton.module.css';

const MissionsList = (props) => {
  const { missions } = props;
  const dispatch = useDispatch();

  const reservedMissionsJSX = missions.map((mission) => (
    <li key={mission.id} className={styles.profileListItem}>
      { mission.mission }
      <button
        type="button"
        className={`
          ${buttonStyle.button}
          ${buttonStyle.outline}
        `}
        onClick={() => dispatch(JOIN(mission.id))}
      >
        Leave Mission
      </button>
    </li>
  ));

  if (missions.length === 0) {
    reservedMissionsJSX.push(
      <li key={0} className={styles.profileListNoItems}>
        No Missions Joined
      </li>,
    );
  }

  return (
    <>
      { reservedMissionsJSX }
    </>
  );
};

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    mission: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default MissionsList;
