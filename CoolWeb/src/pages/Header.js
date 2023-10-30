import Stytled from './Layout.module.css';
import { useEffect, useState } from 'react';


function Header({ header }) {
  const [getHeader, setLogin] = useState();
  useEffect(() => {
    setLogin(header);
  }, [])
  return (

    <>
     
      {
        getHeader == "HOME" &&

        <div className={Stytled.bg} >
          <div className='container-md'>
            <div className='row'>
              <h1 className={Stytled.fn_mar_1}>ล้างแอร์มืออาชีพ</h1>
              <h1 className={Stytled.fn_mar_2}>professional</h1>

            </div>
            <div className={Stytled.im_design}>
             
            </div>
            <div className={Stytled.im_design_1}>
              <a style={{ width: '200px' ,height:'50px'}} href='/Product'  type="button" class="btn btn-dark fs-5 ">เรียกใช้บริการ</a>
              <a style={{ width: '200px' ,height:'50px'}} href='/StartRegister'  type="button" class="btn btn-dark fs-5 ms-3">สมัครร่วมงานกับเรา</a>
            </div>

          </div>
        </div>
      }{
        getHeader != "HOME" &&

        <div className={Stytled.bg2} >
          <div className='container'>
            <div className='row'>
              <h1 className={Stytled.fn_mar_3}>ล้างแอร์มืออาชีพ</h1>
              <h1 className={Stytled.fn_mar_4}>professional</h1>

            </div>
            <div className={Stytled.im_design}>
           
            </div>
          </div>
        </div>


      }


      


      
     

    </>
  )

}
export default Header;