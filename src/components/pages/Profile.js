import { useSelector } from 'react-redux';
import styles from '../../css/components/ProfileContainer.module.css';
import RocketsList from '../Profile/RocketsList';
import MissionsList from '../Profile/MissionsList';
// import buttonStyle from '../../css/components/RocketsButton.module.css';

function Profile() {
  const missionsState = useSelector((state) => state.missions);
  const rocketsState = useSelector((state) => state.rockets);

  const reservedMissions = missionsState.filter((mission) => mission.joined);
  const reservedRockets = rocketsState.filter((rocket) => rocket.reserved);

  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileListSection}>
        <h2>My Missions</h2>
        <ul className={styles.profileListItemsContainer}>
          <MissionsList missions={reservedMissions} />
        </ul>
      </div>

      <div className={styles.profileListSection}>
        <h2>My Rockets</h2>
        <ul className={styles.profileListItemsContainer}>
          <RocketsList rockets={reservedRockets} />
        </ul>
      </div>
    </section>
  );
}

export default Profile;
