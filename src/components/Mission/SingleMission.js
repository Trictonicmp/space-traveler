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
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default SingleMission;
