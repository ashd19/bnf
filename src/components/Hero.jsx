import React, { useState } from "react";
import Form from "./Form";

function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col gap-5 items-center justify-center px-4 md:px-10 text-center ">
      <div className="rounded-full p-[2px] bg-linear-to-r from-orange-300 via-orange-500 to-yellow-400">
        <div className="rounded-full text-orange-400 bg-white p-3 md:p-5 font-semibold flex gap-1 text-lg md:text-2xl">
          <span className="bg-white w-2 h-2 mt-1 md:mt-3 rounded-full mr-1"></span>{" "}
          Access Tori Trades Worldwide
          <span className="bg-white w-2 h-2 mt-1 md:mt-3 rounded-full ml-1"></span>
        </div>
      </div>

      <div className="hidden md:flex roboto text-center tracking-tighter bg-linear-to-r from-white/50 via-white to-white/70 bg-clip-text  text-4xl sm:text-5xl md:text-7xl lg:text-8xl  md:flex-col whitespace-nowrap leading-tight">
        The Strategy Traders Have <br />
        <div className="mt-2 md:mt-3 mb-2 roboto">Been Waiting For!</div>
      </div> 
      <div className="md:hidden roboto-bold tracking-tighter bg-linear-to-r from-white/50 via-white to-white/70 bg-clip-text  text-4xl sm:text-5xl md:text-7xl lg:text-8xl flex flex-col whitespace-nowrap leading-tight">
        The Strategy Traders  <br />
        <div className="mt-2 md:mt-3 mb-2 roboto">Have Been</div>
        <div> Waiting For!</div>
      </div>

      <div className="font-bold roboto text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Doors open soon. Don't get left behind.
      </div>
      <button
        onClick={() => setShowForm(true)}
        className="shadow-orange-500/50 font-semibold text-base md:text-xl  bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 rounded-3xl px-4 py-2 md:px-6 md:py-3 hover:shadow-xl transition ease-in duration-200 shadow-lg cursor-pointer"
      >
        Claim your Spot
      </button>
      <div className="footer w-full flex px-2 md:px-4 flex-col md:flex-row gap-3 md:gap-5 font-light text-xs md:text-base mt-[50px] md:mt-[100px] md:gap-[400px] md:justify-between md:items-center">
        <div>© 2025 Tori Trades. All rights reserved.</div>
        <div>Terms & Conditions | Privacy Policy</div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-transparent rounded-3xl p-6 md:p-8 lg:p-12 max-w-md md:max-w-2xl w-full relative">
            <Form setShowForm={setShowForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
