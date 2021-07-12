import React from 'react'
import FavBtn from './FavBtn'

const CarouselImage =({altValue, imgSrc, name})=> {

    return (
        <div className='carousel-card' style={{padding: 8, position: 'relative'}}>
            <img
            alt={altValue}
            src={imgSrc}
            style={{width: '100%'}}
            // width="1600"
            height="300"
            // className="d-inline-block align-top"
            />
             <FavBtn name={name} />
           
         </div>
    )
}

export default CarouselImage