import React from "react";
import "../css/manageUser.css";
import Header from "../Sidebar/Sidebars";

function ManagerUser() {
  const handleSearch = (event) => {
    // Xử lý tìm kiếm ở đây
  };

  return (
    <>
      <Header />

      <main className="table">
        <section className="table_header">
          <h1>Customers Manager</h1>
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
        <section className="table_body">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Customer</th>
                <th>Name customer</th>
                <th>Location</th>
                <th>Gmail</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                <tr>
                  <td>1</td>
                  <td>
                    <img src="../img/Zinzu Chan Lee.jpg" />
                  </td>
                  <td>Zinzu Chan Lee</td>
                  <td>seoul</td>
                  <td>ZinzuChanLee@gmail.com</td>
                  <td>User</td>
                  <td>Offline</td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default ManagerUser;
