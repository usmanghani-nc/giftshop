import { useState, useContext, createContext } from 'react';
import Global from 'styles/global';

const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

export default function ThemeContext({ children }) {
  const [toggle, setToggle] = useState(false);

  const handleThemeChange = () => {
    setToggle(!toggle);
  };

  return (
    <MainContext.Provider
      value={{
        state: { toggle },
        fn: {
          handleThemeChange,
        },
      }}
    >
      <Global dark={toggle}>{children}</Global>
    </MainContext.Provider>
  );
}
