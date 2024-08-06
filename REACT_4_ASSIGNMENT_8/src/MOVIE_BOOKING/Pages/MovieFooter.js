import React from "react";

const MovieFooterFun=()=>{
    const footstyle ={
    
        color:'white',
        backgroundColor:'#BBE9FF',
        textAlign: 'center',
        height: '60px',
        color:'black',
        paddingTop:'10px'
    }

    return (

        <>
        <div className="footer">

            <div className="row" style={footstyle}>
                <div className="cols-12">
                    <h4>"Book your favorite movies effortlessly and 
                        enjoy a seamless cinematic experience with our user-friendly platform."</h4>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default MovieFooterFun;