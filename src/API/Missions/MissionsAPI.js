import { MISSIONS_ENDPOINT } from '../APIconfig';

const fetchMissions = async () => {
  const response = await fetch(MISSIONS_ENDPOINT);
  const result = await response.json();
  return result;
};

export default fetchMissions;
