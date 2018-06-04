import React from 'react';
import PropTypes from 'prop-types';

export default class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.onSelect && this.props.onSelect(this.props.progress);
  }

  render() {
    const style = {
      top: `${this.context.height * (this.props.progress / 100)}px`
    };
    const cls = [
      'timeline-bookmark',
      (this.props.progress <= this.context.progress) ? 'visited' : null
    ].join(' ');

    return (
      <div className={cls} onClick={this.clickHandler} style={style}>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Bookmark.contextTypes = {
  height: PropTypes.number.isRequired,
  progress: PropTypes.number,
  onSelect() {}
};

Bookmark.propTypes = {
  children: PropTypes.node,
  onSelect: PropTypes.func,
  progress: PropTypes.number.isRequired
};
