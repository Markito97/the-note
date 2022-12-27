import { v4 as uuidv4 } from "uuid";

export const Field = ({ editor, currentField }) => {
  //   const parseString = (string, bold, normal) => {
  //     const a = bold.map((idx) => {
  //       return { bold: string.slice(idx.start, idx.end) };
  //     });
  //     const b = normal.map((idx) => {
  //       return string.slice(idx.start, idx.end);
  //     });

  //     const c = a.reduce((acc, el, i) => {
  //       acc.push(el, b[i]);
  //       return acc;
  //     }, []);
  //     return c;
  //   };

  //   // const res = parseString(
  //   //   editor[0].content,
  //   //   editor[0].style[0].bold,
  //   //   editor[0].style[1].normal
  //   // );

  //   const res = parseString(
  //     editor[0].content,
  //     [
  //       { start: 0, end: 3 },
  //       { start: 5, end: 8 },
  //       { start: 10, end: 13 },
  //     ],
  //     [
  //       { start: 3, end: 5 },
  //       { start: 8, end: 10 },
  //       { start: 13, end: 14 },
  //     ]
  //   );

  //   console.log(res);

  return (
    <>
      {editor.map((field) => {
        return (
          <p key={uuidv4()}>
            {field.style.length == 0 ? (
              <span key={uuidv4()}>{field.content}</span>
            ) : (
              field.style.map((text) => {
                if (text.format === "bold") {
                  return <strong key={uuidv4()}>{text.text}</strong>;
                } else {
                  return <span key={uuidv4()}>{text}</span>;
                }
              })
            )}
          </p>
        );
      })}
    </>
  );
};
