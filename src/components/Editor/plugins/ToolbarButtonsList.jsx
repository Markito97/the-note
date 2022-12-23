import { Button, useTheme, Box } from "@mui/material";
import { tokens } from "../../../assets/themes/theme";

export const ToolbarButtonsList = ({ commands, editor }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {commands.map((btn, index) => (
        <Button
          key={index + 1}
          onClick={() => {
            editor.dispatchCommand(btn.formatComand, btn.format);
          }}
        >
          <Box sx={{ color: `${colors.grey[100]}` }}>{btn.icon}</Box>
        </Button>
      ))}
    </>
  );
};
