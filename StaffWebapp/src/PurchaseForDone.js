import { useEffect, useState } from 'react';
import Layout from './Layout';
import Stytled from './Layout.module.css';
import { Table } from 'react-bootstrap';
import ApiConection from "./ApiConection";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
function PurchaseForDone() {
  const api = new ApiConection();
  const [onshows, setinshow_product1] = React.useState(false)
  const [getid, setid] = useState(0);
  const [getid_product, setid_product] = useState(0);
  const [getcompanyname, setcompanyname] = useState("");
  const [getCustomer_name, setCustomer_name] = useState("");
  const [getHouse_number, setHouse_number] = useState("");
  const [getPrice, setPrice] = useState(0);
  const [gettype, settype] = useState("");
  const [getCounty, setCounty] = useState("");
  const [getSubdisticrt, setSubdistrict] = useState("");
  const [getProvince, setProvince] = useState("");
  const [getPostal_code, setPostal_code] = useState(0);
  const [getAddress_details, setAddress_details] = useState("");
  const [getStatus_text, setStatus_text] = useState("รอยืนยัน");
  const [getIs_active, setIs_active] = useState(false);
  const [getcheck_email, setcheckemail] = useState("");
  const [getemail, setemail] = useState("");
  const [getem, setem] = useState("");
  const [getidproduct, setproduct] = useState("");
  const [getphone, setphone] = useState(0);
  const navigation = useNavigate();
  useEffect(() => {
    let id_product = JSON.parse(window.sessionStorage.getItem('pas'));
    setproduct(id_product);



    const fetchProductdata3 = async (event) => {
      const response = await api.getproduct('api/Purchases');
      console.log(response);
      if (response == "") {
        setinshow_product1(false)
      }
      setinshow_product1(true)
      response.map((obj) => {
        if (id_product == obj.id_product) {
          setid(obj.id);
          setcompanyname(obj.company_name);
          setid_product(obj.id_product);
          setPrice(obj.price);
          settype(obj.productName);
          settype(obj.typeService);
          setCustomer_name(obj.customer_name);
          setCounty(obj.county);
          setHouse_number(obj.House_number)
          setProvince(obj.province);
          setSubdistrict(obj.subdistrict)
          setPostal_code(obj.postal_code)
          setem(obj.date);
        }
      }
      )

    }
    fetchProductdata3();
  })

  const handlerCilk = async (event, pas) => {
    let getdata = pas;
    console.log(getdata);
    event.preventDefault();
  
    const response = await api.getproduct('api/Purchases');
    let xp = {}
    let numvalue = 1;
    response.map((obj) => {
      if (getidproduct == obj.id_product) {
        xp = {
          id: obj.id,
          date: obj.date,
          company_name: obj.company_name,
          customer_name: obj.customer_name,
          typeService: obj.typeService,
          house_number: obj.house_number,
          price: obj.price,
          phone: obj.phone,
          email: obj.email,
          check_Email: obj.check_Email,
          county: obj.county,
          subdistrict: obj.subdistrict,
          province: obj.province,
          postal_code: obj.postal_code,
          address_details: obj.address_details,
          status_text: "เสร็จสิ้น",
          is_active: true,
          id_product: obj.id_product,

        }

      }
    })

    console.log(xp);
    const responses = await api.putData(`api/Purchases/${xp.id}`, xp);


    let saveMember = {};
    const response4 = await api.getproduct('api/Member_API');
    response4.map((num) => {
      if (num.min_name == getcompanyname)
        saveMember = {
          id: num.id,
          main_id: num.main_id,
          min_name: num.min_name,
          max_name: num.max_name,
          house_number: num.house_number,
          phonenumber: num.phonenumber,
          email: num.email,
          check_email: num.check_email,
          min_Address: num.min_Address,
          subdistrict: num.subdistrict,
          province: num.province,
          postal_code: num.postal_code,
          min_Description: num.min_Description,
          status_text: "ยืนยัน",
          is_active: true,
          totalWallet: null,
          job_count: num.job_count = num.job_count + 1
          //จำนวนงานที่เสร็จสิ้น       --***********-*
          //จำนวนเงินในกระเป๋า   --***********-*

        }

    })

    const responses5 = await api.putData(`api/Member_API/${saveMember.id}`, saveMember);
    console.log(responses5);
    const { value: file } = await Swal.fire({
      title: 'ส่งรูปถ่ายการบริการ',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'อัพโหลดรูปถ่ายเสร็จสิ้นบริการ'
      }
    })

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture'
        })
      }
      reader.readAsDataURL(file)
      Swal.fire(
        'Save now!',
        'Your file has been Save.',
        'success'
      )
      navigation(`/History`);
    }



   

  }


  const handleClick1 = (event) => {
    navigation(`/Home`);
  }
  return (
    <>
      <Layout header={'Purchase'}>
        <div className={Stytled.Product_1}>
          <div className="container mt-5">
            <div className='row justify-content-center' >
              <div className='w-75 shadow p-3 mb-5 bg-body rounded'>
                <div className='col'>
                  <h1 className='text-primary'>Purchase order</h1>

                </div>
                <form onSubmit={handleClick1} >
                  <table>
                    <thead>
                      <tr>
                        <th scope="col " >Company name </th>
                        <th scope="col">{getcompanyname}</th>
                        <th scope="col">Date and</th>
                        <th scope="col" className='border border-dark'>{getem}</th>
                      </tr>
                    </thead>
                    <thead>
                      <tr>
                        <th scope="col" >Name </th>
                        <th scope="col" >{getCustomer_name}</th>
                        <th scope="col">Purchase order:</th>
                        <th scope="col" className='border border-dark' >{getid_product}</th>
                      </tr>
                    </thead>

                    <thead>
                      <tr>
                        <th scope="col">Address </th>
                        <td scope="col" className='w-25 pt-3'><p>{getHouse_number} แขวง {getSubdisticrt}
                          เขต {getCounty} จังหวัด {getProvince}
                          {getPostal_code}</p></td>

                      </tr>
                    </thead>
                  </table>
                  <table class="table border border-dark" style={{ height: '300px' }}>
                    <thead class="table-primary">
                      <tr>
                        <th scope="col">รหัสบริการ</th>
                        <th scope="col">รายการ</th>
                        <th scope="col">จำนวน</th>
                        <th scope="col">ราคาค่าบริการ</th>
                        <th scope="col">จำนวนเงิน</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">{getid_product}</th>
                        <td >ล้างแอร์ติดผนัง</td>
                        <td>{getid}</td>
                        <td>{getPrice}</td>
                        <td>{getPrice}</td>
                      </tr>

                    </tbody>
                  </table>
                  <div className='col d-flex justify-content-center'>
                    <div className='d-flex justify-content-center'>
                      <button onClick={(event) => handlerCilk(event, getid)} class="btn btn-primary">เสร็จสิ้น</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button class="btn btn-danger">ยกเลิก</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </Layout>
    </>
  )
}
export default PurchaseForDone;