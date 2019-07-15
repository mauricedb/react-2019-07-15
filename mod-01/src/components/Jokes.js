import React from "react";

function Jokes() {
  const url =
    "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

  const [jokes, setJokes] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then(rsp => rsp.json())
      .then(data => data.value)
      .then(jokes => setJokes(jokes));
  }, [url]);

  return (
    <ul>
      {jokes.map((joke, index) => (
        <li key={joke.id}>{joke.joke}</li>
      ))}
    </ul>
  );
}

export default Jokes;
