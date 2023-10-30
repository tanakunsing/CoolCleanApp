
import { useEffect, useState } from 'react';
import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
function Testimage() {

  useEffect(() => {
    let NameCompany = JSON.parse(window.sessionStorage.getItem('NameCompany'));

  })

  const charts = [
    { id: 0, name: 'ทีเอสแอร์เซอร์วิส', imageUrl: require("../images/r1.jpg") },
    { id: 1, name: 'อมตะแอร์', imageUrl: require("../images/r5.jpg") },
    { id: 2, name: 'ชัยแอร์เซอร์วิส', imageUrl: require("../images/r6.jpg") },
    { id: 3, name: 'ป.แอร์เซอร์วิส', imageUrl: require("../images/r8.jpg") },
    { id: 4, name: 'เพรชพลอยแอร์', imageUrl: require("../images/r2.jpg") },
  ];

  const [nameMamber, setmember] = useState(charts);




  return (
    <>
      <div style={{ display: 'block', width: 800, padding: 30 }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={charts[0].imageUrl}
              width={500}
              height={500}
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={require("../images/BKB.jpg")}
              alt="Image Two"
              width={500}
              height={500}
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={require("../images/BKB1.jpg")}
              alt="Image Two"
              width={500}
              height={500}
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={require("../images/BKB2.jpg")}
              alt="Image Two"
              width={500}
              height={500}
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </div>
    </>
  )
}

export default Testimage;