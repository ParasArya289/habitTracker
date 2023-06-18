import { HabitCard } from "../../components/HabitCard/HabitCard";
import HabitModal from "../../components/Modals/HabitModal";
import { useData } from "../../Context/dataContext";
import "./Home.css";
export const Home = () => {
  const {
    dataState: { habits },
    dispatchData,
    showHabitModal,
    setShowHabitModal,
  } = useData();
  const handleClose = () => setShowHabitModal(false);

  return (
    <div className="home">
      <div className="habit-container">
        {habits.map((habit) => (
          <HabitCard key={habit.title} habit={habit} />
        ))}
      </div>
      <HabitModal handleClose={handleClose} />
      <button className="add-btn">+</button>
    </div>
  );
};
