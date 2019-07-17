import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function useTime(interval) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(handle);
  }, [interval]);

  return time;
}

function Clock(props) {
  const time = useTime(props.interval);

  return <div>{time.toLocaleTimeString()}</div>;
}

Clock.propTypes = {
  interval: PropTypes.number.isRequired,
  message: PropTypes.object,
  person: PropTypes.shape({
    firstName: PropTypes.string
  })
};

export default React.memo(Clock);
