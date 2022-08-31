// API
const BASE_URL = "https://devapi.wtfup.me/";

export const API = Object.freeze({
  NEAREST_GYM: `${BASE_URL}gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`,
  FILTER_PLACES: `${BASE_URL}gym/places`,
  GYM_PLAN: `${BASE_URL}gym/plan`,
});

export const COLOR = Object.freeze({
  bgColor: "#262626",
  bgColor2: "#131313",
});

// This is custom styles for the react select component
export const customSelectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "black" : "white",
    padding: 15,
    backgroundColor: state.isFocused ? COLOR.bgColor2 : COLOR.bgColor,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition, color: "white" };
  },
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: COLOR.bgColor,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: "white",
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    width: 240,
    color: "white",
  }),
};
