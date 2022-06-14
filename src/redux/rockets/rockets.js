import getRocketsFromAPI from '../../API/Rockets/RocketsAPI';

// ACTIONS
export const GET_ROCKETS = 'space-traveler/rockets/GET_ROCKETS';

// ACTION CREATORS
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
    default:
      return state;
  }
};

export default reducer;
