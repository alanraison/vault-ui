import { render } from 'react-testing-library';

function customRender(node, options) {
  return render(
    node,
    options,
  )
}

export * from 'react-testing-library';

export { customRender as render };
