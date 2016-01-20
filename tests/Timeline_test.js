import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument
} from 'react-addons-test-utils';
import Timeline from '../src/Timeline.jsx';

describe('Timeline', function() {
  var sandbox,
    timeline,
    timelineNode,
    onSelect,
    onSelectMock;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();

    onSelect = {
      fn: function() {
      }
    };
    onSelectMock = sandbox.mock(onSelect).expects('fn');

    timeline = renderIntoDocument(
      <Timeline height={ 300 } onSelect={ onSelect.fn } progress={ 50 } />
    ),
    timelineNode = ReactDOM.findDOMNode(timeline);
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('should render the component', function() {
    expect(timeline).to.be.defined;
    expect(timelineNode).to.be.defined;
    expect(timelineNode.className).to.equal('timeline-block');
    expect(timelineNode.children[0].className).to.equal('timeline-line');
    expect(timelineNode.children[1].className).to.equal('timeline-progress');
  });
});