import { HabitCard } from "../../components/HabitCard/HabitCard";
import { useData } from "../../Context/dataContext";
import "./Home.css";
export const Home = () => {
  const {dataState:{habits},dispatchData} = useData()

    return (
      <div className="home">
        <div className="habit-container">
          {
            habits.map((habit)=>(
              <HabitCard habit={habit}/>
            ))
          }
        </div>
      <button className="add-btn">+</button>
      </div>
    );
  };