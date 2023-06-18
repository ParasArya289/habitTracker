import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useData } from "../../Context/dataContext";
import "./HabitModal.css";
function HabitModal({ handleClose }) {
  const { showHabitModal, selectedHabit } = useData();
  return (
    <Modal
      show={showHabitModal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="habitModal"
      centered
    >
      <Modal.Header closeButton style={{ background: "#171717" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {selectedHabit?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#171717" }} className="habit-modal-body">
        <div className="habit-data">
          <h6>Goal</h6>
          <i>{selectedHabit?.goal}</i>
        </div>
        <div className="habit-data">
          <h6>Repeat</h6>
          <i>{selectedHabit?.repeat}</i>
        </div>
        <div className="habit-data">
          <h6>Time of the day</h6>
          <i>{selectedHabit?.timeOfDay}</i>
        </div>
        <div className="habit-data">
          <h6>Start Date</h6>
          <i>{selectedHabit?.startDate}</i>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ background: "#171717" }}>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default HabitModal;
