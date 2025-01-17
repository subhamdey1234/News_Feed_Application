import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";

function App() {
  const [category, setcategory] = useState("india"); // Single state for category and search

  return (
    <div className="bg-slate-900">
      <Navbar setcategory={setcategory} />
      <Newsboard category={category} />
    </div>
  );
}

export default App;
