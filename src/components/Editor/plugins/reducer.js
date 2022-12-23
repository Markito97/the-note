export const initialState = {
  canUndo: false,
  canRedo: false,
  isRTL: false,
  isBold: false,
  isItalic: false,
  isUnderline: false,
  isStrike: false,
  isCode: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "undo":
      return { canUndo: action.payload };
    case "redo":
      return { canRedo: action.payload };
    case "isRTL":
      return { isRTL: action.payload };
    case "isBold":
      return { isBold: action.payload };
    case "isItalic":
      return { isItalic: action.payload };
    case "isUnderline":
      return { isUnderline: action.payload };
    case "isStrike":
      return { isStrike: action.payload };
    case "isCode":
      return {
        isCode: action.payload,
      };
    default:
      throw new Error();
  }
}
