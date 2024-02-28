import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerUser from "./Admin/Users/ManageUser";
import OrderCalendar from "./Admin/Orders/OrderCalendar";
import Login from "./Admin/Login/Login";
import ManagerOrder from "./Admin/Orders/ManageOrder";
import ManagerOrderDetail from "./Admin/Orders/ManageOrderDetail";
import ManagerService from "./Admin/Services/ManageService";
import ManagerFeedback from "./Admin/feedbacks/ManageFeedback";


function App() {
  return (
    <div>
      <Router>
        <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/users-manager" element={<ManagerUser />} exact />
        <Route path="/services-manager" element={<ManagerService />} />
        <Route path="/feedbacks-manager" element={<ManagerFeedback />} />
        <Route path="/orders-manager" element={<ManagerOrder />} />
        <Route path="/orderDetails" element={<ManagerOrderDetail />} />
        <Route path="/ordercalendar" element={<OrderCalendar />} />
=======
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/user-manager" element={<ManagerUser />} exact />
        <Route path="/admin/services-manager" element={<ManagerService />}exact />
        <Route path="/admin/feedback-manager" element={<ManagerFeedback />} />
        <Route path="/admin/orders-manager" element={<ManagerOrder />} />
        <Route path="/admin/orderDetails" element={<ManagerOrderDetail />} />
        <Route path="/admin/ordercalendar" element={<OrderCalendar />} />
>>>>>>> d95853ae550dfd5b701ecf109a5af60258f7ca67
        </Routes>
      </Router>
    </div>
  );
}

export default App;
