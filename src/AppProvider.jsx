import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <AppContext.Provider value={{ open, setOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return React.useContext(AppContext);
};

export default AppProvider;
