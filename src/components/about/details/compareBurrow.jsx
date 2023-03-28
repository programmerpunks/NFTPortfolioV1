import React from "react";

import { burrowsData } from "../../../content/About/burrows";

const CompareBurrows = () => {
  return (
    <>
      <div className="flex flex-wrap flex-col md:flex-row mt-10">
        <div className="flex  flex-col flex-wrap md:w-1/2 w-1/1 border-b-2  md:border-r-2 p-6">
          <img
            src={burrowsData[0].image}
            alt="/"
            className="md:w-[80%] flex justify-center"
          />
          <div className="flex flex-col">
            <div className="flex justify-center text-white text-2xl">
              {burrowsData[0].title}
            </div>
            <div className="flex justify-center">
              <ul className="p-3 text-white">
                {burrowsData[0].functions.map((func) => {
                  return <li>{func}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  flex-col flex-wrap md:w-1/2 w-1/1 border-b-2 p-6">
          <img
            src={burrowsData[1].image}
            alt="/"
            className="md:w-[80%] flex justify-center"
          />
          <div className="flex flex-col">
            <div className="flex justify-center text-white text-2xl">
              {burrowsData[1].title}
            </div>
            <div className="flex justify-center">
              <ul className="p-3 text-white">
                {burrowsData[1].functions.map((func) => {
                  return <li>{func}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  flex-col flex-wrap md:w-1/2 w-1/1  md:border-r-2 p-6">
          <img
            src={burrowsData[2].image}
            alt="/"
            className="md:w-[80%] flex justify-center"
          />
          <div className="flex flex-col">
            <div className="flex justify-center text-white text-2xl">
              {burrowsData[2].title}
            </div>
            <div className="flex justify-center">
              <ul className="p-3 text-white">
                {burrowsData[2].functions.map((func) => {
                  return <li>{func}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:w-1/2 w-1/1 border-t-2 md:border-none p-6">
          <img
            src={burrowsData[3].image}
            alt="/"
            className="md:w-[80%] flex justify-center"
          />
          <div className="flex flex-col">
            <div className="flex justify-center text-white text-2xl">
              {burrowsData[3].title}
            </div>
            <div className="flex justify-center">
              <ul className="p-3 text-white">
                {burrowsData[3].functions.map((func) => {
                  return <li>{func}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareBurrows;
