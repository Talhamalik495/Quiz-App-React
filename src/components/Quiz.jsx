import React from "react";
import { useState } from "react";
import { Data } from "../utils/Data";
import { toast } from "react-toastify";
function Quiz() {
  let [data, setData] = useState(Data);
  console.log(data);
  let [index, setIndex] = useState(0);
  let [score, setScore] = useState(0);
  let next = () => {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      let select = document.querySelector(".score");
      let quizend = document.querySelector(".quizend");
      let nextbtn = document.querySelector(".nextbtn");
      quizend.innerText = "";
      select.innerHTML = `Youre Score${score}/5`;
      nextbtn.innerHTML = "reset";
      nextbtn.classList.add("reset");
      let reset = document.querySelector(".reset");
      reset.addEventListener("click", () => {
        window.location.reload();
      });
      toast.success("Your Quiz is successfully");
    }
    let checkedValue = document.querySelectorAll(".checked");
    checkedValue.forEach((curentValue) => {
      curentValue.checked = false;
    });
  };
  let handleInput = (event) => {
    event.preventDefault();
    let choseValue = event.target.value;
    console.log(choseValue);
    if (choseValue == data[index].ans) {
      setScore(score + 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-0  text-white font-extralight py-1">
      <div className=" flex   flex-col justify-center items-center max-h-[610px]   w-[700px] bg-white text-black rounded-md   gap-2">
        <div className=" flex  px-7 flex-col w-[700px]  text-black rounded-md  pt-10   gap-7 text-lg font-medium quizend">
          <div>
            <div className="w-full flex  pb-7">
              <h1 className="text-3xl">Quiz App</h1>
            </div>

            <hr className="border-gray-500 mb-10" />
            <h1 className="text-[25px] text-[rgb(17 24 39 )] font-popinspopins">
              {index + 1}.{data[index].q}
            </h1>
          </div>
          <div className="flex gap-2 border-[0.5px] border-gray-400">
            <label
              htmlFor="first"
              className="border-2 border-white px-3 py-3 w-full flex gap-2 "
            >
              <input
                id="first"
                className="checked"
                type="radio"
                name="radio"
                onChange={handleInput}
                value={data[index].a}
              />
              {data[index].a}
            </label>
          </div>
          <div className="flex gap-2 border-[0.5px] border-gray-400">
            <label
              htmlFor="second"
              className="border-2 border-white px-3 py-3 w-full flex gap-2 "
            >
              <input
                id="second"
                className="checked"
                type="radio"
                name="radio"
                onChange={handleInput}
                value={data[index].b}
              />
              {data[index].b}
            </label>
          </div>
          <div className="flex gap-2 border-[0.5px] border-gray-400">
            <label
              htmlFor="thard"
              className="border-2 border-white px-3 py-3 w-full flex gap-2 "
            >
              <input
                id="thard"
                className="checked"
                type="radio"
                name="radio"
                onChange={handleInput}
                value={data[index].c}
              />
              {data[index].c}
            </label>
          </div>
          <div className="flex gap-2 border-[0.5px] border-gray-400">
            <label
              htmlFor="four"
              className="border-2 border-white px-3 py-3 w-full flex gap-2 "
            >
              <input
                id="four"
                className="checked"
                type="radio"
                name="radio"
                onChange={handleInput}
                value={data[index].d}
              />
              {data[index].d}
            </label>
          </div>
        </div>

        <div className=" w-44 h-32 flex flex-col justify-center items-center gap-2">
          <button
            onClick={next}
            className="px-20 h-12 bg-purple-900 text-white rounded-md  nextbtn"
          >
            Next
          </button>
          <p className="text-lg font-poppins">{index + 1}to 5 Question</p>
          <p className="score text-2xl"></p>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
