export const testActionCreators = (actions: object) => ({
  actionCreator(action: string, type: string, data: any) {
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
  errorActionCreator(action: any, type: string) {
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

