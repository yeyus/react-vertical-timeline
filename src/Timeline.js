import React from 'react';
import PropTypes from 'prop-types';

const validateProgressValue = (value) => {
  let progress = value;
  if (value > 100) {
    progress = 100;
  } else if (value < 0) {
    progress = 0;
  }
  return progress;
};

const getHeight = (element) => {
  let e = element;
  while (e.className !== 'timeline-block' && e.parentElement) {
    e = element.parentElement;
  }
  return e && e.offsetHeight;
};

const getPosition = (e) => {
  // e = Mouse click event.
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left; // x position within the element.
  const y = e.clientY - rect.top; // y position within the element.
  return { x, y };
};

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.handleProgressClick = this.handleProgressClick.bind(this);

    this.state = {
      progress: validateProgressValue(props.progress)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      progress: validateProgressValue(nextProps.progress)
    });
  }

  getChildContext() {
    return {
      height: this.props.height,
      progress: this.state.progress
    };
  }

  handleProgressClick(e) {
    const parentPosition = getPosition(e);
    const progress = (parentPosition.y / getHeight(e.currentTarget)) * 100;
    this.props.onSelect(progress);
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const progressStyle = {
      height: `${this.state.progress}%`
    };
    const wrapperStyle = {
      height: `${this.props.height}px`
    };

    return (
      <div className="timeline-block" style={wrapperStyle}>
        <div
          className="timeline-line"
          onClick={this.handleProgressClick}
        />
        <div
          className="timeline-progress"
          onClick={this.handleProgressClick}
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
  onSelect: () => {},
  progress: 0,
  children: []
};

Timeline.childContextTypes = {
  height: PropTypes.number,
  progress: PropTypes.number
};
