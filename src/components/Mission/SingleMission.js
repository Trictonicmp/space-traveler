import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../../css/components/mission.css';
import { JOIN } from '../../redux/missions/missions';

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

function JoinOrLeaveButton({ id }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missions);
  console.log(data);

  return (
    <button onClick={() => dispatch(JOIN(id))} type="button" className="button">
      Join Mission
    </button>
  );
}

function Badge() {
  return (
    <button type="button" className="badge">
      Not a member
    </button>
  );
}

function SingleMission({ id, name, description }) {
  return (
    <div className="table">
      <div>{name}</div>
      <div className="description-info">{description}</div>
      <div>
        <Badge />
      </div>
      <div>
        <JoinOrLeaveButton id={id} />
      </div>
    </div>
  );
}

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

JoinOrLeaveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SingleMission;
