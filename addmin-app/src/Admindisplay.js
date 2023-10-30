import Row from "react-bootstrap/Row";
import Header from "./Header";
import Layout from "./Layout";
import Container from 'react-bootstrap/Container';
import row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ApiConection from "./ApiConection";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Admindisplay() {
    const navigation = useNavigate();
    const api = new ApiConection();
    const [getdataMember, setdataMember] = useState([])
    const [getdataJob, setdataJob] = useState([])
    const [getdataProduct, setdataProduct] = useState([])
    const [onshow, setinshow] = useState(true)


    useEffect(() => {

        const fetchdata = async (event) => {
            const response = await api.getproduct('api/Member_API');
            console.log(response);
            setdataMember(response);
            if (getdataMember != "") {
                setinshow(true);
            }
        }
        const fetchdata2 = async (event) => {
            const response = await api.getproduct('api/Purchases');
            console.log(response);
            console.log(response);
            setdataJob(response);
            if (getdataJob != "") {
                setinshow(true);
            }
        }
        const fetchdata3 = async (event) => {
            const response = await api.getproduct('api/Product');
            console.log(response);
            console.log(response);
            setdataProduct(response);
            if (getdataProduct != "") {
                setinshow(true);
            }
        }
        fetchdata();
        fetchdata2();
        fetchdata3();

    }, [])
    const hanldeConfirm = (event, te, min_names) => {
        console.log(te);
        let x = window.sessionStorage.setItem("mainid", JSON.stringify(te));
        let xs = window.sessionStorage.setItem("min_names", JSON.stringify(min_names));
        navigation(`/Profile`);

    }
    const hanldenext = (event, te, min_names) => {
        console.log(te);
        let x = window.sessionStorage.setItem("mainid", JSON.stringify(te));
        let xs = window.sessionStorage.setItem("min_names", JSON.stringify(min_names));
        navigation(`/Profile`);
    }
    return (
        <>
            <Layout header={'Admindisplay'}>
                <nav class="navbar navbar-light shadow p-3 mb-5 bg-Light ">
                    <div class="container-fluid justify-content-end">
                        <p href="#">addmin</p>
                    </div>
                </nav>
                {
                    onshow == true &&

                    <Container>


                        <Row className="mb-3">
                            <h4 className="mb-2">Dashboard</h4>
                            <Col>

                                <div className="border shadow-sm p-3 mb-5 bg-body h-100">
                                    <p>Member value</p>
                                    <div>
                                        <h1>{getdataMember.length}</h1>

                                    </div>

                                </div>

                            </Col>
                            <Col>

                                <div className="border shadow-sm p-3 mb-5 bg-body h-100">
                                    <p>Job value</p>
                                    <h1>{getdataJob.length}</h1>
                                </div>

                            </Col>
                            <Col>

                                <div className="border shadow-sm p-3 mb-5 bg-body h-100">
                                    <p>Type value</p>
                                    <h1>8</h1>
                                </div>

                            </Col>

                        </Row>
                        <Row>
                            <Col class="mb-2">

                                <div className="border shadow-sm p-3 mb-5 bg-body h-100">

                                    <Table>
                                        <h4>Member Waite confirm</h4>
                                        <tr>
                                            <th>#</th>
                                            <th>#</th>
                                            <th>#</th>
                                            <th>#</th>
                                        </tr>
                                        {
                                            getdataMember.map((ins, index) => (
                                                ins.status_text == "รอยืนยัน" &&
                                                <tr>
                                                    <td>{ins.main_id}</td>
                                                    <td><strong>{ins.min_name}</strong></td>
                                                    <td>{ins.max_name}</td>
                                                    <td>{ins.email}</td>
                                                    <td><strong>{ins.status_text}</strong></td>
                                                    <td>
                                                        <button class="btn btn-primary ms-3" onClick={event => hanldenext(event, ins.main_id, ins.min_name)}>รายละเอียด</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </Table>



                                </div>

                            </Col>
                            <Col sm={10}></Col>
                        </Row>
                        <Row>
                            <Col class="mb-2">

                                <div className="border shadow-sm p-3 mb-5 bg-body h-100">
                                    <Table>
                                        <h4>Member Waite confirmed</h4>
                                        <tr>
                                            <th>#</th>
                                            <th>#</th>
                                            <th>#</th>
                                            <th>#</th>
                                        </tr>
                                        {
                                            getdataMember.map((ins, index) => (
                                                ins.status_text == "ยืนยัน" &&

                                                <tr data-index={index}>

                                                    <td>{ins.main_id}</td>
                                                    <td><strong>{ins.min_name}</strong></td>
                                                    <td>{ins.max_name}</td>
                                                    <td>{ins.email}</td>
                                                    <td><strong>{ins.status_text}</strong></td>
                                                    <td>
                                                        <button onClick={event => hanldeConfirm(event, ins.main_id, ins.min_name)} class="btn btn-primary ms-3" type="submit">รายละเอียด</button>


                                                    </td>
                                                </tr>

                                            ))
                                        }



                                    </Table>
                                </div>

                            </Col>
                            <Col sm={10}></Col>
                        </Row>




                    </Container>
                }


            </Layout>

        </>
    )
}
export default Admindisplay;