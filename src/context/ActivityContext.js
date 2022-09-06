import React, {createContext, useState} from 'react';

const ActivityContext = createContext();

export function ActivityProvider({children}) {
  const [activities, setActivities] = useState([
    {
      activityTitle: 'Personal Work',
      activityNotes: '',
      timeLogged: 0,
      sessions: [{title: 'Test', notes: 'Test notes', createdTime: new Date()}],
    },
  ]);

  const addTimeToActivity = (timeCard, activities) => {};
  return <ActivityContext.Provider>{children}</ActivityContext.Provider>;
}

export default ActivityContext;
