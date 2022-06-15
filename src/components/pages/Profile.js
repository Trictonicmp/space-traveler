import styles from '../../css/components/ProfileContainer.module.css';

function Profile() {
  return (
    <section className={styles.profileContainer}>
      <div>
        <h2>My Missions</h2>
        <ul>
          <li>one</li>
        </ul>
      </div>

      <div>
        <h2>My Rockets</h2>
        <ul>
          <li>two</li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
