import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const stringifiedFeedback = localStorage.getItem("feedbackValues");
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? initialFeedback;
    return parsedFeedback;
  });
  // const [isVisibleFeedback, setIsVisibleFeedback] = useState(false);
  const handleResetfeedback = () => {
    setFeedback(initialFeedback);
  };
  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  useEffect(() => {}, [totalFeedback]);

  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  useEffect(() => {}, [positiveFeedbackPercentage]);

  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetfeedback={handleResetfeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;