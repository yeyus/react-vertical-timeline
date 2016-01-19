'use strict';

import React from 'react';

export default class Bookmark extends React.Component {

  clickHandler() {
    this.props.onSelect && this.props.onSelect(this.props.progress);
  }

  render() {
    var style = {
      top: (this.context.height * (this.props.progress/100)) + 'px'
    }, cls = [
      'timeline-bookmark',
      (this.props.progress <= this.context.progress) ? 'visited' : null
    ].join(' ');

    return (
      <div className={ cls } style={ style } onClick={ this.clickHandler.bind(this) }>
        <div>{ this.props.children }</div>
      </div>
    );
  }
}

Bookmark.propTypes = {
  children: React.PropTypes.node,
  onSelect: React.PropTypes.func,
  progress: React.PropTypes.number.isRequired
};

Bookmark.contextTypes = {
  height: React.PropTypes.number.isRequired,
  progress: React.PropTypes.number
};