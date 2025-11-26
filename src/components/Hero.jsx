// import React, { useState } from "react";
// import Form from "./Form";

// function Hero() {
// const [showForm, setShowForm] = useState(false);

// return (
// <div className="flex flex-col gap-5 items-center justify-center px-4 md:px-10 text-center ">
// <div className="rounded-full p-0.5 bg-linear-to-r from-orange-300 via-orange-500 to-yellow-400">
// <div className="rounded-full text-orange-400 bg-white p-3 md:p-5 font-semibold flex gap-1 text-lg md:text-2xl">
// <span className="bg-white w-2 h-2 mt-1 md:mt-3 rounded-full mr-1"></span>{" "}
// Access Tori Trades Worldwide
// <span className="bg-white w-2 h-2 mt-1 md:mt-3 rounded-full ml-1"></span>
// </div>
// </div>

// <div className="hidden md:flex roboto text-center tracking-tighter bg-linear-to-r from-white/50 via-white to-white/70 bg-clip-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl md:flex-col whitespace-nowrap leading-tight">
// The Strategy Traders Have <br />
// <div className="mt-2 md:mt-3 mb-2 roboto">Been Waiting For!</div>
// </div>
// <div className="md:hidden roboto-bold tracking-tighter bg-linear-to-r from-white/50 via-white to-white/70 bg-clip-text text-[11vw] sm:text-5xl md:text-7xl lg:text-8xl flex flex-col whitespace-nowrap leading-tight">
// The Strategy Traders <br />
// <div className="mt-2 md:mt-3 mb-2 md:roboto roboto-bold text-[11vw]">
// Have Been
// </div>
// <div> Waiting For!</div>
// </div>

// <div className="font-bold roboto text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">
// Doors open soon. Don't get left behind.
// </div>
// <button
// onClick={() => setShowForm(true)}
// className="shadow-orange-500/50 font-semibold text-base md:text-xl bg-linear-to-r from-orange-300 via-orange-400 to-orange-500 rounded-3xl px-4 py-2 md:px-6 md:py-3 hover:shadow-xl transition ease-in duration-200 shadow-lg cursor-pointer"
// >
// Claim your Spot
// </button>
// <div className="footer w-full flex px-2 md:px-4 flex-col md:flex-row gap-3 font-light text-xs md:text-base mt-[50px] md:mt-[100px] md:gap-[400px] md:justify-between md:items-center">
// <div>© 2025 Tori Trades. All rights reserved.</div>
// <div>Terms & Conditions | Privacy Policy</div>
// </div>

// {showForm && (
// <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
// <div className="bg-transparent rounded-3xl p-6 md:p-8 lg:p-12 max-w-md md:max-w-2xl w-full relative">
// <Form setShowForm={setShowForm} />
// </div>
// </div>
// )}
// </div>
// );
// }

// export default Hero;

import React, { useState } from "react";
import { Copy, Mail, Badge, Loader2 } from "lucide-react";

const GOOGLE_SHEET_WEBAPP_URL =
  "https://script.google.com/macros/s/AKfycbyX_U5_iLL7KNpSMb6bc5cfQs8IgpXOiYGP-FIu0Djl7lb5EYQ7xnRkqepcq1FLj8Bi/exec";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || loading) return;

    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      alert("There was an error submitting your email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <div className=" " />

      <header className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 mt-10 md:ml-10 md:absolute top-0 left-0 z-10">
        <div className="text-red-700 text-6xl font-extrabold holtwood-one-sc-regular">
          BNF
        </div>
      </header>

      <main className="relative z-10 text-center px-6 mt-10">
        <div className="inline-flex items-center space-x-2 px-4 roboto py-2 rounded-full text-black bg-white border-orange-300 border-2 text-sm mb-6">
          <span>🚀 Built in India</span>
        </div>

        <h1 className="md:flex items-center justify-center text-center text-6xl md:text-6xl text-black tracking-tighter mb-4">
          The Strategy <br />
          <span className="text-orange-500 ml-5 mr-5">Traders</span>
          Have
        </h1>
        <h2 className="md:flex md:items-center justify-center sm:text-4xl text-center md:text-5xl font-semibold text-black mb-6">
          <span className="text-orange-500 mr-5">Been Waiting</span>
          for
        </h2>

        <p className="text-black max-w-2xl roboto mx-auto md:text-3xl mb-10">
          Doors open soon. Don't get left behind.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl text-black focus:ring-1 border border-orange-200 foucs:border-transparent focus:ring-orange-500 outline-none text-sm"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-xl text-sm font-medium bg-orange-600 hover:bg-orange-700 transition active:scale-95 ${
              clicked ? "scale-95" : ""
            } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <Loader2 className="animate-spin w-4 h-4 mx-auto" />
            ) : submitted ? (
              "Subscribed ✅"
            ) : (
              "Notify Me"
            )}
          </button>
        </form>

        <div className="footer w-full text-black flex px-2 md:px-4 flex-col md:flex-row font-light text-xs md:text-base mt-[50px] md:mt-[170px] md:gap-[400px] md:justify-between md:items-center">
          <div>© 2025 Tori Trades. All rights reserved.</div>
          <div>Terms & Conditions | Privacy Policy</div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
