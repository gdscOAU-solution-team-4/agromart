import React from 'react';
import CustomDisclosure from '../components/molecule/disclosure';
import ProductForm from '../pages/farmer/productForm';

import { SelectedFileProvider } from './selectedFileContext';

const Test = () => {
  return (
    <SelectedFileProvider>
      <ProductForm />
      <CustomDisclosure />
    </SelectedFileProvider>
  );
};

export default Test;
