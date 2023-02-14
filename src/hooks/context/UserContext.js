import React from "react";
export const UserContext = React.createContext();

// context: provides globally access data, in parent to child component
// step-1 : create context
// step-2 : wrape childs with context provider
// step-3 : state access useContext hook