"use client";
import React from "react";

const AddToCart = () => {
  return (
    <button
      className="btn btn-outline text-secondary"
      onClick={() => {
        const html = document.querySelector("html");
        const theme = html?.getAttribute("data-theme");

        if (theme === "lemonade") {
          html?.setAttribute("data-theme", "dark");
        } else {
          html?.setAttribute("data-theme", "lemonade");
        }
      }}
    >
      toggle theme
    </button>
  );
};

export default AddToCart;
