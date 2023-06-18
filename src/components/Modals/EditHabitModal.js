import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useData } from "../../Context/dataContext";
import { updateHabit } from "../../helpers/helpers";

function EditModal({ handleClose }) {
  const { showEdittModal, selectedHabit, dispatchData } = useData();

  const [controlledValue, setControlledValue] = useState({});

  useEffect(() => {
    setControlledValue(selectedHabit);
  }, [selectedHabit,showEdittModal]);

  const formValue = (e) => {
    const { name, value } = e.target;
    setControlledValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateSubmitHandler = () => {
    updateHabit(dispatchData, selectedHabit?.id, controlledValue);
    handleClose();
  };

  return (
    <Modal
      show={showEdittModal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {"Edit Habit"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={controlledValue?.title}
              placeholder="Habit name"
              onChange={(e) => formValue(e)}
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
              value={controlledValue?.goal}
              onChange={(e) => formValue(e)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Repeat</Form.Label>
            <Form.Control
              required
              as="select"
              name="repeat"
              value={controlledValue?.repeat}
              onChange={(e) => formValue(e)}
            >
              <Form.Control as="option">Daily</Form.Control>
              <Form.Control as="option">Weekly</Form.Control>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Time of day</Form.Label>
            <Form.Control
              value={controlledValue?.timeOfDay}
              onChange={(e) => formValue(e)}
              required
              as="select"
              name="timeOfDay"
            >
              <Form.Control as="option">Morning</Form.Control>
              <Form.Control as="option">Afternoon</Form.Control>
              <Form.Control as="option">Evening</Form.Control>
              <Form.Control as="option">Night</Form.Control>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start date</Form.Label>
            <Form.Control
              value={controlledValue?.startDate}
              onChange={(e) => formValue(e)}
              required
              as="select"
              name="startDate"
            >
              <Form.Control
                value={controlledValue?.startDate}
                onChange={(e) => formValue(e)}
                as="option"
              >
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
        <Button variant="dark" type={"submit"} onClick={updateSubmitHandler}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditModal;
