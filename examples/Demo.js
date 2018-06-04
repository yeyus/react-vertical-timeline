import React from 'react';
import { Timeline, Bookmark, Marker } from '../src/index';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 50
    };

    this.increment = this.increment.bind(this);
    this.progressClick = this.progressClick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.increment();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  increment() {
    const progress = this.state.progress > 100 ? 0 : (this.state.progress + 1);
    this.setState({
      progress
    });
  }

  progressClick(progress) {
    this.setState({
      progress
    });
  }

  render() {
    return (
      <Timeline
        height={300}
        onSelect={this.progressClick}
        progress={this.state.progress}
      >
        <Bookmark onSelect={this.progressClick} progress={20}>
          Hi there 20%
        </Bookmark>
        <Marker progress={50} />
        <Bookmark onSelect={this.progressClick} progress={55}>
          Hi there 55%
        </Bookmark>
        <Bookmark onSelect={this.progressClick} progress={75}>
          Hi there 75%
        </Bookmark>
      </Timeline>
    );
  }
}
