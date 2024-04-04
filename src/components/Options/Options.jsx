import { useEffect } from "react";
import css from "./Options.module.css";

const Options = ({ updateFeedback, handleResetfeedback, totalFeedback }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={css.containerBtn}>
      <button className={css.optionBtn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.optionBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.optionBtn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button className={css.optionBtn} onClick={handleResetfeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
