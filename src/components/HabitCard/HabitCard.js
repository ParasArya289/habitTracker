import "./HabitCard.css";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useData } from "../../Context/dataContext";
export const HabitCard = ({ habit }) => {
  const { setShowHabitModal, setSelectedHabit } = useData();
  
  const handleShowHabitModal = () => {
    setShowHabitModal(true);
    setSelectedHabit(habit);
  };

  return (
    <div className="habitcard-container" onClick={handleShowHabitModal}>
      <h4>{habit.title}</h4>
      <div className="card-icons">
        <FiEdit2 className="icons" />
        <AiOutlineDelete className="icons" />
      </div>
    </div>
  );
};
