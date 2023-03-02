import { loginImg } from '../../assets'
import Input from '../../components/atoms/Input'
import AuthLayout from '../../layout/authLayout'
import useUserData from '../../hooks/useUserData'
import useDocumentUpdate from '../../hooks/useDocumentUpdate'
import { Fragment, useState, useContext, useEffect } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

//firebase
import { 
  db, 
  doc, 
  updateDoc,
  arrayUnion
  } from "../../firebase/firebase.config"
import { get } from '../../utils/storage';
import Toast from '../../components/toast/toast'
import CustomDisclosure from '../../components/molecule/disclosure'
import axios from 'axios';
import { SelectedFileContext } from "../../context/selectedFileContext"



  const categories = [
  { id: 1, name: 'Fruits' },
  { id: 2, name: 'Vegetables' },
  { id: 3, name: 'Grains' },
  { id: 4, name: 'Livestock' },
  { id: 5, name: 'Dairy' },
  { id: 6, name: 'Poultry' },
  { id: 7, name: 'Fishery' }
]

export default function ProductForm() {

  const[productName, setProductName] = useState("");
  const[productPrice, setProductPrice] = useState(0);
  const[productDealPrice, setProductDealPrice] = useState(0);
  const[productRatingStar, setProductRatingStar] = useState(0);
  const[productDescription, setProductDescription] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [messages, setMessages] = useState("" || null);
    
  let userSurname = useUserData()?.surname

  const [selected, setSelected] = useState(categories[0])
  const [query, setQuery] = useState('')
  const { selectedFile } = useContext(SelectedFileContext);
  const [loading, setLoading] = useState(false);


  const filteredCategory =
    query === ''
      ? categories
      : categories.filter((category) =>
          category.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )


  
  const validateForm = () => {
    let isValid = true
    if ( productName == '' || productPrice == 0 || productDescription == "") {
      isValid = false
        setMessages('invalid credential')
    }

      return isValid
  }


  const uploadData = async() =>{
    
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'pikg6hci');

    try {
      const { data } = await axios.post(
        'https://api.cloudinary.com/v1_1/phantom1245/image/upload',
        formData
      );

      const imageUrl = data.secure_url;
      const useId = get();
      const docRef = doc(db, "users", useId);
      const productRef = doc(db, "generalProducts", "product")

      const products = [
        {
          category: selected.name,
          name: productName,
          price: productPrice,
          dealPrice: productDealPrice,
          ratingStar: productRatingStar,
          imgUrl: imageUrl,
          description: productDescription,
        }
      ]
        
      await updateDoc(productRef, { products: arrayUnion(...products)})
      await updateDoc(docRef, { products: arrayUnion(...products)})
      try{
        setMessages('added successfully')
      }
      catch(err){
        console.log(err)
      }

      setLoading(false);
      setMessages('product uploaded successfully');
      window.location.assign('/farm-dashboard')
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMessages('Error uploading image');
    }      
      
  }


  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowToast(true)
    if(validateForm()){
      uploadData()
    }


  }

  const handleCloseToast = () => {
    setShowToast(false);
  };


  return (
    <AuthLayout
      authImg={loginImg}
      buttonContent={loading ? 'please wait...' : 'continue'}
      disabled={loading}
      heading={
        <span className='flex items-center justify-center gap-1 text-center'>
          Hello <span>{userSurname || "user"} 👋🏾</span>
        </span>
      }
      subHeading={'Kindly fill the form below'}
      handleSubmit={handleClick}

    >
      {showToast && (
        <Toast message={messages} onClose={handleCloseToast} />
      )}
 
      <form action='' className='px-8 py-5'>

        <Input
          type={'text'}
          placeholder={'Product Name'}
          label={'Product Name'}
          defaultValue={productName}
          onChange={e => setProductName(e.target.value)}
          
        />

        <Input
          type={'number'}
          placeholder={'Product Price'}
          label={'Product Price'}
          defaultValue={productPrice !== 0 ? productPrice : ''}
          onChange={e => setProductPrice(e.target.value)}
          
        />

        <Input
          type={'number'}
          placeholder={'Discount Price'}
          label={'Discounted price'} productDealPrice
          defaultValue={productDealPrice !== 0 ? productDealPrice : ''}
          onChange={e => setProductDealPrice(e.target.value)}
          
        />

        <div className=" w-full my-5">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none outline-none py-3 pl-5 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(category) => category.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredCategory.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredCategory.map((category) => (
                      <Combobox.Option
                        key={category.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 rounded-md pl-10 pr-4 ${
                            active ? 'bg-primary text-white' : 'text-gray-900'
                          }`
                        }
                        value={category}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {category.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-primary'
                                }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <textarea 
          rows="4" 
          value={productDescription}
          className="shadow outline-none w-full bg-white pl-4 py-3 mt-2 rounded-lg" 
          placeholder="description..."
          onChange={e => setProductDescription(e.target.value)}
          >

        </textarea>
        <CustomDisclosure />
        
      </form>
    </AuthLayout>
  )
}

