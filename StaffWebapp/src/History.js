import Layout from "./Layout";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import React from "react";
import { Table } from 'react-bootstrap';
import ApiConection from './ApiConection';
function History() {
    const [txtname, settxtname] = useState("");
    const [testty, setTest2] = React.useState({})
    const [onshow, setinshow] = React.useState(false)
    const [chkconfig, setchkconfig] = React.useState('')
    const api = new ApiConection
    const navigation = useNavigate();
    useEffect(() => {

        const fetchdata = async (event) => {
            const response = await api.getproduct('api/Purchases');
         console.log(response);
         if(response != ""){
            setinshow(true);
            setTest2(response);
         }
        }
        fetchdata();

    }, [])
    
    const handlerCilk2 = async (event, pas1) => {
             
        window.sessionStorage.setItem("pas", JSON.stringify(pas1));
        navigation(`/PurchaseForDone`);
}
    return (
        <>
            <Layout header={'History'}>

                <Container>
                    <Row className="mb-3">
                        <Col><h3>งานที่กำลังดำเนินการ</h3></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                onshow == true &&
                                testty.map((ins, index) => (
                                    ins.status_text == "ยืนยัน" &&
                                    <div key={index} >

                                        <div className="bg-ligth border border-dark mb-2" style={{ height: '150px' }}>
                                            <div className="d-flex bg-primary" style={{ height: '30px' }}>
                                                <h6 className="w-100 p-1 text-light">งานใหม่</h6>
                                                <div className="d-flex p-1 text-light">
                                                    <p>12/10/66</p>
                                                    <p>,</p>
                                                    <p>12.04</p>
                                                </div>

                                            </div>
                                            <div className='mt-2 p-1'>
                                                <Table className='text-center'>
                                                    <tr>
                                                        <td><strong className='fs-5'><i class="bi bi-geo-alt-fill"></i><strong></strong>{ins.county}</strong></td>

                                                        <td><strong className='fs-5'><i class="bi bi-cash-stack"></i></strong><strong>{ins.price}</strong></td>

                                                    </tr>
                                                    <tr>

                                                        <td><strong><i class="bi bi-telephone-outbound-fill"></i>0{ins.phone}</strong></td>
                                                        <td><strong><i class="bi bi-calendar-plus-fill"></i> {ins.date}</strong></td>
                                                        <td><button onClick={(event) => handlerCilk2(event, ins.id_product)} type="button" class="btn btn-primary">รายละเอียด</button></td>
                                                    </tr>
                                                    <tr>
                                                    </tr>
                                                </Table>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }{
                                onshow == false &&
                                <div class="text-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}
export default History