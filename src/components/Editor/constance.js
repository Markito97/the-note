import {
  REDO_COMMAND,
  UNDO_COMMAND,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import StrikethroughSOutlinedIcon from "@mui/icons-material/StrikethroughSOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
export const COMMANDS = [
  {
    formatComand: UNDO_COMMAND,
    format: null,
    icon: <ArrowCircleLeftOutlinedIcon />,
  },
  {
    formatComand: REDO_COMMAND,
    format: null,
    icon: <ArrowCircleRightOutlinedIcon />,
  },
  {
    formatComand: FORMAT_TEXT_COMMAND,
    format: "bold",
    icon: <FormatBoldIcon />,
  },
  {
    formatComand: FORMAT_TEXT_COMMAND,
    format: "italic",
    icon: <FormatItalicOutlinedIcon />,
  },
  {
    formatComand: FORMAT_TEXT_COMMAND,
    format: "underline",
    icon: <FormatUnderlinedOutlinedIcon />,
  },
  {
    formatComand: FORMAT_TEXT_COMMAND,
    format: "strikethrough",
    icon: <StrikethroughSOutlinedIcon />,
  },

  {
    formatComand: FORMAT_TEXT_COMMAND,
    format: "code",
    icon: <CodeOutlinedIcon />,
  },
  {
    formatComand: FORMAT_ELEMENT_COMMAND,
    format: "left",
    icon: <FormatAlignLeftIcon />,
  },
  {
    formatComand: FORMAT_ELEMENT_COMMAND,
    format: "center",
    icon: <FormatAlignCenterIcon />,
  },
  {
    formatComand: FORMAT_ELEMENT_COMMAND,
    format: "right",
    icon: <FormatAlignRightIcon />,
  },
  {
    formatComand: FORMAT_ELEMENT_COMMAND,
    format: "justify",
    icon: <FormatAlignJustifyOutlinedIcon />,
  },
];

export const SUPPORTED_BLOCK_TYPES = new Set([
  "paragraph",
  "quote",
  "code",
  "h1",
  "h2",
  "ul",
  "ol",
]);

export const BLOCK_TYPE_TO_BLOCK_NAME = {
  code: "Code Block",
  h1: "Large Heading",
  h2: "Small Heading",
  h3: "Heading",
  h4: "Heading",
  h5: "Heading",
  ol: "Numbered List",
  paragraph: "Normal",
  quote: "Quote",
  ul: "Bulleted List",
};
