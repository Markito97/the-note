import { v4 as uuidv4 } from "uuid";

export const Field = ({ editor, handleTextFieldId }) => {
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
                        onClick={() => handleTextFieldId(range.key)}
                        key={uuidv4()}
                      >
                        {range.text}
                      </strong>
                    );
                  } else {
                    return (
                      <span
                        onClick={() => handleTextFieldId(range.key)}
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
