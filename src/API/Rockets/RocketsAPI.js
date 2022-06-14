import { ROCKETS_ENDPOINT } from '../APIconfig';

const getRocketsFromAPI = async (errorCallback = null) => {
  let data = [];
  try {
    const response = await fetch(ROCKETS_ENDPOINT, { method: 'GET' });
    data = await response.json();
  } catch (error) {
    if (errorCallback) errorCallback();
  }

  return data;
};

export default getRocketsFromAPI;
