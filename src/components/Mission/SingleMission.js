import React from 'react';
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

function SingleMission() {
  return (
    <div className="table">
      <div>some</div>
      <div className="description-info">some</div>
      <div>sopme</div>
      <div>some</div>
    </div>
  );
}

export default SingleMission;
