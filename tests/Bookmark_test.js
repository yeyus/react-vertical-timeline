/*global sinon:true*/
import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  Simulate
} from 'react-addons-test-utils';
import Bookmark from '../src/Bookmark.jsx';

describe('Bookmark', function() {
  var sandbox,
    bookmark,
    bookmarkNode,
    onSelect,
    onSelectMock;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('contextless', function() {
    beforeEach(function() {
      onSelect = {
        fn: function() {
        }
      };
      onSelectMock = sandbox.mock(onSelect).expects('fn');

      bookmark = renderIntoDocument(
        <Bookmark onSelect={ onSelect.fn } progress={ 50 }>Test</Bookmark>
      );
      bookmarkNode = ReactDOM.findDOMNode(bookmark);
    });

    it('should render inner content', function() {
      expect(bookmarkNode.textContent).to.equal('Test');
    });

    it('should have proper class', function() {
      expect(bookmarkNode.className).to.contain('timeline-bookmark');
    });

    it('should call onSelect on click', function() {
      onSelectMock.once();
      Simulate.click(findRenderedDOMComponentWithClass(bookmark, 'timeline-bookmark'));
      onSelectMock.verify();
    });
  });

  describe('contextful', function() {
    let context;

    class Container extends React.Component {

      getChildContext() { return context }

      render() {
        return <div>{ this.props.children }></div>
      }
    }

    Container.propTypes = {
      children: React.PropTypes.arrayOf(React.PropTypes.node)
    }

    Container.childContextTypes = {
      progress: React.PropTypes.number,
      height: React.PropTypes.number
    };

    beforeEach(function() {
      onSelect = {
        fn: function() {
        }
      },
      onSelectMock = sandbox.mock(onSelect).expects('fn');
    });

    it('should be marked as visited when progress goes beyond bookmark', function() {
      context = { progress: 55 };
      bookmark = renderIntoDocument(
        <Container>
          <Bookmark onSelect={ onSelect.fn } progress={ 50 }>Test</Bookmark>
        </Container>
      ),
      bookmarkNode = findRenderedDOMComponentWithClass(bookmark, 'timeline-bookmark');
      expect(bookmarkNode.className).to.contain('visited');
    });

    it('should be marked as visited when progress is before bookmark', function() {
      context = { progress: 40 };
      bookmark = renderIntoDocument(
        <Container>
          <Bookmark onSelect={ onSelect.fn } progress={ 50 }>Test</Bookmark>
        </Container>
      ),
      bookmarkNode = findRenderedDOMComponentWithClass(bookmark, 'timeline-bookmark');
      expect(bookmarkNode.className).not.to.contain('visited');
    });
  })
});