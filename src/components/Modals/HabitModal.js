import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useData } from "../../Context/dataContext";
import { moveToArchive } from "../../helpers/helpers";
import "./HabitModal.css";
function HabitModal({ handleClose }) {
  const { showHabitModal, selectedHabit, dispatchData } = useData();
  const move = () => {
    moveToArchive(dispatchData, selectedHabit?.id, selectedHabit);
    handleClose();
  };
  return (
    <Modal
      show={showHabitModal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {selectedHabit?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="habit-modal-body">
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
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" onClick={move}>
          Archive
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default HabitModal;
