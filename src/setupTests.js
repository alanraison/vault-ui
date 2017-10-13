/* eslint import/no-extraneous-dependencies: off */
import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

global.fetch = require('jest-fetch-mock');
configure({ adapter: new Adapter() });
