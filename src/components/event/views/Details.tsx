import { useState } from "react";
import { Typography, Button } from "antd";
import "./eventStyle.css";

export default function EventDetailsView() {

  const { Paragraph } = Typography;
  const schedules = [
    "Queue Time",
    "In Time",
    "Out Time",
    "Late Time"
  ];
  const timeLines = [
    "09 : 45",
    "09 : 40",
    "09 : 35",
    "09 : 30",
    "09 : 25",
    "09 : 20",
    "09 : 15",
    "09 : 10"
  ];
  const [schedule, setSchedule] = useState(0);
  const [timeLine, setTimeLine] = useState(0);
  const onScheduleClick = (index: number) => {
    setSchedule(index);
  }
  const onTimeClick = (index: number) => {
    setTimeLine(index);
  }

  return (
    <>
      <div className='flex align-center margin-top-two'>
        <Button className='common-button' href="/week/day/" type="default" size='large' shape="round">
          <Paragraph className='text-content text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
              <path d="M7.8284 10.9999L13.1924 5.63589L11.7782 4.22168L4 11.9999L11.7782 19.778L13.1924 18.3638L7.8284 12.9999H20V10.9999H7.8284Z" fill="white" />
            </svg>
            &nbsp;{"Back to Monday Schedule"}
          </Paragraph>
        </Button>
      </div>
      <div className="event-body">
        <div className="event-list">
          <div className="detail">
            <Paragraph className="text-subtitle2 text-white margin-top-three">{"LLM1"}</Paragraph>
          </div>
          <Button className='no-border background-yellow margin-top-two' size="large" shape="round">
            <Paragraph className="text-content text-white">{"Update Schedule"}</Paragraph>
          </Button>
          <Button type="text">
            <Paragraph className="text-content text-common margin-top-two" underline>{"Delete Schedule"}</Paragraph>
          </Button>
        </div>
        <div className="event-schedule">
          {schedules.map((item, index) => (
            <div className={`detail ${index === schedule ? "active" : null}`} key={index} onClick={() => onScheduleClick(index)}>
              <Paragraph className={`text-bigcontent margin-top-three ${index === schedule ? "text-white" : "text-common"}`}>{item}</Paragraph>
            </div>
          ))}
        </div>
        <div className="event-timeline">
          <Paragraph className="text-content text-common">{"Select Time"}</Paragraph>
          {timeLines.map((item, index) => (
            <div className={`detail ${index === timeLine ? "active" : null}`} key={index} onClick={() => onTimeClick(index)}>
              <Paragraph className={`text-content margin-top-two ${index === timeLine ? "text-white" : "text-common"}`}>{item}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
