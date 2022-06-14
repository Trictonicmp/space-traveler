import { ROCKETS_ENDPOINT } from '../APIconfig';

const getRocketsFromAPI = async (errorCallback = null) => {
  try {
    const response = await fetch(ROCKETS_ENDPOINT, { method: 'GET' });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    if (errorCallback) errorCallback();
  }

  return [];
};

export default getRocketsFromAPI;
