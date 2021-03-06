import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: {},
  admin: {
    status: "Admin",
  },
  subs: false,
  book: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SIGN_UP_SUCCESS":
      return {
        isLogin: false,
        user: payload,
        admin: state.admin,
        subs: false,
        book: state.book,
      };
    case "LOGIN_SUCCESS":
      return {
        isLogin: true,
        user: state.user,
        admin: state.admin,
        subs: state.subs,
        book: state.book,
      };
    case "LOGIN_SUCCESS_ADMIN":
      return {
        isLogin: true,
        admin: state.admin,
        user: state.user,
        subs: state.subs,
        book: state.book,
      };
    case "LOGOUT":
      return {
        isLogin: false,
        user: state.user,
        admin: state.admin,
        subs: state.subs,
        book: state.book,
      };
    case "SUBS":
      return {
        isLogin: true,
        user: state.user,
        admin: state.admin,
        subs: true,
        book: state.book,
      };
    case "BOOK_ADDED":
      return {
        isLogin: state.isLogin,
        user: state.user,
        admin: state.admin,
        subs: state.subs,
        book: payload,
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
};
