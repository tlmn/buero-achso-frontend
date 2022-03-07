import { createContext, useContext } from "react";

export const initialState = {};

const context = createContext(initialState);

export const { Provider } = context;

const useAppContext = () => useContext(context);

export default useAppContext;
