import { useEffect, useState } from 'react';

import Contact from './Contact';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Styled from './Layout.module.css';

function Menu() {


    return (
        <>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container shadow  bg-body " style={{ fontSize: "17px" }}>
                    <Link to="/Home"><img src={require('../images/logo-cc.png')} width={250} height={50}></img></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" className={Styled.menu_de} id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                                <Link to="/StartRegister" class="nav-link"  >สมัครงานกับเรา</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Product">บริการของเรา</Link>

                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Status_check">ตรวจสอบสถานะ</Link>

                            </li>
                            <li class="nav-item">

                                <Link to="/Contact" class="nav-link"  >ติดต่อเรา</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/" class="nav-link"  >เกี่ยวกับเรา</Link>
                            </li>
                         

                        </ul>
                    </div>
                </div>

            </nav>

  
          
        </>
    )

}
export default Menu;