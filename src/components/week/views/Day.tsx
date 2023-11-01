import { Typography, Button } from 'antd';
import { useState } from 'react';
import DayCard from './DayCard';

export default function WeekDayView() {
  const data = [
    {
      "eventName": "Event Name",
      "queue": "Queue",
      "inTime": "In Time",
      "outTime": "Out Time",
      "lateTime": "Late Time"
    },
    {
      "eventName": "LLM1",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
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
    },
    {
      "eventName": "SFMD1",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
    },
    {
      "eventName": "SFMD2",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
    },
    {
      "eventName": "SFMD3",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
    },
    {
      "eventName": "INDD1",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
    },
    {
      "eventName": "INDD2",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
    },
    {
      "eventName": "INDD3",
      "queue": "09 : 45",
      "inTime": "09 : 50",
      "outTime": "10 : 50",
      "lateTime": "10 : 10"
    }
  ];

  const { Paragraph } = Typography;
  const [selectedValue, setSelectedValue] = useState<number>(1);

  const handleCardChange = (index: number) => {
    setSelectedValue(index);
    const dayElement = document.querySelector('.day-card')?.parentElement as HTMLElement;
    if (index > 4) {
      if (index === data.length - 1) {
        return;
      }
      dayElement.style.marginTop = -8 * (index - 4) + "vh";
    } else {
      dayElement.style.marginTop = "0";
    }
  };

  return (
    <div>
      <div className='flex align-center margin-top-two'>
        <Button className='common-button' type="default" size='large' shape="round">
          <Paragraph className='text-content text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
              <path d="M7.8284 10.9999L13.1924 5.63589L11.7782 4.22168L4 11.9999L11.7782 19.778L13.1924 18.3638L7.8284 12.9999H20V10.9999H7.8284Z" fill="white" />
            </svg>
            &nbsp;{"Back to Monday Schedule"}
          </Paragraph>
        </Button>
      </div>
      <div className='flex align-center justify-between'>
        <Paragraph className='text-white text-subtitle'>{"Monday Schedule"}</Paragraph>
        <Button type="default" className='no-border background-yellow' size='large' shape="round">
          <Paragraph className='text-content text-white margin-top-zero'>{"Add Delivery Event"}</Paragraph>
        </Button>
      </div>
      <div className='day-list'>
        {data.map((item, index) => (
          <div key={index} onClick={() => handleCardChange(index)}>
            <DayCard
              cardIndex={index}
              eventName={item.eventName}
              queue={item.queue}
              inTime={item.inTime}
              outTime={item.outTime}
              lateTime={item.lateTime}
              active={selectedValue}
            />
          </div>
        ))}
      </div>
    </div>
  );
}