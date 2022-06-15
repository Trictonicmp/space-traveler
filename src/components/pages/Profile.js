import { useSelector } from 'react-redux';
import styles from '../../css/components/ProfileContainer.module.css';

function Profile() {
  const missionsState = useSelector((state) => state.missions);
  const rocketsState = useSelector((state) => state.rockets);

  const reservedMissions = missionsState.map((mission) => {
    if (mission.reserved) {
      return (
        <li key={mission.id} className={styles.profileListItem}>
          { mission.mission }
        </li>
      );
    }
    return '';
  });

  if (missionsState.length === 0) {
    reservedMissions.push(
      <li key={0} className={styles.profileListNoItems}>There&apos;s no Rockets reserved</li>,
    );
  }

  const reservedRockets = rocketsState.map((rocket) => {
    if (rocket.reserved) {
      return (
        <li key={rocket.id} className={styles.profileListItem}>
          { rocket.rocketName }
        </li>
      );
    }

    return '';
  });

  if (rocketsState.length === 0) {
    reservedRockets.push(
      <li key={1} className={styles.profileListNoItems}>There&apos;s no Rockets reserved</li>,
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
