import React from 'react'
import { useContext, useRef } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { SelectedFileContext } from "../../context/selectedFileContext"


export default function CustomDisclosure() {
    const { selectedFile, setSelectedFile } = useContext(SelectedFileContext);
    const fileInputRef = useRef(null)

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    

  return (
    <Disclosure>
        {({ open }) => (
            <>
            <Transition
                show={open}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Disclosure.Panel className="px-4 pt-4 pb-2">
                <div className="space-y-4">
                    {selectedFile ? (
                    <div>
                        <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected Image"
                        className="mx-auto h-60 w-auto border-gray-300 border-2 rounded-md"
                        />
                    </div>
                    ) : (
                    <div>
                    <label htmlFor="file-input" className="cursor-pointer">
                        <input
                        ref={fileInputRef}
                        type="file"
                        id="file-input"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleFileSelect}
                        />
                        <span className="py-2 px-4 bg-gray-100 text-gray-900 rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                        Select an Image
                        </span>
                    </label>
                    </div>
                    )}
                </div>
                </Disclosure.Panel>
            </Transition>
            <Disclosure.Button className="w-full py-2 mt-5 px-4 bg-white text-gray-900 flex flex-col justify-center items-center gap-4 rounded-md shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>

                <span>{selectedFile ? 'Change' : 'Upload'} Image</span>
            </Disclosure.Button>
            </>
        )}
    </Disclosure>

  )
}
