import React from "react";
import "../../styles/slider.css";
import leftArrow from "../../img/google-icons/flecha-izquierda.png";
import rightArrow from "../../img/google-icons/flecha-derecha.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}