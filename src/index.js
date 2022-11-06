import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import TodoTable from './components/todoTable/table';

const root = ReactDOM.createRoot(document.getElementById('root'));
let token=localStorage.getItem("token");
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path='/todo' element={token ? (<TodoTable/>) : (<Navigate replace to={"/"} />)}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
