import { ROCKETS_ENDPOINT } from '../APIconfig';

const getRocketsFromAPI = async (errorCallback = null) => {
  let rockets = [];
  try {
    const response = await fetch(ROCKETS_ENDPOINT, { method: 'GET' });
    const rocketsFromAPI = await response.json();
    rockets = rocketsFromAPI.map((rocket) => {
      const newRocket = {
        id: rocket.id,
        rocketName: rocket.rocket_name,
        description: rocket.description,
        imageURL: rocket.flickr_images[0],
      };
      return newRocket;
    });
  } catch (error) {
    if (errorCallback) errorCallback();
  }

  return rockets;
};

export default getRocketsFromAPI;
