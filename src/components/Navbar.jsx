import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { RiMovieAiFill } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoLogIn } from "react-icons/io5";


function Navbar({ setcategory }) {
  const [inputdata, setinputdata] = useState("");

  const handlesearch = () => {
    if (inputdata.trim()) {
      setcategory(inputdata.trim()); // Update the category with the search term
    }
  };

  return (
    <div className="navbar bg-slate-700 text-white border-b-2 border-b-slate-300">
      <div className="navbar-start">
        <a
          style={{ boxShadow: "0 0 5px white" }}
          className="btn-primary  rounded-md p-2 font-bold bg-rose-600 text-white text-2xl border-1 border-b-green-300 border-b-2 border-white"
        >
          Subham's News App
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button className="btn me-2" onClick={() => setcategory("india")}>
            <a className="flex gap-2 hover:text-red-600 hover:underline" href="/home"> Home <FaHome/></a>
            </button>
          </li>
          <li>
          <button className="btn me-2" onClick={() => setcategory("olympics")}>
            <a className="flex gap-2 hover:text-red-600 hover:underline" >  Sports <MdSportsCricket/></a>
            </button>
          </li>
        <li>
          
            <button
              className="btn me-2"
              onClick={() => setcategory("movies")}
            >
            <a  className=" flex gap-2 hover:text-red-600 hover:underline">Entertainment <RiMovieAiFill/></a>  
            </button>
          </li>
          <li>
            <button className="btn me-2" onClick={() => setcategory("business")}>
            <a className=" flex gap-2 hover:text-red-600 hover:underline">Business <FaBusinessTime/></a>  
            </button>
          </li>
          <li>
           <button className="btn" onClick={() => setcategory("technology")}>
             <a  className=" flex gap-2 hover:text-red-600 hover:underline">Technology <LiaLaptopCodeSolid/></a> 
            </button>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-4">
        <input
          type="text"
          className="form-control rounded-md text-black font-bold placeholder:text-center placeholder:text-slate-500 p-2"
          placeholder="Search News"
          onChange={(e) => setinputdata(e.target.value)}
        />
        <button
          onClick={handlesearch}
          className="rounded-lg bg-slate-900 border-2 border-white p-2 cursor-pointer"
        >
          <FaSearch />
        </button>
        <a href="/login" className="btn btn-success text-white font-bold">
          Login <IoLogIn className="text-xl"/>
        </a>
        <a href="/register" className="btn btn-primary text-white font-bold">
          Register 
        </a>
      </div>
    </div>
  );
}

export default Navbar;
