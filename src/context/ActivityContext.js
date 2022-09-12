import React, {createContext, useState} from 'react';

const ActivityContext = createContext();

// interface Session {
//   title: string;
//   notes: string;
//   createdTime: Date;
//   duration: number;
// }

// interface Activity {
//   activityTitle: string;
//   activityNotes: string;
//   timeLogged: number;
//   sessions: Session[];
// }

export function ActivityProvider({children}) {
  const [activities, setActivities] = useState([
    {
      activityTitle: 'Personal Work',
      activityNotes: '',
      timeLogged: 0,
      sessions: [
        {
          title: 'Test',
          notes: 'Test notes',
          createdTime: new Date(),
          duration: 0,
        },
      ],
    },
  ]);

  const createActivity = (title, activityNotes) => {
    const newActivity = {
      activityTitle: title,
      activityNotes: activityNotes,
      timeLogged: 0,
      sessions: [],
    };
    // Check if activiity exists already, return error

    setActivities(prevState => [...prevState, newActivity]);
  };

  const addTimeToActivity = (timeCard, activities) => {};

  return (
    <ActivityContext.Provider
      value={{
        activities: activities,
        createActivity: createActivity,
        logTime: addTimeToActivity,
      }}>
      {children}
    </ActivityContext.Provider>
  );
}

export default ActivityContext;
