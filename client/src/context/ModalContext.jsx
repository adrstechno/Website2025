import { createContext, useContext, useMemo, useState } from "react";
import ConsultationModal from "../components/ConsultationModal";

const ModalContext = createContext(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  const openModal = (tab = "general") => {
    setActiveTab(tab);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const value = useMemo(
    () => ({
      isOpen,
      activeTab,
      setActiveTab,
      openModal,
      closeModal,
    }),
    [isOpen, activeTab]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ConsultationModal />
    </ModalContext.Provider>
  );
};

