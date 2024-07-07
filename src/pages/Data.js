import React, { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/catalogue.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.id}</h2>
              <h2>{item.title}</h2>
              <h2>{item.description}</h2>
              <p>{item.price}</p>
              {/* <img src={item.image} alt={item.name} /> */}
            </div>
          );
        })}
        
    </div>
  );
}

export default Data;
