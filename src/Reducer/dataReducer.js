// export const habits = [
//   {
//     title: "",
//     repeat: "",
//     goal: "",
//     timeOfDay: "",
//     startDate: "",
//   },
// ];
const habits = [
  {
    id: 1,
    title: "Morning Exercise",
    repeat: "Daily",
    goal: "Stay fit and energized",
    timeOfDay: "Morning",
    startDate: "2023-06-15",
  },
  {
    id: 2,
    title: "Read a Book",
    repeat: "Daily",
    goal: "Expand knowledge and improve literacy",
    timeOfDay: "Evening",
    startDate: "2023-06-15",
  },
  {
    id: 3,
    title: "Drink Sufficient Water",
    repeat: "Daily",
    goal: "Stay hydrated and maintain health",
    timeOfDay: "Throughout the day",
    startDate: "2023-06-15",
  },
  {
    id: 4,
    title: "Practice Meditation",
    repeat: "Daily",
    goal: "Reduce stress and enhance mindfulness",
    timeOfDay: "Morning or Evening",
    startDate: "2023-06-15",
  },
  {
    id: 5,
    title: "Write in a Journal",
    repeat: "Daily",
    goal: "Reflect on thoughts and experiences",
    timeOfDay: "Evening",
    startDate: "2023-06-15",
  },
  {
    id: 6,
    title: "Learn a New Language",
    repeat: "Daily",
    goal: "Enhance language skills and cultural understanding",
    timeOfDay: "Anytime",
    startDate: "2023-06-15",
  },
  {
    id: 7,
    title: "Practice Gratitude",
    repeat: "Daily",
    goal: "Cultivate a positive mindset",
    timeOfDay: "Morning or Evening",
    startDate: "2023-06-15",
  },
  {
    id: 8,
    title: "Eat a Balanced Diet",
    repeat: "Daily",
    goal: "Maintain a healthy lifestyle",
    timeOfDay: "Throughout the day",
    startDate: "2023-06-15",
  },
  {
    id: 9,
    title: "Learn to Play an Instrument",
    repeat: "Daily",
    goal: "Develop musical skills",
    timeOfDay: "Anytime",
    startDate: "2023-06-15",
  },
  {
    id: 10,
    title: "Practice Yoga",
    repeat: "Daily",
    goal: "Improve flexibility and overall well-being",
    timeOfDay: "Morning or Evening",
    startDate: "2023-06-15",
  },
  {
    id: 11,
    title: "Limit Screen Time",
    repeat: "Daily",
    goal: "Reduce digital distractions and promote mindfulness",
    timeOfDay: "Throughout the day",
    startDate: "2023-06-15",
  },
  {
    id: 12,
    title: "Get Sufficient Sleep",
    repeat: "Daily",
    goal: "Ensure proper rest and rejuvenation",
    timeOfDay: "Night",
    startDate: "2023-06-15",
  },
  {
    id: 13,
    title: "Practice Random Acts of Kindness",
    repeat: "Daily",
    goal: "Spread positivity and make a difference",
    timeOfDay: "Anytime",
    startDate: "2023-06-15",
  },
  {
    id: 14,
    title: "Engage in Creative Writing",
    repeat: "Daily",
    goal: "Boost creativity and writing skills",
    timeOfDay: "Evening",
    startDate: "2023-06-15",
  },
  {
    id: 15,
    title: "Take Regular Breaks",
    repeat: "Daily",
    goal: "Increase productivity and prevent burnout",
    timeOfDay: "Throughout the day",
    startDate: "2023-06-15",
  },
  {
    id: 16,
    title: "Connect with Loved Ones",
    repeat: "Daily",
    goal: "Nurture relationships and social connections",
    timeOfDay: "Anytime",
    startDate: "2023-06-15",
  },
  {
    id: 17,
    title: "Practice Mindful Eating",
    repeat: "Daily",
    goal: "Eat with awareness and savor the flavors",
    timeOfDay: "Throughout the day",
    startDate: "2023-06-15",
  },
  {
    id: 18,
    title: "Learn a New Skill",
    repeat: "Daily",
    goal: "Broaden knowledge and enhance personal growth",
    timeOfDay: "Anytime",
    startDate: "2023-06-15",
  },
  {
    id: 19,
    title: "Spend Time in Nature",
    repeat: "Daily",
    goal: "Enjoy outdoor activities and appreciate the environment",
    timeOfDay: "Morning or Evening",
    startDate: "2023-06-15",
  },
  {
    id: 20,
    title: "Practice Deep Breathing",
    repeat: "Daily",
    goal: "Relax, reduce stress, and enhance focus",
    timeOfDay: "Anytime",
    startDate: "2023-06-15",
  },
];

export const initState = {
  habits: [...habits],
  archive: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_HABBIT":
      return {
        ...state,
        habits: state.habits.filter(({ id }) => id !== action.payload),
      };
    case "UPDATE_HABBIT":
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === action.payload.id ? action.payload.data : habit
        ),
      };
    case "ADD_HABBIT":
      return {
        ...state,
        habits: [
          ...state.habits,
          { id: state.habits.length + 1, ...action.payload },
        ],
      };
    case "MOVE_TO_ARCHIVE":
      return {
        ...state,
        habits: state.habits.filter(({ id }) => id !== action.payload.id),
        archive: [...state.archive, action.payload.data],
      };
    default:
      return state;
  }
};
