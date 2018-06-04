import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timeline from '../src/Timeline';

Enzyme.configure({ adapter: new Adapter() });

describe('Timeline', () => {
  it('should render the timeline', () => {
    const wrapper = shallow(<Timeline height={100} progress={50} />);

    expect(wrapper.html()).toBe('<div class=\"timeline-block\" style=\"height:100px\"><div class=\"timeline-line\"></div><div class=\"timeline-progress\" style=\"height:50%\"></div></div>');
  });

  it('should render progress 0 if < 0', () => {
    const wrapper = shallow(<Timeline height={100} progress={-50} />);

    expect(wrapper.html()).toBe('<div class=\"timeline-block\" style=\"height:100px\"><div class=\"timeline-line\"></div><div class=\"timeline-progress\" style=\"height:0%\"></div></div>');
  });

  it('should render progress 100 if > 100', () => {
    const wrapper = shallow(<Timeline height={100} progress={105} />);

    expect(wrapper.html()).toBe('<div class=\"timeline-block\" style=\"height:100px\"><div class=\"timeline-line\"></div><div class=\"timeline-progress\" style=\"height:100%\"></div></div>');
  });

  it('should handle click events', () => {
    const mockfn = jest.fn();
    const wrapper = shallow(<Timeline height={100} progress={50} onSelect={mockfn} />);

    const target = {
      getBoundingClientRect: () => ({
        left: 0,
        top: 0
      }),
      offsetHeight: 100
    };

    wrapper.instance().handleProgressClick({
      currentTarget: target,
      target,
      clientY: 50,
      clientX: 0,
      parentElement: {},
      stopPropagation: () => {},
      preventDefault: () => {}
    });

    expect(mockfn.mock.calls.length).toBe(1);
    expect(mockfn.mock.calls[0][0]).toBe(50);
  });
});
