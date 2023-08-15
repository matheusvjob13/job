export type ACTIONS =
  | { type: "ADD_FILTER"; payload: { filter: string } }
  | { type: "REMOVE_FILTER"; payload: { filter: string } }
  | { type: "CLEAR_ALL"; payload: {} };

export const FilterReducer = (state: string[], action: ACTIONS) => {
  switch (action.type) {
    case "ADD_FILTER":
      if (state.includes(action.payload.filter)) {
        return state;
      }
      return [...state, action.payload.filter];
    case "REMOVE_FILTER":
      return state.filter((fil: string) => fil !== action.payload.filter);
    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
};
