import missions from './missions/missions';
import rockets from './rockets/Rockets.js';
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
