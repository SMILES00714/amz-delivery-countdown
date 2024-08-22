import { useState, useEffect } from "react";
import { Col, Row, Typography } from "antd";
import { DayCardProps } from "../../../types/week";
import "./card.css";


const DayCard: React.FC<DayCardProps> = ({ eventName, queue, inTime, outTime, lateTime, active, cardIndex }) => {
    const [activeCard, setActiveCard] = useState(false);
    const { Paragraph } = Typography
    useEffect(() => {
        if (cardIndex !== 0 && active === cardIndex) {
            setActiveCard(true);
        } else {
            setActiveCard(false);
        }
    }, [active])
    const redirect = (redirect: Boolean) => {
        if (redirect) {
            window.location.href = `/week/day/event/details/`;
        }
    }
    return (
        <>
            {cardIndex === 0 ? (
                <div className={`day-card day-card-0 ${activeCard ? "active-day" : null}`}>
                    <Row>
                        <Col span={5}><div><Paragraph className="text-content text-common margin-top-two">{eventName}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-common margin-top-two">{queue}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-common margin-top-two">{inTime}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-common margin-top-two">{outTime}</Paragraph></div></Col>
                        <Col span={4}><div><Paragraph className="text-content text-common margin-top-two">{lateTime}</Paragraph></div></Col>
                    </Row>
                </div>
            ) : cardIndex === 1 ? (
                <div className={`day-card day-card-1 margin-top-two ${activeCard ? "active-day" : null}`} onClick={() => redirect(activeCard)}>
                    <Row>
                        <Col span={5}><div><Paragraph className="text-content text-white margin-top-two">{eventName}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-white margin-top-two">{queue}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-white margin-top-two">{inTime}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-white margin-top-two">{outTime}</Paragraph></div></Col>
                        <Col span={4}><div><Paragraph className="text-content text-white margin-top-two">{lateTime}</Paragraph></div></Col>
                    </Row>
                </div>
            ) : (
                <div className={`day-card day-card-2 ${activeCard ? "active-day" : null}`} onClick={() => redirect(activeCard)}>
                    <Row>
                        <Col span={5}><div><Paragraph className="text-content text-white margin-top-two">{eventName}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-white margin-top-two">{queue}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-white margin-top-two">{inTime}</Paragraph></div></Col>
                        <Col span={5}><div><Paragraph className="text-content text-white margin-top-two">{outTime}</Paragraph></div></Col>
                        <Col span={4}><div><Paragraph className="text-content text-white margin-top-two">{lateTime}</Paragraph></div></Col>
                    </Row>
                </div>
            )}
        </>
    );
};

export default DayCard;
