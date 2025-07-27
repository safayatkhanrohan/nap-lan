import { Outlet } from "react-router";
import DashboardSidebar from "../dashboard/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[271px_auto] gap-10">
      <aside className="pt-[34px] pb-[22px] px-[21px] bg-white shadow-[0_4px_20px_0_rgba(238,238,238,0.50)] h-screen">
        <DashboardSidebar />
      </aside>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
