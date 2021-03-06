/* eslint import/no-extraneous-dependencies: off */
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';

global.fetch = fetch;
global.sessionStorage = {
  getItem: () => ({ token: '' }),
  setItem: () => null,
};

configure({ adapter: new Adapter() });
