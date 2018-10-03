// @flow
import type { Action } from './actions';

export default (actions: {[string]: (any, ?any) => Action}) => ({
  actionCreator(action: string, type: string, key?: string, payload: any) {
    describe(action, () => {
      const actual: Action = actions[action](payload);
      it(`should create a ${type} action`, () => {
        expect(actual.type).toEqual(type);
      });
      it('should set the action payload', () => {
        if (key) {
          expect(actual.payload[key]).toEqual(payload);
        }
      });
    });
  },
  errorActionCreator(action: string, type: string) {
    describe(action, () => {
      const error = new Error('test error');
      const actual: Action = actions[action](error, 'test');
      it(`should create a ${type} error`, () => {
        expect(actual.type).toEqual(type);
      });
      it('should set the error data', () => {
        expect(actual.payload.err).toEqual(error);
      });
    });
  },
});
