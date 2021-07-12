import { React, useState, useEffect } from 'react'
import './carousel.css'
// import { FcLike } from "react-icons/fc";
// import { IconContext } from "react-icons";

const Carousel = (props) => {
    const {children, show} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    // function to handle when the control button is clicked.
    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    // for touchscreens, swiping left/right to move images
    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)

    }

    const handleTouchMove = (e) => {
         const touchDown = touchPosition
        
        if(touchDown === null) {
            return
        }
        
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        
        if (diff > 5) {
            next()
        }
        
        if (diff < -5) {
            prev()
        }  

        setTouchPosition(null)
    }    


    return (
        <div className="carousel-container">

            <div className="carousel-wrapper">

                {   currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }

                <div 
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >

                    <div 
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (104 / show)}%)`}}

                    >
                        {children}
                        {/* <IconContext.Provider value={{className:'heartImg', size: '2.5rem' }}>
                            <button className="favBtn" >
                                < FcLike />
                            </button>
                        </IconContext.Provider> */}
                        
                    </div>

                   {
                        currentIndex < (length - show) &&
                        <button onClick={next} className="right-arrow">
                            &gt;
                        </button>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Carousel