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
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseModalAdd = () => setShowAdd(false);
  const handleAddclick = async () => {
    setShowAdd(true);
  };
  const [showDelete, setShowDelete] = useState(false);
  const handleDeleteclick = async () => {
    setShowDelete(true);
  };
  const handleCloseModalDelete = () => setShowDelete(false);
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
        {showAdd && (
          <Modal show={showAdd} onHide={handleCloseModalAdd} size="lg">
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
              <Button variant="secondary" onClick={handleCloseModalAdd}>
                Close
              </Button>
              <Button variant="success" onClick={handleCloseModalAdd}>
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
                    <button className="btn btn-danger" onClick={handleDeleteclick}>Delete</button>{showDelete &&(<Modal show={showDelete} onHide={handleCloseModalDelete} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Delete service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formNameservice">
                  <Form.Label><h2>Are you sure delete service ?</h2></Form.Label>
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
          </Modal>)}
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
