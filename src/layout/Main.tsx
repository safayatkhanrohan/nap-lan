import { Outlet } from "react-router"
import Header from "../components/header"

const Main = () => {
  return (
    <div className="relative">
        <Header />
        <Outlet />
    </div>
  );
}

export default Main