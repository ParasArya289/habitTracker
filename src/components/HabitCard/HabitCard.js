import "./HabitCard.css";

export const HabitCard = ({ habit }) => {
  return (
    <div className="habitcard-container">
      <h4>{habit.title}</h4>
    </div>
  );
};
