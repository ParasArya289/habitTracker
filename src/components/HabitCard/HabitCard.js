import "./HabitCard.css";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useData } from "../../Context/dataContext";
import { deleteHabit } from "../../helpers/helpers";
export const HabitCard = ({ habit }) => {
  const { setShowHabitModal, setSelectedHabit, dispatchData } = useData();

  const handleShowHabitModal = () => {
    setShowHabitModal(true);
    setSelectedHabit(habit);
  };

  return (
    <div className="habitcard-container" onClick={handleShowHabitModal}>
      <h4>{habit.title}</h4>
      <div className="card-icons">
        <FiEdit2 className="icons" />
        <AiOutlineDelete
          className="icons"
          onClick={(e) => deleteHabit(e, dispatchData, habit.id)}
        />
      </div>
    </div>
  );
};
