import React from 'react';
import PropTypes from 'prop-types';

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
      <div className={ cls } onClick={ this.clickHandler.bind(this) } style={ style }>
        <div>{ this.props.children }</div>
      </div>
    );
  }
}

Bookmark.contextTypes = {
  height: PropTypes.number.isRequired,
  progress: PropTypes.number
};

Bookmark.propTypes = {
  children: PropTypes.node,
  onSelect: PropTypes.func,
  progress: PropTypes.number.isRequired
};
