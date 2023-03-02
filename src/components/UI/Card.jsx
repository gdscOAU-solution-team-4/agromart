export default function Card({ children, className }) {
  return <div className={`p-5 rounded-md ${className}`}>{children}</div>
}
