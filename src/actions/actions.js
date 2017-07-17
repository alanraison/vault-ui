export const testActionCreators = (actions) => ({
  actionCreator(action, type, data) {
    describe(action, () => {
      const actual = actions[action](data);
      it(`should create a ${type} action`, () => {
        expect(actual.type).toEqual(type);
      });
      it('should set the action data', () => {
        expect(actual.data).toEqual(data);
      });
    });
  },
  errorActionCreator(action, type) {
    describe(action, () => {
      const error = new Error("test error");
      const actual = actions[action](error);
      it(`should create a ${type} error`, () => {
        expect(actual.type).toEqual(type);
      });
      it('should set the error data', () =>{
        expect(actual.err).toEqual(error);
      });
    });
  },
});

