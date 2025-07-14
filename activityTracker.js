const myWeek = [
  {
    day: 'Monday',
    activity: 'walk',
    category: 'personal',
    hoursSpent: 1,
    enjoyment: 5,
    timeOfDay: 'evening',
  },
  {
    day: 'Tuesday',
    activity: 'movie',
    category: 'social',
    hoursSpent: 1,
    enjoyment: 6,
    timeOfDay: 'evening',
  },
  {
    day: 'Wednesday',
    activity: 'climbing',
    category: 'physical',
    hoursSpent: 3,
    enjoyment: 8,
    timeOfDay: 'evening',
  },
  {
    day: 'Thursday',
    activity: 'climbing',
    category: 'physical',
    hoursSpent: 1,
    enjoyment: 5,
    timeOfDay: 'evening',
  },
  {
    day: 'Friday',
    activity: 'music',
    category: 'social',
    hoursSpent: 1,
    enjoyment: 6,
    timeOfDay: 'evening',
  },
  {
    day: 'Saturday',
    activity: 'massage',
    category: 'personal',
    hoursSpent: 1,
    enjoyment: 8,
    timeOfDay: 'evening',
  },
  {
    day: 'Sunday',
    activity: 'lunch',
    category: 'social',
    hoursSpent: 1,
    enjoyment: 6,
    timeOfDay: 'afternoon',
  },
];

// PREDICTIONS
// Climbing will have the highest enjoyment.
// I was 'physical' three nights a week.
// I do everything at night because I work or run errands on weekend days.

const physicalDays = (arr) => {
  const daysActive = arr.filter(categoryMatch);
  return daysActive.length;
};

const categoryMatchPhycial = (obj) => {
  return obj.category === 'physical';
};
console.log(physicalDays(myWeek));

const mostEnjoyable = (arr) => {
  let maxEnjoyment = -Infinity;
  let mostEnjoyableActivity;

  arr.map((obj) => {
    if (obj.enjoyment > maxEnjoyment) {
      maxEnjoyment = obj.enjoyment;
      mostEnjoyableActivity = obj.activity;
    }
  });
  return mostEnjoyableActivity;
};
console.log(mostEnjoyable(myWeek));
