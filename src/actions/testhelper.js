export default actions => ({
  actionCreator(action, type, key, payload) {
    describe(action, () => {
      const actual = actions[action](payload);
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
  errorActionCreator(action, type) {
    describe(action, () => {
      const error = new Error('test error');
      const actual = actions[action](error);
      it(`should create a ${type} error`, () => {
        expect(actual.type).toEqual(type);
      });
      it('should set the error data', () => {
        expect(actual.payload.err).toEqual(error);
      });
    });
  },
});
