import React from "react";
// import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>In Our World, Age Is Sexy.</h1>
                {/* <Typed 
                    className="typed-text"
                    strings={["Full Stack Web Developer", "Stylist", "High Tech Fashion", "Creativity", "Technology", "Aesthetics"]}
                    typeSpeed={40}
                    backSpeed={70}
                    loop
                /> */}
                <a href="#" className="btn-main">Launch VR</a> 
            </div>
        </div>
    )
}

export default Header;

