import React, {createContext, useState} from 'react';

const ActivityContext = createContext();

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
    console.log('Searching for: ' + title);
    console.log(activities);

    activities.forEach((activity, index) => {
      if (activity.title === title) {
        console.log('found at ' + index);
        const i = index;
        return i;
      }
    });
    return -1;
  };

  const addTimeToActivity = (time, activity) => {
    console.log('Adding time to ' + activity);

    var i = -1;
    activities.forEach((item, index) => {
      if (item.title === activity) {
        console.log('found at ' + index);
        i = index;
      }
    });

    if (i === -1) {
      console.error('Activity does not exist');
    }

    let item = {
      ...activities[i],
      timeLogged: activities[i].timeLogged + time,
    };
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
