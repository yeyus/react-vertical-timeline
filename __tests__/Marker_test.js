import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Marker from '../src/Marker';

Enzyme.configure({ adapter: new Adapter() });

describe('Marker', () => {
  it('should render the marker', () => {
    const wrapper = shallow(<Marker progress={50} />, {
      context: {
        height: 100
      }
    });

    expect(wrapper.html()).toBe('<div class="timeline-marker" style="top:50px"><div class="text">50</div></div>');
  });
});
