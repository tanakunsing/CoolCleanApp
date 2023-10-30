import { useEffect, useState } from 'react';
import CardButtom from "./compoments/Card/CardButtom";
import Layout from "./Layout";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import ApiConection from "./ApiConection";
import React from 'react';
function Home() {

    const api = new ApiConection();
    const [txtr, settxtr] = useState("y");
    const [getlgs, setlg] = useState("");
    useEffect(() => {

        let getlogin = JSON.parse(window.sessionStorage.getItem('getlg'));
        if(getlogin != ""){
            setlg(getlogin);
            settxtr("n");
            console.log(getlgs);
        }
       
      }, []);
 

    return (
        <>
            <Layout header={'Admindisplay'}>
                <Container>
                    <Row className="mb-3">
                        <Col><h3>รับงาน</h3></Col>
                        <Col></Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            {
                                txtr == "y" &&
                                <div>
                                    <div className="border border-dark" style={{ height: '450px' }}>
                                        <div className="d-flex justify-content-center mt-5">
                                            <img className="" src={require("./images/logo-cc.png")} width={500} height={200} />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <p>กรุณารารับงานใหม่ สักครู่......</p>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                txtr == "n" &&
                                                     
                                    <CardButtom data={getlgs}/>
                                    
                            }
                        
                        </Col>
                    </Row>
                </Container >
            </Layout >

        </>
    )
}
export default Home;