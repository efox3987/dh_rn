import React, {createContext, useContext, useState} from 'react';

export type CardType = {
  title: string;
  notes?: string;
  activity: string;
  createdTime: Date;
  duration: number;
};

interface CardCtxInterface {
  timeCards: CardType[];
  addCard: (title: string, activity: string, notes?: string) => void;
}

const CardContext = createContext<CardCtxInterface>({} as CardCtxInterface);

export function CardProvider({children}: any) {
  const [timeCards, setTimeCards] = useState<CardType[]>([
    {
      title: 'Default Card',
      notes:
        "Long collection of notes about an activity card that doesn't exist, but has to be here so we can test the text formatting.",
      activity: 'Personal Work',
      createdTime: new Date(),
      duration: 0,
    },
  ]);

  const addCard = (title: string, activity: string, notes?: string) => {
    const createdTime = new Date();
    setTimeCards(prevState => [
      ...prevState,
      {
        title: title,
        notes: notes,
        activity: activity,
        createdTime: createdTime,
        duration: 0,
      },
    ]);
  };

  return (
    <CardContext.Provider value={{timeCards: timeCards, addCard: addCard}}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
export const useCardContext = () => useContext(CardContext);
