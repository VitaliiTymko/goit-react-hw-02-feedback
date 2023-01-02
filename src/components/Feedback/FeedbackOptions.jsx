import React from 'react';
import css from './Feedback.module.css';

const FeedbackOptions = ({
  onAddsReviewGood,
  onAddsReviewNeutral,
  onAddsReviewBad,
}) => (
  <div>
    <button type="button" className={css.buttonGood} onClick={onAddsReviewGood}>
      Good
    </button>
    <button
      type="button"
      className={css.buttonNeutral}
      onClick={onAddsReviewNeutral}
    >
      Neutral
    </button>
    <button type="button" className={css.buttonBad} onClick={onAddsReviewBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
