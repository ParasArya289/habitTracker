import { HabitCard } from "../../components/HabitCard/HabitCard";
import AddHabitModal from "../../components/Modals/AddHabitModal";
import EditModal from "../../components/Modals/EditHabitModal";
import HabitModal from "../../components/Modals/HabitModal";
import { useData } from "../../Context/dataContext";
import "./Home.css";
export const Home = () => {
  const {
    dataState: { habits },
    dispatchData,
    setShowEdittModal,
    setShowAddModal,
    setShowHabitModal,
  } = useData();
  const handleClose = () => setShowHabitModal(false);
  const handleAddClose = () => setShowAddModal(false);
  const handleEditClose = () => setShowEdittModal(false);
  const handleAddShow = () => setShowAddModal(true);

  return (
    <div className="home">
      <div className="habit-container">
        {habits.map((habit) => (
          <HabitCard key={habit.title} habit={habit} />
        ))}
      </div>
      <HabitModal handleClose={handleClose} />
      <EditModal handleClose={handleEditClose}/>
      <AddHabitModal handleClose={handleAddClose} />
      <button className="add-btn" onClick={handleAddShow}>
        +
      </button>
    </div>
  );
};
