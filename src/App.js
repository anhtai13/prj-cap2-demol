import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerUser from "./Admin/Users/ManageUser";
import OrderCalendar from "./Admin/Orders/OrderCalendar";
import Login from "./Admin/Login/Login";
import ManagerOrder from "./Admin/Orders/ManageOrder";
import ManagerOrderDetail from "./Admin/Orders/ManageOrderDetail";
import ManagerService from "./Admin/Services/ManageService";
import ManagerFeedback from "./Admin/feedbacks/ManageFeedback";
import AddUser from "./Admin/Users/AddUser";
import HomePage from "./Admin/HomePage/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/homeAdmin" element={<HomePage />} />
          <Route path="/admin/user-manager" element={<ManagerUser />} />
          <Route path="/admin/user-manager/add-user" element={<AddUser />} />
          <Route path="/admin/services-manager" element={<ManagerService />} />
          <Route path="/admin/feedback-manager" element={<ManagerFeedback />} />
          <Route path="/admin/orders-manager" element={<ManagerOrder />} />
          <Route path="/admin/orderDetails" element={<ManagerOrderDetail />} />
          <Route path="/admin/ordercalendar" element={<OrderCalendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
