import { useState } from "react";

/** Custom Component */
import Countdown from "../cards/Countdown";
import { Typography, Col, Row, Button } from 'antd';
import "./CountView.css";

/** Types */
import type { IScheduleEvent } from "../../../types";

export default function CountdownList() {
  const { Paragraph } = Typography;
  /** @TODO updating real time in redux. Import from their instead */
  const event1 = {} as IScheduleEvent;
  // const event2 = {} as IScheduleEvent;
  // const event3 = {} as IScheduleEvent;

  const eventData = [
    {
      "eventName": "LLM1",
      "queue": "04 : 29",
      "inTime": "09 : 28",
      "outTime": "19 : 29",
      "lateTime": "10 : 20"
    },
    {
      "eventName": "LLM2",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
    },
    {
      "eventName": "LLM3",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
    }
  ];

  const [active, setActive] = useState(0);
  const setActiveCard = (index: number) => {
    setActive(index);
  }

  return (
    <div>
      <div>
        <div className='flex align-center margin-top-two'>
          <Button className='common-button' type="default" size='large' shape="round">
            <Paragraph className='text-content text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path d="M7.8284 10.9999L13.1924 5.63589L11.7782 4.22168L4 11.9999L11.7782 19.778L13.1924 18.3638L7.8284 12.9999H20V10.9999H7.8284Z" fill="white" />
              </svg>
              &nbsp;{"Back to Schedule Overview"}
            </Paragraph>
          </Button>
        </div>
        <Paragraph className='text-subtitle text-white'>{"Active Schedule"}</Paragraph>
        <Row>
          <Col span={4}>
            <div className='flex align-center'>
              <div className='margin-top-mthree'>
                <Button shape='circle' size='large' className='common-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32" fill="none">
                    <path d="M10.379 18.6667L10.9395 13.3333H5.33325V10.6667H11.2198L11.9205 4H14.6018L13.9011 10.6667H19.2198L19.9205 4H22.6018L21.9011 10.6667H26.6666V13.3333H21.6209L21.0603 18.6667H26.6666V21.3333H20.7801L20.0794 28H17.3981L18.0987 21.3333H12.78L12.0793 28H9.39799L10.0987 21.3333H5.33325V18.6667H10.379ZM13.0603 18.6667H18.379L18.9395 13.3333H13.6209L13.0603 18.6667Z" fill="#F19D38" />
                  </svg>
                </Button>
              </div>
              <div className='margin-left'>
                <div className='text-content text-common'>
                  {"Amazon building number"}
                </div>
                <div>
                  <Paragraph className='text-bigcontent text-white'>{"22300"}</Paragraph>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className='flex align-center'>
              <div className='margin-top-mthree'>
                <Button shape='circle' size='large' className='common-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32" fill="none">
                    <path d="M16.0001 29.3333C8.63628 29.3333 2.66675 23.3637 2.66675 16C2.66675 8.63616 8.63628 2.66663 16.0001 2.66663C23.3638 2.66663 29.3334 8.63616 29.3334 16C29.3334 23.3637 23.3638 29.3333 16.0001 29.3333ZM16.0001 26.6666C21.8911 26.6666 26.6667 21.891 26.6667 16C26.6667 10.1089 21.8911 5.33329 16.0001 5.33329C10.109 5.33329 5.33341 10.1089 5.33341 16C5.33341 21.891 10.109 26.6666 16.0001 26.6666ZM17.3334 16H22.6667V18.6666H14.6667V9.33329H17.3334V16Z" fill="#F19D38" />
                  </svg>
                </Button>
              </div>
              <div className='margin-left'>
                <div className='text-content text-common'>
                  {"Current Time"}
                </div>
                <div>
                  <Paragraph className='text-bigcontent text-white'>{"2023/11/16 - 12:30"}</Paragraph>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className='flex align-center'>
              <div className='margin-top-mthree'>
                <Button shape='circle' size='large' className='common-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32" fill="none">
                    <path d="M16.0001 2.6665C23.3638 2.6665 29.3334 8.63604 29.3334 15.9998C29.3334 23.3636 23.3638 29.3332 16.0001 29.3332C8.63628 29.3332 2.66675 23.3636 2.66675 15.9998H5.33341C5.33341 21.8909 10.109 26.6665 16.0001 26.6665C21.8911 26.6665 26.6667 21.8909 26.6667 15.9998C26.6667 10.1088 21.8911 5.33317 16.0001 5.33317C12.3337 5.33317 9.09937 7.18296 7.17943 10.0002L10.6667 9.99984V12.6665H2.66675V4.6665H5.33341L5.33327 7.99874C7.76587 4.76084 11.6384 2.6665 16.0001 2.6665ZM17.3334 9.33317L17.3331 15.4465L21.6569 19.771L19.7713 21.6566L14.6665 16.5505L14.6667 9.33317H17.3334Z" fill="#F19D38" />
                  </svg>
                </Button>
              </div>
              <div className='margin-left'>
                <div className='text-content text-common'>
                  {"Time Until Next Delivery"}
                </div>
                <div>
                  <Paragraph className='text-bigcontent text-white'>{"00:09:00"}</Paragraph>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className='flex align-center'>
              <div className='margin-top-mthree'>
                <Button shape='circle' size='large' className='common-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32" fill="none">
                    <path d="M12.0001 1.33337V4.00004H20.0001V1.33337H22.6667V4.00004H28.0001C28.7365 4.00004 29.3334 4.597 29.3334 5.33337V26.6667C29.3334 27.4031 28.7365 28 28.0001 28H4.00008C3.26371 28 2.66675 27.4031 2.66675 26.6667V5.33337C2.66675 4.597 3.26371 4.00004 4.00008 4.00004H9.33342V1.33337H12.0001ZM26.6667 14.6667H5.33341V25.3334H26.6667V14.6667ZM9.33342 6.66671H5.33341V12H26.6667V6.66671H22.6667V9.33337H20.0001V6.66671H12.0001V9.33337H9.33342V6.66671Z" fill="#F19D38" />
                  </svg>
                </Button>
              </div>
              <div className='margin-left'>
                <div className='text-content text-common'>
                  {"Event(s) Scheduled Today"}
                </div>
                <div>
                  <Paragraph className='text-bigcontent text-white'>{"12"}</Paragraph>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}></Col>
          <Col span={4} className='flex justify-right'>
            <Button className='common-button justify-center flex align-center' type="default" size='large' shape="circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_67_690)">
                  <path d="M20.25 4.5V19.5C20.25 19.8978 20.092 20.2794 19.8107 20.5607C19.5294 20.842 19.1478 21 18.75 21H15C14.6022 21 14.2206 20.842 13.9393 20.5607C13.658 20.2794 13.5 19.8978 13.5 19.5V4.5C13.5 4.10218 13.658 3.72064 13.9393 3.43934C14.2206 3.15804 14.6022 3 15 3H18.75C19.1478 3 19.5294 3.15804 19.8107 3.43934C20.092 3.72064 20.25 4.10218 20.25 4.5ZM9 3H5.25C4.85218 3 4.47064 3.15804 4.18934 3.43934C3.90804 3.72064 3.75 4.10218 3.75 4.5V19.5C3.75 19.8978 3.90804 20.2794 4.18934 20.5607C4.47064 20.842 4.85218 21 5.25 21H9C9.39782 21 9.77936 20.842 10.0607 20.5607C10.342 20.2794 10.5 19.8978 10.5 19.5V4.5C10.5 4.10218 10.342 3.72064 10.0607 3.43934C9.77936 3.15804 9.39782 3 9 3Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_67_690">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </Col>
        </Row>
      </div>
      <div className="margin-top-two">
        <Row className="justify-between flex-row">
          {eventData.map((item, index) => (
            <Col span={7} key={index} onClick={() => setActiveCard(index)}>
              <Countdown
                event={event1}
                eventIndex={index}
                activeIndex={active}
                eventName={item.eventName}
                queue={item.queue}
                inTime={item.inTime}
                outTime={item.outTime}
                lateTime={item.lateTime} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
