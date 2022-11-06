import "./signup.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import  {useNavigate}  from "react-router-dom";

const SignUp=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState({
        username:"",
        password:"",
        confirmpass:""
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
    await  axios.post("http://localhost:5000/signup",user).then((res)=>{
        console.log(res);
        window.alert(res.data.message)
        navigate("/");
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
    if(!user.confirmpass){
        error.confirmpass="please fill confirmPassword field"
    }
    else if(user.password!== user.confirmpass){
        error.confirmpass="password and confirm paddword doesnot match"
    }
    return error;
   }
    return(
        <>
         <div className="signup-container">
            <h1>Register</h1>
            <form method="POST" onSubmit={handleSubmit}>
             <div className="input-container ">
               <input type="email" value={user.username} name="username" placeholder="username" onChange={handleChange}/>
               <p style={{color:"red"}}>{formError.username}</p>
             </div>
             <div className="input-container ">
               <input type="password" value={user.password} name="password" placeholder="password" onChange={handleChange} />
               <p style={{color:"red"}}>{formError.password}</p>
             </div>
             <div className="input-container ">
               <input type="password" value={user.confirmpass} name="confirmpass" placeholder="Confirm password" onChange={handleChange}/>
               <p style={{color:"red"}}>{formError.confirmpass}</p>
             </div>
             <div className="register-btn">
              <button>REGISTER</button>
             </div>
            </form>
            <Link to="/">
            <p style={{color:"red", cursor:"pointer"}}>Member Login</p>
            </Link>
        </div>
        </>
    )
}
export default SignUp;