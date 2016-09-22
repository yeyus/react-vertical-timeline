import React from 'react';
import { Timeline, Bookmark, Marker } from '../src/index.js';

export default class Demo extends React.Component {
  constructor() {
    super();
    this.state = {progress: 50};
    var that = this;
    setInterval(function () {
      that.increment();
    }, 1000);
  }

  increment() {
    var progress = this.state.progress > 100 ? 0 : (this.state.progress + 1);
    this.setState({progress: progress});
  }

  progressClick(progress) {
    this.setState({progress: progress});
  }

  render() {
    return (
      <div>
        <Timeline height={300} onSelect={ this.progressClick.bind(this) } progress={ this.state.progress }>
          <Bookmark onSelect={ this.progressClick.bind(this) } progress={20}>
            Hi there 20%
          </Bookmark>
          <Marker progress={50} />
          <Bookmark onSelect={ this.progressClick.bind(this) } progress={55}>
            Hi there 55%
          </Bookmark>
          <Bookmark onSelect={ this.progressClick.bind(this) } progress={75}>
            Hi there 75%
          </Bookmark>
        </Timeline>
      </div>);
  }
}
