import React from 'react';
import { shallow } from 'enzyme';
import List, { ListItemText } from 'material-ui/List';
import { LoginChooserComponent, LoginChoiceItem } from './chooser';

describe('The Login Chooser Component', () => {
  it('should not contain any login choices if the list of available methods is empty', () => {
    const wrapper = shallow(<LoginChooserComponent methodList={[]} onSelect={() => null} />);
    expect(wrapper.find(List).children()).toBeEmpty();
  });
  it('should contain a LoginChoiceItem for each value in methodList', () => {
    const wrapper = shallow(<LoginChooserComponent methodList={['foo', 'bar', 'baz']} onSelect={() => null} />);
    expect(wrapper.find(List).children().length).toBe(3);
  });
  it('should invoke the onSelect function when a method is selected', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(<LoginChooserComponent methodList={['foo', 'bar', 'baz']} onSelect={onSelect} />);

    wrapper.find(LoginChoiceItem).find({ method: 'baz' }).simulate('click');
    expect(onSelect).toHaveBeenCalledWith('baz');
  });
});

describe('The Login Choice Item', () => {
  it('should display the method it represents', () => {
    const wrapper = shallow(<LoginChoiceItem method="foo" onClick={() => null} />);
    expect(wrapper.find(ListItemText)).toHaveProp('primary', 'foo');
  });
  it('should invoke the click handler when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<LoginChoiceItem method="bar" onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
