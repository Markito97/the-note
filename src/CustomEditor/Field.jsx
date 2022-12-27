import { v4 as uuidv4 } from "uuid";

export const Field = ({ editor, currentField }) => {
  const parseString = (string, bold, normal) => {
    const a = bold.map((idx) => {
      return { bold: string.slice(idx.start, idx.end) };
    });
    const b = normal.map((idx) => {
      return string.slice(idx.start, idx.end);
    });

    const c = a.reduce((acc, el, i) => {
      acc.push(el, b[i]);
      return acc;
    }, []);
    return c;
  };

  const res = parseString(
    editor[0].content,
    [
      { start: 0, end: 3 },
      { start: 5, end: 8 },
      { start: 10, end: 13 },
    ],
    [
      { start: 3, end: 5 },
      { start: 8, end: 10 },
      { start: 13, end: 14 },
    ]
  );

  return (
    <>
      {editor.map((field) => (
        <p
          id={field.id}
          onMouseDown={() => currentField(field.id)}
          key={uuidv4()}
        >
          {res.map((el) => {
            if (typeof el === "object") {
              return <strong key={uuidv4()}>{el.bold}</strong>;
            } else {
              return <span key={uuidv4()}>{el}</span>;
            }
          })}
        </p>
      ))}
    </>
  );
};
