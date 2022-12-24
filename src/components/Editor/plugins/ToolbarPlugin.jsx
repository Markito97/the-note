import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DropdownList } from "./DropDownList";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  $getSelection,
  $isRangeSelection,
  $getNodeByKey,
  $createParagraphNode,
} from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $isParentElementRTL, $isAtNodeEnd } from "@lexical/selection";
import { $getNearestNodeOfType, mergeRegister } from "@lexical/utils";
import { $isListNode, ListNode } from "@lexical/list";
import { createPortal } from "react-dom";
import { $isHeadingNode } from "@lexical/rich-text";
import {
  $isCodeNode,
  getDefaultCodeLanguage,
  getCodeLanguages,
} from "@lexical/code";
import { Select } from "./Select";
import { Box, useTheme } from "@mui/material";
import { FloatingLinkEditor } from "./FloatingLinkEditor";
import { LowPriority } from "./FloatingLinkEditor";
import { ToolbarButtonsList } from "./ToolbarButtonsList";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { initialState } from "./reducer";
import { COMMANDS } from "../constance";
import { tokens } from "../../../assets/themes/theme";

export const getSelectedNode = (selection) => {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
};

export const ToolbarPlugin = ({
  posts,
  currentDescription,
  changeDescription,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [editor] = useLexicalComposerContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Effect");
    if (currentDescription !== undefined) {
      const parsedStateFromJson = editor.parseEditorState(
        currentDescription.description
      );
      editor.setEditorState(parsedStateFromJson);
    }
  }, [changeDescription]);

  const toolbarRef = useRef(null);
  const [blockType, setBlockType] = useState("paragraph");
  const [selectedElementKey, setSelectedElementKey] = useState(null);
  const [showBlockOptionsDropDown, setShowBlockOptionsDropDown] =
    useState(false);
  const [codeLanguage, setCodeLanguage] = useState("");

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          setBlockType(type);
          if ($isCodeNode(element)) {
            setCodeLanguage(element.getLanguage() || getDefaultCodeLanguage());
          }
        }
      }
      dispatch({ type: "isBold", payload: selection.hasFormat("bold") });
      dispatch({ type: "isItalic", payload: selection.hasFormat("italic") });
      dispatch({
        type: "isUnderline",
        payload: selection.hasFormat("underline"),
      });
      dispatch({
        type: "isStrike",
        payload: selection.hasFormat("strikethrough"),
      });
      dispatch({
        type: "isCode",
        payload: selection.hasFormat("code"),
      });
      dispatch({ type: "isRTL", payload: $isParentElementRTL(selection) });
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          dispatch({ type: "undo", payload: payload });
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          dispatch({ type: "redo", payload: payload });
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

  const codeLanguges = useMemo(() => getCodeLanguages(), []);
  const onCodeLanguageSelect = useCallback(
    (e) => {
      editor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey);
          if ($isCodeNode(node)) {
            node.setLanguage(e.target.value);
          }
        }
      });
    },
    [editor, selectedElementKey]
  );

  return (
    <Box sx={{ bgcolor: `${colors.primary[500]}` }} ref={toolbarRef}>
      <ToolbarButtonsList commands={COMMANDS} editor={editor} />
      {/* {supportedBlockTypes.has(blockType) && (
        <>
          <Button
            onClick={() =>
              setShowBlockOptionsDropDown(!showBlockOptionsDropDown)
            }
          >
            <FormatAlignJustifyOutlinedIcon />
            <span className="text">{blockTypeToBlockName[blockType]}</span>
            <KeyboardArrowDownOutlinedIcon />
          </Button>
          {showBlockOptionsDropDown &&
            createPortal(
              <DropdownList
                editor={editor}
                blockType={blockType}
                toolbarRef={toolbarRef}
                setShowBlockOptionsDropDown={setShowBlockOptionsDropDown}
              />,
              document.body
            )}
        </>
      )} */}
      {/* {blockType === "code" ? (
        <>
          <Select
            onChange={onCodeLanguageSelect}
            options={codeLanguges}
            value={codeLanguage}
          />
          <KeyboardArrowDownOutlinedIcon />
        </>
      ) : null} */}
    </Box>
  );
};
