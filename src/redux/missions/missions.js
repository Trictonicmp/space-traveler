// ACTIONS
const FETCH = 'FETCH_MISSION'


// ACTION CREATORS
const FETCH_MISSION = () => async (dispatch) => {
  try {
    
  } catch (error) {
    
  }
}

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
