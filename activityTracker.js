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
    activity: 'climb',
    category: 'physical',
    hoursSpent: 3,
    enjoyment: 8,
    timeOfDay: 'evening',
  },
  {
    day: 'Thursday',
    activity: 'climb',
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
// Climbing will dominate my week.
// I do everything at night because I work or run errands on weekend days.

// My higher order function
const physicalDays = (arr, myCategory) => {
  const daysActive = arr.filter(categoryMatch);
  return daysActive.length;
};

const categoryMatch = (obj) => {
  return obj.category === 'physical';
};
console.log(physicalDays(myWeek));
