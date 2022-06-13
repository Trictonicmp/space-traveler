// ACTIONS

//ACTION CREATORS

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
