const mock = jest.genMockFromModule('../');

mock.addMethod = (name) => {
  mock[name] = jest.fn();
};

export default mock;
