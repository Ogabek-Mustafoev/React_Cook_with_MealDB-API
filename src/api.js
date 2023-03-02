import API_URL from "./config";

export const getMealById = async (mealID) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealID);
  return await response.json();
};

export const getMealCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

export const getFilteredMealCategory = async (filter) => {
  const response = await fetch(API_URL + "filter.php?c=" + filter);
  return await response.json();
};

export const getMealByArea = async (area) => {
  const response = await fetch(API_URL + "filter.php?a=" + area);
  return await response.json();
};

export const getMealsByFirstLetter = async (letter) => {
  const response = await fetch(API_URL + "search.php?f=" + letter);
  return await response.json();
};
