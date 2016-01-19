import React from 'react';
import { Timeline, Bookmark } from '../src/index.jsx';

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
        <Timeline height={300} progress={ this.state.progress } onSelect={ this.progressClick.bind(this) }>
          <Bookmark progress={20} onSelect={ this.progressClick.bind(this) }>
            Hi there 20%
          </Bookmark>
          <Bookmark progress={55} onSelect={ this.progressClick.bind(this) }>
            Hi there 55%
          </Bookmark>
          <Bookmark progress={75} onSelect={ this.progressClick.bind(this) }>
            Hi there 75%
          </Bookmark>
        </Timeline>
      </div>);
  }
}
