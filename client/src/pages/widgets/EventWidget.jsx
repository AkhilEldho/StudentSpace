import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import Question from "./Question";

const questions = [
  {
    id: 1,
    title: "When is graduation happening." ,
    info: "Happening on the Saturday 13th November."
  },
  {
    id: 2,
    title: "Where do we get the gowns from?",
    info: "Can get them from the university just go and ask them."
  },
  {
    id: 3,
    title: "Who can we invite?",
    info: "Anyone you want can be invited."
  }
];

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
          Events - Graduation
        </Typography>
        <Typography color={medium}>Add Event</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:8800/assets/Graduation.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />


      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>

      <FlexBetween>
        <Typography color={main}>Student Space</Typography>
        <Typography color={medium}>StudentSpace.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Graduation December 2023.
        Bring your family and friends along.
      </Typography>
    </WidgetWrapper>
  );
};

export default EventWidget;
