import React from "react";
import "../css/manageService.css";
import Sidebars from "../Sidebar/Sidebars";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ManageService() {
  const handleSearch = (event) => {
    // Xử lý tìm kiếm ở đây
  };

  return (
    <>
    <Sidebars/>
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
        <button className="add btn btn-success">+Add</button>
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
            <tbody>{/* Dữ liệu của bảng sẽ được render ở đây */
            <tr>
            <td>1</td>
            <td>Clean living room</td>
            <td>50.000 đ</td>
            <td>Vila</td>
            <td>Clean your living room</td>
            <td>Hinh nez</td>
            <td>
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-success">Edit</button>
            </td>
          </tr>
            }</tbody>
          </table>
        </section>
      </div>
      </>
  );
}

export default ManageService;

