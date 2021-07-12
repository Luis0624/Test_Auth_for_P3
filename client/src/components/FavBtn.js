import React from 'react'
import { FcLike } from "react-icons/fc";
import { IconContext } from "react-icons";


const FavBtn =(props)=> {

    const clickHandler =(evt)=> {
        console.log(props.name)
    }

    return (
        <>
        <IconContext.Provider value={{className:'heartImg', size: '2.5rem' }}>
        <button className="favBtn" onClick={clickHandler}>
           < FcLike />
         </button>
        </IconContext.Provider>
        </>
    )
}


export default FavBtn