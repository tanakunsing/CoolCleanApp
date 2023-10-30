import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiConection from "./ApiConection";
import Badge from 'react-bootstrap/Badge';
function Layout({ header, children }) {
    const api = new ApiConection();
    const [lengthget,setlength] = useState(0);
    useEffect(() => {
        let getlogin = JSON.parse(window.sessionStorage.getItem('getlg'));
     
    
        const fetchProductdata3 = async (event) => {
          const response = await api.getproduct('api/Purchases');
          console.log(response);
        let i = 0;
          response.map((obj) => {
            if (getlogin == obj.company_name && obj.status_text == "รอยืนยัน") {
                
             
                i = i+1;
            }
            
          }
          )
          setlength(i);
          console.log(lengthget);
         
        }
        fetchProductdata3();
      })

    return (
        <>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 shadow-sm p-3 mb-5 " style={{ backgroundColor: '#4450BD' }}>
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 " >
                            <a href="/Home" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <h3>CoolClean</h3>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item" >

                                    <a href="/Home" class="nav-link align-middle px-0 " style={{ color: 'white' }}  >
                                  
                               
                                        <h4><i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline"> รับงาน</span> <Badge bg="danger">{lengthget}</Badge></h4>
                                    </a>
                                </li>
                                <li>
                                    <a href="/History" style={{ color: 'white' }}  data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">ประวัติ</span> </a>

                                </li>

                                <li>
                                    <a   style={{ color: 'white' }} href="/Account" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">เงินในบัญชี</span> </a>
                                </li>
                                <li>
                                    <a style={{ color: 'white' }} href="/Profile" class="nav-link px-0 align-middle">
                                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">โปรไฟล์</span> </a>
                                </li>
                            </ul>
                            <hr />

                        </div>
                    </div>
                    <div class="col" style={{ padding: '0' }}>
                        <nav class="navbar navbar-light shadow p-3 mb-5 bg-Light ">
                            <div class="container-fluid justify-content-end">
                                <p href="#">addmin</p>
                            </div>
                        </nav>
                        {children}

                    </div>
                </div>
            </div>

        </>
    )
}
export default Layout;