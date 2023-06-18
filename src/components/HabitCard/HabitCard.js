import "./HabitCard.css";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useData } from "../../Context/dataContext";
import { deleteHabit } from "../../helpers/helpers";
export const HabitCard = ({ habit }) => {
  const {
    setShowHabitModal,
    setSelectedHabit,
    setShowEdittModal,
    dispatchData,
  } = useData();

  const handleShowHabitModal = () => {
    setShowHabitModal(true);
    setSelectedHabit(habit);
  };
  const handleShowEditModal = (e) => {
    e.stopPropagation();
    setShowEdittModal(true);
    setSelectedHabit(habit);
  };

  return (
    <div className="habitcard-container" onClick={handleShowHabitModal}>
      <h4>{habit?.title}</h4>
      <i>{habit?.goal}</i>
      <div className="card-icons">
        <FiEdit2 className="icons" onClick={(e) => handleShowEditModal(e)} />
        <AiOutlineDelete
          className="icons"
          onClick={(e) => deleteHabit(e, dispatchData, habit.id)}
        />
      </div>
    </div>
  );
};
