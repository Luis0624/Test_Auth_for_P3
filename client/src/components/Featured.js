import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from "react-bootstrap/Modal";
// import Wine from 'testImg.jpg';
// import React, { Component, render } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
import BgLightImg from '../images/bg-light-landingpage-general.png'; // Tell webpack this JS file uses this image
import '../styles/Featured.css'
//console.log(WineImg); // /logo.84287d09.png

// function Featured() {
//   // Import result is the URL of your image
//   return (

//     <Carousel>
//     <Carousel.Item interval={1000}>
//         <img
//         className="d-block w-50 m-auto"
//         src={WineImg}
//         alt="First slide"
//         />
//         <Carousel.Caption>
//         <h3>First slide label</h3>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item interval={500}>
//         <img
//         className="d-block w-50 m-auto"
//         src={WineImg}
//         alt="Second slide"
//         />
//         <Carousel.Caption>
//         <h3>Second slide label</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//         <img
//         className="d-block w-50 m-auto"
//         src={WineImg}
//         alt="Third slide"
//         />
//         <Carousel.Caption>
//         <h3>Third slide label</h3>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </Carousel.Caption>
//     </Carousel.Item>

//     {/* <img src={WineImg} alt="Logo" /> */}
//     </Carousel>
    
// )};


function Featured() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    
    return (
    <>
        
        
         <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BgLightImg}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>fdgb rgregreg rg rg e geg Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="primary" onClick={() => setShow1(true)}>
                        launch 1st modal
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BgLightImg}
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button variant="primary" onClick={() => setShow2(true)}>
                        launch 2nd modal
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BgLightImg}
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Button variant="primary" onClick={() => setShow3(true)}>
                        launch 3rd modal
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        
        <Modal show={show1} onHide={() => setShow1(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal One 1 heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is hte body of the 1st modal</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow1(false)}>
                    close
                </Button>
                <Button variant="secondary">
                    Add To favorites     
                </Button>
            </Modal.Footer>  
        </Modal>
        
        <Modal show={show2} onHide={() => setShow2(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal 2 heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is hte body of the 2nd modal</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow2(false)}>
                    close
                </Button>
                <Button variant="secondary">
                    Add To favorites     
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show3} onHide={() => setShow3(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal 3 heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is the body of the 3rd modal</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow3(false)}>
                    close
                </Button>
                <Button variant="secondary" >
                    Add To favorites     
                </Button>
            </Modal.Footer>
        </Modal> 
    </>
     );
}


export default Featured;
    
    