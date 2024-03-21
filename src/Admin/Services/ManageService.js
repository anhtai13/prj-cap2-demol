import React, { useState } from "react";
import "../css/manageService.css";
import Sidebars from "../Sidebar/Sidebars";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import Pagination from "../../common/pagination";
import { addService, deleteServices, updateService, getListServices } from "../../API/servicesAPI";

function ManageService() {
  const [serviceName, setServiceName] = useState();
  const [price, setPrice] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  const [isChanged, setIsChanged] = useState(false);
  const [id, setId] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [listServices, setListServices] = useState([]);
  const [createAt, setCreateAt] = useState();
  let selectedService = [];
  let errorResponse = "";
  const localStorageUser = JSON.parse(localStorage.getItem("admin"));
  
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

  useEffect(() => {
    getListServicesAPI()
}, [isChanged])

useEffect(() => {
    const dataPaging = listServices.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(dataPaging);
}, [currentPage, listServices])

useEffect(() => {
    if (searchTerm !== '') {
        const results = listServices.filter((item) =>
            item.name_service.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchItems(results)
        const dataPaging = results.slice(indexOfFirstItem, indexOfLastItem);
        setCurrentItems(dataPaging)
    } else {
        const dataPaging = listServices.slice(indexOfFirstItem, indexOfLastItem);
        setCurrentItems(dataPaging);
    }
}, [searchTerm, listServices, currentPage]);

const getListServicesAPI = async () => {
    try {
        const services = await getListServices()
        setListServices(services)
    } catch (error) {
        toast.error("Something went wrong!")
    }
}

const handleAdd = async () => {
  const formData = {
      name: productName,
      price: +price,
      description: description,
      image: imgUrl,
      created_at: new Date(),
      created_by_id: 1,
      updated_at: new Date(),
      updated_by_id: ""
  }
  try {
      await addService(formData)
      toast.success(`Add service ${productName} Success!`)
      document.getElementById("form").reset()
      setProductName("")
      setPrice("")
      setDescription("")
      setImgUrl("")
      setIsChanged(!isChanged)
  } catch (error) {
      errorResponse = error.response.data.errMessage
      toast.error(error.response.data.errMessage)
  }
}

const handleEdit = (id) => {
  setIsEdit(!isEdit)
  listProducts.map(item => {
      if (item.service_id === id) {
          console.log(item)
          setServiceName(item.name_service)
          setPrice(item.unit_price)
          setDescription(item.description)
          setImgUrl(item.image)
          setId(item.service_id)
      }
  })
}

const handleSaveEdit = async () => {
  const formDataUpdate = {
      "id": id,
      "name": serviceName,
      "price": +price,
      "description": description,
      "image": imgUrl,
      "created_at": createAt,
      "created_by_id": localStorageUser.id,
      "updated_at": new Date(),
      "updated_by_id": localStorageUser.id
  }
  try {
      await updateService(formDataUpdate)
      toast.success(`Update service ${serviceName} success!`)
      document.getElementById("form").reset()
      setServiceName("")
      setPrice("")
      setDescription("")
      setImgUrl("")
      setIsEdit(!isEdit)
      setIsChanged(!isChanged)
  } catch (error) {
      errorResponse = error.response.data.message
      toast.error(error.response.data.message)
  }
}

const handleDeleteProduct = async (id) => {
  if (window.confirm("Are you sure to delete this service?")) {
      try {
          await deleteServices(id)
          toast.success(`Service deletion successful!`)
          setIsChanged(!isChanged)
      } catch (error) {
          errorResponse = error.response.data.error
          toast.error(error.response.data.error)
      }
  }
}

const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
};

const handleSearch = (event) => {
  setSearchTerm(event.target.value);
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
                  <Form.Label>
                    Name service<span className="required">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="name service" />
                </Form.Group>

                <Form.Group controlId="formPrice">
                  <Form.Label>
                    Price<span className="required">*</span>
                  </Form.Label>
                  <Form.Control placeholder="50.000" />
                </Form.Group>

                <Form.Group controlId="formCategory">
                  <Form.Label>
                    Category<span className="required">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="category" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Decription">
                  <Form.Label>
                    Decription<span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="decription"
                    rows={3}
                  />
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
                Create
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
                    <button
                      className="btn btn-danger"
                      onClick={handleDeleteclick}
                    >
                      Delete
                    </button>
                    {showDelete && (
                      <Modal
                        show={showDelete}
                        onHide={handleCloseModalDelete}
                        size="lg"
                      >
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
                          <Button
                            variant="secondary"
                            onClick={handleCloseModalDelete}
                          >
                            Close
                          </Button>
                          <Button
                            variant="danger"
                            onClick={handleCloseModalDelete}
                          >
                            Delete
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    )}
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
