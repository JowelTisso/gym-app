// API
const BASE_URL = "https://devapi.wtfup.me/";

export const API = Object.freeze({
  NEAREST_GYM: `${BASE_URL}gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`,
  FILTER_PLACES: `${BASE_URL}gym/places`,
  GYM_PLAN: `${BASE_URL}gym/plan`,
});

export const COLOR = Object.freeze({
  primary: "#818cf8",
  loader: "#5ee5c0",
});
