import React from 'react';
import PropTypes from 'prop-types';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.handleProgressClick = this.handleProgressClick.bind(this);

    this.state = {
      progress: this.validateProgressValue(props.progress)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      progress: this.validateProgressValue(nextProps.progress)
    });
  }

  validateProgressValue(value) {
    let progress = value;
    if (value > 100) {
      progress = 100;
    } else if (value < 0) {
      progress = 0;
    }
    return progress;
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
  height: 200,
  onSelect() {},
  progress: 0
};

Timeline.childContextTypes = {
  height: PropTypes.number,
  progress: PropTypes.number
};
