import React from 'react'
// import { Row,Col ,Badge ,Container,Button,Table } from 'react-bootstrap';
// import { Fragment } from 'react';
import './Home.css'



const Home = () => {
  const containerStyle = {
    backgroundColor: "#343a40", // Replace this with your desired dark color
    color: "white", // Set text color to white or any other color that contrasts well with the background
    width: "100%", // Set the width to 100% of its parent element
    height: "500px"
    
};

return (
    // <Fragment>
    //     <Container className="d-flex align-items-center justify-content-center" size="lg"
    //         style={containerStyle}
    //     >
    //         <Row>
    //             <Col>
    //                 <Button variant="outline-info" size="lg">
    //                     Get our latest Album!
    //                 </Button>
    //                 <hr />
    //                 <h4>Tours</h4>
    //                 <Table striped bordered hover>
    //                     <thead>
    //                         <tr>
    //                             <th>Date</th>
    //                             <th>Location</th>
    //                             <th>Venue</th>
    //                             <th>Tickets</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         <tr>
    //                             <td>Jul 16</td>
    //                             <td>DETROIT, MI</td>
    //                             <td>DTE ENERGY MUSIC THEATER</td>
    //                             <td> <Badge pill bg="primary">
    //                                 BUY TICKET
    //                             </Badge></td>
    //                         </tr>
    //                         <tr>
    //                             <td>Jul 19</td>
    //                             <td>TORONTO, ON</td>
    //                             <td>BUDWEISER STAGE</td>
    //                             <td><Badge pill bg="primary">
    //                                 BUY TICKET
    //                             </Badge></td>
    //                         </tr>
    //                         <tr>
    //                             <td>Jul 23</td>
    //                             <td>BRISTOW, VA</td>
    //                             <td>JIGGY LUBE LIVE</td>
    //                             <td><Badge pill bg="primary">
    //                                 BUY TICKET
    //                             </Badge></td>
    //                         </tr>
    //                         <tr>
    //                             <td>Jul 26</td>
    //                             <td>PHOENIX, AZ</td>
    //                             <td>H2O CLUB</td>
    //                             <td><Badge pill bg="primary">
    //                                 BUY TICKET
    //                             </Badge></td>
    //                         </tr>
    //                         <tr>
    //                             <td>Jul 29</td>
    //                             <td>LAS VEGAS, NV</td>
    //                             <td>BACKSTAGE</td>
    //                             <td><Badge pill bg="primary">
    //                                 BUY TICKET
    //                             </Badge></td>
    //                         </tr>
    //                         <tr>
    //                             <td>Aug 03</td>
    //                             <td>CONCORD, CA</td>
    //                             <td>CONCORD PAVILION</td>
    //                             <td><Badge pill bg="primary">
    //                                 BUY TICKET
    //                             </Badge></td>
    //                         </tr>
    //                     </tbody>
    //                 </Table>
    //             </Col>
    //         </Row>
    //     </Container>
    // </Fragment>
    <div>
        <div>
            <img src='amazonlogoblack.png' />
        </div>
        <div className='textinside'>
            <h1>Welcome to Amazon</h1>
            <h4>World's biggest E-commerce website</h4>
        </div>
    </div>
);
}

export default Home