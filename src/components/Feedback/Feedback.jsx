import React from 'react';
import css from './Feedback.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

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
      <div className={css.boxFeedback}>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          onAddsReviewGood={this.addsReviewGood}
          onAddsReviewNeutral={this.addsReviewNeutral}
          onAddsReviewBad={this.addsReviewBad}
        />
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          totalPercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
