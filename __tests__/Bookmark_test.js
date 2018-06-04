import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bookmark from '../src/Bookmark';

Enzyme.configure({ adapter: new Adapter() });


describe('Bookmark', () => {
  it('should render a bookmark', () => {
    const wrapper = shallow(<Bookmark progress={50}>Test Test Test</Bookmark>, {
      context: {
        height: 100,
        progress: 30
      }
    });

    expect(wrapper.html()).toEqual('<div class="timeline-bookmark " style="top:50px"><div>Test Test Test</div></div>');
  });

  it('should render a visited bookmark', () => {
    const wrapper = shallow(<Bookmark progress={50}>Test Test Test</Bookmark>, {
      context: {
        height: 100,
        progress: 60
      }
    });

    expect(wrapper.html()).toEqual('<div class="timeline-bookmark visited" style="top:50px"><div>Test Test Test</div></div>');
  });

  it('should handle click events', () => {
    const mockfn = jest.fn();
    const wrapper = shallow(<Bookmark progress={50} onSelect={mockfn}>Test Test Test</Bookmark>, {
      context: {
        height: 100,
        progress: 30
      }
    });

    wrapper.instance().clickHandler();

    expect(mockfn.mock.calls.length).toBe(1);
    expect(mockfn.mock.calls[0][0]).toBe(50);
  });
});
