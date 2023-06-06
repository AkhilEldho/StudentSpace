import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

//Event widget
const EventWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  //DESIGN
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Events
        </Typography>
        <Typography color={medium}>Add Event</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:8800/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Student Space</Typography>
        <Typography color={medium}>StudentSpace.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Orientation for new students.
        Come and get yourself familiar with your campus 2024.
      </Typography>
    </WidgetWrapper>
  );
};

export default EventWidget;