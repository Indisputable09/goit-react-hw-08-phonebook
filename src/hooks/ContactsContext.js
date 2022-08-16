import { createContext, useContext } from 'react';

export const ContacsContext = createContext();

export const useContacts = () => useContext(ContacsContext);
