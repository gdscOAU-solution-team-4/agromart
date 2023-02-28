import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import Toast from '../components/toast/toast';

const useDocumentUpdate = () => {
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState("" || null)

  const updateDocument = async (docRef, newData) => {
    setIsUpdating(true);
    try {
      await updateDoc(docRef, newData);
      setMessage('updated successfully');
    } catch (err) {
      setMessage(err);
    } finally {
      setIsUpdating(false);
    }
  };

  return [updateDocument, isUpdating, message];
};

export default useDocumentUpdate;
