import fetchMissions from '../../API/Missions/MissionsAPI';
// ACTIONS
const FETCH_MISSION = 'FETCH_MISSION';

const FETCH = (missons) => ({ type: FETCH_MISSION, payload: missons });

// ACTION CREATORS
export const fetchThunk = () => async (dispatch) => {
  let missions = [];
  const response = await fetchMissions();
  missions = response.map((mission) => ({
    id: mission.mission_id,
    mission: mission.mission_name,
    description: mission.description,
  }));
  console.log(missions);
  dispatch(FETCH(missions));
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action) {
    case 'FETCH_MISSON':
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducer;
