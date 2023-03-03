import React, { useState } from "react";
import { User } from "./interfaces/User";

interface AppContextProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loadingMessage: string;
  setLoadingMessage: React.Dispatch<React.SetStateAction<string>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  popupMessage: string;
  setPopupMessage: (value: string) => void;
  showPopup: boolean;
  setShowPopup: (value: boolean) => void;
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
});

const AppContextProvider = (props: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [popupMessage, setPopupMessage] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext as default };
