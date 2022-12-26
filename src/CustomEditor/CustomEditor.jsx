import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { createRef, useEffect, useState } from "react";
import { tokens } from "../assets/themes/theme";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { EightK } from "@mui/icons-material";

export const CustomEditor = ({ isCurrentPost, changeDescription }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const descRef = createRef();
  const [currentFieldId, setCurrentFieldId] = useState("");
  const [editor, setEditor] = useState([
    {
      id: 1,
      type: "Paragraph",
      content: "this is a text",
      style: [
        {
          range: [
            { start: 0, end: 3 },
            { start: 5, end: 10 },
          ],
          format: "bold",
        },
      ],
    },
    // {
    //   id: 2,
    //   type: "Paragraph",
    //   content: "this is a text",
    //   style: [{ range: [0, 5], format: "bold" }],
    // },
  ]);

  useEffect(() => {
    console.log("Effect");
    if (!isCurrentPost) {
      console.log("123");
    } else {
    }
  }, [isCurrentPost]);

  const test = (e) => {
    changeDescription(e.target.innerText);
  };

  const currentField = (id) => {
    setCurrentFieldId(id);
  };

  function setBold() {}

  const handleSelectionInEditorField = () => {
    const selection = document.getSelection();
    const updateState = editor.map((item) => {
      if (item.id === currentFieldId) {
        return {
          ...item,
        };
      } else {
        return { ...item };
      }
    });
    setEditor(updateState);
  };

  return (
    <Box>
      <Box>
        <Button onClick={setBold}>
          <FormatBoldIcon sx={{ color: `${colors.grey[100]}` }} />
        </Button>
      </Box>

      <div
        sx={{ color: `${colors.grey[100]}` }}
        ref={descRef}
        onInput={test}
        style={{ width: "570px" }}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onSelect={handleSelectionInEditorField}
      >
        {editor.map((field, index) => {
          if (field.type === "Paragraph") {
            return (
              <p
                id={field.id}
                onMouseDown={() => currentField(field.id)}
                key={index + 1}
              >
                {field.style.map((item) => {
                  return item.range.map((pos) => {
                    return (
                      <>
                        <strong>
                          {field.content.slice(pos.start, pos.end)}
                        </strong>
                        <span>{field.content.slice(pos.end)}</span>
                      </>
                    );
                  });
                })}
              </p>
            );
          }
        })}
      </div>
    </Box>
  );
};
