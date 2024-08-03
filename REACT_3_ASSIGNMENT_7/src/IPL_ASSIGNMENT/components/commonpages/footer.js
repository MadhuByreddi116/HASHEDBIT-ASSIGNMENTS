import React from "react";

const FooterFn = () => {
  return (
    <>
      <div className="row bg-dark-subtle">
        <div className="cols-12">
          Created a table for displaying the points of IPL Season 2022. The data
          is provided in this API endpoint:
          https://my-json-server.typicode.com/FreSauce/json-ipl/data 
          Uses the script to fetch the data from the given API endpoint. Sort the data
          fetched in ascending order based on the NRR value of each team.
          Display the sorted data in the table.
        </div>
      </div>
    </>
  );
};

export default FooterFn;
