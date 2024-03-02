import React from 'react'
import '../css/manageService.css';
import Sidebars from '../Sidebar/Sidebars';

function ManagerOrder(){

// State for search input
// const [searchInput, setSearchInput] = useState('');

// Handler for search input change
const handleSearchInputChange = (event) => {
//   setSearchInput(event.target.value);

};

    return (
    <>
        <Sidebars/>

        <main className="table">
        <section className="table_header">
          <h1>Orders Manager</h1>
          <div className="input-group">
            <input
              type="search"
              id="search"
              onChange={handleSearchInputChange}
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
              <th>Service</th>
              <th>nameService</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Customer</th>
              <th>Gmail</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>{/* Dữ liệu của bảng sẽ được render ở đây */}</tbody>
          </table>
        </section>
      </main>
    </>
    )
}
export default ManagerOrder;