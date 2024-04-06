import { useEffect } from "react";
import css from "./Options.module.css";

const Options = ({ updateFeedback, handleResetFeedback, total }) => {
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
      {total !== 0 && (
        <button className={css.optionBtn} onClick={handleResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
