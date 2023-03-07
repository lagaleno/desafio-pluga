import React, { createContext, ReactNode, useContext, useState } from "react";

// Interface import
import { ITool } from "@/interfaces/ITool";

interface IRecenetlyViewedToolsContext {
  recentToolsList: ITool[];
  setRecentToolsList: React.Dispatch<React.SetStateAction<ITool[]>>;
}

interface IProps {
  children: ReactNode;
}

const recentlyViewedToolsContextDefault: IRecenetlyViewedToolsContext = {
  recentToolsList: [],
  setRecentToolsList: () => [],
};

const RecentlyViewedToolsContext = createContext<IRecenetlyViewedToolsContext>(
  recentlyViewedToolsContextDefault
);

export const useRecentlyViewedTools = () => {
  return useContext(RecentlyViewedToolsContext);
};

export const RecentlyViewedToolsProvider = ({ children }: IProps) => {
  const [recentToolsList, setRecentToolsList] = useState<ITool[]>([]);
  const value = {
    recentToolsList,
    setRecentToolsList,
  };
  return (
    <>
      <RecentlyViewedToolsContext.Provider value={value}>
        {children}
      </RecentlyViewedToolsContext.Provider>
    </>
  );
};
