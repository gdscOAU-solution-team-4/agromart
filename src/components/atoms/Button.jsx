export default function Button({
  children,
  type,
  className,
  handleOnclick,
  ...props
}) {
  return (
    <button
      onClick={handleOnclick}
      className={`border-[#274c5b] w-40 lg:w-40 py-3 text-center ${className} disabled:bg-grey-200 transition-all duration-200 ease-in-out hover:translate-y-1 hover:border hover:bg-transparent hover:text-[#274c5b]`}
      type={type || 'button'}
      {...props}
    >
      {children}
    </button>
  )
}
