import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: 2</p>
          <p>Neutral: 3</p>
          <p>Bad: 2</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
