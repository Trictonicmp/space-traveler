import { useSelector, useDispatch } from 'react-redux';
import { toggleReserveRocket } from '../../redux/rockets/rockets';
import styles from '../../css/components/ProfileContainer.module.css';
import buttonStyle from '../../css/components/RocketsButton.module.css';

function Profile() {
  const missionsState = useSelector((state) => state.missions);
  const rocketsState = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const reservedMissions = missionsState.filter((mission) => mission.reserved);
  const reservedRockets = rocketsState.filter((rocket) => rocket.reserved);

  const reservedMissionsJSX = missionsState.map((mission) => (
    <li key={mission.id} className={styles.profileListItem}>
      { mission.mission }
    </li>
  ));

  if (reservedMissions.length === 0) {
    reservedMissionsJSX.push(
      <li key={0} className={styles.profileListNoItems}>
        No Missions Joined
      </li>,
    );
  }

  const reservedRocketsJSX = reservedRockets.map((rocket) => (
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

  if (reservedRockets.length === 0) {
    reservedRocketsJSX.push(
      <li key={0} className={styles.profileListNoItems}>
        No Rockets Reserved
      </li>,
    );
  }

  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileListSection}>
        <h2>My Missions</h2>
        <ul className={styles.profileListItemsContainer}>
          { reservedMissionsJSX }
        </ul>
      </div>

      <div className={styles.profileListSection}>
        <h2>My Rockets</h2>
        <ul className={styles.profileListItemsContainer}>
          { reservedRocketsJSX }
        </ul>
      </div>
    </section>
  );
}

export default Profile;
