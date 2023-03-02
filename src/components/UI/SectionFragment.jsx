export default function SectionFragment({ children, className }) {
  return (
    <div className={`max-w-[75rem] p-5 mx-auto ${className}`}>{children}</div>
  )
}
