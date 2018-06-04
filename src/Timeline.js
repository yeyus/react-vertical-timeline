import React from 'react';
import PropTypes from 'prop-types';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: props.progress
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
    let e = element;
    while (e.className !== 'timeline-block' && e.parentElement) {
      e = element.parentElement;
    }
    return e && e.offsetHeight;
  }

  getPosition(e) {
    // e = Mouse click event.
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.
    return { x, y };
  }


  handleProgressClick(e) {
    const parentPosition = this.getPosition(e);
    const progress = (parentPosition.y / this.getHeight(e.currentTarget)) * 100;
    this.props.onSelect(progress);
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const clickHandler = this.handleProgressClick.bind(this);
    let progressStyle = {
        height: `${this.state.progress}%`
      },
      wrapperStyle = {
        height: `${this.props.height}px`
      };

    return (
      <div className="timeline-block" style={wrapperStyle}>
        <div
          className="timeline-line"
          onClick={clickHandler}
        />
        <div
          className="timeline-progress"
          onClick={clickHandler}
          style={progressStyle}
        />
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
  onSelect() {},
  progress: 0
};

Timeline.childContextTypes = {
  height: PropTypes.number,
  progress: PropTypes.number
};
