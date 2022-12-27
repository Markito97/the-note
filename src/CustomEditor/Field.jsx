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
    "test is a text",
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

  console.log(res);

  return (
    <>
      {editor.map((field, index) => (
        <div
          id={field.id}
          onMouseDown={() => currentField(field.id)}
          key={index + 1}
        >
          {res.map((el) => {
            if (typeof el === "object") {
              return <strong>{el.bold}</strong>;
            } else {
              return <span>{el}</span>;
            }
          })}
        </div>
      ))}
    </>
  );
};
