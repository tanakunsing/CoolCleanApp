import Menu from './Menu';
import Stytled from './Layout.module.css';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
function Purchase() {





  return (
    <>
      <Menu />
      <div className={Stytled.Product_1}>
        <div className="container mt-5">
          <div className='row justify-content-center' >
            <div className='w-75 shadow p-3 mb-5 bg-body rounded'>
              <div className='col'>
                <h1 className='text-primary'>Purchase order</h1>

              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col " >Company name </th>
                    <th scope="col">บริษัท อมตะแอร์ จำกัด</th>
                    <th scope="col">Date</th>
                    <th scope="col" className='border border-dark'>12/10/2553</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="col" >Name </th>
                    <th scope="col" >นาย ธนกันต์ สิงเคน</th>
                    <th scope="col">Purchase order:</th>
                    <th scope="col" className='border border-dark' >123456</th>
                  </tr>
                </thead>

                <thead>
                  <tr>
                    <th scope="col">Address </th>
                    <td scope="col" className='w-25 pt-3'><p>256/123 ถ. วัชรพล แขวง คลองถนน
                      เขต สายไหม กรุงเทพมหานคร
                      10220</p></td>

                  </tr>
                </thead>
              </table>
              <table class="table border border-dark" style={{ height: '300px' }}>
                <thead class="table-primary">
                  <tr>
                    <th scope="col">รหัสบริการ</th>
                    <th scope="col">รายการ</th>
                    <th scope="col">จำนวน</th>
                    <th scope="col">ราคาค่าบริการ</th>
                    <th scope="col">จำนวนเงิน</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td >ล้างแอร์ติดผนัง</td>
                    <td>1</td>
                    <td>550</td>
                    <td>550</td>
                  </tr>

                </tbody>
              </table>
              <div className='col '>
                <div className='d-flex justify-content-center'>
                  <button type="submit" class="btn btn-primary">กดส่งคำสั่งซื้อ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}
export default Purchase;