import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchThunk } from '../../redux/missions/missions';

function Mission() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThunk());
  }, []);

  return (
    <div>
      <h1>Mission Page</h1>
    </div>
  );
}

export default Mission;
