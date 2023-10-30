import { Button } from "react-bootstrap";
import ProductShowdata from "./ProductShowdata";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Stytled from './Layout.module.css';
import Testimage from "../components/Testimage";
import Formsale from "./Formsale";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Nav_Sm from "../components/Nav_Sm";
import ApiConection from "./ApiConection";
import React from "react";
import Menu from "./Menu";
function MainProduct({ name_1, value_1, }) {
  const [product2, setproduct2] = React.useState([]);
  const [onshows, setinshow_product] = React.useState(false)
  const [namecompany, setnamecompany,] = React.useState('');
  useEffect(() => {
    let main_id = JSON.parse(window.sessionStorage.getItem('main_id'));
    let NameCompany = JSON.parse(window.sessionStorage.getItem('NameCompany'));
    setnamecompany(NameCompany);
    const api = new ApiConection();
    console.log(main_id);
    const fetchProductdata = async (event) => {
      const response = await api.getproduct('api/Products');

      if (response == "") {
        setinshow_product(false)
      }
      setinshow_product(true)
      response.map((obj) => {
        if (main_id == obj.main_id) {
          product2.push({
            id: obj.main_id,
            main_id: obj.main_id,
            Product_id: obj.product_id,
            productName: obj.productName,
            price: obj.price,
            product_description:obj.product_description
          })
        }
      })
    }
    fetchProductdata();

    setalldatas(main_id);
    setInsurance(NameCompany);


  }, [])

  const testdata = [
    { name: 1, po: 'ล้างแอร์ติดผนัง', po1: 'ล้างแอร์ติดล้างแอร์ติดผนัง', p1: 500, p2: 900, p2: 1500 },
    { name: 2, po: 'ล้างแอร์ติดผนัง', po1: 'ล้างแอร์ติดล้างแอร์ตั้งพื้น', p1: 1500, p2: 900, p2: 1500 },
    { name: 2, po: 'ล้างแอร์ติดผนัง', po1: 'ล้างแอร์ติดล้างแอร์ตั้งพื้น', p1: 1500, p2: 900, p2: 1500 },
  ]
  const [insurance, setInsurance] = useState();
  const [keytest, setkey] = useState();
  const [alldatas, setalldatas] = useState([]);
  const [test, settest] = useState(testdata);


  const getdatamost = (dd, vv) => {
    let pp = "f";
    if (dd == vv) {
      pp = "oo";
    }
    return pp

  }

  const navigation = useNavigate();
  const handleClick1 = (event) => {
    navigation(`/Profile`);
  }
  const handleClick2 = (event, pass,NameCom) => {
    window.sessionStorage.setItem("Pass_product", JSON.stringify(pass));
    window.sessionStorage.setItem("NameCompany", JSON.stringify(NameCom));
    
    navigation(`/Formsale`);
  }



  return (
    <>
       <Menu/>
        <div className={Stytled.Product_1}>
          <div className="container w-100">
            <div className="row  mb-3 mt-3">
              <div className="col-5 mt-5"> < Nav_Sm /></div>
              <div class="col-8">
                <Testimage />
              </div>

              <div class="col-4">

                <div style={{ marginTop: '20px' }}>

                  <Card className="card shadow p-3 mb-5 bg-body rounde fixed ">
                    <Card.Header>
                      <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item >
                          <Nav.Link href="#first">฿500</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#link">฿1000</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link href="#">฿1200</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        </Nav.Item>
                      </Nav>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text className="text-primary"><strong>แพ็กเกจ :<i class="bi bi-check-lg fs-4"></i> แก้ไขบัค เพิ่มฟังก์ชัน ของเว็บไซต์เดิม</strong></Card.Text>
                      <Card.Text>
                        แก้ไขบัค หรือ เพิ่มฟังก์ชัน ในระบบเว็บไซต์ ตามที่ลูกค้าต้องการ ** พร้อม source ที่แก้ไข
                      </Card.Text>
                      <Card.Text className="text-primary"><strong>ข้อมูลเพิ่มเติม</strong></Card.Text>
                      <hr />
                      <Button variant="primary w-100">สั่งซื้อ</Button>
                    </Card.Body>
                  </Card>
                </div>

              </div>
            </div>


            <div class="row">
              <div class="col-8 mb-5 mt-5">

                <h2 className="text-primary mb-5"><strong>{insurance}</strong></h2>
                <hr />

                <p class="">### บริการต่างๆ
                  - เว็บไซต์ พร้อม ระบบ auto เกมค่ายต่างๆ ขายขาดไม่มีรายเดือน เริ่มต้น 150,000 บาท
                  - เว็บไซต์ขายบัตรเติมเงิน เติมเกมอัตโนมัติ เริ่มต้น 59,900 บาท
                  - เว็บไซต์ขายรหัสเกม บัตรเติมเงินต่างๆ แบบสต๊อกสินค้า เริ่มต้น 28,500 บาท
                  - เว็บไซต์ขาย Robux ระบบ id pass เริ่มต้น 19,900 บาท
                  - เว็บไซต์ขาย Robux ระบบ VIP, ฟาร์ม เริ่มต้น 49,900 บาท

                  ### รับทำพัฒนาระบบเติมเงินด้วย True Wallet API, TMPay API, QR Payment
                  - TMPay API เริ่มต้น 4,500 บาท (Update 08/05/2020)
                  - SCB API QR Payment แท้ขอใช้งานตรงกับธนาคารแบบถูกต้อง 80,000 (ดำเนินการให้ทุกขั้นตอน) ** ราคานี้ยังไม่รวม ค่าสนับสนุนการพัฒนาระบบ ที่ SCB เรียกเก็บ **
                  พัฒนาบนภาษา PHP+MySQL
                </p>
                <p>==== ⭐🤩 เงื่อนไขการใช้บริการ 🤩⭐ ====
                  ⭐ Code ทุกส่วนถือว่าเป็นลิขสิทธิ์ของทางทีมและลูกค้าร่วมกัน ทางทีมสามารถนำระบบที่พัฒนาขึ้นมาไปต่อยอดต่อได้อย่างถูกต้อง ✅✅✅
                  <p>⭐ ทางทีมจะไม่รับผิดชอบใดๆทั้งสิ้นหากเกิดความเสียหายแก่ลูกค้า ภายหลังจากที่หมดการรับประกันแล้ว 🙅‍♂️🙅‍♂️🙅‍♂️</p>
                  ⭐ ทางทีมมีสิทธิ์เปลี่ยนเงื่อนไขการให้บริการตลอดเวลาโดยไม่แจ้งให้ทราบล่วงหน้า 👌👌👌</p>
                <h5 className="text-primary mb-5 mt-5"><strong>แพ็คเกจ</strong></h5>



                {
                  onshows == false &&
                  <div class="text-center">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                }




                {
                  onshows == true &&
                  product2.map((tests, index) => (

                    <div key={index} >

                      <div class="card " style={{ marginTop: '20px' }}>
                        <div className="container p-3">
                          <div class="d-flex text-primary">
                            <div className="w-100"><p><strong><i class="bi bi-check-lg"></i>{tests.productName}</strong></p></div>
                            <div><p class=""><strong>฿{tests.price}</strong></p></div>
                          </div>
                          <div class="">
                            <p class="">{tests.product_description}</p>
                            <p class=""> รับประกัน 30 วัน</p>

                          </div>
                          <hr />
                          <div className="d-flex justify-content-end">
                            <a class="btn btn-primary" href="/Formsale" onClick={event => handleClick2(event, tests.Product_id,namecompany)} >กดยืนยันสั่งซื้อ</a>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))
                }






                <h5 className="text-primary mt-5 mb-5"><strong>ผู้ให้บริการ</strong></h5>
                <div class="card mb-3 mt-3" style={{ maxWidth: '100%' }}>
                  <div class="row g-0">
                    <div class="col-md-2 p-5">
                      <img style={{ borderRadius: '50%' }} src={require("../images/r1.jpg")} width={100} alt="..." />

                    </div>
                    <div class="col-md-10">
                      <div class="card-body">

                        <div className="d-flex justify-content-start">
                          <div><h5 class="card-title">{insurance}</h5></div>
                        </div>

                        <div className="d-flex justify-content-end" style={{ marginTop: '-40px', marginBottom: '10px' }}>
                          <a class="primary " href="/Profile" ><i class="bi bi-arrow-up-right-square"></i> ดูโปรไฟล์</a>
                        </div>
                        <p class="card-text">มีประสบการณ์การในการทำงาน มีความรู้ รู้จริง!</p>

                      </div>


                    </div>
                    <hr />
                    <div className="row text-center">
                      <div className="col">
                        <p>4 <i class="bi bi-check-circle"></i>งานสำเร็จ</p>
                      </div>
                      <div className="col">
                        <p>4<i class="bi bi-cart-check"></i> ขายได้</p>
                      </div>
                      <div className="col">
                        <p>50%<i class="bi bi-repeat"></i> ทำซ้ำ</p>
                      </div>
                      <div className="col">
                        <p>100%<i class="bi bi-bookmark-check"></i> การรับงาน</p>
                      </div>

                    </div>

                  </div>
                </div>


                <h5 className="text-primary mt-5 mb-5"><strong>รีวิวความคิดเห็นเกี่ยวกับบริการ</strong></h5>
                <div class="row d-flex ">
                  <div class="col-md-12 ">
                    <div class="card">
                      <div class="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                        <div class="d-flex flex-start w-100 p-1">
                          <img class="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                            height="40" />
                          <div class="form-outline w-100">
                            <textarea class="form-control" id="textAreaExample" rows="4"
                              style={{ background: "#fff" }}></textarea>
                            <label class="form-label" for="textAreaExample">Message</label>
                          </div>
                        </div>
                        <div class="float-end mt-2 pt-1">
                          <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                          <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="d-flex flex-start align-items-center">
                          <img class="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="60"
                            height="60" />
                          <div>
                            <h6 class="fw-bold text-primary mb-1">Lily Coleman</h6>
                            <p class="text-muted small mb-0">
                              Shared publicly - Jan 2020
                            </p>
                          </div>
                        </div>

                        <p class="mt-3 mb-4 pb-2">
                          บริการดี พนักงานสุภาพแต่งกาย สะอาด
                        </p>

                        <div class="small d-flex justify-content-start">
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="far fa-thumbs-up me-2"></i>
                            <p class="mb-0">Like</p>
                          </a>
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="far fa-comment-dots me-2"></i>
                            <p class="mb-0">Comment</p>
                          </a>
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="fas fa-share me-2"></i>
                            <p class="mb-0">Share</p>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>







              </div>
            </div>


            <div>
      
            </div>

          </div>
        </div>


      

    </>
  )
}
export default MainProduct;