import React from "react";
import { useState } from "react";
import { Data } from "../utils/Data";
import { toast } from "react-toastify";
function Quiz() {
  let [data, setData] = useState(Data);
  console.log(data);
  let [index, setIndex] = useState(0);
  let next = () => {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      toast.success("Quiz Over");
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10 bg-[rgb(0,0,41)] text-white">
      <div className="w-full flex justify-center">
        <h1 className="text-4xl">Quiz App</h1>
      </div>
      <div className="min-h-80 flex  px-3 flex-col w-[500px] bg-white text-black rounded-md  py-5  gap-7">
        <div>
          <h1 className="text-3xl">Q:{data[index].q}</h1>
        </div>
        <div className="flex gap-2">
          <input type="radio" />
          <p>A :{data[index].a}</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" />
          <p>B :{data[index].b}</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" />
          <p>C :{data[index].c}</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" />
          <p>D :{data[index].d}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={next}
            className="px-10 h-10 bg-[rgb(0,0,41)] text-white rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
