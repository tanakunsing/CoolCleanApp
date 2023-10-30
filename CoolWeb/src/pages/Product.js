import Layout from "./Layout";
import React from 'react';
import { useEffect, useState } from 'react';
import ProductShowdata from "./ProductShowdata";
import MainProduct from "./MainProduct";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from 'react-bootstrap';
import Stytled from './Layout.module.css';
import Nav_Sm from "../components/Nav_Sm";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function Product() {
  let countyInSucces = ["ทั้งหมด","สายไหม", "บางเขน", "ดอนเมือง", "มีนบุรี", "ห้วยขวาง", "บางกะปิ", "คันนายาว","สาทร"];
  const [countyIns1, setcountys1] = useState(countyInSucces);
  const [onshow, setinshow] = React.useState(true)
  const [loading, setloading] = useState(true);
  const [countyIn, setcounty] = useState();

  const handleClick = (nums) => {
  
    setcounty(nums)
  }
  return (
    <>
      <Layout header={'Product'} >
        <div className={Stytled.Product_1}>
          <div className="container">
            <div className="row mb-3" style={{ marginLeft: '10px' }}>
              <Nav_Sm />
              <h2 >เลือกร้านค้า</h2>
            
              <div className="col mt-3">
                <div className="d-flex">

                  {
                    onshow == true &&

                    countyIns1.map((num, index) => (
                      <div key={index}>
                        <buttom class="btn btn-primary ms-2 mb-3" onClick={event => handleClick(num)} >{num}</buttom>
                      </div>
                    ))

                  }
                </div>
              </div>
              <div className="col-12 mt-3">
              
              </div>
            </div>
            <div className="row">
              {
                loading === false &&
                <Spinner animation="border" variant="primary" size="sm" />
              }
              {
                loading === true &&
                <div className="container">
                  <div className="row">

                    <div className={Stytled.product_list} >
                      <ProductShowdata selectCounty={countyIn}/>

                    </div>
                  </div>
                </div>


              }

            </div>
          </div>
        </div>
      </Layout>

    </>
  )

}
export default Product;