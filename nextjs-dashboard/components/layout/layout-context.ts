import { createContext, useContext } from "react";

interface SidebarContext {
  collapsed: boolean;
  setCollapsed: () => void;
}

export const SidebarContext = createContext<SidebarContext>({
  collapsed: false,
  setCollapsed: () => {
    // empty because we don't need to do anything yet
  },
});

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
