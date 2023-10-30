import Layout from "./Layout"
import Stytled from './Layout.module.css';
import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import ApiConection from "./ApiConection";
import { useNavigate } from "react-router-dom";


import Swal from 'sweetalert2'

function FormProduct() {
    const api = new ApiConection();
    const [onshows, setinshow_product] = React.useState(false)
    const [name, setName] = useState("");
    const [getmain_id, setmain_id] = useState("");
    const [getid_product, setid_product] = useState(0);
    const [gettype, settype] = useState("");
    const [getPrice, setPrice] = useState(0);
    const [details, setAddress_details] = useState("");
    const navigation = useNavigate();
   

    const nexts = (evevt) => {
        navigation(`/FormStaff`);
    }

    const handleSave2 = async (event) => {
        event.preventDefault();
        if (getmain_id.length < 0 || getPrice.length < 0 || gettype.length < 0 || details.length == 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        } else {

            let datas = {};

            let data = {
                main_id: getmain_id,
                product_id: "",
                productName: gettype,
                price: getPrice,
                product_description: details,

            }
            api.postData(`api/Products`, data)
                .then(response => {
                    console.log(response);
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'

                    )
                    setPrice(0);

                })

        }
    }

    useEffect(() => {
        let getmain_ids = JSON.parse(window.sessionStorage.getItem('getmain_id'));
        setmain_id(getmain_ids);
        console.log(getmain_ids);
    
    })
       
    return (
        <>
            <Layout header={'Formregister'}>

                <div className={Stytled.Product_1}>
                    <div className="container w-100">


                        <div className="row">
                            <div className="col-1">
                                
                            </div>
                          
                            <div class="col-8 ">
                                <div >
                                    <form onSubmit={handleSave2} className="needs-validation" >
                                        <div className="border shadow-sm p-3 mb-3 bg-body rounded">
                                            <p className="ms-2">การให้บริการ</p>
                                            <div className="w-75 ms-5">
                                                <div class="form-group row mb-3">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label " >เพิ่มบริการ</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" id="validationCustom01" onChange={(e) => settype(e.target.value)} class="form-control" required />
                                                    </div>
                                                    
                                                </div>
                                                <div class="form-group row mb-3">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label " >ราคา</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" onChange={(e) => setPrice(e.target.value)} class="form-control" id="validationCustom01" required />
                                                    </div>
                                                  
                                                </div>

                                                <div class="form-group row mb-3">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label " >รายละเอียด</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" onChange={(e) => setAddress_details(e.target.value)} class="form-control" id="validationCustom01" required />
                                                    </div>
                                                    
                                                </div>


                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary ">ยืนยัน</button>
                                        <button onClick={nexts} class="btn btn-primary ms-2">ต่อไป</button>
                                    </form>

                                    <div class="form-group row mt-3">

                                        <div class="col-sm-10">

                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>




            </Layout >
        </>
    )

}
export default FormProduct;