import { HabitCard } from "../../components/HabitCard/HabitCard";
import { useData } from "../../Context/dataContext";
export const Archive = () => {
  const {
    dataState: { archive },
  } = useData();
  return (
    <div className="home">
      {archive.length <= 0 && <p>No Archive</p>}
      <div className="habit-container">
        {archive.map((habit) => (
          <HabitCard key={habit.title} habit={habit} />
        ))}
      </div>
    </div>
  );
};
