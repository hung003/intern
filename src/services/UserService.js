import axios from "./customi-axiosze";

const fetchAllUser =()=>{
  return  axios.get("/api/users?page=1");
}

export { fetchAllUser };
