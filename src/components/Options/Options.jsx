import { useEffect } from "react";

const Options = ({ updateFeedback, handleResetfeedback }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={handleResetfeedback}>Reset</button>
    </div>
  );
};

export default Options;
