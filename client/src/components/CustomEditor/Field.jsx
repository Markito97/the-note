import { v4 as uuidv4 } from "uuid";

export const Field = ({ editor, handleTextFieldKey }) => {
  return (
    <>
      {editor.map((field) => {
        return (
          <p key={uuidv4()}>
            {field.ranges.length === 0
              ? field.content
              : field.ranges.map((range) => {
                  if (range.format === "bold") {
                    return (
                      <strong
                        data-text="true"
                        // onMouseDown={() => handleTextFieldKey(range.key)}
                        key={uuidv4()}
                      >
                        {range.text}
                      </strong>
                    );
                  } else {
                    return (
                      <span
                        data-text="true"
                        // onMouseDownCapture={() => handleTextFieldKey(range.key)}
                        key={uuidv4()}
                      >
                        {range.text}
                      </span>
                    );
                  }
                })}
          </p>
        );
      })}
    </>
  );
};
