import { Segmented, Typography, Col, Row, Button } from 'antd';
import { useState } from 'react';
import Card from './Card';

type SegmentedValue = any;

export default function WeekView() {
  const data = [
    {
      "name": "Monday",
      "text": "Today Event Scheduled",
      "value": "32"
    },
    {
      "name": "Tuesday",
      "text": "Today Event Scheduled",
      "value": "32"
    },
    {
      "name": "Wednesday",
      "text": "Today Event Scheduled",
      "value": "32"
    },
    {
      "name": "Thursday",
      "text": "Today Event Scheduled",
      "value": "32"
    },
    {
      "name": "Friday",
      "text": "Today Event Scheduled",
      "value": "32"
    },
    {
      "name": "Saturday",
      "text": "Today Event Scheduled",
      "value": "32"
    },
    {
      "name": "Sunday",
      "text": "Today Event Scheduled",
      "value": "32"
    }
  ];

  const { Paragraph } = Typography;

  const [selectedValue, setSelectedValue] = useState<SegmentedValue>(1);

  const handleSegmentedChange = (value: SegmentedValue) => {
    setSelectedValue(value);
    const segmentedElement = document.querySelector('.ant-segmented-group') as HTMLElement;
    if (segmentedElement) {
      if (parseInt(value) > 3) {
        segmentedElement.style.marginLeft = -17 * (value - 3) + "vw";
      } else {
        segmentedElement.style.marginLeft = "0";
      }
    }
    console.log(selectedValue);
  };

  return (
    <div>
      <div>
        <Paragraph className='text-title text-white'>{"Schedule Overview"}</Paragraph>
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
          <Col span={8}></Col>
          <Col span={4} className='flex justify-right'>
            <Button className='common-button margin-right' href='/coutdown/list' type="default" size='large' shape="round">View Active Schedule</Button>
            <Button className='common-button' type="default" size='large' shape="circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.376 12.4159L8.777 19.4819C8.70171 19.5321 8.61423 19.5608 8.52389 19.5651C8.43355 19.5694 8.34373 19.5492 8.264 19.5065C8.18427 19.4638 8.1176 19.4003 8.07111 19.3227C8.02462 19.2451 8.00005 19.1564 8 19.0659V4.93395C8.00005 4.8435 8.02462 4.75477 8.07111 4.67719C8.1176 4.59961 8.18427 4.53609 8.264 4.49341C8.34373 4.45072 8.43355 4.43045 8.52389 4.43478C8.61423 4.4391 8.70171 4.46784 8.777 4.51795L19.376 11.5839C19.4445 11.6296 19.5006 11.6915 19.5395 11.764C19.5783 11.8366 19.5986 11.9176 19.5986 11.9999C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3084 19.4445 12.3703 19.376 12.4159Z" fill="white" />
              </svg>
            </Button>
          </Col>
        </Row>
      </div>
      <div className='week-list'>
        <Segmented
          className='background-trans'
          options={data.map((item, index) => ({
            label: (
              <Card name={item.name} value={item.value} text={item.text} active={selectedValue} cardIndex={index} />
            ),
            value: `${index + 1}`,
            key: index,
          }))}
          onChange={handleSegmentedChange}
          value={selectedValue}
        />
      </div>
    </div>
  );
}