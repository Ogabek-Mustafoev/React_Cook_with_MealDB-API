import { createContext, useReducer } from "react";
import { america, canada, chinese, france, italy, russia } from '../constants';

const regions = [
  { idCategory: 'canadian', strCategory: 'Canadian', strCategoryThumb: canada },
  { idCategory: 'american', strCategory: 'American', strCategoryThumb: america },
  { idCategory: 'chinese', strCategory: 'Chinese', strCategoryThumb: chinese },
  { idCategory: 'french', strCategory: 'French', strCategoryThumb: france },
  { idCategory: 'italian', strCategory: 'Italian', strCategoryThumb: italy },
  { idCategory: 'russian', strCategory: 'Russian', strCategoryThumb: russia },
];

const letters = [
  { l: "a" }, { l: "b" }, { l: "c" }, { l: "d" }, { l: "e" },
  { l: "f" }, { l: "g" }, { l: "h" }, { l: "i" }, { l: "j" },
  { l: "k" }, { l: "l" }, { l: "m" }, { l: "n" }, { l: "o" },
  { l: "p" }, { l: "q" }, { l: "r" }, { l: "s" }, { l: "t" },
  { l: "u" }, { l: "v" }, { l: "w" }, { l: "x" }, { l: "y" }, { l: "z" },
];

const initialValue = {
  letters,
  regions,
  loading: false,
  category: [],
  mealsCategory: [],
  recipe: [],
  term: [],
  search: "",
  alphabetical: [],
  alphabeticalTerm: [],
  regionalSearch: ''
};

export const Context = createContext();

function reducer(state = initialValue, { type, payload }) {
  switch (type) {
    case "SET_LOADER":
      return { ...state, loading: payload };
    case "SET_CATEGORY":
      return { ...state, category: payload };
    case "SET_MEALS_CATEGORY":
      return { ...state, mealsCategory: payload };
    case "SET_RECIPE":
      return { ...state, recipe: payload };
    case "SET_TERM":
      return { ...state, term: payload };
    case "SET_SEARCH":
      return { ...state, search: payload };
    case "SET_ALPHABETICAL_MEALS":
      return { ...state, alphabetical: payload };
    case "SET_ALPHABETICAL_TERM":
      return { ...state, alphabeticalTerm: payload };
    case 'SET_REGIONAL_SEARCH':
      return { ...state, regionalSearch: payload }
    default:
      return { state };
  }
}

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
