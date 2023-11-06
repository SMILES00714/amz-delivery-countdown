import React, { useEffect, useState } from 'react';
import { Typography, Button } from 'antd';
import { CardProps } from '../../../types/week';
import "./card.css";

const { Paragraph } = Typography;

const Card: React.FC<CardProps> = ({ name, text, value, active, cardIndex }) => {
    const [activeCard, setActiveCard] = useState(false);
    useEffect(() => {
        if (active == (cardIndex + 1)) {
            setActiveCard(true);
        } else {
            setActiveCard(false);
        }
    }, [active])
    const redirect = () => {
        window.location.href = `http://localhost:3000/week/day`;
    }
    return (
        <>
            {activeCard ? (
                <div className='week-card active-week' onClick={redirect}>
                    <Paragraph className='text-subtitle text-white'>{name}</Paragraph>
                    <Button shape='circle'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
                            <path d="M14.0008 12.3509L19.7755 6.57617L21.4254 8.22608L15.6507 14.0008L21.4254 19.7755L19.7755 21.4254L14.0008 15.6507L8.22608 21.4254L6.57617 19.7755L12.3509 14.0008L6.57617 8.22608L8.22608 6.57617L14.0008 12.3509Z" fill="white" />
                        </svg>
                    </Button>
                    <Paragraph className='text-content text-white margin-top-twenty'>{text}</Paragraph>
                    <Paragraph className='text-subtitle2 text-white'>{value}</Paragraph>
                </div>
            ) : (
                <div className='week-card'>
                    <Paragraph className='text-subtitle text-white'>{name}</Paragraph>
                    <Button shape='circle' type='text'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none">
                            <path d="M14.0008 12.3509L19.7755 6.57617L21.4254 8.22608L15.6507 14.0008L21.4254 19.7755L19.7755 21.4254L14.0008 15.6507L8.22608 21.4254L6.57617 19.7755L12.3509 14.0008L6.57617 8.22608L8.22608 6.57617L14.0008 12.3509Z" fill="white" />
                        </svg>
                    </Button>
                    <Paragraph className='text-content text-common margin-top-ten'>{text}</Paragraph>
                    <Paragraph className='text-subtitle2 text-white'>{value}</Paragraph>
                </div>
            )}
        </>
    );
};

export default Card;