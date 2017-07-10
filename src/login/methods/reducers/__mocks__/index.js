const mock = jest.genMockFromModule('../index');

mock.addMethod = (name) => {
  mock[name] = jest.fn();
}

export default mock;