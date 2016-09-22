'use strict';

import React from 'react';

export default class Marker extends React.Component {
  render() {
    let style = {
      top: (this.context.height * (this.props.progress/100)) + 'px'
    };

    return (
      <div className="timeline-marker" style={ style }>
        <div className="text">{this.props.progress}</div>
      </div>
    );
  }
}

Marker.contextTypes = {
  height: React.PropTypes.number.isRequired
};

Marker.propTypes = {
  progress: React.PropTypes.number.isRequired
};