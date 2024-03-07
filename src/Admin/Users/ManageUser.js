import "../css/manageUser.css";
import Header from "../Sidebar/Sidebars";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { deleteUser, getListUsers, updateUser } from "../../API/userAPI";
import Pagination from "../../common/pagination";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
  const [role, setRole] = useState(2);
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [listUser, setListUsers] = useState([]);
  const [address_user, setAddress_user] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [isSorted, setIsSorted] = useState(true);
  let selectedUsers = [];
  const localStorageUser = JSON.parse(localStorage.getItem("admin"));
  const [showDelete, setShowDelete] = useState(false);
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

  const handleEdit = (item) => {
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
      password: password,
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
      //Gọi API thêm mới user
      await updateUser(formDataUpdate);
      toast.success(
        `Update account id information ${formDataUpdate.id} Success!`
      );
      setIsChanged(!isChanged);
    } catch (error) {
      toast.error(error.response.data.error);
    }
    setIsChanged(!isChanged);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        toast.success(`Delete account id information ${id} Success!`);
        setIsChanged(!isChanged);
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [showAdd, setShowAdd] = useState(false);
  const handleAddclick = async () => {
    setShowAdd(true);
  };
  return (
    <>
      <Header />

      <main className="table">
        <section className="table_header">
<<<<<<< HEAD
          <h1>Accounts Manager</h1>
=======
          <h1>Users Manager</h1>
>>>>>>> brabches_Phat
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
<<<<<<< HEAD
        <button className="add btn btn-success"
                onClick={() => navigate("/register")}
        >
          +Add
        </button>

=======
        <button className="add btn btn-success" onClick={handleAddclick}>
          +Add
        </button>
>>>>>>> brabches_Phat
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
                              <option value={2}>User</option>
                            </select>
                          </td>
                          {/* <td>{item.created_at}</td> */}
                          <td>
                            {/* disable */}
                            {item.role == 1 ? (
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
                                    size="lg"
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
                                  onClick={() => handleSave(item)}
                                >
                                  Edit
                                </button>
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
