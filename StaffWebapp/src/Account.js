import Wallet from "./compoments/display/Wallet";
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
function Account() {
    const api = new ApiConection
    const [done, setdone] = React.useState([])
    const [onshow, setinshow] = React.useState(true)
    const [chkconfig, setchkconfig] = React.useState('')
    const [lengthget, setlength] = useState(0);
    const [lengthget1, setlength1] = useState(0);
    useEffect(() => {
        let getlogin = JSON.parse(window.sessionStorage.getItem('getlg'));
        console.log(getlogin);
        setchkconfig(getlogin);
        const fetchdata = async (event) => {
            const response = await api.getproduct('api/Purchases');
            let totalprice = 0;
            setdone(response);
            if (response != "") {

                setinshow(true);
            }
            response.map((num1) => {
                    if(getlogin == num1.company_name && num1.status_text == "เสร็จสิ้น"){
                        totalprice = totalprice+num1.price;
                        setlength1(totalprice);
                    }
                  
            })
          
            const response4 = await api.getproduct('api/Member_API');
            response4.map((num) => {
                
                if (num.min_name == getlogin) {
                    setlength(num.job_count)                     
                  
                }
                
            }
            )
        }

            fetchdata();
        }, [])
    return (
        <>
            <Layout header={'Admindisplay'}>
                <Container>
                    <Row className="mb-3">
                        <Col><h3>เงินในบัญชี</h3></Col>
                        <Col></Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Table striped bordered hover variant="dark">
                                <thead >
                                    <tr>
                                        <th>รายได้ทั้งหมด</th>
                                        <th>จำนวนงานเสร็จสิ้นทั้งหมด</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><h1>{lengthget1}</h1></td>
                                        <td><h1>{lengthget}</h1></td>

                                    </tr>

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col>


                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">customer name</th>
                                        <th scope="col">typeService</th>
                                        <th scope="col">price</th>
                                        <th scope="col">status</th>
                                    </tr>
                                </thead>
                                {
                                    onshow == true &&

                                    done.map((ins, index) => (
                                        ins.status_text == "เสร็จสิ้น" &&
                                        ins.company_name == chkconfig &&
                                        <tbody>
                                            <tr data-index={index}>
                                                <th scope="row">1</th>
                                                <td>{ins.customer_name}</td>
                                                <td>{ins.typeService}</td>
                                                <td>{ins.price}</td>
                                                <td>{ins.status_text}</td>
                                            </tr>

                                        </tbody>

                                    )
                                    )
                                }

                            </table>

                        </Col>
                    </Row>


                </Container>


            </Layout>
        </>
    )
}
export default Account;