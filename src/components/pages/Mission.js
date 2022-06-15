import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchThunk } from '../../redux/missions/missions';
import SingleMission from '../Mission/SingleMission';

function Mission() {
  const dispatch = useDispatch();
  // const selector = useSelector();

  // const missions = selector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchThunk());
  }, []);

  return (
    <SingleMission />
  );
}

export default Mission;
