import css from "./Feedback.module.css";
const Feedback = ({ feedback, total, positiveFeedbackPercentage }) => {
  return (
    <div>
      <ul className={css.feedbackList}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
