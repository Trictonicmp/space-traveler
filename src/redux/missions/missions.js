import fetchMissions from '../../API/Missions/MissionsAPI';
// ACTIONS
const FETCH_MISSION = 'FETCH_MISSION';

const FETCH = (missons) => ({ type: FETCH_MISSION, payload: missons });

// ACTION CREATORS
export const fetchThunk = () => async (dispatch) => {
  const missions = await fetchMissions();
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
