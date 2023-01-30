import { Box } from "@mui/material";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { NoteMenuOption } from "./NoteMenuOption";

const noteMenuOptions = [
  {
    icon: <TableChartOutlinedIcon />,
    text: "Table",
  },
  {
    icon: <FactCheckOutlinedIcon />,
    text: "Check List",
  },
  {
    icon: <FormatListBulletedOutlinedIcon />,
    text: "List",
  },
  {
    icon: <InsertDriveFileOutlinedIcon />,
    text: "Empty",
  },
];

const noteMenuListStyles = {
  container: {
    width: 570,
  },
};

export const NoteMenuList = ({ handleType }) => {
  const options = noteMenuOptions.map((option) => ({
    ...option,
    handler: handleType,
  }));
  return (
    <Box sx={noteMenuListStyles.container}>
      {options.map((option, index) => (
        <NoteMenuOption key={option.text + index} option={option} />
      ))}
    </Box>
  );
};
