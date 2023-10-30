import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
function Login() {
    const [txtrs, settxtr] = useState("");
    const navigation = useNavigate();
    const handlelogined = () => {
        console.log(txtrs);
        window.sessionStorage.setItem("getlg", JSON.stringify(txtrs));
        navigation(`/Home`);
    }
    return (
        <>
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <div className='d-flex justify-content-center'>
                            <img src={require('./images/logo-cc.png')} width={350} />
                        </div>
                        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => settxtr(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

                            <div className="d-flex justify-content-between mx-3 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <button type="button" onClick={handlelogined} class="btn btn-primary">Login</button>

                            <div className="text-center">
                                <p>Not a member? <a href="#!">Register</a></p>
                                <p>or sign up with:</p>

                                <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='twitter' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="sm" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='github' size="sm" />
                                    </MDBBtn>

                                </div>
                            </div>

                        </MDBContainer>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Login;