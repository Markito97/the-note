export const initialTable = {
  header: [
    {
      text: "first",
      width: 200,
    },
    {
      text: "second",
      width: 200,
    },
    {
      text: "third",
      width: 200,
    },
  ],
  content: [
    [
      {
        text: "first",
        width: 200,
      },
      {
        text: "Prop",
        width: 200,
      },
      {
        text: "Prop",
        width: 200,
      },
    ],
    [
      {
        text: "first",
        width: 200,
      },
      {
        text: "Prop",
        width: 200,
      },
      {
        text: "Prop",
        width: 200,
      },
    ],
    [
      {
        text: "first",
        width: 200,
      },
      {
        text: "Prop",
        width: 200,
      },
      {
        text: "Prop",
        width: 200,
      },
    ],
  ],
  footer: [],
};

export function tableReducer(state, action) {
  switch (action.type) {
    case "updateHeaders":
      return {
        ...state,
        header: [...action.payload],
      };
    case "updateContent":
      return {
        ...state,
        content: [...action.payload],
      };
    case "updateFooter":
      return {
        ...state,
      };
    default:
      throw new Error();
  }
}
