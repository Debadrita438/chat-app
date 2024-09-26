/* eslint-disable prettier/prettier */
export interface IChatBubbleProps {
  item: {
    id: number;
    message: string;
    image: { id: number; url: string; type: string; size?: string }[];
    time: Date;
    userId: number;
  };
  addTail: boolean;
}
