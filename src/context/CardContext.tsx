import React, {createContext, useState} from 'react';

export type CardType = {
  title: string;
  notes?: string;
  activity: string;
  createdTime: Date;
  duration: number;
};

const CardContext = createContext();

export function CardProvider({children}) {
  const [timeCards, setTimeCards] = useState([
    {
      title: 'Default Card',
      notes:
        "Long collection of notes about an activity card that doesn't exist, but has to be here so we can test the text formatting.",
      activity: 'Personal Work',
      createdTime: new Date(),
      duration: 0,
    },
  ]);

  const addCard = (title, notes, activity) => {
    const createdTime = new Date();
    setTimeCards(prevState => [
      ...prevState,
      {
        title: title,
        notes: notes,
        createdTime: createdTime,
        activity: activity,
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
