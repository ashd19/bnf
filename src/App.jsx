import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Amber Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex roboto flex-col w-full relative z-10">
        <Navbar />
        <Hero />
        {/* <Form /> */}
      </div>
    </div>
  );
}

export default App;
