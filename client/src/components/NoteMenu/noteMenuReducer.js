export const initialNoteMenuState = {
  isEmpty: false,
  isTable: false,
  isHide: true,
  isCheckList: false,
  isList: false,
  isTimeline: false,
};

export function noteMenuReducer(state, action) {
  switch (action.type) {
    case "setUpdate":
      return {
        ...action.payload,
      };
    case "setTable":
      return {
        ...state,
        isHide: false,
        isTable: true,
      };
    case "setCheckList":
      return {
        ...state,
        isHide: false,
        isCheckList: true,
      };
    case "setList":
      return {
        ...state,
        isHide: false,
        isList: true,
      };
    case "setEmpty":
      return {
        ...state,
        isHide: false,
        isEmpty: true,
      };
    case "setTimeline":
      return {
        ...state,
        isHide: false,
        isTimeline: false,
      };
    default:
      throw new Error();
  }
}
