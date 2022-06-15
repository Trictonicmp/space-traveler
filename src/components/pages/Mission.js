import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThunk } from '../../redux/missions/missions';
import SingleMission, { TableHeader } from '../Mission/SingleMission';

function Mission() {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchThunk());
  }, []);

  return (
    <>
      <TableHeader />
      {missions.map((mission) => (
        <SingleMission key={mission.id} name={mission.mission} description={mission.description} />
      ))}
    </>
  );
}

export default Mission;
