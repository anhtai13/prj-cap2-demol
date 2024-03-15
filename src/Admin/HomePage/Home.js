import React from 'react'
import '../css/manageService.css';
import Sidebars from '../Sidebar/Sidebars';
import NotFoundPage from '../404page/404_page';

function HomePage(){

// State for search input
// const [searchInput, setSearchInput] = useState('');

// Handler for search input change


    return (
    <>
        <Sidebars/>

        <main className="table" >
        <section className="table_header">
          <h1>Home Page</h1>
        </section>       
        <div style={{width: '100%', height: '100%'}}>
        <NotFoundPage />
        </div>
      </main>
      
    </>
    )
}
export default HomePage;