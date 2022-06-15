import getRocketsFromAPI from '../../API/Rockets/RocketsAPI';

// ACTIONS
export const GET_ROCKETS = 'space-traveler/rockets/GET_ROCKETS';
export const RESERVE_ROCKET = 'space-traveler/rockets/RESERVE_ROCKET';

// ACTION CREATORS
export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const getRockets = () => async (dispatch) => {
  const rockets = await getRocketsFromAPI();

  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return state;
  }
};

export default reducer;
