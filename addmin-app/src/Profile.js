import Layout from "./Layout";
import Stytled from './Layout.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ApiConection from "./ApiConection";
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Swal from 'sweetalert2'
function Profile() {
    const api = new ApiConection();
    const navigation = useNavigate();
    const [NameCompanys, setCompanys] = React.useState();
    const [fullname, setname] = React.useState("");
    const [emails, setemails] = React.useState("");
    const [phone, setphone] = React.useState(0);
    const [county, setcounty] = React.useState("");
    const [alldata, setalldata] = React.useState([]);
    const [alldata2, setalldata2] = React.useState([]);
    const [alldata3, setalldata3] = React.useState([]);
    const [alldata4, setalldata4] = React.useState({});
    const [onshow, setinshow] = React.useState(true)
    const [id, setid] = React.useState();
    const [pass_id, setpass_id] = React.useState();
    const [description, setdescription] = React.useState();
    const [name_staff, setname_staff] = React.useState();
    const [phones, setphones] = React.useState();

    const [main_id, setmain_id] = React.useState();
    

    useEffect(() => {
        let NameCompanys = JSON.parse(window.sessionStorage.getItem('min_names'));
        let main_id = JSON.parse(window.sessionStorage.getItem('mainid'));
        setCompanys(NameCompanys);
        setmain_id(main_id);
        console.log(main_id);
        const show_datas = async (event) => {

            const response = await api.getproduct('api/Member_API');
            console.log(response);
            setalldata2(response);




        }
        const show_datas2 = async (event) => {

            const response = await api.getproduct('api/Staffdatabases');
            console.log(response);
            setalldata(response);
        }
        const show_datas3 = async (event) => {

            const response = await api.getproduct('api/Products');
            console.log(response);
            setalldata3(response);
        }


        show_datas();
        show_datas2();
        show_datas3();

    }, [])

    const handleconfig = async (event) => {

        event.preventDefault();
        const response = await api.getproduct('api/Member_API');
        let xp = {}
        response.map((obj) => {
            if (main_id == obj.main_id) {
                xp = {
                    id: obj.id,
                    main_id: obj.main_id,
                    min_name: obj.min_name,
                    max_name: obj.max_name,
                    house_number: obj.house_number,
                    phonenumber: obj.phonenumber,
                    email: obj.email,
                    check_email: obj.main_id,
                    min_Address: obj.min_Address,
                    subdistrict: obj.subdistrict,
                    province: obj.province,
                    postal_code: obj.postal_code,
                    min_Description: obj.min_Description,
                    status_text: "ยืนยัน",
                    is_active: true
                }
            }
        })
        
        console.log(xp);
        const responses = await api.putData(`api/Member_API/${xp.id}`, xp);
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Save now!',
                'Your file has been Save.',
                'success'
              )
              navigation(`/`);
              
            }
          })
    }



    return (
        <>
            <Layout header={'Profile'}>
                <form onSubmit={handleconfig}>
                    <div className={Stytled.Product_1}>
                        <div className="container w-100">
                            <div className="row">
                                <section className="bg-light shadow-sm p-3 mb-5">

                                    <div className="col">


                                        <div class="row">
                                            <div class="col">
                                                <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                                                    <ol class="breadcrumb mb-0">
                                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                                        <li class="breadcrumb-item"><a href="#">User</a></li>
                                                        <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                                                    </ol>
                                                </nav>
                                            </div>
                                        </div>

                                        <div class="row">

                                            <div class="col-lg-4">
                                                <div class="card mb-4">
                                                    <div class="card-body text-center">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                            class="rounded-circle img-fluid" style={{ width: '150px' }} />
                                                        <h5 class="my-3">{NameCompanys}</h5>
                                                        <p class="text-muted mb-1">Full Stack Developer</p>

                                                    </div>
                                                </div>
                                                <div class="card mb-4 mb-lg-0">
                                                    <table class="table">

                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">รหัสบริการ</th>
                                                                <th scope="col">ชื่อบริการ</th>
                                                                <th scope="col">ราคา</th>
                                                            </tr>
                                                        </thead>
                                                        {
                                                            onshow == true &&

                                                            alldata3.map((ins, index) => (
                                                                ins.main_id == main_id &&

                                                                <tbody>
                                                                    <tr data-index={index}>
                                                                        <th scope="row">1</th>
                                                                        <td>{ins.product_id}</td>
                                                                        <td>{ins.productName}</td>
                                                                        <td>{ins.price}</td>
                                                                    </tr>

                                                                </tbody>

                                                            )
                                                            )
                                                        }
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="card mb-4">
                                                    <div class="card-body">
                                                        {

                                                            onshow == true &&
                                                            alldata2.map((insr, index) => (
                                                                insr.min_name == NameCompanys &&

                                                                <div key={index} >

                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">ชื่อ</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <p class="text-muted mb-0">{insr.max_name}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">อีเมล</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <p class="text-muted mb-0">{insr.email}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">เบอร์โทร</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <p class="text-muted mb-0">{insr.phonenumber}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">เขตพื้นที่รับผิดชอบ</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <p class="text-muted mb-0">{insr.min_Address}</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">ที่อยู่</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <p class="text-muted mb-0">"ยินดีให้บริการครับ ท่านลูกค้าๆ</p>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div class="row">
                                                                        <div class="col-sm-3">
                                                                            <p class="mb-0">สถานะ</p>
                                                                        </div>
                                                                        <div class="col-sm-9">
                                                                            <p class="text-muted mb-0">{insr.status_text}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            ))


                                                        }

                                                    </div>
                                                </div>
                                                <div class="card mb-4">
                                                    {
                                                        onshow == true &&

                                                        alldata.map((ins, index) => (
                                                            ins.main_id == main_id &&
                                                            <div key={index} >
                                                                <div class="card" style={{ width: '18rem' }}>
                                                                    <img src="..." class="card-img-top" alt="..." />
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">{ins.name_staff}</h5>
                                                                        <p class="card-text">{ins.description}</p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))

                                                    }

                                                </div>
                                                
                        
                                                <button class="btn btn-primary" type="submit">ยืนยัน</button>
                                                

                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>

        </>
    )
}
export default Profile;