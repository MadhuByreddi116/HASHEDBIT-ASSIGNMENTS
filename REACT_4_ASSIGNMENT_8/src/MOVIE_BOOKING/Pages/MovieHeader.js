import React from "react";

const MovieHeadFn=()=>{

    const headstyle ={
    
        height: '80px',
        color:'#B4D6CD',
        textStyle:'bold',
        textAlign: 'center',
        paddingTop : '10px',
        backgroundColor:'#1A3636'
    }
    return (
        <>
        <div className="movielist ">
            <div className='row' style={headstyle} > 

                <div className="cols-12 " >
                <h1>React Assignment - Movie Booking Web App</h1>
                </div>
            </div>



        </div>
        
        </>
    )

}

export default MovieHeadFn;