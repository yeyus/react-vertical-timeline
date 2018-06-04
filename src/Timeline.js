import React from 'react';
import PropTypes from 'prop-types';

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

  getPosition(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    return { x, y };
  }


  handleProgressClick(e) {
    var parentPosition = this.getPosition(e);
    var progress = (parentPosition.y / this.getHeight(e.currentTarget)) * 100;
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
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
  onSelect: PropTypes.func,
  progress: PropTypes.number
};

Timeline.defaultProps = {
  height: 200,
  onSelect: function() {},
  progress: 0
};

Timeline.childContextTypes = {
  height: PropTypes.number,
  progress: PropTypes.number
};
