"use client";
import React, { useState, useEffect } from "react";

function FetchApi() {
  interface Idata {
    id: number;
    title: string;
    image: string;
    gender: string;
    description: string;
    category: string;
  }
  const [fetchedData, setFetchedData] = useState<Idata[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((responseData: Idata[]) => setFetchedData(responseData));
  }, []);

  return (
    <>
      <div className=" flex flex-col items-center px-10">
        {fetchedData.map((data) => (
          <div
            key={data.id}
            className="border-2 border-black border-solid m-4 p-4 w-1/2"
          >
            <h1 className="text-xl font-bold">{data.title}</h1>
            <img src={data.image} height="300px" width="150px" />
            <p>Description: {data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FetchApi;
