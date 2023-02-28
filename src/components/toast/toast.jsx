import { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Toast = ({ message, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <Transition show={show} as={Fragment}>
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white shadow-lg rounded-md p-4">
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-900">{message}</p>
            <button onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 hover:text-gray-900 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Toast;
