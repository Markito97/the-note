import { useTheme } from "@mui/material";
import { tokens } from "../assets/themes/theme";

export const BoldText = ({ text }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <span style={{ color: `${colors.grey[100]}`, fontWeight: "bold" }}>
        {text}
      </span>
    </div>
  );
};
