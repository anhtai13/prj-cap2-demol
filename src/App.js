import { Router, Route } from "react-router";
import ManagerUser from "./Admin/Users/ManageUser";
import OrderCalendar from "./Admin/Orders/OrderCalendar";
import Login from "./Admin/Login/Login";
import ManagerOrder from "./Admin/Orders/ManageOrder"
import ManagerOrderDetail from "./Admin/Orders/ManageOrderDetail";
import ManagerService from "./Admin/Services/ManageService";
import ManagerFeedback from "./Admin/feedbacks/ManageFeedback";

function App() {
  return (
    <div>
      <Router>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ManagerUser />} exact/>
        <Route path="/services" element={<ManagerService />} />
        <Route path="/feedback" element={<ManagerFeedback />} />
        <Route path="/orders" element={<ManagerOrder />} />
        <Route path="/orderDetails" element={<ManagerOrderDetail />} />
        <Route path="/ordercalendar" element={<OrderCalendar />} />
      </Router>
    </div>
  );
}

export default App;
