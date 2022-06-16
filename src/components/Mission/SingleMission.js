import React from 'react';
import { useDispatch } from 'react-redux';
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

function Join({ id }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(JOIN(id))} type="button" className="button">
      Join Mission
    </button>
  );
}

function Leave({ id }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(JOIN(id))} type="button" className="button">
      Leave Mission
    </button>
  );
}

function ButtonWrapper({ joined, id }) {
  return joined ? <Leave id={id} /> : <Join id={id} />;
}

function Badge() {
  return (
    <button type="button" className="badge">
      Not a member
    </button>
  );
}

function SingleMission({
  id, name, description, joined,
}) {
  return (
    <div className="table">
      <div>{name}</div>
      <div className="description-info">{description}</div>
      <div>
        <Badge />
      </div>
      <div>
        <ButtonWrapper joined={joined} id={id} />
      </div>
    </div>
  );
}

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

ButtonWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

Leave.propTypes = {
  id: PropTypes.string.isRequired,
};

Join.propTypes = {
  id: PropTypes.string.isRequired,
};
export default SingleMission;
