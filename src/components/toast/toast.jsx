import { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Toast = ({ message, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <Transition 
        show={show} 
        as={Fragment}
        enter="transition transform ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition transform ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
    >
      <div className="fixed top-[7rem] right-4 z-[1000]">
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
