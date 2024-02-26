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
        <Route path="/login" element={<Login />} />
        <Route path="/user-manager" element={<ManagerUser />} exact />
        <Route path="/services-manager" element={<ManagerService />} />
        <Route path="/feedback-manager" element={<ManagerFeedback />} />
        <Route path="/orders-manager" element={<ManagerOrder />} />
        <Route path="/orderDetails" element={<ManagerOrderDetail />} />
        <Route path="/ordercalendar" element={<OrderCalendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
