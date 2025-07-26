import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer";

const Main = () => {
  return (
    <div className="relative min-h-screen max-w-full overflow-clip">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default Main