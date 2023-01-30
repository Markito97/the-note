import { v4 as uuidv4 } from "uuid";

export const mockdata = {
  header: [
    {
      type: "Title",
      _canRemove: false,
      width: 200,
    },
    {
      type: "Tags",
      _canRemove: false,
      width: 200,
    },
  ],
  content: [
    {
      type: "Text",
      cells: [
        {
          value: "",
          width: 200,
        },
        {
          value: "",
          width: 200,
        },
        {
          value: "",
          width: 200,
        },
      ],
    },
    {
      type: "Text",
      cells: [
        {
          value: "",
          width: 200,
        },
        {
          value: "",
          width: 200,
        },
        {
          value: "",
          width: 200,
        },
      ],
    },
  ],
  footer: [],
};

const assingIds = (mockdata) => {
  const header = mockdata.header.map((item) => ({ ...item, id: uuidv4() }));
  const content = mockdata.content.map((item) => ({ ...item, id: uuidv4() }));
  const contentColumns = content.map((column) => {
    const cells = column.cells.map((cell) => ({ ...cell, id: uuidv4() }));
    return {
      ...column,
      cells: cells,
    };
  });

  return {
    header: header,
    content: contentColumns,
  };
};

export const initialTable = assingIds(mockdata);

export function tableReducer(state, action) {
  switch (action.type) {
    case "createTable":
      return {
        ...action.payload,
      };
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
