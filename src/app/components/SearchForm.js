"use client";
import React from "react";
import {FaSearch} from 'react-icons/fa'

const SearchForm = () => {
  return (
    <form className="bg-slate-100 flex items-center h-7 md:h-10  rounded-xl">
      <input
        type="text"
        placeholder="Search..."
        className="focus:outline-none bg-transparent  w-32 md:w-56 "
      />
      <button>
        <FaSearch color="#475569" />
      </button>
    </form>
  );
};

export default SearchForm;
