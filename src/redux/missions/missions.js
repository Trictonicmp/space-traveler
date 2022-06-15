import fetchMissions from '../../API/Missions/MissionsAPI';
// ACTIONS
const FETCH_MISSION = 'FETCH_MISSION';

const FETCH = (missions) => ({ type: FETCH_MISSION, payload: missions });

// ACTION CREATORS
export const fetchThunk = () => async (dispatch) => {
  let missions = [];
  const response = await fetchMissions();
  missions = response.map((mission) => ({
    id: mission.mission_id,
    mission: mission.mission_name,
    description: mission.description,
  }));
  dispatch(FETCH(missions));
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSION':
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
