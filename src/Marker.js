import React from 'react';
import PropTypes from 'prop-types';

export default class Marker extends React.Component {
  render() {
    const style = {
      top: `${this.context.height * (this.props.progress / 100)}px`
    };

    return (
      <div className="timeline-marker" style={style}>
        <div className="text">{this.props.progress}</div>
      </div>
    );
  }
}

Marker.contextTypes = {
  height: PropTypes.number.isRequired
};

Marker.propTypes = {
  progress: PropTypes.number.isRequired
};
