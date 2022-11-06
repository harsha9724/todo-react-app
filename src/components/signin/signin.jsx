import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import  {useNavigate}  from "react-router-dom";
import "./signin.css"
const SignIn=()=>{
  const navigate=useNavigate()
  const [user,setUser]=useState({
    username:"",
    password:"",
});
const [formError,setFormError]=useState({});
const [submit,setSubmit]=useState(false)
const handleChange=(e)=>{
  const {name,value}=e.target;
  setUser({...user,[name]:value})
}
const handleSubmit=(e)=>{
  e.preventDefault();
  setFormError(validate(user));
  setSubmit(true)
 }
 async function postUser(user){
  await  axios.post("http://localhost:5000/login",user).then((res)=>{
      console.log(res);
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("username",user.username.split("@")[0]);
      navigate("/todo");
     }).catch((err)=>{
      console.log(err);
      window.alert(err.response.data.message);
     });
}
 useEffect( ()=>{
  if(Object.keys(formError).length===0 && submit){
      console.log(user);   
   postUser(user);
     
  }
 },[formError])
 const validate=()=>{
  let error={};
  if(!user.username){
      error.username="please enter username"
  }
  if(!user.password){
      error.password="please enter password"
  }
  
  return error;
 }
    return(
        <>
        <div className="signIn-container">
            <h1>Member Login</h1>
            <form method="POST" onSubmit={handleSubmit} >
             <div className="input-container ">
               <input type="email" name="username" value={user.username} placeholder="username" onChange={handleChange}/>
               <p>{formError.username}</p>
             </div>
             <div className="input-container ">
               <input type="password" name="password" value={user.password} placeholder="password" onChange={handleChange} />
             <p>{formError.password}</p>
             </div>
             <div className="login-btn">
                <button>LOGIN</button>
             
             </div>
            </form>
            <Link to="/signup">
            <div className="login-btn" style={{marginTop:0}}>
                <button>Register</button>
            </div>
            </Link>
            <p style={{color:"red"}}>Forget password</p>
        </div>
        </>
    )
}
export default SignIn;