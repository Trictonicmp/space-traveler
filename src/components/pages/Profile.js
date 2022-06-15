import { useSelector } from 'react-redux';
import styles from '../../css/components/ProfileContainer.module.css';

function Profile() {
  const missionsState = useSelector((state) => state.missions);
  const rocketsState = useSelector((state) => state.rockets);

  const reservedMissions = missionsState.map((mission) => {
    if (mission.reserved) {
      return (
        <li key={mission.id}>
          { mission.mission }
        </li>
      );
    }
    return '';
  });

  const reservedRockets = rocketsState.map((rocket) => {
    if (rocket.reserved) {
      return (
        <li key={rocket.id}>
          { rocket.rocketName }
        </li>
      );
    }

    return '';
  });

  return (
    <section className={styles.profileContainer}>
      <div>
        <h2>My Missions</h2>
        <ul>
          { reservedMissions }
        </ul>
      </div>

      <div>
        <h2>My Rockets</h2>
        <ul>
          { reservedRockets }
        </ul>
      </div>
    </section>
  );
}

export default Profile;
