import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressBar extends Component {
  static propTypes = {
    loader: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      busy: false,
      progress: 0,
    };

    this.onProgress = progress => {
      this.setState({
        busy: true,
        progress,
      });
    };

    this.onDone = () => {
      this.setState({
        busy: false,
      });
    };
  }

  componentDidMount() {
    const res = this.props.loader.resourceLoader;
    res.events.bind(res.EVENT_PROGRESS, this.onProgress);
    res.events.bind(res.EVENT_COMPLETE, this.onDone);
  }

  componentWillUnmount() {
    const res = this.props.loader.resourceLoader;
    res.events.unbind(res.EVENT_PROGRESS, this.onProgress);
    res.events.unbind(res.EVENT_COMPLETE, this.onDone);
  }

  render() {
    return (
      <div
        className={`snakesilk-progress-bar ${this.state.busy
          ? "busy"
          : "idle"}`}
      >
        <div
          className="progress"
          style={{
            width: `${this.state.progress * 100}%`,
          }}
        />
      </div>
    );
  }
}

export default ProgressBar;
