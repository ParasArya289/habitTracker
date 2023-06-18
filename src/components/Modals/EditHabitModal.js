// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useData } from "../../Context/dataContext";

// function EditModal({ handleClose }) {
//   const { showHabitModal, setShowHabitModal, selectedHabit } = useData();
//   return (
//     <Modal
//       show={showHabitModal}
//       onHide={handleClose}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="habitModal"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           {selectedHabit?.title}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>{selectedHabit?.title}</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={handleClose}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
// export default HabitModal;
