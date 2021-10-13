import { useState, useContext, createContext } from 'react';
import Global from 'styles/global';
export const useMainContext = () => useContext();

const MainContext = createContext(useMainContext);
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
      }}>
      <Global dark={toggle}>{children}</Global>
    </MainContext.Provider>
  );
}
