import React, { createContext, useCallback, useMemo, useState } from "react";

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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateSidebarStatus() {},
});

const PlayerSidebarContext = ({ children }: IPlayerSidebarContextProps) => {
  const [sidebarStatus, setSidebarStatus] = useState(
    JSON.parse(localStorage.getItem("playerSidebar") as string)?.expanded ??
      true
  );

  const updateSidebarStatus = useCallback((status: boolean) => {
    setSidebarStatus(status);
    localStorage.setItem("playerSidebar", JSON.stringify({ expanded: status }));
  }, []);

  const contextValue = useMemo(
    () => ({
      sidebarStatus,
      updateSidebarStatus,
    }),
    [sidebarStatus, updateSidebarStatus]
  );

  return (
    <PlayerNavbarContext.Provider value={contextValue}>
      {children}
    </PlayerNavbarContext.Provider>
  );
};

export default PlayerSidebarContext;
