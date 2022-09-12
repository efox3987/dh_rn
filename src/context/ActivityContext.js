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
      title: 'Personal Work',
      notes: '',
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

  const createActivity = (title, notes) => {
    const newActivity = {
      title: title,
      notes: notes,
      timeLogged: 0,
      sessions: [],
    };
    // Check if activiity exists already, return error

    setActivities(prevState => [...prevState, newActivity]);
  };

  const getIndexByTitle = title => {
    console.log('Searchgin for: ' + title);
    console.log(activities);

    activities.forEach((activity, index) => {
      if (activity.title === title) {
        console.log('found at' + index);
        return index;
      }
    });
  };

  const addTimeToActivity = (time, activity) => {
    console.log('Adding time to ' + activity);
    var i;
    activities.forEach((item, index) => {
      if (item.title === activity) {
        console.log('found at' + index);
        i = index;
      }
    });

    let item = {...activities[i], timeLogged: time};
    let items = [...activities];
    items[i] = item;
    setActivities(items);
  };

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
