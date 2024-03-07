import { useState } from "react";
import "../css/AddUser.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { addUser } from "../../API/userAPI";

function AddUser() {
  // Khởi tạo các biến ứng với các thuộc tính User
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [role, setRole] = useState();
  const navigate = useNavigate();
  const adminLocal = JSON.parse(localStorage.getItem("admin"));

  if (!adminLocal) {
    navigate("/login");
  }

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
      created_by_id: "",
      updated_by_id: "",
    };
    //validate input
    if (password !== repassword) {
      toast.error("The re-entered password does not match");
    } else {
      try {
        //Gọi API thêm mới user
        await addUser(newAdmin);
        navigate("/home");
        toast.success(
          `Register a username account: ${newAdmin.username} success!`
        );
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
  };

  const handleRedirect = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="containers">
        <div className="box">
          <h1 align="center">Add Account</h1>
          <div className="inputBox">
            <input
              type="text"
              name="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="first-name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>First name</label>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="last-name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Last name</label>
          </div>
          <div className="input-group">
            <label
              className="me-3"
              style={{ color: "white", fontSize: "18px" }}
            >
              Role
            </label>
            <select
              defaultValue={0}
              className="form-control"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value={0}>Choose role</option>
              <option value={1}>Admin</option>
              <option value={2}>User</option>
            </select>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              minLength={6}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="re-password"
              required
              onChange={(e) => setRePassword(e.target.value)}
            />
            <label>Retype Password</label>
          </div>
          <div className="text-center">
            <button className="btn btn-success me-3" onClick={handleAddUser}>
              Created Account
            </button>
            <button className="btn btn-primary" onClick={handleRedirect}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;