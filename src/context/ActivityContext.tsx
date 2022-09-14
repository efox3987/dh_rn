import React, {createContext, useState} from 'react';
import {CardType} from './CardContext';

export type ActivityType = {
  title: string;
  notes?: string;
  timeLogged: number;
  sessions: CardType[];
};

interface ActivityCtxInterface {
  activities: ActivityType[];
  createActivity: (title: string, notes?: string) => void;
  logTime: (time: number, activity: string) => void;
}

const ActivityContext = createContext<ActivityCtxInterface | null>(null);

export function ActivityProvider({children}: any) {
  const [activities, setActivities] = useState<ActivityType[]>([
    {
      title: 'Personal Work',
      notes: '',
      timeLogged: 0,
      sessions: [],
    },
  ]);

  const createActivity = (title: string, notes?: string) => {
    const newActivity = {
      title: title,
      notes: notes,
      timeLogged: 0,
      sessions: [],
    };
    // Check if activiity exists already, return error

    setActivities(prevState => [...prevState, newActivity]);
  };

  // const getIndexByTitle = title => {
  //   console.log('Searching for: ' + title);
  //   console.log(activities);

  //   activities.forEach((activity, index) => {
  //     if (activity.title === title) {
  //       console.log('found at ' + index);
  //       const i = index;
  //       return i;
  //     }
  //   });
  //   return -1;
  // };

  const addTimeToActivity = (time: number, activity: string) => {
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
