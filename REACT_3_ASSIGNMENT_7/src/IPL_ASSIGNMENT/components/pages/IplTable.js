import React, { useEffect, useState } from "react";

const IplFn =()=>{
    const [ipltext,setiplText]=useState([]);

    const callApi = async()=>{
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();


        // function to sort the data
      
        const sortedData = data.sort((a, b) => {
            if (a.NRR < b.NRR) {
                return -1;
            }
            if (a.NRR > b.NRR) {
                return 1;
            }
            return 0;
        });
            setiplText(sortedData);

    }

    useEffect( ()=>{
        callApi();
    },[])
    return (
        <>
        <h2>IPL Table Displaying Using API Call</h2>
        <div >

         <table className="table table-striped">
             <thead>
                <th>No</th>
                <th>Team</th>
                <th>Matches</th>
                <th>Won</th>
                <th>Lost</th>
                <th>Tied</th>
                <th>NRR</th>
                <th>Points</th>

             </thead>
             <tbody>
               {ipltext.map((val)=>(
             <tr>

                 <td>{val.No}</td>
                 <td>{val.Team}</td>
                 <td>{val.Matches}</td>
                 <td>{val.Won}</td>
                 <td>{val.Lost}</td>
                 <td>{val.Tied}</td>
                 <td>{val.NRR}</td>
                 <td>{val.Points}</td>
              </tr>    
               )
            )

            }
                    
             </tbody>

         </table>


        </div>
        </>
    )
}

export default IplFn;

// https://my-json-server.typicode.com/FreSauce/json-ipl/data