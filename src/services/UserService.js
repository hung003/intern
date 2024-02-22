import axios from "./customi-axiosze";

const fetchAllUser =(page)=>{
  return  axios.get(`/api/users?page=${page}`);
}

const postCreateUser = (name, job)=>{
  return axios.post("/api/users",{name,job})
}
const putUpdateUser =(name,job,id)=>{
  return axios.put(`/api/users/${id}`,{name:name,job:job})
}

export { fetchAllUser, postCreateUser, putUpdateUser };

