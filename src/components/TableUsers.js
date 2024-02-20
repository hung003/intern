import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';

import ReactPaginate from 'react-paginate';

const TableUsers=(props)=>{

    const [listUsers,setListUsers] = useState([]);
    const [ totalUsers,setTotalUsers]= useState(0);
    const [totalPages,setTotalPages]= useState(0);
    useEffect(() => {
        //call apis
        getUsers(1);
    }, []);
    
    const getUsers=async (page)=>{
        let res=await fetchAllUser(page);
        console.log(">>> check new res ",res)
        if (res&& res.data) {
        console.log(res);
        setTotalUsers(res.totalUsers)
        setTotalPages(res.total_pages)
        setListUsers(res.data)
        }
    }

    const handlePageClick=(event)=>{
      console.log("event lib:  ",event)
      getUsers(+event.selected +1);
    }

    console.log(listUsers);
    
    return (<>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {listUsers&&listUsers.length>0 &&
        listUsers.map((item,index) =>{
            return (
                <tr key={`users-${index}`}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            )
        })}
       
      </tbody>
    </Table>
    <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        
      />
    </>)
}

export default TableUsers;