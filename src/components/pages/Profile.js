import { useSelector } from 'react-redux';
import styles from '../../css/components/ProfileContainer.module.css';

function Profile() {
  const missionsState = useSelector((state) => state.missions);
  const rocketsState = useSelector((state) => state.rockets);

  const reservedMissions = [];
  const reservedRockets = [];

  missionsState.forEach((mission) => {
    if (mission.reserved) {
      reservedMissions.push(
        <li key={mission.id} className={styles.profileListItem}>
          { mission.mission }
        </li>,
      );
    }
  });

  if (reservedMissions.length === 0) {
    reservedMissions.push(
      <li className={styles.profileListNoItems}>
        No Missions Reserved
      </li>,
    );
  }

  rocketsState.forEach((rocket) => {
    if (rocket.reserved) {
      reservedRockets.push(
        <li key={rocket.id} className={styles.profileListItem}>
          { rocket.rocketName }
        </li>,
      );
    }
  });

  if (reservedRockets.length === 0) {
    reservedRockets.push(
      <li className={styles.profileListNoItems}>
        No Rockets Reserved
      </li>,
    );
  }

  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileListSection}>
        <h2>My Missions</h2>
        <ul className={styles.profileListItemsContainer}>
          { reservedMissions }
        </ul>
      </div>

      <div className={styles.profileListSection}>
        <h2>My Rockets</h2>
        <ul className={styles.profileListItemsContainer}>
          { reservedRockets }
        </ul>
      </div>
    </section>
  );
}

export default Profile;
