import fetchMissions from '../../API/Missions/MissionsAPI';

const FETCH_MISSION = 'FETCH_MISSION';
const JOIN_MISSION = 'JOIN_MISSION';

const FETCH = (missions) => ({ type: FETCH_MISSION, payload: missions });
export const JOIN = (id) => ({ type: JOIN_MISSION, payload: id });

export const fetchThunk = () => async (dispatch) => {
  let missions = [];
  const response = await fetchMissions();
  missions = response.map((mission) => ({
    id: mission.mission_id,
    mission: mission.mission_name,
    description: mission.description,
    joined: false,
  }));
  dispatch(FETCH(missions));
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSION':
      return action.payload;

    case 'JOIN_MISSION':
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, joined: !mission.joined };
        }
        return mission;
      });

    default:
      return state;
  }
};

export default reducer;
