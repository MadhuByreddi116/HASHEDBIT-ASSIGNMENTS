import React from "react";
import { Link } from "react-router-dom";
const NavbarFn=()=>{
    let style ={
        padding : '60px'
    }

    let height ={
        height: '40px'
    }
    return (
        <>
         <div className='row bg-primary-subtle' style={height}>
                <div className='cols-12'>
                    <h5>
                        
                      <Link to ='/home' style={style}>HOME</Link>  
                      <Link to ='/about' style={style}>ABOUT</Link> 
                      <Link to='/service' style={style}>SERVICES</Link>
                      <Link to='/ipltable' style={style}>IPL TABLE</Link>

                        
                    </h5>    



                </div>
            </div>
        </>
    )
}

export default NavbarFn;