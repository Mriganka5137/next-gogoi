"use client";
import React from "react";

const AddToCart = () => {
  return (
    <>
      <button
        className=" bg-blue-200 px-4 py-2 rounded-full mt-2"
        onClick={() => {
          alert("Added");
        }}
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
