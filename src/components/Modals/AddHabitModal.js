import { useRef } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useData } from "../../Context/dataContext";

function AddHabitModal({ handleClose }) {
  const { showAddModal } = useData();
  const formRef = useRef(null);
  return (
    <Modal
      show={showAddModal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="habitModal"
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
            <Form.Control type="text" placeholder="Habit name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Repeat</Form.Label>
            <Form.Control as="select">
              <Form.Control as="option">Daily</Form.Control>
              <Form.Control as="option">Weekly</Form.Control>
            </Form.Control>
            <Form.Label>Goal</Form.Label>
            <Form.Control as="select">
              <Form.Control as="option">1 time a day</Form.Control>
              <Form.Control as="option">2 time a day</Form.Control>
            </Form.Control>
            <Form.Label>Time of day</Form.Label>
            <Form.Control as="select">
              <Form.Control as="option">1 time a day</Form.Control>
              <Form.Control as="option">2 time a day</Form.Control>
            </Form.Control>
            <Form.Label>Start date</Form.Label>
            <Form.Control as="select">
              <Form.Control as="option">Today</Form.Control>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddHabitModal;
