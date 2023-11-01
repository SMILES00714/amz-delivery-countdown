export interface DayCardProps {
    eventName: string;
    queue: string;
    inTime: string;
    outTime: string;
    lateTime: string;
    active: number;
    cardIndex: number;
}

export interface CardProps {
    name: string;
    text: string;
    value: string;
    active: number;
    cardIndex: number;
}