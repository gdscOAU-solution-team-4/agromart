import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';

const useDocumentUpdate = () => {
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateDocument = async (docRef, newData) => {
    setIsUpdating(true);
    try {
      await updateDoc(docRef, newData);
      console.log('Document updated successfully');
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsUpdating(false);
    }
  };

  return [updateDocument, isUpdating, error];
};

export default useDocumentUpdate;
