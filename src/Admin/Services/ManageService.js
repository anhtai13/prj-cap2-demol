import React, { useState } from "react";
import "../css/manageService.css";
import Sidebars from "../Sidebar/Sidebars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ManageService() {
  const handleSearch = (event) => {
    // Xử lý tìm kiếm ở đây
  };
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleAddclick = async () => {
    setShow(true);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <Sidebars />
      <div className="table">
        <section className="table_header">
          <h1>Services Manager</h1>
          <div className="input-group">
            <input
              type="search"
              id="search"
              onKeyUp={handleSearch}
              placeholder="Search..."
            />
            {/* <img src="../img/search.png" alt="Search" /> */}
          </div>
        </section>
        <button className="add btn btn-success" onClick={handleAddclick}>
          +Add
        </button>
        {show && (
          <Modal show={show} onHide={handleCloseModal} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Add new service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formNameservice">
                  <Form.Label>Name service<span className="required">*</span></Form.Label>
                  <Form.Control type="text" placeholder="name service" />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label>Price<span className="required">*</span></Form.Label>
                  <Form.Control  placeholder="50.000" />
                </Form.Group>

                <Form.Group controlId="formCategory">
                  <Form.Label>Category<span className="required">*</span></Form.Label>
                  <Form.Control type="text" placeholder="category" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="Decription"
                >
                  <Form.Label>Decription<span className="required">*</span></Form.Label>
                  <Form.Control as="textarea" placeholder="decription" rows={3} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    Image<span style={{ color: "red" }}>*</span>
                  </Form.Label>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      onChange={handleFileChange} 
                    />
                   
                  </div>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="success" onClick={handleCloseModal}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <section className="table_body">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Name Service</th>
                <th>Price</th>
                <th>Category</th>
                <th>Decription</th>
                <th>Image service</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                /* Dữ liệu của bảng sẽ được render ở đây */
                <tr>
                  <td>1</td>
                  <td>Clean living room</td>
                  <td>50.000 đ</td>
                  <td>Vila</td>
                  <td>Clean your living room</td>
                  <td>Hinh nez</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                    <button className="btn btn-success">Edit</button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default ManageService;
