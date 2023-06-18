import { useRef } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useData } from "../../Context/dataContext";
import { addHabit } from "../../helpers/helpers";

function AddHabitModal({ handleClose }) {
  const { showAddModal, dispatchData } = useData();
  const formRef = useRef(null);
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedDate = formatter.format(date).replaceAll("/", "-");
  const createFormData = () => {
    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());
    return values;
  };

  const addHabitSubmitHandler = () => {
    const values = createFormData();
    addHabit(dispatchData, values);
    handleClose();
  };

  return (
    <Modal
      show={showAddModal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {"Add Habit"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Habit name"
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Goal</Form.Label>
            <Form.Control
              as="textarea"
              name="goal"
              placeholder="Express your goal"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3"></Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Repeat</Form.Label>
            <Form.Control required as="select" name="repeat">
              <Form.Control as="option">Daily</Form.Control>
              <Form.Control as="option">Weekly</Form.Control>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time of day</Form.Label>
            <Form.Control required as="select" name="timeOfDay">
              <Form.Control as="option">1 time a day</Form.Control>
              <Form.Control as="option">2 time a day</Form.Control>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start date</Form.Label>
            <Form.Control required as="select" name="startDate">
              <Form.Control value={formattedDate} as="option">
                Today
              </Form.Control>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>
          Close
        </Button>
        <Button variant="dark" type={"submit"} onClick={addHabitSubmitHandler}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddHabitModal;
