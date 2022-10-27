import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Characters() {
  const [data, setData] = useState();
  const getData = async () => {
    const response = await axios.get(`https://valorant-api.com/v1/agents`, {
      headers: { Accept: "application/json" },
    });
    setData(response.data);
  };
  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div className="container">
      
      
      

    </div>
  );

}

export default Characters;