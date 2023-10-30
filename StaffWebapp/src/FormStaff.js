import Layout from "./Layout";
import Stytled from './Layout.module.css';
import { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Nav } from "react-bootstrap";
import ApiConection from "./ApiConection";

function FormStaff() {
    const defaultImageSrc = './images/upload.png';
    const api = new ApiConection();
    const [position, setpt] = useState("");
    const [getmain_id, setmain_id] = useState("");
    const [getname, setname] = useState("");
    const [image, setimage] = useState(defaultImageSrc);
    const [phone, setphone] = useState();
    const navigation = useNavigate();
    const nexts = (e) => {
        e.preventDefault();
      

        let data = {
            id: 0,
            main_id: getmain_id,
            pass_id: "",
            name_staff:getname ,
            description: position,
            phone: phone

            
        }
        api.postData(`api/Staffdatabases`, data)
            .then(response => {
                console.log(response);

                navigation(`/FormUploadimage`);
            })

    }
    const showpreview = e =>{
        if(e.target.files && e.target.files[0]){
          
            let imageFile = e.target.files[0]
            const reader = new FileReader();
            reader.onload = x=>{
                setimage(x.target.result);
            }
            reader.readAsDataURL(imageFile)
        }else{
            setimage(defaultImageSrc); 
        }
       
}


    useEffect(() => {
        let getmain_ids = JSON.parse(window.sessionStorage.getItem('getmain_id'));
        setmain_id(getmain_ids);
        
    })
    return (
        <>
            <Layout header={'FormStaff'}>
            
                <form onSubmit={nexts} class="was-validated">
                    <div className={Stytled.Product_1}>
                        <div className="container w-100">
                            <div className="row">
                                <div className="col-1">
                             
                                </div>

                                <div className="col-8">

                                    <div className="border shadow-sm p-3 mb-5 bg-body rounded">
                                        <p className="ms-2"><strong>พนักงานล้างแอร์</strong></p>
                                        <div className="w-75 ms-5">
                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-2 col-form-label " >ชื่อ</label>
                                                <div class="col-sm-10">
                                                
                                                    <input type="text" onChange={(e) => setname(e.target.value)} class="form-control" required></input>
                                                </div>
                                            </div>

                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-2 col-form-label " >ตำแหน่ง</label>
                                                <div class="col-sm-10">
                                                    <input type="text" onChange={(e) => setpt(e.target.value)} class="form-control" required></input>
                                                  
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-2 col-form-label " >เบอร์โทร</label>
                                                <div class="col-sm-10">
                                                    <input type="text" onChange={(e) => setphone(e.target.value)} class="form-control" required></input>
                                               
                                                </div>
                                            </div>
                                            <img src={image} className="mb-3" width={150} height={150}/>
                                            <div class="form-group row mb-3">
                                                <label for="exampleFormControlTextarea1" class="form-label">อัพโหลดรูปภาพ</label>
                                                <div class="mb-3">
                                                    
                                                    <input type="file" class="form-control" onChange={showpreview} rows="3" required></input>
                                                </div>
                                            </div>




                                        </div>
                                    </div>

                                </div>
                                <div className="col-4">

                                </div>
                                <div className="col-8">
                                    <button type="submit" class="btn btn-primary">ยืนยัน</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>

            </Layout>

        </>
    )
}
export default FormStaff;