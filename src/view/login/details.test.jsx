import React from 'react';
import { shallow } from 'enzyme';
import Button from 'material-ui/Button';
import { DetailsComponent } from './details';

describe('The Login Details component', () => {
  it('should call login when the login button is pressed', () => {
    const doLogin = jest.fn();
    const wrapper = shallow(<DetailsComponent method="login-method" doLogin={doLogin} />);

    wrapper.find(Button).simulate('click');
    expect(doLogin).toHaveBeenCalledWith('login-method');
  });
});
