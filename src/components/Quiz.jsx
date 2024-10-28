import React from "react";
import { useState } from "react";
import { Data } from "../utils/Data";
function Quiz() {
  let [data, setData] = useState(Data);
  console.log(data);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-7 bg-[rgb(0,0,41)] text-white">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl">Quiz App</h1>
      </div>
      <div className="min-h-72 flex  px-3 flex-col w-[500px] bg-white text-black rounded-md  py-5  gap-4">
        <div>
          <h1>{data[0].q}</h1>
        </div>
        <div className="flex gap-2">
          <input type="radio" />
          <p>{data[0].a}</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" />
          <p>{data[0].b}</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" />
          <p>{data[0].c}</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" />
          <p>{data[0].d}</p>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
