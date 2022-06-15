import React from 'react';
import PropTypes from 'prop-types';
import '../../css/components/mission.css';

export function TableHeader() {
  return (
    <header className="header">
      <div>Mission</div>
      <div className="description">Description</div>
      <div>Status</div>
      <div>Button</div>
    </header>
  );
}

function JoinOrLeaveButton() {
  return <button type="button" className="button">Join Mission</button>;
}

function Badge() {
  return (
    <button type="button" className="badge">Not a member</button>
  );
}

function SingleMission({ name, description }) {
  return (
    <div className="table">
      <div>{name}</div>
      <div className="description-info">{description}</div>
      <div><Badge /></div>
      <div><JoinOrLeaveButton /></div>
    </div>
  );
}

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleMission;
