import Layout from "./Layout";
import Stytled from './Layout.module.css';
import Product from "./Product";
import { useNavigate, Link } from "react-router-dom";
import { Button, Spinner } from 'react-bootstrap';
import Welcomdata from "./Welcomdata";
import React, { useState, useEffect } from 'react';
import ApiConection from "./ApiConection";
import Stack from '@mui/material/Stack';
import Buttons from '@mui/material/Button';
function Home() {
  const api = new ApiConection();
  const [count, setCount] = useState();
   
  const handleLogin = async(event) =>{
    const response = await api.getData('api/Member_API/10');
    console.log(response);
   
  }
  
  useEffect(() => {
    handleLogin();
   
  }, []);
  


  return (
    <>

      <Layout header={'HOME'}>
  


      </Layout >

    </>
  )
}
export default Home;