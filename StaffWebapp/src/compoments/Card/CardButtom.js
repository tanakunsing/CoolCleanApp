import { Table } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Purchase from '../../Purchase';
import ApiConection from '../../ApiConection';
import { useEffect, useState } from 'react';
import React from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
function CardButtom({ data }) {
    const [txtname, settxtname] = useState("");
    const [testty, setTest2] = React.useState({})
    const [onshow, setinshow] = React.useState(false)
    const [chkconfig, setchkconfig] = React.useState('')
    const api = new ApiConection
    const navigation = useNavigate();
    useEffect(() => {
    
        const fetchdata = async (event) => {
            const response = await api.getproduct('api/Purchases');
            if (response != "") {
                setTest2(response);
                setinshow(true);
            }
            settxtname(data);

        }
        fetchdata();

    }, [data])

    const handlerCilk = async (event, pas) => {
        let getdata = pas;
        console.log(getdata);
        event.preventDefault();
        const response = await api.getproduct('api/Purchases');
        let xp = {}
        response.map((obj) => {
            if ( pas == obj.id_product) {
                xp = {
                    id: obj.id,
                    date: obj.date,
                    company_name: obj.company_name,
                    customer_name: obj. customer_name,
                    typeService:  obj.typeService,
                    house_number:  obj.house_number,
                    price: obj.price,
                    phone:  obj.phone,
                    email: obj.email,
                    check_Email:  obj.check_Email,
                    county: obj.county,
                    subdistrict: obj.subdistrict,
                    province: obj.province,
                    postal_code: obj.postal_code,
                    address_details: obj. address_details,
                    status_text: "ยืนยัน",
                    is_active: true,
                    id_product: obj.id_product
                }

            }
        })

        console.log(xp);
        const responses = await api.putData(`api/Purchases/${xp.id}`, xp);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Save now!',
                    'Your file has been Save.',
                    'success'
                )
                navigation(`/Home`);

            }
        })

    }
    const handlerCilk2 = async (event, pas1) => {
             
                window.sessionStorage.setItem("pas", JSON.stringify(pas1));
                navigation(`/Purchase`);
    }
    return (
        <>
            {
                onshow == true &&
                testty.map((ins, index) => (
                    txtname === ins.company_name && ins.status_text == "รอยืนยัน" &&
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
                                        <td><button onClick={(event) => handlerCilk(event, ins.id_product)} class="btn btn-warning">ยืนยัน</button><button onClick={(event) => handlerCilk2(event, ins.id_product)} type="button" class="btn btn-primary">รายละเอียด</button></td>
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
        </>


    )

}
export default CardButtom;