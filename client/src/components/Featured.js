// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';
// import Modal from "react-bootstrap/Modal";
// import Wine from 'testImg.jpg';
// import React, { Component, render } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
// import BgLightImg from '../images/bg-light-landingpage-general.png'; // Tell webpack this JS file uses this image
// import '../styles/Featured.css'


//-----------New CAROUSEL W/ MULTIPLE IMAGES--------------------

import Carousel from "./Carousel/Carousel"
import CarouselImage from './CarouselImage'
// import logo from './logo.svg';
// import './App.css';
import img2 from '../images/img2.png'
import img1 from '../images/img1.gif'
// import img3 from '../images/img3.gif'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
// import FavBtn from './FavBtn'

const imageValues = [
    {
    altValue: 'img 1',
    imgSrc: img1,
    name: 'Opus One'
    },
    {
    altValue: 'img 2',
    imgSrc: img4,
    name: 'Chateau Castile-Lamont'
    },
    {
    altValue: 'img 3',
    imgSrc: img5,
    name: 'Cakebread'
    }

]

const carouselImages = imageValues.map(el => {
    return <CarouselImage altValue={el.altValue} imgSrc={el.imgSrc} name={el.name} />

})




function Featured() {
  return (
    // <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <div>
     
      <Carousel show ={3}>

          {carouselImages}
      
   {/*    
      <div style={{padding: 8}}>

        <img
          alt="img 1"
          src={ img1 }
          style={{width: '100%'}}
          // width="1600"
          height="300"
          // className="d-inline-block align-top"
        />
      <FavBtn />
      </div>

      <div style={{padding: 8}}>
        <img
          alt="img 2"
          src={ img2 }
          style={{width: '100%'}}
          // width="1600"
          height="300"
          // className="d-inline-block align-top"
        />
      <FavBtn />
        
      </div>

      <div style={{padding: 8}}>
        <img src={ img3 } alt="placeholder" style={{width: '100%'}} height="300"/>

        {/* <IconContext.Provider value={{className:'heartImg', size: '2.5rem' }}>
         <button className="favBtn3" >
            < FcLike />
          </button>
         </IconContext.Provider> */}
      {/* </div>  */}
    
       
      {/* <div style={{padding: 8}}>
        <img src={ img4 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      <div style={{padding: 8}}>
        <img src={ img5 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      <div style={{padding: 8}}>
        <img src={ img2 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      <div style={{padding: 8}}>
        <img src={ img5 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div>

      <div style={{padding: 8}}>
        <img src={ img5 } alt="placeholder" style={{width: '100%'}} height="300"/>
      </div> */}

      </Carousel>
    </div>
  );
}

export default Featured;


// -----------OLD CAROUSEL---------------------------------------


// function Featured() {
//     const [show1, setShow1] = useState(false);
//     const [show2, setShow2] = useState(false);
//     const [show3, setShow3] = useState(false);
    
//     return (
//     <>
        
        
//          <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={BgLightImg}
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h5>First slide label</h5>
//                     <p>fdgb rgregreg rg rg e geg Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     <Button variant="primary" onClick={() => setShow1(true)}>
//                         launch 1st modal
//                     </Button>
//                 </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={BgLightImg}
//                     alt="Second slide"
//                 />
            
//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     <Button variant="primary" onClick={() => setShow2(true)}>
//                         launch 2nd modal
//                     </Button>
//                 </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={BgLightImg}
//                     alt="Third slide"
//                 />
            
//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     <Button variant="primary" onClick={() => setShow3(true)}>
//                         launch 3rd modal
//                     </Button>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
        
        
//         <Modal show={show1} onHide={() => setShow1(false)}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Modal One 1 heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>This is hte body of the 1st modal</Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={() => setShow1(false)}>
//                     close
//                 </Button>
//                 <Button variant="secondary">
//                     Add To favorites     
//                 </Button>
//             </Modal.Footer>  
//         </Modal>
        
//         <Modal show={show2} onHide={() => setShow2(false)}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Modal 2 heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>This is hte body of the 2nd modal</Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={() => setShow2(false)}>
//                     close
//                 </Button>
//                 <Button variant="secondary">
//                     Add To favorites     
//                 </Button>
//             </Modal.Footer>
//         </Modal>
        
//         <Modal show={show3} onHide={() => setShow3(false)}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Modal 3 heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>This is the body of the 3rd modal</Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={() => setShow3(false)}>
//                     close
//                 </Button>
//                 <Button variant="secondary" >
//                     Add To favorites     
//                 </Button>
//             </Modal.Footer>
//         </Modal> 
//     </>
//      );
// }


// export default Featured;
    
    