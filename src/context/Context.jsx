import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "../reducer/Reducer";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };

// import { createContext, useContext, useReducer } from "react";
// import reducer, { initialState } from "../reducer/Reducer";

// const AppContext = createContext();
// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
// const useGlobalContext = () => {
//   return useContext(AppContext);
// };
// export { AppProvider, useGlobalContext };
