import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function DeleteModal() {

    const handleCloseModalDelete = () => setShowDelete(false);

    const [showDelete, setShowDelete] = useState(false);

    // const handleDeleteclick = async () => {
    //     setShowDelete(true);
    // };

  return (
    <Modal show={showDelete} onHide={handleCloseModalDelete} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Delete service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNameservice">
            <Form.Label>
              <h4>Are you sure delete service ?</h4>
            </Form.Label>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModalDelete}>
          Close
        </Button>
        <Button variant="danger" onClick={handleCloseModalDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
