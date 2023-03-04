import React, { useState } from "react";
import { Case } from "./interfaces/Case";
import { User } from "./interfaces/User";
import { ApiRequests } from "./ApiRequests";

interface AppContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingMessage: string;
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  popupMessage: string;
  setPopupMessage: React.Dispatch<React.SetStateAction<string>>;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  cases: Case[] | null;
  setCases: React.Dispatch<React.SetStateAction<Case[] | null>>;
  apiRequester: ApiRequests;
}

const AppContext = React.createContext<AppContextProps>({
  isLoading: false,
  setIsLoading: () => {},
  loadingMessage: "",
  setLoadingMessage: () => {},
  user: null,
  setUser: () => {},
  popupMessage: "",
  setPopupMessage: () => {},
  showPopup: false,
  setShowPopup: () => {},
  cases: null,
  setCases: () => {},
  apiRequester: new ApiRequests(),
});

const AppContextProvider = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [popupMessage, setPopupMessage] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [cases, setCases] = useState<Case[] | null>(null);
  const [apiRequester] = useState<ApiRequests>(new ApiRequests());
  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loadingMessage,
        setLoadingMessage,
        user,
        setUser,
        popupMessage,
        setPopupMessage,
        showPopup,
        setShowPopup,
        cases,
        setCases,
        apiRequester,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext as default };
