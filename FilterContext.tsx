import React, { createContext, useReducer } from "react";
import { ACTIONS, FilterReducer } from "../reducers/FilterReducer";

export const FilterContext = createContext<{
  filters: string[];
  dispatch: React.Dispatch<ACTIONS>;
}>({
  filters: [],
  dispatch: () => {},
});

export default function FilterContextProvider({ children }) {
  const [filters, dispatch] = useReducer(FilterReducer, []);

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}
