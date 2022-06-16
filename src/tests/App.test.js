import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rockets from '../redux/rockets/rockets';
import missions from '../redux/missions/missions';
import App from '../App';
import Rockets from '../components/pages/Rockets';

const { configureStore } = require('@reduxjs/toolkit');

const createStore = () => {
  const preloadedState = {
    rockets: [
      {
        id: 1,
        rocketName: 'Falcon Heavy',
        description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        reserved: false,
      },
    ],
    missions: [
      {
        id: 1,
        mission: 'Iridium NEXT',
        description: 'In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridiums proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways.',
        reserved: false,
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      rockets,
      missions,
    },
  });
};

describe('App snapshots', () => {
  test('It should render the app', () => {
    const store = createStore();
    const app = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    expect(app).toMatchSnapshot();
  });

  test('It should render the Rockets page', () => {
    const store = createStore();
    const rocketsPage = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rocketsPage).toMatchSnapshot();
  });
});
