import missions from './missions/missions';
import rockets from './rockets/rockets';
import profile from './profile/profile';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    missions,
    rockets,
    profile,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
