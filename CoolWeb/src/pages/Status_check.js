import Layout from "./Layout";
import Stytled from './Layout.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";
import { useState } from 'react';
import ApiConection from "./ApiConection";
import Swal from 'sweetalert2';
import Col from 'react-bootstrap/Col';
function Status_check() {
    const [onshows, setinshow_product] = useState(false)
    const [name, setName] = useState("");
    const [datasall, setdatas] = useState([]);
    const api = new ApiConection();
    const handlesave3 = async (event) => {


        if (name == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        const response = await api.getproduct('api/Purchases');
        console.log(response);
        setinshow_product(true)
        setdatas(response)
    }
    return (
        <>
            <Layout header={'Status_check'}>

                <div className={Stytled.Product_1}>

                    <div className="container w-100">
                        <div className="row  mb-3 mt-3">
                            <h3>ตรวจสอบสถานะ</h3>

                            <div className="col mb-5">

                                <div class="form-group row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label " >เพิ่มบริการ</label>
                                    <div class="col-sm-10">
                                        <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" ></input>
                                    </div>
                                </div>
                                <button onClick={handlesave3} class="btn btn-primary ">ยืนยัน</button>

                            </div>

                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <Col>
                                <Table>
                                    <h4>Member Waite confirm</h4>
                                    <tr>
                                        <th>#</th>
                                        <th>#</th>
                                        <th>#</th>
                                        <th>#</th>
                                        <th>Username</th>
                                    </tr>



                                    {
                                        onshows == true &&

                                        datasall.map((ins, index) => (

                                            ins.id_product == name &&

                                            <div key={index}>
                                                <tr data-index={index}>
                                                    <td>{ins.date}</td>
                                                    <td>{ins.id_product}</td>
                                                    <td>{ins.typeService}</td>
                                                    <td>{ins.customer_name}</td>
                                                    <td>{ins.status_text}</td>
                                                </tr>
                                            </div>
                                        ))
                                    }


                                </Table>
                            </Col>
                        </div>
                    </div>
                </div>

            </Layout>

        </>
    )
}
export default Status_check;