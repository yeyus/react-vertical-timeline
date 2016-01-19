'use strict';

import React from 'react';

// this should be the entry point to your library

export default class Timeline extends React.Component {

  constructor() {
    super();
    this.state = {
      progress: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.progress > 100) {
      this.state.progress = 100;
    } else if (nextProps.progress < 0) {
      this.state.progress = 0;
    } else {
      this.state.progress = nextProps.progress;
    }
  }

  getChildContext() {
    return {
      height: this.props.height,
      progress: this.state.progress
    };
  }

  getHeight(element) {
    var e = element;
    while (e.className !== 'timeline-block' && e.parentElement) {
      e = element.parentElement;
    }
    return e && e.offsetHeight;
  }

  getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
  }

  handleProgressClick(e) {
    var parentPosition = this.getPosition(e.currentTarget);
    var progress = ((e.clientY - parentPosition.y) / this.getHeight(e.currentTarget)) * 100;
    this.props.onSelect(progress);
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    var clickHandler = this.handleProgressClick.bind(this);
    var progressStyle = {
      height: this.state.progress+'%'
    }, wrapperStyle = {
      height: this.props.height+'px'
    };

    return (
      <div className="timeline-block" style={ wrapperStyle }>
        <div className="timeline-line"
          onClick={ clickHandler }>
        </div>
        <div className="timeline-progress"
          onClick={ clickHandler }
          style={ progressStyle }>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Timeline.propTypes = {
  children: React.PropTypes.node,
  height: React.PropTypes.number.isRequired,
  onSelect: React.PropTypes.func,
  progress: React.PropTypes.number
};

Timeline.defaultProps = {
  height: 200,
  onSelect: function() {},
  progress: 0
};

Timeline.childContextTypes = {
  height: React.PropTypes.number,
  progress: React.PropTypes.number
};