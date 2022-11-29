import React, { createContext, useState } from "react";

interface IPlayerSidebarContextProps {
  children: React.ReactNode;
}

interface IPlayerSidebarContext {
  sidebarStatus: boolean;
  updateSidebarStatus: (status: boolean) => void;
}

export const PlayerNavbarContext = createContext<IPlayerSidebarContext>({
  sidebarStatus:
    JSON.parse(localStorage.getItem("playerSidebar") as string)?.expanded ??
    true,
  updateSidebarStatus: function () {},
});

const PlayerSidebarContext = ({ children }: IPlayerSidebarContextProps) => {
  const [sidebarStatus, setSidebarStatus] = useState(
    JSON.parse(localStorage.getItem("playerSidebar") as string)?.expanded ??
      true
  );

  const updateSidebarStatus = (status: boolean) => {
    setSidebarStatus(status);
    localStorage.setItem("playerSidebar", JSON.stringify({ expanded: status }));
  };

  return (
    <PlayerNavbarContext.Provider
      value={{ sidebarStatus, updateSidebarStatus }}
    >
      {children}
    </PlayerNavbarContext.Provider>
  );
};

export default PlayerSidebarContext;
