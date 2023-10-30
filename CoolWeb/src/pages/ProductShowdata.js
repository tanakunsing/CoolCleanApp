import Stytled from './Layout.module.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import MainProduct from './MainProduct';
import { useNavigate } from "react-router-dom";
import ApiConection from "./ApiConection";
import React from 'react';
function ProductShowdata({ selectCounty }) {
  

    const [testty, setTest2] = React.useState([])
    const [onshow, setinshow] = React.useState(true)
    const [chkconfig, setchkconfig] = React.useState(false)
    const [countyIns2, setcountys2] = useState();
    const [countyIns3, setcountys3] = useState();
  
    useEffect(() => {
        const api = new ApiConection();
        console.log(selectCounty);
        let xp = selectCounty;
        setcountys2(xp);
        const fetchdata = async (event) => {
            const response = await api.getproduct('api/Member_API');
            setTest2(response);
            console.log(testty);

        }
        fetchdata();
    }, [selectCounty])



    const handleClick = (event, param, main_id) => {
        window.sessionStorage.setItem("NameCompany", JSON.stringify(param));
        window.sessionStorage.setItem("main_id", JSON.stringify(main_id));

    };


    const charts = [
        { name: 'ร้านล้างแอร์นามิ', uv: "พร้อมให้บริการล้างแอร์ทันที", imageUrl: require("../images/r1.jpg"), amt: "บางเขน", pass: 1 },
        { name: 'ร้านล้างแอร์สมคิด', uv: "พร้อมให้บริการล้างแอร์ทันที", imageUrl: require("../images/r2.jpg"), amt: "บางเขน", pass: 2 },
        { name: 'ร้านล้างแอร์ซิงเกอร์', uv: "พร้อมให้บริการล้างแอร์ทันที", imageUrl: require("../images/r3.jpg"), amt: "บางเขน", pass: 3 },
        { name: 'ร้านล้างแอร์ธน', uv: "พร้อมให้บริการล้างแอร์ทันที", imageUrl: require("../images/r4.jpg"), amt: "บางเขน", pass: 4 },
        { name: 'ร้านอมตะล้างแอร์', uv: "พร้อมให้บริการล้างแอร์ทันที", imageUrl: require("../images/r5.jpg"), amt: "บางเขน", pass: 5 },
        { name: 'ร้านล้างชัยเซอร์วิส', uv: "พร้อมให้บริการล้างแอร์ทันที", imageUrl: require("../images/r6.jpg"), amt: "บางเขน", pass: 6 },
        { name: 'ร้านล้างแอร์ศาลายา', uv: "พร้อมให้บริการล้างแอร์ทันที", imageUrl: require("../images/r7.jpg"), amt: "บางเขน", pass: 7 },
        { name: 'ร้านล้างแอร์ป.เซอร์วิส', uv: "พร้อมให้บริการล้างแอร์ทันที", imageUrl: require("../images/r8.jpg"), amt: "บางเขน", pass: 8 },

    ];
    const [insurance, setInsurance] = useState(charts);
    const [ins, setIn] = useState();
    const navigation = useNavigate();
    const insertdata = (name1, ids) => {

        console.log(name1);
        console.log(ids);
        setIn(name1)
    }
    const image_test_custommer = [
       
        { id: 2, imageUrl: require("../images/r5.jpg") },
        { id: 3, imageUrl: require("../images/r6.jpg") },
        { id: 4, imageUrl: require("../images/r8.jpg") },
        { id: 5, imageUrl: require("../images/r2.jpg") },
        { id: 6, imageUrl: require("../images/a1.jpg") },
        { id: 7, imageUrl: require("../images/a2.jpg") },
        { id: 8, imageUrl: require("../images/a3.jpg") },
        { id: 9, imageUrl: require("../images/a4.jpg") },
        { id: 1, imageUrl: require("../images/r1.jpg") },
        { id: 2, imageUrl: require("../images/r5.jpg") },
        { id: 1, imageUrl: require("../images/r1.jpg") },
        { id: 2, imageUrl: require("../images/r5.jpg") },
        { id: 1, imageUrl: require("../images/r1.jpg") },
      


    ]


    return (
        <>
        
        {
               
                testty.map((insurance, index) => (

                    insurance.status_text == "ยืนยัน" && countyIns2 == undefined &&
                    <div key={index} >
                        <div className='col'>
                            <a class="card" style={{ width: "18rem", marginLeft: "20px", marginTop: "20px", height: '350px' , textDecoration: 'none' }} href='/MainProduct' onClick={event => handleClick(event, insurance.min_name, insurance.main_id)}>
                                <img src={image_test_custommer[index].imageUrl} class="card-img-top" alt="..." height={200}></img>
                                <div class="card-body ">

                                    <h5 class="card-title text-primary"><b>{insurance.min_name}</b>{ }</h5>
                                    <p class="card-text mt-4">{insurance.min_Description}</p>

                                </div>
                            </a>
                        </div>
                    </div>

                ))

            }

            {
                
                testty.map((insurance, index) => (

                    insurance.status_text == "ยืนยัน" && countyIns2 == insurance.min_Address && 
                    <div key={index} >
                        <div className='col'>
                            <a class="card" style={{ width: "18rem", marginLeft: "20px", marginTop: "20px", height: '350px', textDecoration: 'none' }} href='/MainProduct' onClick={event => handleClick(event, insurance.min_name, insurance.main_id)}>
                                <img src={image_test_custommer[index].imageUrl} class="card-img-top" alt="..." height={200}></img>
                                <div class="card-body ">

                                    <h5 class="card-title text-primary"><b>{insurance.min_name}</b>{ }</h5>
                                    <p class="card-text mt-4">{insurance.min_Description}</p>

                                </div>
                            </a>
                        </div>
                    </div>

                ))

            }


            {
                
                testty.map((insurance, index) => (

                    insurance.status_text == "ยืนยัน" && countyIns2 == "ทั้งหมด"  &&
                    <div key={index} >
                        <div className='col'>
                            <a class="card" style={{ width: "18rem", marginLeft: "20px", marginTop: "20px", height: '350px' , textDecoration: 'none'}} href='/MainProduct' onClick={event => handleClick(event, insurance.min_name, insurance.main_id)}>
                                <img src={image_test_custommer[index].imageUrl} class="card-img-top" alt="..." height={200}></img>
                                <div class="card-body ">

                                    <h5 class="card-title text-primary"><b>{insurance.min_name}</b>{ }</h5>
                                    <p class="card-text mt-4">{insurance.min_Description}</p>

                                </div>
                            </a>
                        </div>
                    </div>

                ))

            }








        </>
    )
}
export default ProductShowdata;