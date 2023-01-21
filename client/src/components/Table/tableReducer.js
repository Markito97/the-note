export const initialTable = {
  header: [
    {
      id: 1,
      text: "first",
      width: 200,
    },
    {
      id: 2,
      text: "second",
      width: 200,
    },
  ],
  content: [
    {
      id: 1,
      type: "text",
      cells: [
        {
          id: "4",
          text: 1,
          width: 200,
        },
        {
          id: "5",
          text: 2,
          width: 200,
        },
        {
          id: "8",
          text: 5,
          width: 200,
        },
      ],
    },
    {
      id: 2,
      type: "text",
      cells: [
        {
          id: "7",
          text: "4",
          width: 200,
        },
        {
          id: "8",
          text: "5",
          width: 200,
        },
        {
          id: "8",
          text: "5",
          width: 200,
        },
      ],
    },
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
      console.log(action.payload);
      return {
        ...state,
        content: [...action.payload],
      };
    case "addColumn":
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case "updateFooter":
      return {
        ...state,
      };
    default:
      throw new Error();
  }
}
