export default function Card({ children, className }) {
  return <div className={`rounded-md p-5 ${className}`}>{children}</div>
}
