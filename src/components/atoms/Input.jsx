
const Input = ({type,placeholder,label,onChange,defaultValue}) => {
  return (
    <div className="w-full pt-6">
        <input onChange={onChange} id={label} type={type} value={defaultValue} className='  outline-none w-full bg-white border border-solid border-[#F1F1F1] pl-4 py-3 rounded-lg' placeholder={placeholder} />
    </div>
  )
}

export default Input