import React, { createContext, useState } from 'react';
import CustomDisclosure from '../components/molecule/disclosure'
import ProductForm from '../pages/farmer/productForm'

export const SelectedFileContext = createContext({
  selectedFile: null,
  setSelectedFile: () => {}
});


// Create the provider component
export const SelectedFileProvider = ({children}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <SelectedFileContext.Provider value={{ selectedFile, setSelectedFile }}>
        {children}
    </SelectedFileContext.Provider>
  );
};
