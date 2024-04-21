"use strict";

const addEventOnElements = (elements, eventType, callback) => {
  for (const elem of elements) elem.addEventListener(eventType, callback);
};

// toggle search box in mobile || small devices
const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", () => {
  searchBox.classList.toggle("active");
});
