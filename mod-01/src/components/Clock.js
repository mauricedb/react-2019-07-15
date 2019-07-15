import React, { Component } from "react";
import { clearInterval } from "timers";

// class Clock extends Component {
//   state = {
//     time: new Date()
//   };

//   componentDidMount() {
//     this.handle = setInterval(() => {
//       this.setState({
//         time: new Date()
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.handle);
//   }

//   render() {
//     const { time } = this.state;
//     return <div>{time.toLocaleTimeString()}</div>;
//   }
// }

function Clock() {
  const [time, setTime] = React.useState(new Date());
  const interval = 1000;

  React.useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(handle);
  }, [interval]);

  return <div>{time.toLocaleTimeString()}</div>;
}

export default Clock;
