// import React from 'react'
// import Allproducts from "../../products-data/Data"
// import {
//   Container,
//   Row,
//   Col,
//   Card
// } from "react-bootstrap";
// import CartButton from '../../components/cart-button/CartButton';

// const Women = () => {
//   return (
//      <div className="section-space">
//       <Container fluid className="content-wrapper">

//         <Row className="g-3 gx-lg-5">

//           <h2 className="section-title text-center mb-lg-4">
//             Women
//           </h2>

//           {/*  PRODUCTS */}
//           <Col lg={12} md={12} sm={12} >

//             <Row>
//               {
//               Allproducts
//               .filter((item)=> item.category === "women")
//               .map((item) => (
//                 <Col lg={3} md={6} sm={12} key={item.id} className="mb-4">

//                   <Card className="h-100 product-card shadow-sm">

//                     <Card.Img variant="top" src={item.img} />

//                     <Card.Body>
//                       <Card.Title className="fs-6">
//                         {item.name}
//                       </Card.Title>

//                       <Card.Text>
//                         <span className="fw-bold px-2">₹{item.price}</span>{" "}
//                         <del className="text-muted cut-price">₹{item.cutPrice}</del>
//                       </Card.Text>

//                       <CartButton buttontext="Add to Cart" />
//                     </Card.Body>

//                   </Card>

//                 </Col>
//               ))}
//             </Row>

//           </Col>

//         </Row>

//       </Container>
//     </div>
//   )
// }

// export default Women