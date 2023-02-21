import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1 className="text-3xl text-center text-red-900 font-bold underline">
        Hello world!
      </h1>
      <Outlet />
      <div>footer</div>
    </>
  );
}
