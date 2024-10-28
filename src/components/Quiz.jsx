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
      nextbtn.innerHTML = "Try again";
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
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10 bg-[rgb(0,0,41)] text-white">
      <div className="w-full flex justify-center">
        <h1 className="text-4xl">Quiz App</h1>
      </div>
      <div className="min-h-50 flex   flex-col justify-center items-center   w-[600px] bg-white text-black rounded-md   gap-2">
        <div className="max-h-70 flex  px-3 flex-col w-[600px] bg-white text-black rounded-md  py-10  gap-7 quizend">
          <div>
            <h1 className="text-2xl">
              Q:{index + 1}
              {data[index].q}
            </h1>
          </div>
          <div className="flex gap-2">
            <input
              id="first"
              className="checked"
              type="radio"
              name="radio"
              onChange={handleInput}
              value={data[index].a}
            />
            <label htmlFor="first">A :{data[index].a}</label>
          </div>
          <div className="flex gap-2">
            <input
              id="second"
              className="checked"
              type="radio"
              name="radio"
              onChange={handleInput}
              value={data[index].b}
            />
            <label htmlFor="second">B :{data[index].b}</label>
          </div>
          <div className="flex gap-2">
            <input
              id="thard"
              className="checked"
              type="radio"
              name="radio"
              onChange={handleInput}
              value={data[index].c}
            />

            <label htmlFor="thard">C :{data[index].c}</label>
          </div>
          <div className="flex gap-2">
            <input
              id="four"
              className="checked"
              type="radio"
              name="radio"
              onChange={handleInput}
              value={data[index].d}
            />
            <label htmlFor="four">D :{data[index].d}</label>
          </div>
        </div>
        <div className=" w-44 h-20 flex flex-col justify-center items-center gap-2">
          <button
            onClick={next}
            className="px-10 h-10 bg-[rgb(0,0,41)] text-white rounded-md  nextbtn"
          >
            Next
          </button>
          <p className="score text-2xl"></p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Quiz;
