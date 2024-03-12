import "../css/manageUser.css";
import Header from "../Sidebar/Sidebars";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import {
  addUser,
  deleteUser,
  getListUsers,
  updateUser,
} from "../../API/userAPI";
import Pagination from "../../common/pagination";
import { Form, Modal, Button, Col } from "react-bootstrap";

function ManagerUser() {
  const [id, setId] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [avatar, setAvatar] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [updatedAt, setUpdatedAt] = useState();
  const [createdById, setCreatedById] = useState();
  const [updatedById, setUpdatedById] = useState();
  const [role, setRole] = useState(3);
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [listUser, setListUsers] = useState([]);
  const [address_user, setAddress_user] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const navigate = useNavigate();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [isSorted, setIsSorted] = useState(true);
  let selectedUsers = [];
  const localStorageUser = JSON.parse(localStorage.getItem("admin"));
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseModalAdd = () => setShowAdd(false);
  const handleDeleteclick = async () => {
    setShowDelete(true);
  };
  const handleCloseModalDelete = () => setShowDelete(false);
  if (!localStorageUser) {
    navigate("/login");
  }

  useEffect(() => {
    getListUsersFormAPI();
  }, [isChanged]);

  useEffect(() => {
    // Kiểm tra search input có giá trị hay không
    if (searchTerm !== "") {
      // Thực thi filter list danh sách User có Username chứa các kí tự hoặc chuỗi của searchTerm
      const results = listUser.filter((item) =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // gán list danh sách user sau khi filter cho biến SearchItems
      setSearchItems(results);
      // Tính toán số trang phân ra
      const dataPaging = results.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentUser(dataPaging);
    } else {
      const dataPaging = listUser.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentUser(dataPaging);
    }
  }, [searchTerm, listUser, currentPage]);

  useEffect(() => {
    if (listUser.length > 0) {
      const dataPaging = listUser.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentUser(dataPaging);
    }
  }, [currentPage, listUser]);

  const getListUsersFormAPI = async () => {
    try {
      const users = await getListUsers();
      setListUsers(users);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseModalEdit = () => setShowEdit(false);

  const handleEdit = (item) => {
    setShowEdit(true);
    setIsEdit(!isEdit);
    setUserName(item.username);
    setEmail(item.email);
    setFirstName(item.first_name);
    setLastName(item.last_name);
    setAvatar(item.avatar);
    setAddress_user(item.address_user);
    setPhone_number(item.phone_number);
    setCreatedAt(item.created_at);
    setRole(item.role);
    setId(item.user_id);
    setCreatedById(item.created_by_id);
    setUpdatedAt(item.updated_at);
    setUpdatedById(item.updated_by_id);
  };

  const handleSave = async () => {
    const formDataUpdate = {
      id: id,
      username: userName,
      email: email,
      first_name: firstName,
      last_name: lastName,
      role: role,
      avatar: avatar,
      address_user: address_user,
      phone_number: phone_number,
      created_at: createdAt,
      updated_at: new Date(),
      created_by_id: localStorageUser.user_id,
      updated_by_id: localStorageUser.user_id,
    };
    try {
      // Gọi API cập nhật người dùng
      await updateUser(formDataUpdate);
      toast.success(
        `Update account id information ${formDataUpdate.id} Success!`
      );
      setIsChanged(!isChanged);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Có lỗi xảy ra khi cập nhật người dùng");
      }
    }
    setIsChanged(!isChanged);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      toast.success(`Delete account id information ${id} Success!`);
      setIsChanged(!isChanged);
      setShowDelete(false);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [showAdd, setShowAdd] = useState(false);
  const handleAddclick = async () => {
    setShowAdd(true);
  };

  const handleAddUser = async () => {
    const newAdmin = {
      username: userName,
      password: password,
      email: email,
      first_name: firstName,
      last_name: lastName,
      role: Number(role),
      avatar: avatar,
      status: 1,
      created_at: new Date(),
      updated_at: "",
      created_by_id: 1,
      updated_by_id: 1,
    };
    //validate input
    if (password !== repassword) {
      toast.error("The re-entered password does not match");
    } else {
      try {
        //Gọi API thêm mới user
        await addUser(newAdmin);
        navigate("/admin/user-manager");
        toast.success(
          `Create a username account: ${newAdmin.username} success!`
        );
        setShowAdd(false);
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <>
      <Header />

      <main className="table">
        <section className="table_header">
          <h1>Users Manager</h1>
          <div className="input-group">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
            />
            {/* <img src="../img/search.png" alt="Search" /> */}
          </div>
        </section>

        <button className="add btn btn-success" onClick={handleAddclick}>
          +Add
        </button>

        {/*  Modal Add user */}
        {showAdd && (
          <Modal show={showAdd} onHide={handleCloseModalAdd} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>Add new user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group as={Col} className="mb-3" controlId="formUsername">
                  <Form.Label>
                    Username<span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="Username"
                    placeholder="Username"
                    required
                    isInvalid={!userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>
                    Email<span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    isInvalid={!email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first-name"
                    placeholder="First name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last-name"
                    placeholder="Last name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>
                    Role<span className="required">*</span>
                  </Form.Label>
                  <Form.Select
                    type="text"
                    defaultValue={0}
                    required
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value={0}>Choose role</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Employee</option>
                    <option value={3}>Customer</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please choose a role.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>
                    Password<span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength={6}
                    required
                    isInvalid={!password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a password with at least 6 characters.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRePassword">
                  <Form.Label>
                    Re-Password<span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-password"
                    name="re-password"
                    required
                    isInvalid={!repassword || repassword !== password}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please re-enter the password correctly.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModalAdd}>
                Close
              </Button>
              <Button variant="success" onClick={handleAddUser}>
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
                <th>Username</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Location</th>
                <th>Gmail</th>
                <th>Role</th>
                {/* <th>Status</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUser
                ? currentUser.map((item, index) => {
                    return (
                      <>
                        <tr key={item.user_id}>
                          <td>{item.user_id}</td>
                          <td>{item.username}</td>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.address_user}</td>
                          <td>{item.email}</td>
                          {/* <td>
                            <img
                              src={item.avatar}
                              alt="Ảnh của bạn"
                              height={120}
                              width={200}
                            />
                          </td> */}
                          <td>
                            <select
                              defaultValue={item.role}
                              disabled
                              type="text"
                              className="form-control"
                            >
                              <option value={1}>Admin</option>
                              <option value={2}>Employee</option>
                              <option value={3}>Customer</option>
                            </select>
                          </td>
                          {/* <td>{item.created_at}</td> */}
                          <td>
                            {/* disable */}
                            {item.role === 1 ? (
                              ""
                            ) : (
                              <>
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
                                    size="xl-down"
                                    centered
                                  >
                                    <Modal.Header closeButton>
                                      <Modal.Title>Delete User</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      <Form>
                                        <Form.Group controlId="formNameservice">
                                          <Form.Label>
                                            <h4>Are you sure delete user ?</h4>
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
                                        onClick={() =>
                                          handleDelete(item.user_id)
                                        }
                                      >
                                        Delete
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                )}

                                <button
                                  className="btn btn-success"
                                  onClick={handleEdit}
                                >
                                  Edit
                                </button>
                                {showEdit && (
                                  <Modal
                                    show={showEdit}
                                    onHide={handleCloseModalEdit}
                                    size="lg"
                                    centered
                                  >
                                    <Modal.Header closeButton>
                                      <Modal.Title>Edit user</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      <Form>
                                        <Form.Group
                                          as={Col}
                                          className="mb-3"
                                          controlId="formUsername"
                                        >
                                          <Form.Label>
                                            Username
                                            <span className="required">*</span>
                                          </Form.Label>
                                          <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Username"
                                            required
                                            disabled
                                            defaultValue={item.username}
                                            onChange={(e) =>
                                              setUserName(e.target.value)
                                            }
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="formEmail"
                                        >
                                          <Form.Label>
                                            Email
                                            <span className="required">*</span>
                                          </Form.Label>
                                          <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required
                                            disabled
                                            defaultValue={item.email}
                                            onChange={(e) =>
                                              setEmail(e.target.value)
                                            }
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="formFirstName"
                                        >
                                          <Form.Label>First name</Form.Label>
                                          <Form.Control
                                            type="text"
                                            value={firstName}
                                            name="first_name"
                                            placeholder="First name"
                                            required
                                            defaultValue={item.first_name}
                                            onChange={(e) =>
                                              setFirstName(e.target.value)
                                            }
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="formLastName"
                                        >
                                          <Form.Label>Last name</Form.Label>
                                          <Form.Control
                                            type="text"
                                            name="last_name"
                                            placeholder="Last name"
                                            required
                                            defaultValue={item.last_name}
                                            onChange={(e) =>
                                              setPhone_number(e.target.value)
                                            }
                                          />
                                        </Form.Group>

                                        <Form.Group
                                          className="mb-3"
                                          controlId="formRole"
                                        >
                                          <Form.Label>
                                            Role
                                            <span className="required">*</span>
                                          </Form.Label>
                                          <Form.Select
                                            type="text"
                                            required
                                            disabled
                                            defaultValue={item.role}
                                            onChange={(e) =>
                                              setRole(e.target.value)
                                            }
                                          >
                                            <option value={0}>
                                              Choose role
                                            </option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Employee</option>
                                            <option value={3}>Customer</option>
                                          </Form.Select>
                                        </Form.Group>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formNumber"
                                        >
                                          <Form.Label>Phone number</Form.Label>
                                          <Form.Control
                                            type="text"
                                            name="phone-number"
                                            placeholder="Phone number"
                                            required
                                            defaultValue={item.phone_number}
                                            onChange={(e) =>
                                              setPhone_number(e.target.value)
                                            }
                                          />
                                        </Form.Group>
                                      </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button
                                        variant="secondary"
                                        onClick={handleCloseModalEdit}
                                      >
                                        Close
                                      </Button>
                                      <Button
                                        variant="success"
                                        onClick={
                                          handleSave}
                                      >
                                        Save
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                )}
                              </>
                            )}
                          </td>
                        </tr>
                      </>
                    );
                  })
                : []}
            </tbody>
          </table>
        </section>
        {/* Hiển thị các nút phân trang
            <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={searchTerm == "" ? listUser.length : searchItems.length}
            currentPage={currentPage}
            paginate={paginate}
          /> */}
      </main>
    </>
  );
}

export default ManagerUser;
