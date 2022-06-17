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
      <div>Option</div>
    </header>
  );
}

function Join({ id }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(JOIN(id))} type="button" className="join-button">
      Join Mission
    </button>
  );
}

function Leave({ id }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(JOIN(id))} type="button" className="leave-button">
      Leave Mission
    </button>
  );
}

function ButtonWrapper({ joined, id }) {
  return joined ? <Leave id={id} /> : <Join id={id} />;
}

function NotAMemberBadge() {
  return (
    <button type="button" className="not-a-member-badge">
      NOT A MEMBER
    </button>
  );
}

function MemberBadge() {
  return (
    <button type="button" className="active-member-badge">
      Active Member
    </button>
  );
}

function BadgeWrapper({ joined }) {
  return joined ? <MemberBadge /> : <NotAMemberBadge />;
}

function SingleMission({
  id, name, description, joined,
}) {
  return (
    <div className="table">
      <div>{name}</div>
      <div className="description-info">{description}</div>
      <div className="wrapper-container">
        <BadgeWrapper joined={joined} />
      </div>
      <div className="wrapper-container">
        <ButtonWrapper joined={joined} id={id} />
      </div>
    </div>
  );
}

SingleMission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  joined: PropTypes.bool,
};

SingleMission.defaultProps = {
  joined: false,
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

BadgeWrapper.propTypes = {
  joined: PropTypes.bool.isRequired,
};
export default SingleMission;
