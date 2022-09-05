import React, {createContext, useState} from 'react';

const CardContext = createContext();

export function CardProvider({children}) {
  const [timeCards, setTimeCards] = useState([
    {
      title: 'Default Card',
      notes:
        "Long collection of notes about an activity card that doesn't exist, but has to be here so we can test the text formatting.",
      createdTime: new Date(),
    },
  ]);

  const addCard = (title, notes) => {
    const createdTime = new Date();
    setTimeCards(prevState => [
      ...prevState,
      {title: title, notes: notes, createdTime: createdTime},
    ]);
  };

  return (
    <CardContext.Provider value={{timeCards: timeCards, addCard: addCard}}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
