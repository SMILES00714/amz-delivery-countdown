import { useState, useEffect } from "react";

/** Custom Hooks */
import useTimer from "../../../hooks/useTimer";

/** Types */
import type { eventType } from "../../../types";
import { Typography, Row, Col, Button } from 'antd';
import "./Countdown.css";

const Countdown: React.FC<eventType> = ({
  event,
  eventIndex,
  activeIndex,
  eventName,
  queue,
  inTime,
  outTime,
  lateTime,
}) => {
  const timer = useTimer();
  console.log({ event, timer });
  const { Paragraph } = Typography;
  const [activeCard, setActiveCard] = useState(false);
  useEffect(() => {
    if (eventIndex === activeIndex) {
      setActiveCard(true);
    } else {
      setActiveCard(false);
    }
  }, [activeIndex])

  return (
    <div>
      <div className={`countdown-container ${activeCard ? "active" : null}`}>
        <Paragraph className="text-subtitle text-white">{eventName}</Paragraph>
        <Button shape='circle' type={`${activeCard ? "default" : "text"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
            <path d="M14.0008 12.3509L19.7755 6.57617L21.4254 8.22608L15.6507 14.0008L21.4254 19.7755L19.7755 21.4254L14.0008 15.6507L8.22608 21.4254L6.57617 19.7755L12.3509 14.0008L6.57617 8.22608L8.22608 6.57617L14.0008 12.3509Z" fill="white" />
          </svg>
        </Button>
        <Row className="margin-top-mthree">
          <Col span={12}>
            <Paragraph className={`text-content margin-top-zero ${activeCard ? "text-active" : "text-common"}`}>{"Queue"}</Paragraph>
            <Paragraph className="text-bigcontent text-white margin-top-mtwo">{queue}</Paragraph>
          </Col>
          <Col span={12}>
            <Paragraph className={`text-content margin-top-zero ${activeCard ? "text-active" : "text-common"}`}>{"In Time"}</Paragraph>
            <Paragraph className="text-bigcontent text-white margin-top-mtwo">{inTime}</Paragraph>
          </Col>
        </Row>
        <Row className="margin-top-mtwo">
          <Col span={12}>
            <Paragraph className={`text-content margin-top-zero ${activeCard ? "text-active" : "text-common"}`}>{"Late Time"}</Paragraph>
            <Paragraph className="text-bigcontent text-white margin-top-mtwo">{lateTime}</Paragraph>
          </Col>
          <Col span={12}>
            <Paragraph className={`text-content margin-top-zero ${activeCard ? "text-active" : "text-common"}`}>{"Out Time"}</Paragraph>
            <Paragraph className="text-bigcontent text-white margin-top-mtwo">{outTime}</Paragraph>
          </Col>
        </Row>
        <div className={`${activeCard ? "active-divider" : "divider"}`}>
          <Paragraph className={`text-content margin-top-two ${activeCard ? "text-active" : "text-common"}`}>{"Countdown"}</Paragraph>
          <Row>
            <Col span={11}>
              <div className="flex justify-right">
                <div className="countdown-counter">
                  <Paragraph className="text-subtitle text-white">1</Paragraph>
                </div>
                <div className="countdown-counter margin-left">
                  <Paragraph className="text-subtitle text-white">2</Paragraph>
                </div>
              </div>
            </Col>
            <Col span={2} className="semi-column">
              <Paragraph className="text-subtitle text-white">:</Paragraph>
            </Col>
            <Col span={11}>
              <div className="flex justify-left">
                <div className="countdown-counter">
                  <Paragraph className="text-subtitle text-white">1</Paragraph>
                </div>
                <div className="countdown-counter margin-left">
                  <Paragraph className="text-subtitle text-white">2</Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Countdown;