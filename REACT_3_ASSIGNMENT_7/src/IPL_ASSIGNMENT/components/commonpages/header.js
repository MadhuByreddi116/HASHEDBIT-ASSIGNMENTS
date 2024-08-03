import React from "react";

const Headfn=()=>{
    let hstyle ={
        color : 'white'
    }

    
    let height ={
        height: '80px'
    }
    return (
        <>
         <div className='row bg-secondary' style={height}>
                <div className='cols-12'>
                    <h1 style={hstyle}>React Assignment - IPL Points Table - API Call and Display</h1>
                </div>
            </div>

        
        </>
    )
}

export default Headfn;