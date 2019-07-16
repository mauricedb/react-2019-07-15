import React, { useState, useEffect } from "react";

function Clock(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, props.interval);

    return () => clearInterval(handle);
  });
  return <div>{time.toLocaleTimeString()}</div>;
}

export default Clock;
