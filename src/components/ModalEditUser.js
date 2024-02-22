import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { putUpdateUser } from "../services/UserService";
const ModalEditUser =(props)=>{
    const {show,handleClose,dataUserEdit,handleEditUserFromModel}=props;
    const [name,setName]=useState("");
    const [job,setJob]=useState("");

    const handleEditUser = async () => {
      let res = await putUpdateUser(name, job);
      if (res && res.updatedAt) {
          handleEditUserFromModel({
              first_name: name,
              id: dataUserEdit.id
          });
          handleClose();
          toast.success("Update user success");
      }
      console.log(res);
  };
  
    useEffect(() => {
       if(show){
        setName(dataUserEdit.first_name)
       }
    }, [dataUserEdit, show]);

   console.log(">>> check : ",dataUserEdit)
    return (
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='body-add-new'>
                <div className='mb-3'>
                <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"> Name</label>
    <input type="text" className="form-control"  
     value={name} 
     onChange={(event)=>setName(event.target.value)}/>
  </div>
  <div className="form-group">
    <label className='mt-2'>Job</label>
    <input type="text" className="form-control"  
     value={job} 
     onChange={(event)=>setJob(event.target.value)}/>
  </div>
  
</form>

                    </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> handleEditUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
        </>
      );
    }
export default ModalEditUser;