import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addsReviewGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  addsReviewNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  addsReviewBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    let TotalReviews = this.state.good + this.state.neutral + this.state.bad;
    return TotalReviews;
  };

  countPositiveFeedbackPercentage = () => {
    let FeedbackPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return FeedbackPercentage;
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.addsReviewGood}>
            Good
          </button>
          <button type="button" onClick={this.addsReviewNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.addsReviewBad}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          {this.countTotalFeedback() === 0 && <p>There is no feedback</p>}
          {this.state.good > 0 && <p>Good: {this.state.good}</p>}
          {this.state.neutral > 0 && <p>Neutral: {this.state.neutral}</p>}
          {this.state.bad > 0 && <p>Bad: {this.state.bad}</p>}
          {this.countTotalFeedback() > 0 && (
            <p>Total: {this.countTotalFeedback()}</p>
          )}
          {this.countTotalFeedback() > 0 && (
            <p>Positive feedback:{this.countPositiveFeedbackPercentage()}%</p>
          )}
        </div>
      </div>
    );
  }
}

export default Feedback;
