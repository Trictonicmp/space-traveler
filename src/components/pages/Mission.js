import React from 'react';
import { useSelector } from 'react-redux';
import SingleMission, { TableHeader } from '../Mission/SingleMission';

function Mission() {
  const missions = useSelector((state) => state.missions);
  return (
    <>
      <TableHeader />
      {missions.map((mission) => (
        <SingleMission
          key={mission.id}
          id={mission.id}
          name={mission.mission}
          description={mission.description}
          joined={mission.joined}
        />
      ))}
    </>
  );
}

export default Mission;
