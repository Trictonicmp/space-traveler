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

function SingleMission({ name, description }) {
  return (
    <div className="table">
      <div>{name}</div>
      <div className="description-info">{description}</div>
      <div>button</div>
      <div>some</div>
    </div>
  );
}

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SingleMission;
