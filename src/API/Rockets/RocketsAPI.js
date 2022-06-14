const ROCKETS_ENDPOINT = 'https://api.spacexdata.com/v3/rockets';

const getRocketsFromAPI = async (errorCallback) => {
  try {
    const response = await fetch(ROCKETS_ENDPOINT, { method: 'GET' });
    const data = await response.json();

    return data;
  } catch (error) {
    if (errorCallback) errorCallback();
  }

  return [];
};

export default getRocketsFromAPI;
