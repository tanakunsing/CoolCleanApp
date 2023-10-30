import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Layout from '../pages/Layout';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import ApiConection from "../pages/ApiConection";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function StartRegister() {
    const api = new ApiConection();
    var randomstring = require("randomstring");
    const [getemail, setemail] = useState("");
    const [getdata, setdata] = useState([]);
    const form = useRef();
    const [Passwordconfig, setPasswordconfig] = useState(randomstring.generate(7));
   
    const navigation = useNavigate();
    useEffect(() => {
        const handleTopages = async () => {

            const response = await api.getproduct('api/Member_API');
            console.log(response);
            setdata(response);
        }
        handleTopages();
       
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        
        let vars = true;
        if (getemail != "") {
            getdata.map((obj) => {
                if (obj.email == getemail) {
                    Swal.fire({
                        icon: 'error',
                        title: 'มีอีเมลอยู่แล้ว',
                        text: 'กรุณากรอกใหม่ครับ',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                    vars = false;
                }
            })
            if (vars == true) {
                window.sessionStorage.setItem("getemail", JSON.stringify(getemail));
                window.sessionStorage.setItem("Passwordconfig", JSON.stringify(Passwordconfig));
                Swal.fire('ยินดีต้อนรับสมาชิกใหม่')
                navigation(`/Formregister`);
            }
           
        }


        emailjs.sendForm('service_e59le4n', 'template_ui6uhnt', form.current, 'YFSw4sVmXRpb89gqN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };





    return (
        <>
            <Layout header={'StartRegister'}>

                <div className="container">
                    <section className="bg-light shadow-sm p-3 mb-5">
                        <div className='row mt-5'>
                            <div className='col'>

                                <h3>ยินดีต้อนรับสมาชิกใหม่ทุกท่าน</h3>
                                เป็นฟรีแลนซ์ CoolClean ดียังไง? ลงทะเบียนสมัคร

                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <form ref={form} onSubmit={sendEmail} class="was-validated">
                                    <div class="mb-3 mt-3">
                                        <label for="uname" class="form-label">อีเมล:</label>
                                        <input name="user_email" onChange={(e) => setemail(e.target.value)} type="email" class="form-control" id="uname" aria-describedby="emailHelp" placeholder="Enter username" required />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                        <input className='' type="hidden" name="message" onChange={(e) => setPasswordconfig(e.target.value)}  value={Passwordconfig} ></input>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>setPasswordconfig
                    </section>
                </div>

            </Layout>
        </>
    )
}
export default StartRegister;