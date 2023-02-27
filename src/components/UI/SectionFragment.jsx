export default function SectionFragment({ children, className }) {
  return (
    <div className={`mx-auto max-w-[75rem] p-5 ${className}`}>{children}</div>
  )
}
